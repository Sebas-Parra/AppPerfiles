import LucideIcon from "@/components/ui/LucideIcon";

interface ProcessRolesProps {
  roles: string[];
  badgeClass: string;
}

export default function ProcessRoles({ roles, badgeClass }: ProcessRolesProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {roles.map((role) => (
        <span
          key={role}
          className={`px-3 py-2 rounded-lg text-sm font-medium border border-[#d3cec6] text-[#111111] ${badgeClass}`}
        >
          <LucideIcon name="user" className="w-4 h-4" />
          <span>{role}</span>
        </span>
      ))}
    </div>
  );
}
