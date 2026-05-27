import type { Task } from "@/types/iso29110";

interface TaskItemProps {
  task: Task;
  label: string;
  taskBgClass: string;
}

export default function TaskItem({ task, label, taskBgClass }: TaskItemProps) {
  return (
    <div className={`rounded-lg border p-3 ${taskBgClass}`}>
      <p className="text-sm font-semibold text-[#111111]">
        {label} — {task.name}
      </p>
      <p className="text-sm text-[#626260] mt-1">{task.description}</p>
      {(task.inputs?.length || task.outputs?.length) ? (
        <div className="mt-2 flex gap-4 flex-wrap">
          {task.inputs && task.inputs.length > 0 && (
            <div>
              <p className="text-sm font-semibold text-[#7b7b78] uppercase tracking-wide mb-1">
                Entradas
              </p>
              <div className="flex flex-wrap gap-1">
                {task.inputs.map((inp) => (
                  <span
                    key={inp}
className="text-sm bg-white border border-[#d3cec6] text-[#626260] px-2 py-0.5 rounded"
                    >
                      {inp}
                  </span>
                ))}
              </div>
            </div>
          )}
          {task.outputs && task.outputs.length > 0 && (
            <div>
              <p className="text-sm font-semibold text-[#7b7b78] uppercase tracking-wide mb-1">
                Salidas
              </p>
              <div className="flex flex-wrap gap-1">
                {task.outputs.map((out) => (
                  <span
                    key={out}
className="text-sm bg-white border border-[#d3cec6] text-[#626260] px-2 py-0.5 rounded"
                    >
                      {out}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
