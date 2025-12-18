"use client";

import { useEffect, useState } from "react";
import { clearAllMessages, getAllMessages, saveMessage } from "../lib/storage";

export const useChat = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const stored = getAllMessages();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMessages(stored);
  }, []);

  const sendMessage = async (message) => {
    if (!message.trim()) return;

    const userPayload = {
      id: crypto.randomUUID(),
      role: "user",
      content: message,
    };

    const updatedMessages = [...messages, userPayload];
    saveMessage(userPayload);
    setMessages(updatedMessages);
    setIsLoading(true);

    // Placeholder assistant message
    const assistantPayload = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: "",
    };

    setMessages((prev) => [...prev, assistantPayload]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.slice(-10),
        }),
      });

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      let buffer = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });

        // Ollama sends JSON per line
        const lines = buffer.split("\n");
        buffer = lines.pop(); // keep incomplete line

        for (const line of lines) {
          if (!line.trim()) continue;

          try {
            const json = JSON.parse(line);

            if (json.response) {
              setMessages((prev) =>
                prev.map((msg) =>
                  msg.id === assistantPayload.id
                    ? { ...msg, content: msg.content + json.response }
                    : msg
                )
              );
            }

            if (json.done) {
              setIsLoading(false);
            }
          } catch (e) {
            console.error("Parse error:", e);
          }
        }
      }

      saveMessage({
        ...assistantPayload,
        content: assistantPayload.content,
      });

      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const clearAllChat = () => {
    clearAllMessages();
    setMessages([]);
  };

  return {
    messages,
    isLoading,
    sendMessage,
    clearAllChat,
  };
};
