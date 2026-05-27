import { useState } from "react";
import type { Activity } from "@/types/iso29110";
import TaskItem from "./TaskItem";
import NumberedBullet from "@/components/ui/NumberedBullet";
import ChevronIcon from "@/components/ui/ChevronIcon";

interface ActivityItemProps {
  activity: Activity;
  index: number;
  bgClass: string;
  taskBgClass: string;
}

export default function ActivityItem({
  activity,
  index,
  bgClass,
  taskBgClass,
}: ActivityItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[#d3cec6] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-[#f5f1ec] transition-colors"
      >
        <div className="flex items-center gap-3">
          <NumberedBullet number={index + 1} bgClass={bgClass} />
          <div>
            <p className="font-semibold text-[#111111] text-sm">{activity.name}</p>
            <p className="text-sm text-[#626260]">{activity.tasks.length} tareas</p>
          </div>
        </div>
        <ChevronIcon open={open} />
      </button>

      {open && (
        <div className="border-t border-[#ebe7e1] p-4 bg-[#f5f1ec]">
          <p className="text-sm text-[#626260] mb-4">{activity.description}</p>
          <div className="space-y-3">
            {activity.tasks.map((task, tIdx) => (
              <TaskItem
                key={task.id}
                task={task}
                label={`T${index + 1}.${tIdx + 1}`}
                taskBgClass={taskBgClass}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
