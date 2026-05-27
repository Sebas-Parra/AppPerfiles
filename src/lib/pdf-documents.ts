import part1Pdf from "../../assets/profiles/ISO-IEC-TR-29110-1-2016.pdf?url";
import part21Pdf from "../../assets/profiles/ISO-IEC-29110-2-1-2015.pdf?url";
import part32Pdf from "../../assets/profiles/ISO-IEC-29110-3-2-2018.pdf?url";
import part41Pdf from "../../assets/profiles/ISO-IEC-29110-4-1-2018.pdf?url";
import part511Pdf from "../../assets/profiles/ISO-IEC-29110-5-1-1-2025.pdf?url";
import part512Pdf from "../../assets/profiles/ISO-IEC-29110-5-1-2-2025.pdf?url";

export interface PdfDocument {
  title: string;
  url: string;
}

const pdfDocuments: Record<string, PdfDocument> = {
  "parte-1": {
    title: "ISO/IEC TR 29110-1:2016",
    url: part1Pdf,
  },
  "parte-2-1": {
    title: "ISO/IEC 29110-2-1:2015",
    url: part21Pdf,
  },
  "parte-3-2": {
    title: "ISO/IEC 29110-3-2:2018",
    url: part32Pdf,
  },
  "parte-4-1": {
    title: "ISO/IEC 29110-4-1:2018",
    url: part41Pdf,
  },
  "parte-5-1-1": {
    title: "ISO/IEC 29110-5-1-1:2025",
    url: part511Pdf,
  },
  "parte-5-1-2": {
    title: "ISO/IEC 29110-5-1-2:2025",
    url: part512Pdf,
  },
};

export function getPdfDocument(divisionId: string): PdfDocument | null {
  return pdfDocuments[divisionId] ?? null;
}
