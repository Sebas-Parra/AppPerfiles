import type { ProfileColor } from "@/types/iso29110";

export interface ColorTokens {
  bg: string;
  bgLight: string;
  text: string;
  border: string;
  borderHover: string;
  badge: string;
  tab: string;
  taskBg: string;
  btn: string;
}

export const profileColorTokens: Record<ProfileColor, ColorTokens> = {
  slate: {
    bg: "bg-slate-700",
    bgLight: "bg-slate-100/60",
    text: "text-slate-700",
    border: "border-slate-200",
    borderHover: "hover:border-slate-300",
    badge: "bg-slate-100 text-slate-700",
    tab: "border-slate-500 text-slate-700 bg-slate-50",
    taskBg: "bg-slate-50 border-slate-200",
    btn: "bg-slate-700 hover:bg-slate-800",
  },
  teal: {
    bg: "bg-teal-600",
    bgLight: "bg-teal-100/60",
    text: "text-teal-700",
    border: "border-teal-200",
    borderHover: "hover:border-teal-300",
    badge: "bg-teal-100 text-teal-700",
    tab: "border-teal-500 text-teal-700 bg-teal-50",
    taskBg: "bg-teal-50 border-teal-200",
    btn: "bg-teal-600 hover:bg-teal-700",
  },
  green: {
    bg: "bg-green-700",
    bgLight: "bg-green-100/60",
    text: "text-green-700",
    border: "border-green-200",
    borderHover: "hover:border-green-300",
    badge: "bg-green-100 text-green-700",
    tab: "border-green-600 text-green-700 bg-green-50",
    taskBg: "bg-green-50 border-green-200",
    btn: "bg-green-700 hover:bg-green-800",
  },
  blue: {
    bg: "bg-blue-700",
    bgLight: "bg-blue-100/60",
    text: "text-blue-700",
    border: "border-blue-200",
    borderHover: "hover:border-blue-300",
    badge: "bg-blue-100 text-blue-700",
    tab: "border-blue-600 text-blue-700 bg-blue-50",
    taskBg: "bg-blue-50 border-blue-200",
    btn: "bg-blue-700 hover:bg-blue-800",
  },
  purple: {
    bg: "bg-purple-700",
    bgLight: "bg-purple-100/60",
    text: "text-purple-700",
    border: "border-purple-200",
    borderHover: "hover:border-purple-300",
    badge: "bg-purple-100 text-purple-700",
    tab: "border-purple-500 text-purple-700 bg-purple-50",
    taskBg: "bg-purple-50 border-purple-200",
    btn: "bg-purple-700 hover:bg-purple-800",
  },
  orange: {
    bg: "bg-orange-600",
    bgLight: "bg-orange-100/60",
    text: "text-orange-700",
    border: "border-orange-200",
    borderHover: "hover:border-orange-300",
    badge: "bg-orange-100 text-orange-700",
    tab: "border-orange-500 text-orange-700 bg-orange-50",
    taskBg: "bg-orange-50 border-orange-200",
    btn: "bg-orange-600 hover:bg-orange-700",
  },
};

export function getColorTokens(color: ProfileColor): ColorTokens {
  return profileColorTokens[color];
}
