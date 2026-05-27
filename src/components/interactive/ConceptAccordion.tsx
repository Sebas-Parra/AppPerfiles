import { useState } from "react";
import type { ConceptEntry, ProfileColor } from "@/types/iso29110";
import { getColorTokens } from "@/constants/profile-colors";

interface Props {
  concepts: ConceptEntry[];
  color: ProfileColor;
}

export default function ConceptAccordion({ concepts, color }: Props) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const tokens = getColorTokens(color);

  return (
    <div className="space-y-2">
      <p className="text-xs text-[#7b7b78] mb-3">
        Haz clic en cada término para ver su definición.
      </p>
      {concepts.map((concept, i) => {
        const isOpen = openIdx === i;
        return (
          <div
            key={i}
            className={`border rounded-xl overflow-hidden transition-all ${
              isOpen ? tokens.border : "border-[#d3cec6]"
            }`}
          >
            <button
              onClick={() => setOpenIdx(isOpen ? null : i)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-[#f5f1ec] transition-colors"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-white ${tokens.bg}`}
                >
                  {i + 1}
                </span>
                <span
                  className={`text-sm font-semibold transition-colors ${
                    isOpen ? tokens.text : "text-[#111111]"
                  }`}
                >
                  {concept.term}
                </span>
              </div>
              <svg
                className={`w-4 h-4 flex-shrink-0 text-[#7b7b78] transition-transform ${
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
            </button>

            {isOpen && (
              <div className={`border-t border-[#ebe7e1] px-4 py-4 ${tokens.bgLight}`}>
                <p className="text-sm text-[#626260] leading-relaxed">
                  {concept.definition}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
