let fakeMessages = [
  {
    id: 1,
    type: "assistant",
    message: "Hi! I'm your LLM assistant. How can I help you today?",
  },
];

export const getAllMessages = () => {
  return fakeMessages;
};

export const saveMessage = (message) => {
  fakeMessages.push(message);
};

export const clearAllMessages = () => {
  fakeMessages = [];
};
