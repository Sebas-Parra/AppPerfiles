import type { Role } from "@/types/iso29110";
import type { ColorTokens } from "@/constants/profile-colors";

interface RoleCardProps {
  role: Role;
  tokens: ColorTokens;
}

export default function RoleCard({ role, tokens }: RoleCardProps) {
  return (
    <div className={`bg-white rounded-2xl border ${tokens.border} p-5 shadow-sm`}>
      <div className="flex items-center gap-3 mb-3">
        <div
          className={`w-10 h-10 rounded-xl ${tokens.bg} flex items-center justify-center text-white font-bold text-sm`}
        >
          {role.abbreviation}
        </div>
        <div>
          <p className="font-bold text-gray-900 text-sm">{role.name}</p>
          <p className={`text-xs font-semibold ${tokens.text}`}>{role.abbreviation}</p>
        </div>
      </div>
      <p className="text-xs text-gray-500 mb-3">{role.description}</p>
      <p className="text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">
        Responsabilidades
      </p>
      <ul className="space-y-1">
        {role.responsibilities.map((r, i) => (
          <li key={i} className="text-xs text-gray-600 flex items-start gap-1.5">
            <span className="text-gray-400 mt-0.5">•</span>
            {r}
          </li>
        ))}
      </ul>
    </div>
  );
}
