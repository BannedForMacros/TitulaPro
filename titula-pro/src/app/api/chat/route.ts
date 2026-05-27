import { NextRequest, NextResponse } from "next/server";
import { model, SYSTEM_PROMPT } from "@/lib/gemini";
import guiaRapida from "@/data/guia-rapida.json";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "API key no configurada" },
        { status: 500 }
      );
    }

    const guiaContext = `\n\nBASE DE CONOCIMIENTO (Guía Rápida del proceso de titulación):\n${JSON.stringify(guiaRapida, null, 2)}`;

    const chat = model.startChat({
      history: messages.slice(0, -1).map((msg: { role: string; content: string }) => ({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: msg.content }],
      })),
      systemInstruction: SYSTEM_PROMPT + guiaContext,
    });

    const lastMessage = messages[messages.length - 1];
    const result = await chat.sendMessage(lastMessage.content);
    const response = result.response.text();

    return NextResponse.json({ message: response });
  } catch (error) {
    console.error("Error en chat:", error);
    return NextResponse.json(
      { error: "Error al procesar tu consulta. Intenta de nuevo." },
      { status: 500 }
    );
  }
}
