"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import ChatInput from "./ChatInput";
import SuggestedQuestions from "./SuggestedQuestions";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const sendMessage = async (content: string) => {
    const userMessage: Message = { role: "user", content };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) throw new Error("Error en la respuesta");

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.message },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Lo siento, hubo un error al procesar tu consulta. Por favor intenta de nuevo.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const isEmpty = messages.length === 0;

  return (
    <div className="flex flex-col h-full">
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {isEmpty && (
            <div className="flex flex-col items-center justify-center py-16 gap-6 animate-fade-in">
              <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-gold/20 shadow-lg">
                <Image
                  src="/meta-avatar.jpeg"
                  alt="Meta - TitulaPro"
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>

              <div className="text-center space-y-2">
                <h2 className="text-xl font-semibold text-navy-dark">
                  Hola, soy{" "}
                  <span className="text-gold">Meta</span>
                </h2>
                <p className="text-sm text-navy/50 max-w-md">
                  Tu asistente de TitulaPro. Te guiaré paso a paso en tu proceso
                  de titulación profesional en la FACEAC.
                </p>
              </div>

              <SuggestedQuestions onSelect={sendMessage} />
            </div>
          )}

          {messages.map((msg, i) => (
            <MessageBubble
              key={i}
              role={msg.role}
              content={msg.content}
              isLatest={i === messages.length - 1}
            />
          ))}

          {isLoading && <TypingIndicator />}
        </div>
      </div>

      <ChatInput onSend={sendMessage} disabled={isLoading} />
    </div>
  );
}
