import React from "react";
import { renderTextWithLinks } from "../lib/utils";

const ChatBubble = ({ type = "assistant", message }) => {
    const isUser = type === "user";

    return (
        <div
            className={`w-full flex ${isUser ? "justify-end" : "justify-start"
                } mb-3`}
        >
            <div
                className={`
          max-w-[70%]
          px-5 py-3
          rounded-2xl
          text-sm
          leading-relaxed
          whitespace-pre-wrap
          ${isUser
                        ? "bg-black text-white rounded-br-md"
                        : "bg-gray-200 text-black rounded-bl-md"
                    }
        `}
            >
                <ul className="space-y-1">
                    {message.split("\n").map((line, index) => {
                        const trimmed = line.trim();

                        // Bullet points
                        if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
                            return (
                                <li key={index} className="ml-4 list-disc">
                                    {renderTextWithLinks(trimmed.slice(2))}
                                </li>
                            );
                        }

                        // Empty line spacing
                        if (trimmed === "") {
                            return <div key={index} className="h-2" />;
                        }

                        // Normal paragraph
                        return (
                            <p key={index}>
                                {renderTextWithLinks(trimmed)}
                            </p>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default ChatBubble;
