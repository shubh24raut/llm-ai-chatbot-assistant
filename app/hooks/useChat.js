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

    saveMessage(userPayload);
    setMessages((prev) => [...prev, userPayload]);
    setIsLoading(true);

    const assistantPayload = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: "",
    };

    setMessages((prev) => [...prev, assistantPayload]);

    let finalAssistantContent = "";

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...getAllMessages(), userPayload].slice(-10),
        }),
      });

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop();

        for (const line of lines) {
          if (!line.trim()) continue;

          const json = JSON.parse(line);

          if (json.response) {
            finalAssistantContent += json.response;

            setMessages((prev) =>
              prev.map((msg) =>
                msg.id === assistantPayload.id
                  ? { ...msg, content: finalAssistantContent }
                  : msg
              )
            );
          }
        }
      }

      // ✅ Save FINAL content
      saveMessage({
        ...assistantPayload,
        content: finalAssistantContent,
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
