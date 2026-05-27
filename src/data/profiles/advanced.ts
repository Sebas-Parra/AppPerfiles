import type { Profile } from "@/types/iso29110";

export const advancedProfile: Profile = {
  id: "advanced",
  name: "Perfil Avanzado",
  level: 4,
  color: "orange",
  gradient: "from-orange-500 to-red-600",
  icon: "rocket",
  targetAudience:
    "VSEs con mayor madurez organizacional que requieren procesos altamente optimizados",
  description:
    "El Perfil Avanzado es el nivel más alto de la ISO 29110. Incorpora procesos de mejora continua, gestión del conocimiento organizacional, gestión de relaciones con proveedores y un enfoque en la optimización de procesos basada en datos cuantitativos.",
  characteristics: [
    "Mejora continua basada en métricas cuantitativas",
    "Gestión del conocimiento organizacional",
    "Gestión de relaciones con proveedores",
    "Procesos estadísticos de control de calidad",
    "Optimización de procesos organizacionales",
    "Gestión de la innovación tecnológica",
    "Alineación estratégica completa",
  ],
  processes: [
    {
      id: "pm-advanced",
      name: "Gestión Organizacional de Proyectos",
      abbreviation: "GOP",
      purpose:
        "Optimizar y mejorar continuamente los procesos organizacionales basándose en análisis cuantitativos del desempeño.",
      outcomes: [
        "Los procesos organizacionales son medidos y analizados cuantitativamente",
        "Las mejoras son identificadas, implementadas y validadas con datos",
        "El conocimiento organizacional es capturado y reutilizado",
        "La innovación tecnológica es gestionada activamente",
      ],
      activities: [
        {
          id: "pm-adv-a1",
          name: "Medición Cuantitativa del Proceso",
          description:
            "Medir y analizar el desempeño de los procesos con técnicas cuantitativas.",
          tasks: [
            {
              id: "pm-adv-t1",
              name: "Establecer métricas cuantitativas",
              description:
                "Definir métricas estadísticas para monitoreo continuo del proceso.",
              inputs: ["Objetivos organizacionales", "Historial de proyectos"],
              outputs: ["Framework de métricas cuantitativas"],
            },
            {
              id: "pm-adv-t2",
              name: "Analizar variabilidad del proceso",
              description:
                "Usar técnicas estadísticas para analizar la variabilidad y estabilidad del proceso.",
              inputs: ["Datos históricos de métricas"],
              outputs: ["Análisis estadístico", "Gráficos de control del proceso"],
            },
          ],
        },
        {
          id: "pm-adv-a2",
          name: "Mejora Continua de Procesos",
          description:
            "Identificar e implementar mejoras en los procesos organizacionales.",
          tasks: [
            {
              id: "pm-adv-t3",
              name: "Identificar oportunidades de mejora",
              description:
                "Analizar datos y retroalimentación para encontrar oportunidades de mejora.",
              inputs: ["Análisis estadístico", "Retrospectivas de proyectos"],
              outputs: ["Oportunidades de mejora priorizadas"],
            },
            {
              id: "pm-adv-t4",
              name: "Implementar y validar mejoras",
              description: "Implementar cambios en procesos y medir su impacto.",
              inputs: ["Plan de mejora", "Métricas baseline"],
              outputs: ["Proceso mejorado implementado", "Validación del impacto de mejoras"],
            },
          ],
        },
      ],
      roles: ["Director de Calidad", "Gerente de Proyectos", "Especialista en Procesos"],
      workProducts: [
        {
          id: "wp-pm-adv-1",
          name: "Framework de Métricas Cuantitativas",
          description:
            "Sistema completo de métricas estadísticas para medición del desempeño.",
        },
        {
          id: "wp-pm-adv-2",
          name: "Análisis Estadístico de Procesos",
          description:
            "Análisis cuantitativo del desempeño y variabilidad de los procesos.",
        },
        {
          id: "wp-pm-adv-3",
          name: "Plan de Mejora de Procesos",
          description: "Plan detallado para implementación de mejoras identificadas.",
        },
      ],
    },
    {
      id: "km-advanced",
      name: "Gestión del Conocimiento",
      abbreviation: "GC",
      purpose:
        "Capturar, organizar y reutilizar el conocimiento organizacional para mejorar el desempeño futuro.",
      outcomes: [
        "El conocimiento crítico es identificado y documentado",
        "Las lecciones aprendidas son accesibles para toda la organización",
        "El conocimiento es reutilizado eficientemente en nuevos proyectos",
        "La innovación es impulsada por el conocimiento organizacional",
      ],
      activities: [
        {
          id: "km-a1",
          name: "Captura del Conocimiento",
          description:
            "Identificar y documentar el conocimiento crítico de la organización.",
          tasks: [
            {
              id: "km-t1",
              name: "Identificar conocimiento crítico",
              description:
                "Determinar qué conocimiento es valioso para la organización y los proyectos.",
              inputs: ["Proyectos completados", "Experticias del equipo"],
              outputs: ["Inventario de conocimiento crítico"],
            },
            {
              id: "km-t2",
              name: "Documentar y estructurar conocimiento",
              description:
                "Capturar el conocimiento en un formato accesible y reutilizable.",
              inputs: ["Inventario de conocimiento"],
              outputs: ["Base de conocimiento organizacional"],
            },
          ],
        },
        {
          id: "km-a2",
          name: "Distribución y Reutilización",
          description:
            "Hacer accesible el conocimiento organizacional y promover su reutilización.",
          tasks: [
            {
              id: "km-t3",
              name: "Implementar sistema de gestión de conocimiento",
              description:
                "Establecer herramientas y procesos para compartir el conocimiento.",
              inputs: ["Base de conocimiento"],
              outputs: ["Sistema de gestión de conocimiento operativo"],
            },
            {
              id: "km-t4",
              name: "Promover cultura de aprendizaje",
              description:
                "Fomentar la contribución y uso del conocimiento organizacional.",
              inputs: ["Sistema de gestión de conocimiento"],
              outputs: ["Métricas de uso y contribución de conocimiento"],
            },
          ],
        },
      ],
      roles: ["Gestor de Conocimiento", "Líderes de Proyecto", "Todo el personal"],
      workProducts: [
        {
          id: "wp-km-1",
          name: "Base de Conocimiento Organizacional",
          description:
            "Repositorio centralizado del conocimiento crítico de la organización.",
        },
        {
          id: "wp-km-2",
          name: "Lecciones Aprendidas Organizacionales",
          description: "Compendio de lecciones aprendidas de todos los proyectos.",
        },
      ],
    },
    {
      id: "sm-advanced",
      name: "Gestión de Proveedores",
      abbreviation: "GP",
      purpose:
        "Gestionar las relaciones con proveedores y subcontratistas para asegurar la calidad de los productos y servicios recibidos.",
      outcomes: [
        "Los proveedores son seleccionados basándose en criterios objetivos",
        "Los acuerdos con proveedores son gestionados y monitoreados",
        "La calidad de los entregables de proveedores es verificada",
        "Las relaciones con proveedores son mantenidas y mejoradas",
      ],
      activities: [
        {
          id: "sm-a1",
          name: "Selección y Contratación de Proveedores",
          description: "Evaluar y seleccionar proveedores según criterios definidos.",
          tasks: [
            {
              id: "sm-t1",
              name: "Definir criterios de selección",
              description:
                "Establecer criterios objetivos para la evaluación y selección de proveedores.",
              inputs: ["Necesidades del proyecto", "Política de proveedores"],
              outputs: ["Criterios de selección de proveedores"],
            },
            {
              id: "sm-t2",
              name: "Evaluar y seleccionar proveedores",
              description:
                "Aplicar los criterios para evaluar y seleccionar al mejor proveedor.",
              inputs: ["Propuestas de proveedores", "Criterios de selección"],
              outputs: ["Proveedor seleccionado", "Acuerdo contractual"],
            },
          ],
        },
      ],
      roles: ["Gerente de Compras", "Gerente de Proyecto", "Dirección Ejecutiva"],
      workProducts: [
        {
          id: "wp-sm-1",
          name: "Acuerdos con Proveedores",
          description: "Contratos y acuerdos de nivel de servicio con proveedores.",
        },
        {
          id: "wp-sm-2",
          name: "Evaluaciones de Proveedores",
          description:
            "Resultados de la evaluación periódica del desempeño de proveedores.",
        },
      ],
    },
  ],
  roles: [
    {
      id: "r-adv-1",
      name: "Director de Calidad y Procesos",
      abbreviation: "DCP",
      description:
        "Responsable de la calidad organizacional y la mejora continua de procesos.",
      responsibilities: [
        "Definir y mantener el sistema de gestión de calidad",
        "Liderar iniciativas de mejora de procesos",
        "Analizar métricas cuantitativas del proceso",
        "Gestionar auditorías internas y externas",
        "Reportar el estado de calidad a la dirección",
      ],
    },
    {
      id: "r-adv-2",
      name: "Gestor de Conocimiento",
      abbreviation: "GC",
      description:
        "Responsable de la captura, organización y distribución del conocimiento organizacional.",
      responsibilities: [
        "Mantener la base de conocimiento organizacional",
        "Facilitar la captura de lecciones aprendidas",
        "Promover la cultura de gestión del conocimiento",
        "Medir el impacto de la gestión del conocimiento",
      ],
    },
    {
      id: "r-adv-3",
      name: "Gerente de Compras y Proveedores",
      abbreviation: "GCP",
      description:
        "Responsable de la gestión de relaciones con proveedores y subcontratistas.",
      responsibilities: [
        "Gestionar el proceso de selección de proveedores",
        "Negociar y gestionar contratos",
        "Monitorear el desempeño de proveedores",
        "Resolver conflictos con proveedores",
      ],
    },
    {
      id: "r-adv-4",
      name: "Especialista en Procesos",
      abbreviation: "EP",
      description: "Experto en análisis y mejora de procesos organizacionales.",
      responsibilities: [
        "Analizar y documentar procesos actuales",
        "Identificar cuellos de botella y oportunidades de mejora",
        "Diseñar procesos mejorados",
        "Capacitar al personal en nuevos procesos",
      ],
    },
  ],
  deploymentPackages: [
    "Gestión Organizacional de Proyectos (GOP)",
    "Gestión del Conocimiento (GC)",
    "Gestión de Proveedores (GP)",
    "Mejora Continua de Procesos (MCP)",
    "Medición Cuantitativa (MQ)",
    "Gestión de la Innovación (GI)",
  ],
};
