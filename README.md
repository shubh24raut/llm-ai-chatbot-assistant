# 🤖 Next LLM Chatbot (Next.js + Ollama)

A modern, ChatGPT-style AI chat application built with **Next.js (App Router)** and powered by a **local Large Language Model (LLM)** using **Ollama**.  
This project demonstrates clean frontend architecture, GenAI integration, and real-world chat application patterns.

---

## ✨ Features

- 🧠 AI-powered chat using a **local LLM (Ollama + LLaMA / Phi-3)**
- 💬 Chat-style UI with user & assistant message bubbles
- ⏳ Loading / thinking indicator while AI responds
- 💾 Persistent chat history using **browser localStorage**
- 🧩 Clean separation of concerns (UI, hooks, storage, API)
- ⚡ Built with **Next.js App Router**
- 🔌 LLM-agnostic backend design (easy to switch models/providers)

---

## 🛠 Tech Stack

- **Frontend:** React, Next.js (App Router)
- **Backend:** Next.js API Routes
- **LLM Runtime:** Ollama (local)
- **Models:** LLaMA 3 / Phi-3 (configurable)
- **State Management:** React Hooks
- **Persistence:** Browser `localStorage`
- **Styling:** CSS / Tailwind CSS (optional)

---

## 📂 Project Structure

```
src/
│
├─ app/
│   ├─ page.js                # Landing page
│   ├─ chat/
│   │   └─ page.js            # Chat UI page
│   │
│   └─ api/
│       └─ chat/
│           └─ route.js       # Backend API → Ollama integration
│
├─ hooks/
│   └─ useChat.js             # Chat logic & state management
│
├─ lib/
│   └─ storage.js             # localStorage abstraction
│
├─ components/
│   └─ chat/                  # Chat UI components
│
└─ README.md
```

---

## ⚙️ How It Works

1. User sends a message from the chat UI
2. Message is saved to React state and `localStorage`
3. Recent conversation context is sent to `/api/chat`
4. Backend API formats a prompt and sends it to Ollama
5. Ollama generates a response using the selected LLM
6. The response is returned, saved, and rendered in the UI

---

## 🚀 Getting Started

### 1️⃣ Prerequisites

Make sure you have:

- **Node.js** (v18+ recommended)
- **Ollama** installed → https://ollama.com

Pull and run a model:

```bash
ollama run llama3
```

If you face CUDA/GPU issues on Windows, run Ollama in CPU mode:

```bash
set OLLAMA_NO_CUDA=1
ollama run llama3
```

(You can also use lighter models like `phi3`.)

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Start the Development Server

```bash
npm run dev
```

Open in browser:

```
http://localhost:3000
```

Chat page:

```
http://localhost:3000/chat
```

---

## 🦙 Ollama Configuration

The app connects to Ollama at:

```
http://localhost:11434
```

Backend endpoint used:

```
POST /api/generate
```

Model can be changed inside:

```
app/api/chat/route.js
```

Example:

```js
model: "llama3"
```

or

```js
model: "phi3"
```

---

## 💾 Data Persistence

- Chat messages are stored in **browser localStorage**
- Messages persist across page refreshes
- Storage logic is abstracted to allow easy migration to a database later

---

## 🧠 Design Decisions

- **localStorage instead of DB** for fast iteration and simplicity
- **API abstraction layer** to keep UI independent of LLM provider
- **Context window limiting** (last N messages) to control token usage
- **UUID-based message IDs** using `crypto.randomUUID()`
- **Fetch API** used instead of Axios for streaming readiness

---

## 🔮 Future Improvements

- 🔥 Streaming responses (token-by-token output)
- 🗂 Chat history summarization for long conversations
- 🔐 Authentication & user sessions
- 🧠 RAG (document-based question answering)
- ☁️ Hosted LLM support (OpenAI, Groq, etc.)
- 🚀 Production deployment (Vercel + hosted inference)

---

## 📸 Screenshots

_Add screenshots of the landing page and chat UI here._

---

## 📄 License

This project is for learning and portfolio purposes.

---

## 🙌 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Ollama](https://ollama.com/)
- Open-source LLM community

---

## 👨‍💻 Author

**Your Name**  
Frontend Developer | React | GenAI

---

⭐ If you like this project, consider giving it a star!
