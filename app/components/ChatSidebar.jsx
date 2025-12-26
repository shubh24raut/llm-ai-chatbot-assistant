'use client'

const ChatSidebar = () => {
    return (
        <div className="h-screen w-64 bg-gray-900 text-white hidden md:flex flex-col border-r border-gray-800">
            <h2 className="text-xl font-bold px-4 py-4 border-b border-gray-800">OLLAMA CHAT</h2>
            <div className="px-3 flex items-center justify-center border-b border-gray-800">
                <div className="flex justify-center w-full px-2 py-2 rounded my-2 mx-auto border text-sm text-center">+  NEW CHAT</div>
            </div>
            <div className=" flex mt-2 flex-col gap-2 overflow-y-auto px-3  pb-6 h-full">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div
                        key={i}
                        className="w-full h-20 text-left  hover:bg-gray-800 rounded-md p-2 text-sm "
                    >
                        This is chat {i + 1}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatSidebar;
