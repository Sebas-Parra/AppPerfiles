import { useState } from "react";
import type { Process } from "@/types/iso29110";
import type { ProfileColor } from "@/types/iso29110";
import { getColorTokens } from "@/constants/profile-colors";
import ActivityItem from "./ActivityItem";
import OutcomeList from "./OutcomeList";
import WorkProductGrid from "./WorkProductGrid";
import ProcessRoles from "./ProcessRoles";

interface ProcessSectionProps {
  process: Process;
  color: ProfileColor;
}

type Tab = "actividades" | "resultados" | "productos" | "roles";

const TABS: { key: Tab; label: string; countKey: keyof Process }[] = [
  { key: "actividades", label: "Actividades", countKey: "activities" },
  { key: "resultados", label: "Resultados Esperados", countKey: "outcomes" },
  { key: "productos", label: "Productos de Trabajo", countKey: "workProducts" },
  { key: "roles", label: "Roles Involucrados", countKey: "roles" },
];

export default function ProcessSection({ process, color }: ProcessSectionProps) {
  const [activeTab, setActiveTab] = useState<Tab>("actividades");
  const tokens = getColorTokens(color);

  return (
    <div className="bg-white rounded-xl border border-[#d3cec6]">
      {/* Header */}
      <div className={`${tokens.bg} text-white p-5 rounded-t-xl`}>
        <div className="flex items-center gap-3">
          <span className="bg-white/20 text-white text-sm font-bold px-3 py-1 rounded-lg">
            {process.abbreviation}
          </span>
          <h3 className="text-lg font-bold">{process.name}</h3>
        </div>
        <p className="text-white/90 text-sm mt-2 leading-relaxed">{process.purpose}</p>
      </div>

      {/* Tab bar */}
      <div className="flex border-b border-[#d3cec6] overflow-x-auto">
        {TABS.map((tab) => {
          const count = (process[tab.countKey] as unknown[]).length;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors border-b-2 flex items-center gap-1.5 ${
                activeTab === tab.key
                  ? tokens.tab
                  : "border-transparent text-[#7b7b78] hover:text-[#111111]"
              }`}
            >
              {tab.label}
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${
                  activeTab === tab.key ? tokens.badge : "bg-[#ebe7e1] text-[#626260]"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      <div className="p-5">
        {activeTab === "actividades" && (
          <div className="space-y-3">
            {process.activities.map((activity, idx) => (
              <ActivityItem
                key={activity.id}
                activity={activity}
                index={idx}
                bgClass={tokens.bg}
                taskBgClass={tokens.taskBg}
              />
            ))}
          </div>
        )}
        {activeTab === "resultados" && (
          <OutcomeList outcomes={process.outcomes} bgClass={tokens.bg} />
        )}
        {activeTab === "productos" && (
          <WorkProductGrid workProducts={process.workProducts} />
        )}
        {activeTab === "roles" && (
          <ProcessRoles roles={process.roles} badgeClass={tokens.badge} />
        )}
      </div>
    </div>
  );
}
