let fakeMessages = [];

const STORAGE_KEY = "chat_messages";

export const getAllMessages = () => {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Failed to read from localStorage", error);
    return [];
  }
};

export const saveMessage = (message) => {
  if (typeof window === "undefined") return;
  try {
    const existing = getAllMessages();
    const updated = [...existing, message];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error("Failed to save message", error);
  }
};

export const clearAllMessages = () => {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
};
