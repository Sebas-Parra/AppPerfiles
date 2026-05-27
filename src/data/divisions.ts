import type { Division } from "@/types/iso29110";

export const divisions: Division[] = [
  {
    id: "parte-1",
    partNumber: "1",
    name: "Visión General",
    documentType: "TR",
    year: 2016,
    color: "slate",
    gradient: "from-slate-500 to-slate-700",
    icon: "clipboard-list",
    targetAudience:
      "VSEs y sus clientes, evaluadores, productores de normas, proveedores de herramientas y metodologías.",
    description:
      "Define los términos comunes de la serie ISO/IEC 29110. Presenta conceptos de procesos, ciclo de vida y normalización, así como la taxonomía (catálogo) de perfiles para Pequeñas Organizaciones. Aclara las características y necesidades de una VSE.",
    keyTopics: [
      "Conceptos de Pequeña Organización (VSE)",
      "Taxonomía de grupos de perfiles",
      "Grupo Genérico de Ingeniería de Software",
      "Grupo Genérico de Ingeniería de Sistemas",
      "Perfiles de Gestión Organizacional",
      "Perfiles de Prestación de Servicios",
      "Conceptos del ciclo de vida del software",
      "Mejora y evaluación de procesos",
    ],
    scope:
      "Este Informe Técnico es aplicable a VSEs (organizaciones con hasta 25 personas) que desarrollan software. No prescribe modelos de ciclo de vida concretos, sino que proporciona el vocabulario y la estructura conceptual sobre la que se construye toda la serie ISO/IEC 29110.",
    documentStructure: [
      "Sección 1 — Alcance",
      "Sección 2 — Referencias normativas",
      "Sección 3 — Términos y definiciones",
      "Sección 4 — Símbolos y términos abreviados",
      "Sección 5 — Características y necesidades de las VSEs",
      "Sección 6 — Marco conceptual de la serie ISO/IEC 29110",
      "Sección 7 — Componentes de los documentos de la serie",
      "Sección 8 — Relaciones con otras normas",
      "Sección 9 — Taxonomía y catálogo de perfiles",
    ],
    concepts: [
      {
        term: "VSE (Very Small Entity)",
        definition:
          "Empresa, organización, departamento o proyecto con hasta 25 personas. Incluye microempresas, pequeñas empresas, equipos de proyectos y departamentos de TI.",
      },
      {
        term: "Perfil",
        definition:
          "Conjunto de uno o más estándares base y/o normas internacionales, y/o partes de estándares base, necesarios para satisfacer una necesidad particular.",
      },
      {
        term: "Grupo de perfiles",
        definition:
          "Conjunto de perfiles graduados (Entrada, Básico, Intermedio, Avanzado) que comparten una misma naturaleza de VSE o tipo de proyecto.",
      },
      {
        term: "Proceso",
        definition:
          "Conjunto de actividades interrelacionadas que transforman entradas en salidas para lograr un propósito.",
      },
      {
        term: "Paquete de despliegue (DP)",
        definition:
          "Artefacto desarrollado para facilitar la implementación de un conjunto de prácticas dentro de una VSE, incluye guías, plantillas y ejemplos.",
      },
      {
        term: "Mejora basada en autonomía",
        definition:
          "Capacidad de una VSE para identificar, planificar e implementar mejoras de proceso de forma independiente, sin necesidad de un evaluador externo.",
      },
    ],
    profileGroups: [
      {
        name: "Grupo Genérico de Ingeniería de Software",
        levels: ["Entrada", "Básico", "Intermedio", "Avanzado"],
        description:
          "El más utilizado. Cubre el desarrollo de productos de software por VSEs. El nivel Entrada aplica a proyectos cortos (< 6 meses-persona) y el nivel Básico a proyectos de una sola aplicación con un equipo único. Los niveles Intermedio y Avanzado cubren proyectos más complejos con múltiples equipos, subcontratación y gestión de riesgos avanzada.",
      },
      {
        name: "Grupo Genérico de Ingeniería de Sistemas",
        levels: ["Entrada", "Básico", "Intermedio", "Avanzado"],
        description:
          "Similar al grupo de software pero aplicado a sistemas que integran hardware, software y otros elementos. Basado en ISO/IEC 15288. Destinado a VSEs que desarrollan productos de ingeniería de sistemas (dispositivos embebidos, sistemas mecatrónicos, etc.).",
      },
      {
        name: "Gestión Organizacional",
        levels: ["Básico", "Avanzado"],
        description:
          "Cubre los procesos de gestión interna de la organización VSE: mejora de procesos, gestión de recursos humanos, gestión de activos reutilizables. Complementa los grupos genéricos cuando la VSE quiere madurar como organización, más allá del proyecto individual.",
      },
      {
        name: "Prestación de Servicios",
        levels: ["Entrada", "Básico"],
        description:
          "Para VSEs que ofrecen servicios de TI (soporte, mantenimiento, operaciones) en lugar de desarrollar productos. El nivel Entrada cubre operaciones de servicio básicas y el nivel Básico añade gestión de acuerdos de servicio y reportes de desempeño.",
      },
    ],
  },
  {
    id: "parte-2-1",
    partNumber: "2-1",
    name: "Marco de Referencia y Taxonomía",
    documentType: "IS",
    year: 2015,
    color: "blue",
    gradient: "from-blue-500 to-blue-700",
    icon: "folder-tree",
    targetAudience:
      "Productores de perfiles, proveedores de herramientas y metodologías. No está destinada directamente a las VSEs.",
    description:
      "Introduce los conceptos de perfiles estandarizados de ingeniería de software y sistemas para VSEs. Establece la lógica detrás de la definición y aplicación de perfiles, especificando los elementos comunes a todos los perfiles: estructura, requisitos, conformidad y evaluación.",
    keyTopics: [
      "Conformidad con perfiles estandarizados",
      "Adaptación y exclusiones de perfiles",
      "Preparación de perfiles de software y sistemas",
      "Taxonomía de perfiles de VSEs",
      "Perfiles graduados dentro de un grupo",
      "Modelo de Referencia de Proceso (PRM)",
      "Modelo de Evaluación de Proceso (PAM)",
      "Guías para la especificación de perfiles VSE",
    ],
    scope:
      "Esta Norma Internacional define el marco de trabajo y la taxonomía para la serie ISO/IEC 29110. Está destinada principalmente a quienes producen o adaptan perfiles, no a las VSEs que los aplican. Sin embargo, comprenderla permite entender por qué los perfiles tienen la estructura que tienen.",
    documentStructure: [
      "Sección 1 — Alcance",
      "Sección 2 — Referencias normativas",
      "Sección 3 — Términos y definiciones",
      "Sección 4 — Conformidad",
      "Sección 5 — Marco conceptual de perfiles VSE",
      "Sección 6 — Taxonomía de perfiles VSE",
      "Sección 7 — Elementos de los perfiles VSE",
      "Sección 8 — Guía para la especificación de perfiles VSE",
      "Anexo A — Modelo de Referencia de Proceso (PRM)",
      "Anexo B — Modelo de Evaluación de Proceso (PAM)",
    ],
    conformanceNotes: [
      {
        rule: "No se permite adaptación (tailoring) de los perfiles.",
        explanation:
          "A diferencia de ISO/IEC 12207 completa (que permite adaptar sus procesos), los perfiles VSE ya son un subconjunto cuidadosamente seleccionado de la norma base. Si una organización pudiera seguir reduciendo los requisitos, el perfil perdería su coherencia y comparabilidad entre organizaciones. Por eso la norma es explícita: o se aplica el perfil completo, o no se puede declarar conformidad con él.",
      },
      {
        rule: "No existen niveles de conformidad parcial.",
        explanation:
          "La conformidad con un perfil VSE es binaria: o se cumplen todos los requisitos (conformidad total) o no se está conforme. Esto simplifica la evaluación y la comunicación con clientes: decir 'somos conformes con el Perfil Básico' tiene un significado exacto y verificable. No existe una conformidad del 80% o 'casi conforme'.",
      },
      {
        rule: "Se permiten extensiones que añadan elementos nuevos.",
        explanation:
          "Una organización puede agregar actividades, roles o productos de trabajo adicionales que vayan más allá del perfil (por ejemplo, prácticas de seguridad o accesibilidad). Sin embargo, estas extensiones no pueden cambiar el nombre, propósito ni requisitos de los elementos ya definidos en el perfil. El objetivo es que las extensiones coexistan sin invalidar la conformidad.",
      },
      {
        rule: "Los requisitos obligatorios de las normas base permanecen obligatorios.",
        explanation:
          "Cuando una tarea del perfil deriva de ISO/IEC 12207 y en esa norma base era obligatoria (SHALL), sigue siendo obligatoria dentro del perfil. La creación de un perfil VSE no puede relajar requisitos que la norma padre marcó como mandatorios. Esto garantiza que los perfiles no comprometan la integridad técnica de los estándares de los que se derivan.",
      },
      {
        rule: "Una VSE puede declarar conformidad con más de un perfil simultáneamente.",
        explanation:
          "Si una organización cumple todos los requisitos del Perfil de Entrada Y todos los del Perfil Básico, puede declarar conformidad con ambos. Esto es posible porque el Perfil Básico es un superconjunto del de Entrada: cumplir el Básico implica cumplir el de Entrada. Esta propiedad de los perfiles graduados permite a las organizaciones comunicar exactamente su nivel de madurez.",
      },
    ],
    concepts: [
      {
        term: "Norma base (Base Standard)",
        definition:
          "Estándar internacional completo del cual un perfil VSE extrae un subconjunto de requisitos aplicables. Ejemplos: ISO/IEC 12207 (software), ISO/IEC 15288 (sistemas).",
      },
      {
        term: "Perfil Básico",
        definition:
          "Perfil orientado a VSEs que desarrollan un producto de software de una sola aplicación con un solo equipo, sin factores situacionales especiales.",
      },
      {
        term: "Perfil de Entrada",
        definition:
          "Perfil para VSEs en etapa inicial (hasta 3 años), con proyectos cortos (< 6 meses-persona) y equipos muy reducidos.",
      },
      {
        term: "Modelo de Referencia de Proceso (PRM)",
        definition:
          "Modelo que describe los procesos incluidos en el perfil y sus resultados esperados (outcomes), sin detallar cómo implementarlos.",
      },
      {
        term: "Modelo de Evaluación de Proceso (PAM)",
        definition:
          "Modelo que define los indicadores utilizados para evaluar si un proceso se realiza de acuerdo con el perfil, basado en el PRM.",
      },
      {
        term: "Indicador de evaluación",
        definition:
          "Evidencia objetiva (práctica base, producto de trabajo) que un evaluador usa para determinar el nivel de implementación de un proceso.",
      },
    ],
  },
  {
    id: "parte-3-2",
    partNumber: "3-2",
    name: "Certificación y Evaluación",
    documentType: "IS",
    year: 2018,
    color: "purple",
    gradient: "from-purple-500 to-purple-700",
    icon: "trophy",
    targetAudience:
      "VSEs y sus clientes, evaluadores, organismos de certificación y acreditación.",
    description:
      "Define los esquemas de certificación, las directrices de evaluación y los requisitos de cumplimiento para la evaluación de la capacidad del proceso. Contiene información útil para desarrolladores de métodos y herramientas de certificación y evaluación.",
    keyTopics: [
      "Esquemas de certificación de procesos",
      "Evaluación de capacidad de proceso",
      "Evaluaciones de conformidad",
      "Autoevaluación para mejora de procesos",
      "Requisitos mínimos por perfil",
      "Marco para la mejora autónoma (automejora)",
      "Guía para auditores y organismos de acreditación",
      "Indicadores de evaluación",
    ],
    scope:
      "Esta Norma Internacional define el esquema de certificación de tercera parte para los Procesos de Ingeniería de Software y Sistemas (SEP). La certificación aplica al proceso, no al producto ni al sistema de gestión de la organización. Está diseñada para que VSEs puedan demostrar conformidad ante clientes y partes interesadas.",
    documentStructure: [
      "Sección 1 — Alcance",
      "Sección 2 — Referencias normativas",
      "Sección 3 — Términos y definiciones",
      "Sección 4 — Símbolos y abreviaciones",
      "Sección 5 — Requisitos generales del esquema",
      "Sección 6 — Requisitos estructurales del organismo de certificación",
      "Sección 7 — Requisitos de recursos (personal competente)",
      "Sección 8 — Requisitos de proceso (solicitud, auditoría, certificación inicial, vigilancia)",
      "Sección 9 — Requisitos del sistema de gestión del organismo",
    ],
    conformanceNotes: [
      {
        rule: "La certificación es de proceso (SEP), NO de producto ni de sistema de gestión.",
        explanation:
          "Esto es una distinción crítica: ISO/IEC 29110-3-2 certifica que los procesos de ingeniería de la organización cumplen el perfil, no que un producto específico sea correcto ni que el sistema de gestión de la empresa sea bueno. Es análogo a certificar que una cocina sigue procedimientos de higiene, no que cada plato esté delicioso. Esto significa que la certificación dice 'esta VSE trabaja de forma ordenada', lo cual da confianza al cliente sobre la calidad esperada del software entregado.",
      },
      {
        rule: "La auditoría inicial incluye revisión documental, plan de evaluación, selección del equipo auditor y auditoría en sitio.",
        explanation:
          "El proceso completo tiene cuatro etapas: (1) la VSE envía una solicitud con documentación de sus procesos; (2) el organismo elabora un plan de evaluación con alcance y cronograma; (3) se forma el equipo auditor con las competencias adecuadas para el perfil evaluado; (4) se realiza la auditoría presencial o remota en la que se revisan evidencias reales (registros, productos de trabajo, entrevistas). Solo si todas las etapas son satisfactorias se emite el certificado.",
      },
      {
        rule: "El organismo de certificación debe ser independiente de la VSE auditada.",
        explanation:
          "La independencia es la base de la credibilidad de cualquier certificación de tercera parte. Si el auditor tuviera interés financiero o relación laboral con la VSE auditada, el resultado podría estar sesgado. La norma establece requisitos concretos: el organismo no puede ser cliente, proveedor ni socio de la VSE, y los auditores individuales deben declarar y resolver conflictos de interés antes de participar en una auditoría.",
      },
      {
        rule: "Las auditorías de vigilancia se realizan periódicamente para mantener la certificación.",
        explanation:
          "Una certificación no es permanente. Una vez obtenida, el organismo realiza auditorías de vigilancia (generalmente anuales) para verificar que la VSE mantiene los procesos conformes. Si en una vigilancia se detectan no-conformidades graves, la certificación puede suspenderse o retirarse. Esto garantiza que el certificado refleje el estado actual de la organización, no solo el del momento en que se auditó.",
      },
      {
        rule: "La VSE puede realizar autoevaluaciones internas sin necesidad de un tercero.",
        explanation:
          "La autoevaluación es una herramienta de mejora continua, no de certificación. Usando los indicadores del PAM (Modelo de Evaluación de Proceso) y los paquetes de despliegue, la propia VSE puede medir sus brechas respecto al perfil. Esto es especialmente útil para prepararse antes de solicitar la certificación formal, o para identificar áreas de mejora sin el costo de una auditoría externa. La norma denomina este enfoque 'mejora basada en autonomía'.",
      },
    ],
    concepts: [
      {
        term: "SEP (Systems and Software Engineering Process)",
        definition:
          "Proceso de Ingeniería de Software y Sistemas que es objeto de la certificación. No se certifica el producto ni la organización como un todo.",
      },
      {
        term: "Organismo de certificación",
        definition:
          "Entidad de tercera parte acreditada que realiza las auditorías y emite certificados de conformidad con el perfil ISO/IEC 29110.",
      },
      {
        term: "Auditor líder",
        definition:
          "Persona calificada que dirige el equipo auditor. Debe poseer competencia técnica en SEP y habilidades interpersonales: ética, diplomacia, objetividad, capacidad de decisión.",
      },
      {
        term: "Autoevaluación",
        definition:
          "Evaluación realizada por la propia VSE para identificar brechas respecto al perfil y planificar mejoras, sin implicar certificación formal.",
      },
      {
        term: "Mejora basada en autonomía (Autonomy-Based Improvement)",
        definition:
          "Capacidad de una VSE de mejorar sus procesos de forma independiente utilizando los indicadores del PAM y los paquetes de despliegue, sin depender de un evaluador externo.",
      },
      {
        term: "Plan de evaluación",
        definition:
          "Documento elaborado por el organismo de certificación que describe el alcance, criterios, métodos y cronograma de la auditoría.",
      },
    ],
  },
  {
    id: "parte-4-1",
    partNumber: "4-1",
    name: "Especificaciones de Perfil: Grupo Genérico",
    documentType: "IS",
    year: 2018,
    color: "orange",
    gradient: "from-orange-500 to-orange-700",
    icon: "ruler",
    targetAudience:
      "VSEs, clientes, productores de normas, proveedores de herramientas y metodología.",
    description:
      "Contiene las especificaciones del Grupo de Perfiles Genéricos. Aplicable a VSEs que no desarrollan productos de software críticos. Define los requisitos que debe cumplir una VSE para declarar conformidad con el Perfil Básico.",
    keyTopics: [
      "Especificaciones del Perfil Básico",
      "Condiciones mínimas para usar el perfil",
      "Especificación del proceso de Gestión de Proyectos (PM)",
      "Especificación del proceso de Implementación de Software (SI)",
      "Referencias de documentos base (ISO/IEC/IEEE 12207)",
      "Modelo de Referencia de Proceso (PRM) del Perfil Básico",
      "Requisitos de conformidad con normas base",
      "Trazabilidad de tareas con ISO/IEC 12207",
    ],
    scope:
      "Esta Norma Internacional especifica los requisitos formales del Perfil Básico del Grupo Genérico. Una VSE que cumpla estos requisitos puede declarar conformidad. Los requisitos se derivan de ISO/IEC 12207:2008 y están expresados en términos de tareas, productos de trabajo y roles.",
    documentStructure: [
      "Sección 1 — Alcance",
      "Sección 2 — Referencias normativas",
      "Sección 3 — Términos y definiciones",
      "Sección 4 — Conformidad",
      "Sección 5 — Marco del perfil",
      "Sección 6 — Condiciones de uso del Perfil Básico",
      "Sección 7 — Especificaciones de los procesos PM y SI",
      "Anexo A — Trazabilidad con ISO/IEC 12207",
      "Anexo B — Modelo de Referencia de Proceso (PRM)",
    ],
    conformanceNotes: [
      {
        rule: "Para declarar conformidad se deben cumplir TODOS los requisitos de las secciones 6 y 7.",
        explanation:
          "La sección 6 define las condiciones de uso del perfil (requisitos organizacionales previos) y la sección 7 define los requisitos específicos de los procesos PM y SI (tareas, productos de trabajo, roles). Ningún requisito es opcional: si una VSE omite aunque sea una tarea obligatoria, no puede declarar conformidad con el Perfil Básico. Esta exigencia garantiza que el certificado tenga un significado uniforme para todos los que lo obtengan.",
      },
      {
        rule: "Condición previa: debe existir un contrato o acuerdo firmado con el cliente.",
        explanation:
          "El perfil asume que la relación VSE–cliente está formalizada antes de iniciar el proyecto. El contrato o acuerdo es el documento que establece el alcance, los entregables, los plazos y las condiciones de pago. Sin él, no hay base clara para planificar ni para medir el cumplimiento. En la práctica, esto significa que el Perfil Básico no aplica a proyectos internos informales o exploratorios sin ningún tipo de acuerdo formal.",
      },
      {
        rule: "El análisis de factibilidad debe haberse realizado con resultado positivo.",
        explanation:
          "Antes de comprometerse a ejecutar el proyecto bajo el perfil, la VSE debe haber evaluado si cuenta con los recursos técnicos, humanos y financieros para completarlo. Si el análisis de factibilidad concluye que el proyecto no es viable, el perfil no se aplica porque no habría base razonable para planificar. Este requisito protege tanto a la VSE (de asumir compromisos imposibles) como al cliente (de recibir promesas incumplibles).",
      },
      {
        rule: "El equipo de proyecto debe estar asignado y los recursos disponibles.",
        explanation:
          "El perfil no contempla situaciones donde el equipo está 'por definirse' o los recursos 'pendientes de aprobación'. Al inicio del proyecto deben estar identificadas las personas que jugarán los roles de Gerente de Proyecto (PM) y Desarrollador (DEV), y deben estar disponibles las herramientas, licencias e infraestructura necesarias. Esto es una condición de entrada, no algo que se resuelve durante el proyecto.",
      },
      {
        rule: "No aplica a productos de software críticos (seguridad, médico, aeroespacial, etc.).",
        explanation:
          "El Perfil Básico fue diseñado para software de negocios convencional: aplicaciones de gestión, sitios web, sistemas de información, etc. Los sistemas cuyo fallo puede causar lesiones, muertes o daños graves (software médico, control de vuelo, plantas nucleares, vehículos autónomos) requieren normas con requisitos de confiabilidad mucho más estrictos, como IEC 62304, DO-178C o ISO 26262. Aplicar el Perfil Básico a software crítico sería insuficiente e imprudente.",
      },
    ],
    processSpecs: [
      {
        name: "Gestión de Proyectos",
        abbreviation: "PM",
        purpose:
          "Establecer y llevar a cabo las tareas del proyecto de manera sistemática para que el software sea entregado en tiempo, dentro del presupuesto y satisfaciendo los requisitos del cliente.",
        requirements: [
          "Definir el alcance del proyecto y los entregables acordados con el cliente",
          "Identificar los recursos necesarios (personas, herramientas, infraestructura)",
          "Realizar el análisis de factibilidad técnica y de recursos",
          "Elaborar el plan de proyecto con cronograma y estimaciones de esfuerzo",
          "Identificar y registrar los riesgos del proyecto",
          "Definir la estrategia de control de versiones y los ítems de configuración",
          "Monitorear el avance del proyecto contra el plan (progreso, calidad, riesgos)",
          "Identificar y corregir desviaciones del plan cuando ocurran",
          "Archivar los productos de trabajo al cierre del proyecto",
        ],
      },
      {
        name: "Implementación de Software",
        abbreviation: "SI",
        purpose:
          "Realizar las actividades de análisis, diseño, construcción, integración y pruebas del software, de acuerdo con los requisitos especificados.",
        requirements: [
          "Obtener y documentar los requisitos del cliente (funcionales y no funcionales)",
          "Elaborar la especificación de requisitos del software acordada con el cliente",
          "Producir el diseño arquitectónico y detallado del software",
          "Construir los componentes de software a partir del diseño",
          "Verificar cada componente contra su diseño (pruebas unitarias)",
          "Integrar los componentes y realizar pruebas de integración",
          "Validar el software con el cliente contra los requisitos originales",
          "Documentar los resultados de verificación y validación",
          "Entregar el software al cliente con la documentación de usuario requerida",
        ],
      },
    ],
  },
  {
    id: "parte-5-1-1",
    partNumber: "5-1-1",
    name: "Guía de Gestión e Ingeniería: Perfil de Entrada",
    documentType: "IS",
    year: 2025,
    color: "green",
    gradient: "from-green-500 to-green-700",
    icon: "sprout",
    targetAudience: "VSEs y sus clientes.",
    description:
      "Guía de implementación para el Perfil de Entrada del Grupo de Perfiles Genéricos. Dirigida a VSEs con hasta 3 años de funcionamiento inicial y proyectos con duración inferior a 6 meses-persona. Define dos procesos: Gestión de Proyectos (PM) e Implementación de Software (SI).",
    keyTopics: [
      "Proceso de Gestión de Proyectos (PM) — 3 actividades",
      "Proceso de Implementación de Software (SI) — 4 actividades",
      "Roles: Gerente de Proyecto (GP), Desarrollador (DES), Cliente (CL)",
      "Productos de trabajo de entrada y salida",
      "Paquetes de despliegue PM-EN y SI-EN",
      "Tareas de planificación, ejecución y cierre del proyecto",
      "Verificación, validación y entrega de software",
      "Aplicable a proyectos cortos y equipos pequeños",
    ],
    profileId: "entry",
  },
  {
    id: "parte-5-1-2",
    partNumber: "5-1-2",
    name: "Guía de Gestión e Ingeniería: Perfil Básico",
    documentType: "IS",
    year: 2025,
    color: "teal",
    gradient: "from-teal-500 to-teal-700",
    icon: "book-open",
    targetAudience: "VSEs y sus clientes.",
    description:
      "Guía de implementación para el Perfil Básico del Grupo de Perfiles Genéricos. Describe el desarrollo de software de una sola aplicación por un solo equipo de trabajo sin factores situacionales especiales. Define los procesos PM y SI con mayor profundidad que el Perfil de Entrada.",
    keyTopics: [
      "Proceso de Gestión de Proyectos (PM) — actividades ampliadas",
      "Proceso de Implementación de Software (SI) — actividades ampliadas",
      "Roles: Gerente de Proyecto (PM), Desarrollador (DEV), Cliente (CUS)",
      "Productos de trabajo detallados",
      "Paquetes de despliegue PM-BAS y SI-BAS",
      "Gestión de configuración y control de cambios",
      "Revisiones técnicas y verificación",
      "Proyecto de producto único con equipo único",
    ],
    profileId: "basic",
  },
];
