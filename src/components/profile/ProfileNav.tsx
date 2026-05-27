import Link from "next/link";
import type { Profile } from "@/types/iso29110";

interface ProfileNavProps {
  prev: Profile | null;
  next: Profile | null;
}

export default function ProfileNav({ prev, next }: ProfileNavProps) {
  return (
    <div className="flex justify-between items-center pt-4 border-t border-gray-200">
      {prev ? (
        <Link href={`/perfiles/${prev.id}`} className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-gray-200 flex items-center justify-center transition-colors">
            ←
          </div>
          <div>
            <p className="text-xs text-gray-400">Perfil anterior</p>
            <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
              {prev.icon} {prev.name}
            </p>
          </div>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={`/perfiles/${next.id}`}
          className="flex items-center gap-3 group text-right"
        >
          <div>
            <p className="text-xs text-gray-400">Siguiente perfil</p>
            <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
              {next.icon} {next.name}
            </p>
          </div>
          <div className="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-gray-200 flex items-center justify-center transition-colors">
            →
          </div>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
