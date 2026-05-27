import type { Task } from "@/types/iso29110";

interface TaskItemProps {
  task: Task;
  label: string;
  taskBgClass: string;
}

export default function TaskItem({ task, label, taskBgClass }: TaskItemProps) {
  return (
    <div className={`rounded-lg border p-3 ${taskBgClass}`}>
      <p className="text-sm font-semibold text-gray-800">
        {label} — {task.name}
      </p>
      <p className="text-xs text-gray-600 mt-1">{task.description}</p>
      {(task.inputs?.length || task.outputs?.length) ? (
        <div className="mt-2 flex gap-4 flex-wrap">
          {task.inputs && task.inputs.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                Entradas
              </p>
              <div className="flex flex-wrap gap-1">
                {task.inputs.map((inp) => (
                  <span
                    key={inp}
                    className="text-xs bg-white border border-gray-200 text-gray-600 px-2 py-0.5 rounded"
                  >
                    {inp}
                  </span>
                ))}
              </div>
            </div>
          )}
          {task.outputs && task.outputs.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                Salidas
              </p>
              <div className="flex flex-wrap gap-1">
                {task.outputs.map((out) => (
                  <span
                    key={out}
                    className="text-xs bg-white border border-gray-200 text-gray-600 px-2 py-0.5 rounded"
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
