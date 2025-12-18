import { NextResponse } from "next/server";

const OLLAMA_URL = "http://localhost:11434";
export async function POST(req) {
  try {
    const { messages } = await req.json();

    const prompt = messages
      .map((m) =>
        m.role === "user" ? `User : ${m.content}` : `Assistant : ${m.content}`
      )
      .join("\n");

    const response = await fetch(`${OLLAMA_URL}/api/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: prompt,
        model: "llama3",
        stream: false,
      }),
    });

    const data = await response.json();
    return NextResponse.json({
      reply: data.response,
    });
  } catch (error) {
    return NextResponse.json({ error: "Ollama failed" }, { status: 500 });
  }
}
