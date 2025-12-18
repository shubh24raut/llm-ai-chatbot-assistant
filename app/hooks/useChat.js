"use client";

import { useEffect, useState } from "react";
import { getAllMessages, saveMessage } from "../lib/storage";

export const useChat = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMessages = async () => {
    try {
      const response = await getAllMessages();
      setMessages(response);
    } catch (error) {
      alert(error?.message || "Failed to load messages");
    } finally {
    }
  };

  const sendMessage = (message) => {
    if (!message) return;
    try {
      setIsLoading(true);
      const payload = {
        id: Date.now(),
        type: "user",
        message,
      };
      saveMessage(payload);
      setMessages((prevMessages) => [...prevMessages, payload]);
      setTimeout(() => {
        const payload = {
          id: Date.now(),
          type: "assistant",
          message: "This is assistant message",
        };
        saveMessage(payload);
        setMessages((prevMessages) => [...prevMessages, payload]);
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      alert(error?.message || "Failed to send message");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return {
    messages,
    isLoading,
    sendMessage,
  };
};
