import type { Profile } from "@/types/iso29110";

export const intermediateProfile: Profile = {
  id: "intermediate",
  name: "Perfil Intermedio",
  level: 3,
  color: "purple",
  gradient: "from-purple-500 to-violet-600",
  icon: "🔷",
  targetAudience:
    "VSEs que gestionan múltiples proyectos y tienen mayor complejidad organizacional",
  description:
    "El Perfil Intermedio amplía el Perfil Básico añadiendo procesos de gestión de recursos humanos, gestión de procesos y gestión del portafolio de proyectos. Está orientado a organizaciones que han madurado sus prácticas básicas y necesitan gestionar múltiples proyectos simultáneamente.",
  characteristics: [
    "Gestión de múltiples proyectos simultáneos",
    "Procesos de gestión de recursos humanos",
    "Gestión del portafolio de proyectos",
    "Métricas y medición de procesos",
    "Gestión de riesgos avanzada",
    "Gestión de la calidad del proceso",
    "Coordinación entre proyectos",
  ],
  processes: [
    {
      id: "pm-intermediate",
      name: "Gestión de Proyectos (Avanzada)",
      abbreviation: "GP",
      purpose:
        "Gestionar múltiples proyectos de manera coordinada, optimizando el uso de recursos y asegurando la alineación con los objetivos organizacionales.",
      outcomes: [
        "Los proyectos son planificados y ejecutados de manera coordinada",
        "Los recursos son asignados eficientemente entre proyectos",
        "Los riesgos son identificados y gestionados proactivamente",
        "Las métricas del proyecto son recopiladas y analizadas",
        "Los procesos del proyecto son mejorados continuamente",
      ],
      activities: [
        {
          id: "pm-int-a1",
          name: "Planeación Avanzada del Proyecto",
          description:
            "Planificación detallada considerando dependencias entre proyectos y recursos compartidos.",
          tasks: [
            {
              id: "pm-int-t1",
              name: "Planificar con dependencias inter-proyecto",
              description:
                "Identificar y gestionar las dependencias entre múltiples proyectos activos.",
              inputs: ["Portafolio de proyectos", "Recursos disponibles"],
              outputs: ["Plan de proyecto integrado"],
            },
            {
              id: "pm-int-t2",
              name: "Gestionar riesgos avanzados",
              description:
                "Identificar, analizar y planificar respuestas a riesgos del proyecto.",
              inputs: ["Plan del proyecto"],
              outputs: ["Registro de riesgos", "Plan de respuesta a riesgos"],
            },
          ],
        },
        {
          id: "pm-int-a2",
          name: "Medición y Control",
          description:
            "Recopilar métricas y usar datos para mejorar el desempeño del proyecto.",
          tasks: [
            {
              id: "pm-int-t3",
              name: "Definir métricas del proyecto",
              description:
                "Establecer indicadores de desempeño para medir el progreso y calidad.",
              inputs: ["Plan del proyecto"],
              outputs: ["Plan de métricas"],
            },
            {
              id: "pm-int-t4",
              name: "Analizar datos de desempeño",
              description:
                "Analizar los datos recopilados para identificar tendencias y áreas de mejora.",
              inputs: ["Datos de métricas recopilados"],
              outputs: ["Análisis de desempeño", "Recomendaciones de mejora"],
            },
          ],
        },
      ],
      roles: ["Gerente de Proyectos", "Gerente de Recursos", "Cliente"],
      workProducts: [
        {
          id: "wp-pm-int-1",
          name: "Plan de Proyecto Integrado",
          description:
            "Plan que considera dependencias con otros proyectos y recursos compartidos.",
        },
        {
          id: "wp-pm-int-2",
          name: "Registro de Riesgos",
          description:
            "Registro detallado de riesgos identificados con su análisis y plan de respuesta.",
        },
        {
          id: "wp-pm-int-3",
          name: "Métricas del Proyecto",
          description: "Indicadores de desempeño recopilados y analizados del proyecto.",
        },
      ],
    },
    {
      id: "hr-intermediate",
      name: "Gestión de Recursos Humanos",
      abbreviation: "GRH",
      purpose:
        "Proveer a la organización los recursos humanos adecuados y mantener sus competencias en función de las necesidades del negocio y los proyectos.",
      outcomes: [
        "Las competencias requeridas son identificadas para cada rol",
        "Los planes de capacitación son definidos y ejecutados",
        "El desempeño del personal es evaluado periódicamente",
        "La satisfacción del equipo es monitoreada y gestionada",
      ],
      activities: [
        {
          id: "hr-a1",
          name: "Identificación de Competencias",
          description:
            "Identificar y documentar las competencias necesarias para los proyectos.",
          tasks: [
            {
              id: "hr-t1",
              name: "Definir perfiles de competencias",
              description:
                "Documentar las competencias técnicas y blandas requeridas para cada rol.",
              inputs: ["Necesidades de proyectos actuales y futuros"],
              outputs: ["Perfiles de competencias por rol"],
            },
          ],
        },
        {
          id: "hr-a2",
          name: "Capacitación y Desarrollo",
          description: "Planificar y ejecutar actividades de capacitación para el equipo.",
          tasks: [
            {
              id: "hr-t2",
              name: "Desarrollar plan de capacitación",
              description:
                "Crear un plan de capacitación basado en brechas de competencias identificadas.",
              inputs: ["Perfiles de competencias", "Evaluaciones de desempeño"],
              outputs: ["Plan de capacitación"],
            },
            {
              id: "hr-t3",
              name: "Ejecutar capacitaciones",
              description: "Llevar a cabo las actividades de capacitación planificadas.",
              inputs: ["Plan de capacitación"],
              outputs: ["Registros de capacitación completada"],
            },
          ],
        },
      ],
      roles: ["Gerente de RRHH", "Gerente de Proyecto", "Empleados"],
      workProducts: [
        {
          id: "wp-hr-1",
          name: "Perfiles de Competencias",
          description: "Documentación de habilidades y conocimientos requeridos por rol.",
        },
        {
          id: "wp-hr-2",
          name: "Plan de Capacitación",
          description: "Plan detallado de actividades de formación para el equipo.",
        },
        {
          id: "wp-hr-3",
          name: "Evaluaciones de Desempeño",
          description: "Registros de la evaluación periódica del desempeño del personal.",
        },
      ],
    },
    {
      id: "pm-portfolio",
      name: "Gestión del Portafolio de Proyectos",
      abbreviation: "GPP",
      purpose:
        "Seleccionar y gestionar el conjunto de proyectos de la organización para maximizar el valor del negocio.",
      outcomes: [
        "Los proyectos son priorizados según el valor para el negocio",
        "Los recursos son asignados de manera óptima entre proyectos",
        "El progreso del portafolio es monitoreado",
        "Las decisiones sobre proyectos están alineadas con la estrategia organizacional",
      ],
      activities: [
        {
          id: "pf-a1",
          name: "Selección y Priorización",
          description:
            "Evaluar y priorizar los proyectos del portafolio según criterios estratégicos.",
          tasks: [
            {
              id: "pf-t1",
              name: "Evaluar propuestas de proyectos",
              description:
                "Analizar las propuestas de nuevos proyectos según criterios de valor y viabilidad.",
              inputs: ["Propuestas de proyectos"],
              outputs: ["Evaluación de proyectos"],
            },
            {
              id: "pf-t2",
              name: "Priorizar el portafolio",
              description:
                "Ordenar los proyectos según su prioridad estratégica y disponibilidad de recursos.",
              inputs: ["Evaluaciones de proyectos", "Recursos disponibles"],
              outputs: ["Portafolio priorizado"],
            },
          ],
        },
      ],
      roles: ["Director de Portafolio", "Gerentes de Proyecto", "Dirección Ejecutiva"],
      workProducts: [
        {
          id: "wp-pf-1",
          name: "Portafolio de Proyectos",
          description: "Lista priorizada de proyectos activos y propuestos con su estado.",
        },
        {
          id: "wp-pf-2",
          name: "Criterios de Selección",
          description:
            "Criterios documentados para la selección y priorización de proyectos.",
        },
      ],
    },
  ],
  roles: [
    {
      id: "r-int-1",
      name: "Gerente de Proyectos",
      abbreviation: "GP",
      description: "Responsable de gestionar múltiples proyectos de manera coordinada.",
      responsibilities: [
        "Planificar y controlar múltiples proyectos",
        "Coordinar recursos entre proyectos",
        "Gestionar riesgos a nivel de portafolio",
        "Reportar el estado de proyectos a la dirección",
        "Identificar y gestionar interdependencias",
      ],
    },
    {
      id: "r-int-2",
      name: "Gerente de Recursos Humanos",
      abbreviation: "GRH",
      description: "Responsable de la gestión del talento y desarrollo del personal.",
      responsibilities: [
        "Gestionar la asignación de personal a proyectos",
        "Planificar y coordinar capacitaciones",
        "Evaluar el desempeño del personal",
        "Gestionar la retención del talento",
      ],
    },
    {
      id: "r-int-3",
      name: "Director de Portafolio",
      abbreviation: "DP",
      description: "Responsable de la gestión estratégica del portafolio de proyectos.",
      responsibilities: [
        "Alinear el portafolio con la estrategia organizacional",
        "Tomar decisiones de inversión en proyectos",
        "Monitorear el desempeño del portafolio",
        "Comunicar el estado del portafolio a stakeholders ejecutivos",
      ],
    },
    {
      id: "r-int-4",
      name: "Líder Técnico",
      abbreviation: "LT",
      description: "Responsable de la arquitectura técnica y dirección de ingeniería.",
      responsibilities: [
        "Definir estándares técnicos de la organización",
        "Asesorar en decisiones de arquitectura",
        "Liderar revisiones técnicas entre proyectos",
        "Promover buenas prácticas de ingeniería",
      ],
    },
  ],
  deploymentPackages: [
    "Gestión de Proyecto (GP) avanzada",
    "Gestión de Recursos Humanos (GRH)",
    "Gestión del Portafolio (GPP)",
    "Métricas y Medición (MM)",
    "Gestión de Riesgos (GR)",
  ],
};
