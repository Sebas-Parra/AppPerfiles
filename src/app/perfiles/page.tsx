import ProfileCard from "@/components/profile/ProfileCard";
import { allProfiles } from "@/lib/profiles";
import Link from "next/link";

export default function PerfilesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Perfiles</span>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900">
            Perfiles ISO 29110
          </h1>
          <p className="text-gray-500 mt-2 max-w-2xl">
            Los perfiles definen el conjunto mínimo de procesos, actividades y
            productos de trabajo que una VSE debe implementar según su nivel de
            madurez organizacional.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {allProfiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <h3 className="font-bold text-blue-900 text-lg mb-2">
            ¿Cuál perfil me corresponde?
          </h3>
          <p className="text-blue-800 text-sm mb-4">
            La selección del perfil adecuado depende del tamaño de tu
            organización, la complejidad de los proyectos y tu nivel de madurez
            en procesos de software.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {allProfiles.map((p) => (
              <div key={p.id} className="bg-white rounded-lg p-3 border border-blue-100">
                <div className="flex items-center gap-2 mb-1">
                  <span>{p.icon}</span>
                  <span className="font-semibold text-sm text-gray-900">
                    {p.name}
                  </span>
                </div>
                <p className="text-xs text-gray-500">{p.targetAudience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
