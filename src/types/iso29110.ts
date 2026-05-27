export interface WorkProduct {
  id: string;
  name: string;
  description: string;
}

export interface Task {
  id: string;
  name: string;
  description: string;
  inputs?: string[];
  outputs?: string[];
}

export interface Activity {
  id: string;
  name: string;
  description: string;
  tasks: Task[];
}

export interface Role {
  id: string;
  name: string;
  abbreviation: string;
  description: string;
  responsibilities: string[];
}

export interface Process {
  id: string;
  name: string;
  abbreviation: string;
  purpose: string;
  outcomes: string[];
  activities: Activity[];
  roles: string[];
  workProducts: WorkProduct[];
}

export type ProfileColor = "green" | "blue" | "purple" | "orange";

export interface Profile {
  id: string;
  name: string;
  level: number;
  color: ProfileColor;
  gradient: string;
  icon: string;
  targetAudience: string;
  description: string;
  characteristics: string[];
  processes: Process[];
  roles: Role[];
  deploymentPackages: string[];
}
