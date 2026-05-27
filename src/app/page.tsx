import ProfileCard from "@/components/profile/ProfileCard";
import { allProfiles } from "@/lib/profiles";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <span className="inline-block bg-white/10 border border-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Norma Internacional ISO/IEC 29110
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
            Guía de Perfiles
            <br />
            <span className="text-blue-200">para Entidades Muy Pequeñas</span>
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed mb-8">
            Explora los cuatro perfiles de la ISO 29110 diseñados para VSEs
            (Very Small Entities). Cada perfil define procesos, actividades,
            roles y productos de trabajo adaptados a tu nivel de madurez.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#perfiles"
              className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              Explorar Perfiles
            </a>
            <Link
              href="/perfiles"
              className="bg-blue-600 border border-blue-400 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-500 transition-colors"
            >
              Ver todos →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { label: "Perfiles", value: "4", icon: "📊" },
              { label: "Procesos definidos", value: "9", icon: "⚙️" },
              { label: "Actividades documentadas", value: "30+", icon: "📋" },
              { label: "Roles cubiertos", value: "15+", icon: "👥" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span className="text-2xl">{stat.icon}</span>
                <span className="text-3xl font-extrabold text-gray-900">
                  {stat.value}
                </span>
                <span className="text-sm text-gray-500 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profiles section */}
      <section
        id="perfiles"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
            Los 4 Perfiles de la ISO 29110
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Selecciona un perfil para ver su descripción completa, procesos,
            actividades, roles y productos de trabajo.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {allProfiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      </section>

      {/* Level progression */}
      <section className="bg-white border-y border-gray-200 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">
            Progresión de Madurez
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-2 justify-center">
            {allProfiles.map((profile, idx) => (
              <div key={profile.id} className="flex items-center gap-2">
                <div className="flex flex-col items-center text-center w-36">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${profile.gradient} flex items-center justify-center text-2xl shadow-md mb-2`}
                  >
                    {profile.icon}
                  </div>
                  <p className="font-bold text-gray-900 text-sm">
                    {profile.name}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Nivel {profile.level}
                  </p>
                </div>
                {idx < allProfiles.length - 1 && (
                  <svg
                    className="w-6 h-6 text-gray-300 flex-shrink-0 hidden sm:block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
              ¿Qué es la norma?
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-4">
              ISO/IEC 29110 — Ingeniería de Software para VSEs
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              La ISO/IEC 29110 es un conjunto de normas y guías internacionales
              desarrolladas específicamente para Entidades Muy Pequeñas (VSEs),
              es decir, organizaciones de hasta 25 personas que desarrollan
              software.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Las normas ISO existentes eran percibidas como demasiado complejas
              y costosas para pequeñas organizaciones. La ISO 29110 ofrece
              perfiles adaptados a diferentes niveles de madurez, facilitando la
              adopción gradual de buenas prácticas.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: "🎯",
                title: "Orientada a VSEs",
                desc: "Diseñada para organizaciones de hasta 25 personas",
              },
              {
                icon: "📈",
                title: "Progresiva",
                desc: "Cuatro niveles adaptados a tu madurez",
              },
              {
                icon: "🌐",
                title: "Internacional",
                desc: "Estándar reconocido mundialmente",
              },
              {
                icon: "✅",
                title: "Práctica",
                desc: "Guías de implementación y paquetes de despliegue",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm"
              >
                <span className="text-2xl">{item.icon}</span>
                <p className="font-semibold text-gray-900 text-sm mt-2">
                  {item.title}
                </p>
                <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 text-center py-6 text-sm">
        <p>
          Guía de referencia ISO/IEC 29110 — Perfiles de VSEs para Ingeniería
          de Software
        </p>
      </footer>
    </main>
  );
}
