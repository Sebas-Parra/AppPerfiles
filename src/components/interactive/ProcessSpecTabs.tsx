import { useState } from "react";
import type { ProcessSpec, ProfileColor } from "@/types/iso29110";
import { getColorTokens } from "@/constants/profile-colors";

interface Props {
  specs: ProcessSpec[];
  color: ProfileColor;
}

export default function ProcessSpecTabs({ specs, color }: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const [expanded, setExpanded] = useState<Set<number>>(new Set());
  const tokens = getColorTokens(color);
  const active = specs[activeTab];

  const toggleReq = (i: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const expandAll = () =>
    setExpanded(new Set(active.requirements.map((_, i) => i)));
  const collapseAll = () => setExpanded(new Set());

  return (
    <div>
      {/* Tab bar */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {specs.map((spec, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveTab(i);
              setExpanded(new Set());
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
              activeTab === i
                ? `${tokens.btn} text-white`
                : "bg-[#f5f1ec] text-[#626260] hover:bg-[#ebe7e1]"
            }`}
          >
            <span
              className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                activeTab === i ? "bg-white/20 text-white" : tokens.badge
              }`}
            >
              {spec.abbreviation}
            </span>
            {spec.name}
          </button>
        ))}
      </div>

      {/* Panel */}
      <div className="bg-white border border-[#d3cec6] rounded-xl overflow-hidden">
        {/* Purpose header */}
        <div className={`${tokens.bg} text-white p-5`}>
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-white/20 text-white text-sm font-bold px-3 py-1 rounded-lg">
              {active.abbreviation}
            </span>
            <h3 className="text-base font-bold">{active.name}</h3>
          </div>
          <p className="text-white/90 text-sm leading-relaxed">{active.purpose}</p>
        </div>

        {/* Requirements */}
        <div className="p-5">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold text-[#7b7b78] uppercase tracking-wide">
              {active.requirements.length} Requisitos
            </p>
            <div className="flex gap-2">
              <button
                onClick={expandAll}
                className="text-xs text-[#7b7b78] hover:text-[#111111] underline"
              >
                Expandir todo
              </button>
              <span className="text-[#d3cec6]">·</span>
              <button
                onClick={collapseAll}
                className="text-xs text-[#7b7b78] hover:text-[#111111] underline"
              >
                Colapsar todo
              </button>
            </div>
          </div>

          <div className="space-y-2">
            {active.requirements.map((req, ri) => {
              const isOpen = expanded.has(ri);
              return (
                <div
                  key={ri}
                  className={`border rounded-xl overflow-hidden transition-all ${
                    isOpen ? tokens.border : "border-[#d3cec6]"
                  }`}
                >
                  <button
                    onClick={() => toggleReq(ri)}
                    className="w-full flex items-center gap-3 p-3 text-left hover:bg-[#f5f1ec] transition-colors"
                  >
                    <span
                      className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold ${tokens.bg}`}
                    >
                      {ri + 1}
                    </span>
                    <span
                      className={`text-sm leading-relaxed flex-1 ${
                        isOpen ? tokens.text : "text-[#626260]"
                      }`}
                    >
                      {req}
                    </span>
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
                    <div className={`border-t border-[#ebe7e1] px-4 py-3 ${tokens.bgLight}`}>
                      <p className="text-xs text-[#7b7b78] leading-relaxed">
                        Este requisito es obligatorio para declarar conformidad con el Perfil Básico
                        del proceso <strong>{active.abbreviation}</strong>. Debe evidenciarse mediante
                        productos de trabajo o registros auditables.
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
