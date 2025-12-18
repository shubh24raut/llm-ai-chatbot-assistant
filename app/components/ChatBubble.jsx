import React from "react";

const ChatBubble = ({ type = "assistant", message }) => {
    const isUser = type === "user";

    return (
        <div
            className={`w-full flex ${isUser ? "justify-end" : "justify-start"} mb-3`}
        >
            <div
                className={`
          max-w-[70%]
          px-5 py-3
          rounded-2xl
          text-sm
          ${isUser
                        ? "bg-black text-white rounded-br-md"
                        : "bg-gray-200 text-black rounded-bl-md"
                    }
        `}
            >
                {message}
            </div>
        </div>
    );
};

export default ChatBubble;
