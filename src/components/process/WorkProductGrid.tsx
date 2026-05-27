import type { WorkProduct } from "@/types/iso29110";

interface WorkProductGridProps {
  workProducts: WorkProduct[];
}

export default function WorkProductGrid({ workProducts }: WorkProductGridProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {workProducts.map((wp) => (
        <div
          key={wp.id}
          className="border border-gray-200 rounded-xl p-4 hover:shadow-sm transition-shadow"
        >
          <div className="flex items-start gap-2">
            <span className="text-lg">📄</span>
            <div>
              <p className="text-sm font-semibold text-gray-900">{wp.name}</p>
              <p className="text-xs text-gray-500 mt-1">{wp.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
