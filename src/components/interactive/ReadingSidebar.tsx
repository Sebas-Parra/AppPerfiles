import { useEffect, useEffectEvent, useState } from "react";

interface ReadingSection {
  id: string;
  title: string;
  number: string;
}

interface ReadingSidebarProps {
  sections: ReadingSection[];
  accentClass: string;
  accentBadgeClass: string;
  moduleLabel: string;
}

function getProgressWidth(currentIndex: number, total: number) {
  if (total === 0) return 0;
  return Math.round(((currentIndex + 1) / total) * 100);
}

export default function ReadingSidebar({
  sections,
  accentClass,
  accentBadgeClass,
  moduleLabel,
}: ReadingSidebarProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const syncCurrentSection = useEffectEvent(() => {
    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => node instanceof HTMLElement);

    if (!nodes.length) return;

    const offset = window.innerHeight * 0.3;
    let nextIndex = 0;

    nodes.forEach((node, index) => {
      const { top } = node.getBoundingClientRect();
      if (top - offset <= 0) {
        nextIndex = index;
      }
    });

    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 16) {
      nextIndex = nodes.length - 1;
    }

    setCurrentIndex((prev) => (prev === nextIndex ? prev : nextIndex));
  });

  useEffect(() => {
    syncCurrentSection();

    let frame = 0;

    const onViewportChange = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        syncCurrentSection();
      });
    };

    window.addEventListener("scroll", onViewportChange, { passive: true });
    window.addEventListener("resize", onViewportChange);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", onViewportChange);
      window.removeEventListener("resize", onViewportChange);
    };
  }, [sections, syncCurrentSection]);

  const progressWidth = getProgressWidth(currentIndex, sections.length);
  const completedCount = Math.max(currentIndex, 0);

  return (
    <div className="lg:sticky lg:top-28">
      <div className="mb-6 rounded-[28px] border border-[#d3cec6] bg-white/95 p-5 shadow-[0_18px_45px_-34px_rgba(17,17,17,0.5)] backdrop-blur-sm lg:mb-0">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9c9fa5]">
              Avance de lectura
            </p>
            <h3 className="mt-2 text-base font-semibold text-[#111111]">{moduleLabel}</h3>
          </div>
          <div className={`rounded-full px-3 py-1 text-xs font-semibold ${accentBadgeClass}`}>
            {progressWidth}%
          </div>
        </div>

        <div className="mt-4">
          <div className="h-2 overflow-hidden rounded-full bg-[#ebe7e1]">
            <div
              className={`h-full rounded-full transition-[width] duration-300 ease-out ${accentClass}`}
              style={{ width: `${progressWidth}%` }}
            />
          </div>
          <p className="mt-3 text-sm text-[#626260]">
            {currentIndex + 1} de {sections.length} secciones recorridas
          </p>
          <p className="text-xs text-[#9c9fa5]">
            {completedCount} completadas, 1 en lectura
          </p>
        </div>

        <div className="mt-5 space-y-2 lg:max-h-[calc(100vh-12rem)] lg:overflow-y-auto lg:pr-1">
          {sections.map((section, index) => {
            const isActive = index === currentIndex;
            const isCompleted = index < currentIndex;

            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`flex items-start gap-3 rounded-2xl border px-3 py-3 transition-all ${
                  isActive
                    ? "border-[#111111] bg-[#f8f5f0] shadow-[0_12px_30px_-26px_rgba(17,17,17,0.65)]"
                    : isCompleted
                      ? "border-[#d3cec6] bg-white hover:border-[#bdb6ab] hover:bg-[#fcfbf8]"
                      : "border-transparent bg-transparent hover:border-[#ebe7e1] hover:bg-[#fcfbf8]"
                }`}
              >
                <span
                  className={`mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl text-xs font-semibold ${
                    isActive || isCompleted
                      ? `${accentClass} text-white`
                      : "bg-[#ebe7e1] text-[#626260]"
                  }`}
                >
                  {isCompleted ? "OK" : section.number}
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium leading-snug text-[#111111]">
                    {section.title}
                  </span>
                  <span className="mt-1 block text-xs text-[#7b7b78]">
                    {isActive ? "Leyendo ahora" : isCompleted ? "Completada" : "Pendiente"}
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
