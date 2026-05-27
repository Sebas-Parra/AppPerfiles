import Link from "next/link";
import type { Profile } from "@/types/iso29110";
import { getColorTokens } from "@/constants/profile-colors";

interface ProfileCardProps {
  profile: Profile;
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  const tokens = getColorTokens(profile.color);

  return (
    <Link href={`/perfiles/${profile.id}`}>
      <div
        className={`bg-white rounded-2xl border-2 ${tokens.border} ${tokens.borderHover} p-6 flex flex-col gap-4 transition-all duration-200 hover:shadow-xl hover:-translate-y-1 cursor-pointer h-full`}
      >
        <div className="flex items-start justify-between">
          <div
            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${profile.gradient} flex items-center justify-center text-2xl shadow-md`}
          >
            {profile.icon}
          </div>
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${tokens.badge}`}>
            Nivel {profile.level}
          </span>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900">{profile.name}</h3>
          <p className="text-sm text-gray-500 mt-1">{profile.targetAudience}</p>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 flex-1">
          {profile.description}
        </p>

        <div className="flex flex-wrap gap-1 mt-auto">
          {profile.processes.slice(0, 3).map((p) => (
            <span key={p.id} className={`text-xs px-2 py-0.5 rounded-full font-medium ${tokens.badge}`}>
              {p.abbreviation}
            </span>
          ))}
          {profile.processes.length > 3 && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 font-medium">
              +{profile.processes.length - 3} más
            </span>
          )}
        </div>

        <div className={`text-white text-sm font-semibold px-4 py-2 rounded-lg text-center ${tokens.btn} transition-colors`}>
          Ver perfil completo →
        </div>
      </div>
    </Link>
  );
}
