import { notFound } from "next/navigation";
import Link from "next/link";
import { getProfile, getAdjacentProfiles, getProfileIds } from "@/lib/profiles";
import { getColorTokens } from "@/constants/profile-colors";
import ProcessSection from "@/components/process/ProcessSection";
import RoleCard from "@/components/profile/RoleCard";
import ProfileNav from "@/components/profile/ProfileNav";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return getProfileIds().map((id) => ({ id }));
}

export default async function ProfileDetailPage({ params }: Props) {
  const { id } = await params;
  const profile = getProfile(id);
  if (!profile) notFound();

  const tokens = getColorTokens(profile.color);
  const { prev, next } = getAdjacentProfiles(id);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero header */}
      <div className={`bg-gradient-to-br ${profile.gradient} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-2 text-sm text-white/70 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/perfiles" className="hover:text-white transition-colors">Perfiles</Link>
            <span>/</span>
            <span className="text-white font-medium">{profile.name}</span>
          </div>
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl shadow-lg flex-shrink-0">
              {profile.icon}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Nivel {profile.level}
                </span>
                <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {profile.processes.length} proceso{profile.processes.length > 1 ? "s" : ""}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold">{profile.name}</h1>
              <p className="text-white/80 mt-1 text-sm">{profile.targetAudience}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Description + characteristics */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Descripción del Perfil</h2>
            <p className="text-gray-600 leading-relaxed">{profile.description}</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Características Clave</h2>
            <ul className="space-y-2">
              {profile.characteristics.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className={`mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold ${tokens.bg}`}>
                    ✓
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Roles */}
        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Roles del Perfil</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {profile.roles.map((role) => (
              <RoleCard key={role.id} role={role} tokens={tokens} />
            ))}
          </div>
        </section>

        {/* Processes */}
        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Procesos del Perfil</h2>
          <div className="space-y-6">
            {profile.processes.map((process) => (
              <ProcessSection key={process.id} process={process} color={profile.color} />
            ))}
          </div>
        </section>

        {/* Deployment packages */}
        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Paquetes de Despliegue</h2>
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <p className="text-sm text-gray-500 mb-4">
              Los paquetes de despliegue son guías detalladas que apoyan la implementación del perfil en la organización.
            </p>
            <div className="flex flex-wrap gap-2">
              {profile.deploymentPackages.map((pkg, i) => (
                <span key={i} className={`px-3 py-1.5 rounded-lg text-sm font-medium border ${tokens.badge} ${tokens.border}`}>
                  📦 {pkg}
                </span>
              ))}
            </div>
          </div>
        </section>

        <ProfileNav prev={prev} next={next} />
      </div>
    </main>
  );
}
