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
    if (!message || !message.trim()) return;
    const userPayload = {
      id: crypto.randomUUID(),
      role: "user",
      content: message,
    };
    const updatedMessages = [...messages, userPayload];
    try {
      setIsLoading(true);
      saveMessage(userPayload);
      setMessages(updatedMessages);
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: updatedMessages.slice(-10) }),
      });
      const data = await res.json();
      const assistantPayload = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: data.reply,
      };
      saveMessage(assistantPayload);
      setMessages((prevMessages) => [...prevMessages, assistantPayload]);
      setIsLoading(false);
    } catch (error) {
      alert(error?.message || "Failed to send message");
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
