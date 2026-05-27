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

export type ProfileColor = "green" | "blue" | "purple" | "orange" | "slate" | "teal";

export type DivisionColor = ProfileColor;

export interface ConceptEntry {
  term: string;
  definition: string;
}

export interface ConformanceNote {
  rule: string;
  explanation: string;
}

export interface ProcessSpec {
  name: string;
  abbreviation: string;
  purpose: string;
  requirements: string[];
}

export interface Division {
  id: string;
  partNumber: string;
  name: string;
  documentType: "IS" | "TR";
  year: number;
  color: DivisionColor;
  gradient: string;
  icon: string;
  targetAudience: string;
  description: string;
  keyTopics: string[];
  profileId?: string;
  scope?: string;
  concepts?: ConceptEntry[];
  documentStructure?: string[];
  conformanceNotes?: ConformanceNote[];
  processSpecs?: ProcessSpec[];
  profileGroups?: { name: string; levels: string[]; description?: string }[];
}

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
