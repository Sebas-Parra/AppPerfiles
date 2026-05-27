import { divisions } from "@/data/divisions";
import type { Division } from "@/types/iso29110";

export function getDivisions(): Division[] {
  return divisions;
}

export function getDivision(id: string): Division | undefined {
  return divisions.find((d) => d.id === id);
}

export function getDivisionIds(): string[] {
  return divisions.map((d) => d.id);
}

export function getAdjacentDivisions(id: string): {
  prev: Division | null;
  next: Division | null;
} {
  const idx = divisions.findIndex((d) => d.id === id);
  return {
    prev: idx > 0 ? divisions[idx - 1] : null,
    next: idx < divisions.length - 1 ? divisions[idx + 1] : null,
  };
}
