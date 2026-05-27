import type { Profile } from "@/types/iso29110";
import {
  entryProfile,
  basicProfile,
  intermediateProfile,
  advancedProfile,
} from "@/data/profiles";

export const allProfiles: Profile[] = [
  entryProfile,
  basicProfile,
  intermediateProfile,
  advancedProfile,
];

export function getProfile(id: string): Profile | undefined {
  return allProfiles.find((p) => p.id === id);
}

export function getAdjacentProfiles(id: string): {
  prev: Profile | null;
  next: Profile | null;
} {
  const index = allProfiles.findIndex((p) => p.id === id);
  return {
    prev: index > 0 ? allProfiles[index - 1] : null,
    next: index < allProfiles.length - 1 ? allProfiles[index + 1] : null,
  };
}

export function getProfileIds(): string[] {
  return allProfiles.map((p) => p.id);
}
