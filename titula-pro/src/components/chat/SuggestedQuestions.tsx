"use client";

const SUGGESTIONS = [
  "¿Cómo inicio mi proceso de titulación?",
  "¿Qué necesito para solicitar jurado?",
  "¿Cuánto cuesta el trámite?",
  "¿Cuánto tiempo tengo para mi tesis?",
];

interface SuggestedQuestionsProps {
  onSelect: (question: string) => void;
}

export default function SuggestedQuestions({
  onSelect,
}: SuggestedQuestionsProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {SUGGESTIONS.map((q) => (
        <button
          key={q}
          onClick={() => onSelect(q)}
          className="px-3.5 py-2 text-xs font-medium rounded-full border border-gold/30 text-navy/70 bg-gold-soft/50 hover:bg-gold-soft hover:border-gold/50 hover:text-navy transition-all duration-200"
        >
          {q}
        </button>
      ))}
    </div>
  );
}
