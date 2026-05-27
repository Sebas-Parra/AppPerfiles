import { useState } from "react";
import type { ProfileColor } from "@/types/iso29110";
import { getColorTokens } from "@/constants/profile-colors";

interface ProfileGroup {
  name: string;
  levels: string[];
  description?: string;
}

interface Props {
  groups: ProfileGroup[];
  color: ProfileColor;
}

export default function ProfileGroupGrid({ groups, color }: Props) {
  const [activeGroup, setActiveGroup] = useState<number | null>(null);
  const tokens = getColorTokens(color);

  return (
    <div>
      <p className="text-xs text-[#7b7b78] mb-3">
        Selecciona un grupo para ver su descripción y niveles de madurez.
      </p>
      <div className="grid sm:grid-cols-2 gap-3">
        {groups.map((group, i) => {
          const isActive = activeGroup === i;
          return (
            <button
              key={i}
              onClick={() => setActiveGroup(isActive ? null : i)}
              data-hover="lift"
              className={`text-left p-4 rounded-xl border transition-all ${
                isActive
                  ? `${tokens.bgLight} ${tokens.border}`
                  : "bg-white border-[#d3cec6] hover:border-[#b0a99e] hover:bg-[#f5f1ec]"
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <p
                  className={`text-sm font-semibold leading-snug ${
                    isActive ? tokens.text : "text-[#111111]"
                  }`}
                >
                  {group.name}
                </p>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium whitespace-nowrap ${tokens.badge}`}
                >
                  {group.levels.length} niveles
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.levels.map((level, li) => (
                  <span
                    key={li}
                    className={`text-xs px-2.5 py-1 rounded-full font-medium transition-colors ${
                      isActive
                        ? `${tokens.btn} text-white`
                        : "bg-[#f5f1ec] text-[#626260]"
                    }`}
                  >
                    {li + 1}. {level}
                  </span>
                ))}
              </div>
            </button>
          );
        })}
      </div>

      {activeGroup !== null && groups[activeGroup].description && (
        <div
          className={`mt-3 rounded-xl p-4 border animate-panel-in ${tokens.bgLight} ${tokens.border}`}
        >
          <p className={`text-xs font-semibold uppercase tracking-wide mb-2 ${tokens.text}`}>
            {groups[activeGroup].name}
          </p>
          <p className="text-sm text-[#626260] leading-relaxed">
            {groups[activeGroup].description}
          </p>
        </div>
      )}
    </div>
  );
}
