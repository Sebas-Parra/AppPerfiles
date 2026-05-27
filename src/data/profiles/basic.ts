import type { Profile } from "@/types/iso29110";

export const basicProfile: Profile = {
  id: "basic",
  name: "Perfil Básico",
  level: 2,
  color: "blue",
  gradient: "from-blue-500 to-cyan-600",
  icon: "📘",
  targetAudience: "VSEs con hasta 25 personas que desarrollan software de complejidad media",
  description:
    "El Perfil Básico es el más utilizado y referenciado de la ISO 29110. Define dos procesos principales: Gestión de Proyectos (GP) e Implementación de Software (IS). Está orientado a pequeñas empresas que necesitan establecer prácticas básicas de desarrollo y gestión.",
  characteristics: [
    "Equipos de 2 a 25 personas",
    "Proyectos de complejidad media",
    "Dos procesos principales: GP e IS",
    "Gestión formal de proyectos",
    "Control de versiones básico",
    "Revisiones y verificaciones estructuradas",
    "Gestión de configuración básica",
  ],
  processes: [
    {
      id: "pm-basic",
      name: "Gestión de Proyectos",
      abbreviation: "GP",
      purpose:
        "Establecer y llevar a cabo de manera sistemática las tareas de implementación de software que permitan cumplir con los objetivos del proyecto en calidad, tiempo y costo.",
      outcomes: [
        "El proyecto es ejecutado según un Plan de Proyecto documentado",
        "El avance del proyecto es monitoreado y se toman acciones correctivas cuando es necesario",
        "Los cambios al proyecto son gestionados y controlados",
        "La finalización del proyecto es verificada y documentada",
        "Los clientes y partes interesadas son mantenidos informados del progreso",
      ],
      activities: [
        {
          id: "pm-a1",
          name: "Planeación del Proyecto",
          description: "Establecer el Plan de Proyecto para guiar la ejecución del software.",
          tasks: [
            {
              id: "pm-t1",
              name: "Revisar la declaración de trabajo",
              description:
                "Revisar y analizar el documento de declaración de trabajo recibido del cliente.",
              inputs: ["Declaración de Trabajo"],
              outputs: ["Declaración de Trabajo revisada"],
            },
            {
              id: "pm-t2",
              name: "Definir tareas y duración",
              description:
                "Identificar las tareas del proyecto, estimar su duración y establecer el cronograma.",
              inputs: ["Declaración de Trabajo revisada"],
              outputs: ["Lista de tareas", "Cronograma preliminar"],
            },
            {
              id: "pm-t3",
              name: "Estimar recursos y costos",
              description:
                "Determinar los recursos humanos, herramientas y costos necesarios para el proyecto.",
              inputs: ["Lista de tareas"],
              outputs: ["Estimación de recursos", "Estimación de costos"],
            },
            {
              id: "pm-t4",
              name: "Definir composición del equipo",
              description: "Identificar los roles y asignar personas a los roles del proyecto.",
              inputs: ["Estimación de recursos"],
              outputs: ["Composición del equipo del proyecto"],
            },
            {
              id: "pm-t5",
              name: "Documentar el plan de proyecto",
              description:
                "Elaborar el Plan de Proyecto completo integrando todos los elementos planificados.",
              inputs: ["Cronograma", "Estimación de costos", "Composición del equipo"],
              outputs: ["Plan de Proyecto"],
            },
            {
              id: "pm-t6",
              name: "Obtener aprobación del plan",
              description: "Presentar el Plan de Proyecto al cliente y obtener su aprobación.",
              inputs: ["Plan de Proyecto"],
              outputs: ["Plan de Proyecto aprobado"],
            },
          ],
        },
        {
          id: "pm-a2",
          name: "Ejecución del Plan de Proyecto",
          description:
            "Ejecutar las actividades del proyecto de acuerdo con el Plan de Proyecto.",
          tasks: [
            {
              id: "pm-t7",
              name: "Ejecutar el plan de proyecto",
              description:
                "Llevar a cabo las actividades planificadas de acuerdo con el cronograma.",
              inputs: ["Plan de Proyecto aprobado"],
              outputs: ["Registros de avance"],
            },
            {
              id: "pm-t8",
              name: "Realizar reuniones de equipo",
              description:
                "Celebrar reuniones periódicas con el equipo para revisar el avance y resolver problemas.",
              inputs: ["Registros de avance"],
              outputs: ["Minutas de reunión"],
            },
            {
              id: "pm-t9",
              name: "Proporcionar productos de trabajo",
              description:
                "Asegurar que el equipo tiene acceso a los recursos y herramientas necesarios.",
              inputs: ["Plan de Proyecto"],
              outputs: ["Recursos asignados"],
            },
          ],
        },
        {
          id: "pm-a3",
          name: "Evaluación y Control del Proyecto",
          description:
            "Monitorear el avance del proyecto y tomar acciones correctivas cuando sea necesario.",
          tasks: [
            {
              id: "pm-t10",
              name: "Revisar y evaluar el avance del proyecto",
              description:
                "Monitorear el avance real versus el planificado en términos de tiempo, costo y calidad.",
              inputs: ["Plan de Proyecto", "Registros de avance"],
              outputs: ["Reporte de avance"],
            },
            {
              id: "pm-t11",
              name: "Gestionar solicitudes de cambio",
              description: "Evaluar, aprobar y gestionar los cambios solicitados al proyecto.",
              inputs: ["Solicitudes de cambio"],
              outputs: ["Solicitudes de cambio procesadas", "Plan actualizado"],
            },
            {
              id: "pm-t12",
              name: "Identificar y registrar problemas",
              description:
                "Identificar, documentar y hacer seguimiento a los problemas del proyecto.",
              inputs: ["Reportes de avance"],
              outputs: ["Registro de problemas"],
            },
          ],
        },
        {
          id: "pm-a4",
          name: "Cierre del Proyecto",
          description:
            "Realizar las actividades de cierre del proyecto y documentar las lecciones aprendidas.",
          tasks: [
            {
              id: "pm-t13",
              name: "Verificar entregables",
              description:
                "Verificar que todos los entregables del proyecto han sido completados y aceptados.",
              inputs: ["Lista de entregables", "Actas de aceptación"],
              outputs: ["Verificación de entregables completa"],
            },
            {
              id: "pm-t14",
              name: "Documentar lecciones aprendidas",
              description:
                "Registrar las lecciones aprendidas durante el proyecto para futura referencia.",
              inputs: ["Registros del proyecto"],
              outputs: ["Registro de lecciones aprendidas"],
            },
            {
              id: "pm-t15",
              name: "Archivar productos del proyecto",
              description:
                "Archivar todos los productos de trabajo del proyecto en el repositorio.",
              inputs: ["Todos los productos de trabajo"],
              outputs: ["Repositorio del proyecto archivado"],
            },
          ],
        },
      ],
      roles: ["Gerente de Proyecto", "Cliente"],
      workProducts: [
        {
          id: "wp-pm-1",
          name: "Plan de Proyecto",
          description:
            "Documento que describe el alcance, cronograma, recursos, costos y riesgos del proyecto.",
        },
        {
          id: "wp-pm-2",
          name: "Registro de Avance",
          description: "Registro del avance real del proyecto versus el planificado.",
        },
        {
          id: "wp-pm-3",
          name: "Minutas de Reunión",
          description:
            "Documentación de los acuerdos y decisiones tomadas en las reuniones del proyecto.",
        },
        {
          id: "wp-pm-4",
          name: "Registro de Cambios",
          description: "Registro de las solicitudes de cambio y su estado de resolución.",
        },
        {
          id: "wp-pm-5",
          name: "Registro de Problemas",
          description: "Registro de los problemas identificados y su estado de resolución.",
        },
        {
          id: "wp-pm-6",
          name: "Lecciones Aprendidas",
          description:
            "Documentación de las lecciones aprendidas durante la ejecución del proyecto.",
        },
      ],
    },
    {
      id: "si-basic",
      name: "Implementación de Software",
      abbreviation: "IS",
      purpose:
        "Realizar las tareas de análisis, diseño, construcción, integración y pruebas de productos de software nuevos o modificados de acuerdo con los requisitos especificados.",
      outcomes: [
        "Los requisitos del cliente son analizados y acordados",
        "El software es diseñado de acuerdo a los requisitos",
        "El software es construido según el diseño",
        "Los componentes son integrados y verificados",
        "El software es verificado contra los requisitos",
        "El software es entregado al cliente",
      ],
      activities: [
        {
          id: "si-a1",
          name: "Inicio de la Implementación de Software",
          description:
            "Establecer el ambiente de trabajo y revisar los requisitos iniciales.",
          tasks: [
            {
              id: "si-t1",
              name: "Establecer el ambiente de trabajo",
              description:
                "Configurar las herramientas, entornos de desarrollo y repositorios necesarios.",
              inputs: ["Plan de Proyecto"],
              outputs: ["Ambiente de trabajo configurado"],
            },
            {
              id: "si-t2",
              name: "Revisar el Plan de Proyecto",
              description:
                "El equipo de implementación revisa el Plan de Proyecto para comprender el alcance.",
              inputs: ["Plan de Proyecto"],
              outputs: ["Comprensión del equipo del alcance"],
            },
          ],
        },
        {
          id: "si-a2",
          name: "Análisis de Requisitos de Software",
          description:
            "Analizar y documentar los requisitos funcionales y no funcionales del software.",
          tasks: [
            {
              id: "si-t3",
              name: "Identificar requisitos de software",
              description: "Recopilar y analizar los requisitos con el cliente.",
              inputs: ["Declaración de Trabajo", "Necesidades del cliente"],
              outputs: ["Requisitos preliminares"],
            },
            {
              id: "si-t4",
              name: "Evaluar el impacto de los cambios",
              description: "Analizar el impacto de cambios en requisitos sobre el proyecto.",
              inputs: ["Solicitudes de cambio"],
              outputs: ["Análisis de impacto"],
            },
            {
              id: "si-t5",
              name: "Documentar requisitos de software",
              description: "Elaborar la Especificación de Requisitos de Software completa.",
              inputs: ["Requisitos preliminares"],
              outputs: ["Especificación de Requisitos de Software"],
            },
            {
              id: "si-t6",
              name: "Obtener aprobación del cliente",
              description:
                "Presentar y obtener la aprobación de la especificación de requisitos.",
              inputs: ["Especificación de Requisitos de Software"],
              outputs: ["Especificación aprobada"],
            },
          ],
        },
        {
          id: "si-a3",
          name: "Diseño Arquitectónico y Detallado de Software",
          description: "Desarrollar el diseño arquitectónico y detallado del software.",
          tasks: [
            {
              id: "si-t7",
              name: "Desarrollar diseño arquitectónico",
              description: "Definir la arquitectura del sistema y sus componentes principales.",
              inputs: ["Especificación de Requisitos de Software aprobada"],
              outputs: ["Diseño arquitectónico"],
            },
            {
              id: "si-t8",
              name: "Desarrollar diseño detallado",
              description:
                "Definir el diseño detallado de cada componente, incluyendo interfaces.",
              inputs: ["Diseño arquitectónico"],
              outputs: ["Diseño detallado de software"],
            },
            {
              id: "si-t9",
              name: "Definir casos de prueba de integración",
              description: "Definir los casos de prueba de integración basados en el diseño.",
              inputs: ["Diseño arquitectónico"],
              outputs: ["Casos de prueba de integración"],
            },
            {
              id: "si-t10",
              name: "Evaluar el diseño",
              description: "Revisar el diseño para verificar su conformidad con los requisitos.",
              inputs: ["Diseño detallado", "Especificación de Requisitos"],
              outputs: ["Diseño verificado"],
            },
          ],
        },
        {
          id: "si-a4",
          name: "Construcción de Software",
          description:
            "Codificar los componentes de software según el diseño y realizar pruebas unitarias.",
          tasks: [
            {
              id: "si-t11",
              name: "Desarrollar cada componente de software",
              description: "Codificar cada componente siguiendo el diseño detallado.",
              inputs: ["Diseño detallado de software"],
              outputs: ["Código fuente de componentes"],
            },
            {
              id: "si-t12",
              name: "Desarrollar casos de prueba unitaria",
              description:
                "Crear y ejecutar casos de prueba unitaria para cada componente.",
              inputs: ["Diseño detallado", "Código fuente"],
              outputs: ["Casos de prueba unitaria", "Resultados de pruebas"],
            },
            {
              id: "si-t13",
              name: "Revisar el código",
              description:
                "Realizar revisión del código para verificar su calidad y conformidad.",
              inputs: ["Código fuente"],
              outputs: ["Código fuente revisado"],
            },
          ],
        },
        {
          id: "si-a5",
          name: "Integración y Pruebas de Software",
          description:
            "Integrar los componentes y realizar pruebas de integración y sistema.",
          tasks: [
            {
              id: "si-t14",
              name: "Desarrollar el plan de pruebas de integración",
              description:
                "Elaborar el plan para la integración y pruebas del sistema completo.",
              inputs: ["Casos de prueba de integración"],
              outputs: ["Plan de pruebas de integración"],
            },
            {
              id: "si-t15",
              name: "Integrar componentes de software",
              description: "Integrar todos los componentes del sistema.",
              inputs: ["Componentes de software verificados"],
              outputs: ["Software integrado"],
            },
            {
              id: "si-t16",
              name: "Realizar pruebas de integración y sistema",
              description:
                "Ejecutar las pruebas de integración y del sistema completo.",
              inputs: ["Software integrado", "Plan de pruebas de integración"],
              outputs: ["Resultados de pruebas de integración"],
            },
            {
              id: "si-t17",
              name: "Corregir no conformidades",
              description:
                "Identificar y corregir las no conformidades encontradas en las pruebas.",
              inputs: ["Resultados de pruebas con no conformidades"],
              outputs: ["Software corregido"],
            },
          ],
        },
        {
          id: "si-a6",
          name: "Entrega del Producto",
          description: "Entregar el software al cliente y obtener la aceptación formal.",
          tasks: [
            {
              id: "si-t18",
              name: "Entregar el producto de software",
              description:
                "Preparar y entregar el software con toda su documentación al cliente.",
              inputs: ["Software verificado", "Documentación técnica"],
              outputs: ["Software entregado"],
            },
            {
              id: "si-t19",
              name: "Obtener aceptación del cliente",
              description:
                "Obtener la firma de aceptación del software por parte del cliente.",
              inputs: ["Software entregado"],
              outputs: ["Registro de aceptación del cliente"],
            },
            {
              id: "si-t20",
              name: "Archivar productos de software",
              description:
                "Archivar todos los productos de trabajo en el repositorio del proyecto.",
              inputs: ["Todos los productos de trabajo"],
              outputs: ["Repositorio archivado"],
            },
          ],
        },
      ],
      roles: ["Jefe de Proyecto", "Líder Técnico", "Analista", "Desarrollador", "Tester", "Cliente"],
      workProducts: [
        {
          id: "wp-si-1",
          name: "Especificación de Requisitos de Software",
          description: "Documento completo con los requisitos funcionales y no funcionales.",
        },
        {
          id: "wp-si-2",
          name: "Diseño de Software",
          description: "Documento con el diseño arquitectónico y detallado del software.",
        },
        {
          id: "wp-si-3",
          name: "Código Fuente",
          description: "Código fuente completo del software desarrollado y revisado.",
        },
        {
          id: "wp-si-4",
          name: "Casos de Prueba Unitaria",
          description: "Casos de prueba para verificación de componentes individuales.",
        },
        {
          id: "wp-si-5",
          name: "Casos de Prueba de Integración",
          description: "Casos de prueba para verificar la integración del sistema.",
        },
        {
          id: "wp-si-6",
          name: "Registro de Aceptación del Producto",
          description: "Acta formal de aceptación del software por el cliente.",
        },
        {
          id: "wp-si-7",
          name: "Manual de Usuario",
          description: "Documentación para los usuarios finales del software.",
        },
      ],
    },
  ],
  roles: [
    {
      id: "r-basic-1",
      name: "Jefe de Proyecto",
      abbreviation: "JP",
      description:
        "Responsable de la planificación, ejecución, monitoreo y cierre del proyecto.",
      responsibilities: [
        "Elaborar el Plan de Proyecto",
        "Monitorear el avance del proyecto",
        "Gestionar riesgos y problemas",
        "Comunicarse con el cliente",
        "Gestionar el equipo de trabajo",
        "Controlar cambios al proyecto",
      ],
    },
    {
      id: "r-basic-2",
      name: "Líder Técnico",
      abbreviation: "LT",
      description: "Responsable de las decisiones técnicas y del diseño del software.",
      responsibilities: [
        "Liderar el análisis de requisitos",
        "Definir la arquitectura del sistema",
        "Revisar el código desarrollado",
        "Resolver problemas técnicos",
        "Liderar las actividades de pruebas",
      ],
    },
    {
      id: "r-basic-3",
      name: "Analista/Desarrollador",
      abbreviation: "AD",
      description:
        "Realiza el análisis de requisitos, diseño, codificación y pruebas del software.",
      responsibilities: [
        "Analizar y documentar requisitos",
        "Diseñar componentes de software",
        "Codificar componentes",
        "Desarrollar y ejecutar pruebas unitarias",
        "Documentar el software desarrollado",
      ],
    },
    {
      id: "r-basic-4",
      name: "Cliente",
      abbreviation: "CL",
      description:
        "Organización o persona que requiere el software y es el destinatario final.",
      responsibilities: [
        "Proporcionar requisitos del software",
        "Aprobar el Plan de Proyecto",
        "Revisar y aprobar entregables",
        "Realizar pruebas de aceptación",
        "Aceptar formalmente el software entregado",
      ],
    },
  ],
  deploymentPackages: [
    "Gestión de Proyecto (GP)",
    "Análisis de Requisitos (AR)",
    "Diseño Arquitectónico (DA)",
    "Diseño Detallado e Implementación (DDI)",
    "Pruebas (PR)",
    "Configuración de Software (CS)",
    "Verificación y Validación (VV)",
  ],
};
