import NumberedBullet from "@/components/ui/NumberedBullet";

interface OutcomeListProps {
  outcomes: string[];
  bgClass: string;
}

export default function OutcomeList({ outcomes, bgClass }: OutcomeListProps) {
  return (
    <ul className="space-y-2">
      {outcomes.map((outcome, idx) => (
        <li key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-[#f5f1ec]">
          <NumberedBullet number={idx + 1} bgClass={bgClass} size="sm" />
          <p className="text-sm text-[#626260]">{outcome}</p>
        </li>
      ))}
    </ul>
  );
}
