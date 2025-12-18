'use client'

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/chat')
  }
  return (
    <div className="h-full w-full flex flex-col items-center justify-center text-center space-y-4 px-4">
      <h1 className="uppercase text-4xl font-bold tracking-wide">
        Next LLM Chatbot
      </h1>
      <p className="text-lg text-gray-500 max-w-xl">
        An intelligent, fast, and secure AI assistant built with Next.js.
        Ask questions, generate ideas, write code, and get answers instantly.
      </p>
      <p className="text-sm text-gray-400">
        Powered by modern LLMs • Real-time responses • Developer-friendly
      </p>
      <button onClick={handleNext} className="w-full max-w-md border border-white px-4 py-2 rounded-md cursor-pointer mt-4">GET STARTED</button>
    </div>
  );
}
