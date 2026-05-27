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
          className={`px-3 py-2 rounded-lg text-sm font-medium border ${badgeClass} border-current/20`}
        >
          👤 {role}
        </span>
      ))}
    </div>
  );
}
