import { useEffect, useEffectEvent, useMemo, useState } from "react";

interface PdfViewerState {
  label: string;
  page?: number;
  search?: string;
  title: string;
  url: string;
}

function buildPdfUrl(viewer: PdfViewerState) {
  const params = new URLSearchParams();

  if (viewer.page) {
    params.set("page", String(viewer.page));
  }

  if (viewer.search) {
    params.set("search", viewer.search);
  }

  const fragment = params.toString();
  return fragment ? `${viewer.url}#${fragment}` : viewer.url;
}

export default function PdfViewerModal() {
  const [viewer, setViewer] = useState<PdfViewerState | null>(null);

  const closeModal = useEffectEvent(() => {
    setViewer(null);
  });

  useEffect(() => {
    const onDocumentClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;

      const trigger = target.closest<HTMLElement>("[data-pdf-open]");
      if (!trigger) return;

      const url = trigger.dataset.pdfUrl;
      const title = trigger.dataset.pdfTitle;

      if (!url || !title) return;

      event.preventDefault();

      const pageValue = trigger.dataset.pdfPage;
      const page = pageValue ? Number(pageValue) : undefined;

      setViewer({
        url,
        title,
        page: Number.isFinite(page) ? page : undefined,
        search: trigger.dataset.pdfSearch || undefined,
        label: trigger.dataset.pdfLabel || title,
      });
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("click", onDocumentClick);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("click", onDocumentClick);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [closeModal]);

  useEffect(() => {
    if (!viewer) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [viewer]);

  const viewerUrl = useMemo(() => (viewer ? buildPdfUrl(viewer) : ""), [viewer]);

  if (!viewer) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-[#111111]/70 px-3 py-6 backdrop-blur-sm sm:px-6">
      <button
        type="button"
        aria-label="Cerrar visor PDF"
        className="absolute inset-0"
        onClick={closeModal}
      />

      <div className="relative z-[121] flex h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-[28px] border border-[#d3cec6] bg-white shadow-[0_30px_90px_-40px_rgba(0,0,0,0.75)]">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#ebe7e1] px-5 py-4 sm:px-6">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9c9fa5]">
              Documento fuente
            </p>
            <h3 className="mt-1 text-lg font-semibold text-[#111111]">{viewer.label}</h3>
            <p className="mt-1 text-sm text-[#626260]">{viewer.title}</p>
            {viewer.search && (
              <p className="mt-1 text-xs text-[#7b7b78]">
                Búsqueda sugerida: <span className="font-medium text-[#111111]">{viewer.search}</span>
              </p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={viewerUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-[#d3cec6] bg-white px-3 py-2 text-sm font-medium text-[#111111] transition-colors hover:bg-[#f8f5f0]"
            >
              Abrir aparte
            </a>
            <button
              type="button"
              onClick={closeModal}
              className="rounded-xl bg-[#111111] px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-[#2d2d2d]"
            >
              Cerrar
            </button>
          </div>
        </div>

        <div className="flex-1 bg-[#f3efe8] p-2 sm:p-3">
          <iframe
            key={viewerUrl}
            title={viewer.title}
            src={viewerUrl}
            className="h-full w-full rounded-[20px] border border-[#d3cec6] bg-white"
          />
        </div>
      </div>
    </div>
  );
}
