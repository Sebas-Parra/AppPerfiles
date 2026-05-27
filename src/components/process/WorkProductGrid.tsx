import type { WorkProduct } from "@/types/iso29110";
import LucideIcon from "@/components/ui/LucideIcon";

interface WorkProductGridProps {
  workProducts: WorkProduct[];
}

export default function WorkProductGrid({ workProducts }: WorkProductGridProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {workProducts.map((wp) => (
        <div
          key={wp.id}
          className="border border-[#d3cec6] rounded-xl p-4"
        >
          <div className="flex items-start gap-2">
            <LucideIcon name="file-text" className="w-5 h-5 text-[#626260] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-[#111111]">{wp.name}</p>
              <p className="text-sm text-[#626260] mt-1">{wp.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
