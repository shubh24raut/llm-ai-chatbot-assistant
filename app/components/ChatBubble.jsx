import React from "react";
import { renderTextWithLinks } from "../lib/utils";

const ChatBubble = ({ type = "assistant", message }) => {
    const isUser = type === "user";

    return (
        <div
            className={`w-full flex ${isUser ? "justify-end" : "justify-start"} mb-3`}
        >
            <div
                className={`
          
          px-2 py-3
          rounded-2xl
        text-[15px]
leading-[1.6]
tracking-[0.1px]
          whitespace-pre-wrap
          ${isUser
                        ? "bg-gray-300 text-black  rounded-br-md max-w-[70%]"
                        : " text-white"
                    }
        `}
            >
                <ul className="space-y-1">
                    {message.split("\n").map((line, index) => {
                        const trimmed = line.trim();

                        // Bullet points
                        const isBullet =
                            (trimmed.startsWith("* ") || trimmed.startsWith("- ")) &&
                            trimmed.length > 3;
                        if (isBullet) {
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
                        return <p key={index}>{renderTextWithLinks(trimmed)}</p>;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default ChatBubble;
