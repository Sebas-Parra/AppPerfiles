interface NumberedBulletProps {
  number: number;
  bgClass: string;
  size?: "sm" | "md";
}

export default function NumberedBullet({
  number,
  bgClass,
  size = "md",
}: NumberedBulletProps) {
  const sizeClass = size === "sm" ? "w-6 h-6 text-xs" : "w-7 h-7 text-xs";
  return (
    <span
      className={`${sizeClass} ${bgClass} rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold`}
    >
      {number}
    </span>
  );
}
