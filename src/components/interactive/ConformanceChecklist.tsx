import { useState } from "react";
import type { ConformanceNote, ProfileColor } from "@/types/iso29110";
import { getColorTokens } from "@/constants/profile-colors";

interface Props {
  notes: ConformanceNote[];
  color: ProfileColor;
}

export default function ConformanceChecklist({ notes, color }: Props) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const tokens = getColorTokens(color);

  const toggleOpen = (i: number) =>
    setOpenIdx((prev) => (prev === i ? null : i));

  const toggleCheck = (e: React.MouseEvent, i: number) => {
    e.stopPropagation();
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const allDone = checked.size === notes.length;
  const progress = Math.round((checked.size / notes.length) * 100);

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <p className="text-xs text-[#7b7b78]">
          Léelas y márcalas como comprendidas cuando estés listo.
        </p>
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-full transition-colors ${
            allDone ? "bg-green-100 text-green-700" : tokens.badge
          }`}
        >
          {checked.size} / {notes.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-[#ebe7e1] rounded-full mb-4 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${
            allDone ? "bg-green-500" : tokens.bg
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Items */}
      <div className="space-y-2">
        {notes.map((note, i) => {
          const isOpen = openIdx === i;
          const isChecked = checked.has(i);

          return (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-all ${
                isOpen
                  ? tokens.border
                  : isChecked
                  ? "border-green-200"
                  : "border-[#d3cec6]"
              }`}
            >
              {/* Rule row — click to expand/collapse */}
              <button
                onClick={() => toggleOpen(i)}
                className={`w-full flex items-center gap-3 p-4 text-left transition-colors ${
                  isOpen
                    ? tokens.bgLight
                    : isChecked
                    ? "bg-green-50"
                    : "bg-white hover:bg-[#f5f1ec]"
                }`}
              >
                {/* Checkbox — separate click */}
                <span
                  role="checkbox"
                  aria-checked={isChecked}
                  onClick={(e) => toggleCheck(e, i)}
                  className={`mt-0.5 w-5 h-5 rounded flex-shrink-0 border-2 flex items-center justify-center transition-all cursor-pointer ${
                    isChecked
                      ? "bg-green-500 border-green-500"
                      : "border-[#d3cec6] hover:border-green-400"
                  }`}
                >
                  {isChecked && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </span>

                {/* Rule number */}
                <span
                  className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold ${tokens.bg}`}
                >
                  {i + 1}
                </span>

                {/* Rule text */}
                <span
                  className={`text-sm font-medium flex-1 leading-snug ${
                    isChecked ? "text-[#7b7b78] line-through" : "text-[#111111]"
                  }`}
                >
                  {note.rule}
                </span>

                {/* Expand indicator */}
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <span
                    className={`text-xs font-medium ${
                      isOpen ? tokens.text : "text-[#7b7b78]"
                    }`}
                  >
                    {isOpen ? "Cerrar" : "Leer"}
                  </span>
                  <svg
                    className={`w-4 h-4 text-[#7b7b78] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {/* Explanation panel */}
              {isOpen && (
                <div className="border-t border-[#ebe7e1] px-5 py-4 bg-white animate-panel-in">
                  <p className={`text-xs font-semibold uppercase tracking-wide mb-2 ${tokens.text}`}>
                    Explicación
                  </p>
                  <p className="text-sm text-[#626260] leading-relaxed">
                    {note.explanation}
                  </p>
                  {!isChecked && (
                    <button
                      onClick={(e) => {
                        toggleCheck(e, i);
                        setOpenIdx(null);
                      }}
                      className={`mt-4 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${tokens.btn} text-white`}
                    >
                      Marcar como comprendida
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {allDone && (
        <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-xl text-center animate-soft-pop">
          <p className="text-sm font-semibold text-green-700">
            ¡Todas las reglas revisadas y comprendidas!
          </p>
        </div>
      )}
    </div>
  );
}
