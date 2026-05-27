import type { Profile } from "@/types/iso29110";

export const entryProfile: Profile = {
  id: "entry",
  name: "Perfil de Entrada",
  level: 1,
  color: "green",
  gradient: "from-green-500 to-emerald-600",
  icon: "🌱",
  targetAudience: "VSEs de inicio (menos de 3 años) y proyectos pequeños (menos de 6 meses-persona)",
  description:
    "El Perfil de Entrada está diseñado para VSEs en etapa de inicio (menos de 3 años de operación) y/o VSEs que trabajan en proyectos pequeños (menos de 6 meses-persona). Cubre dos procesos: Gestión de Proyecto (PM) e Implementación de Software (SI), en su forma más ligera y práctica.",
  characteristics: [
    "VSE de inicio con menos de 3 años de operación",
    "Proyectos de menos de 6 meses-persona",
    "Dos procesos: Gestión de Proyecto (PM) e Implementación de Software (SI)",
    "Gestión de proyecto simplificada",
    "Documentación mínima requerida",
    "No aplica a software de seguridad crítica",
  ],
  processes: [
    {
      id: "pm-entry",
      name: "Gestión de Proyecto",
      abbreviation: "PM",
      purpose:
        "Coordinar y llevar a cabo las actividades del proyecto de software de manera sistemática para cumplir con el alcance del proyecto y los requisitos del cliente, en tiempo y costo.",
      outcomes: [
        "Los requisitos del proyecto y los productos de trabajo esperados son definidos y acordados con el cliente",
        "Los recursos (personas, herramientas, infraestructura) son estimados y asignados",
        "El progreso del proyecto es monitoreado y se toman acciones correctivas cuando sea necesario",
        "El repositorio del proyecto es mantenido con los productos de trabajo del proyecto",
        "El proyecto completado es aceptado por el cliente",
      ],
      activities: [
        {
          id: "pm-entry-a1",
          name: "Planificación del Proyecto",
          description:
            "Definir el alcance, estimar el esfuerzo y duración, asignar roles y documentar el Plan de Proyecto.",
          tasks: [
            {
              id: "pm-entry-t1",
              name: "Revisar la Declaración de Trabajo",
              description:
                "Revisar y acordar con el cliente la Declaración de Trabajo para comprender el alcance, los entregables y las restricciones del proyecto.",
              inputs: ["Declaración de Trabajo"],
              outputs: ["Declaración de Trabajo revisada y aceptada"],
            },
            {
              id: "pm-entry-t2",
              name: "Definir tareas y estimar esfuerzo",
              description:
                "Identificar las tareas necesarias para completar el proyecto y estimar el esfuerzo, la duración y los recursos requeridos.",
              inputs: ["Declaración de Trabajo revisada"],
              outputs: ["Lista de tareas con estimaciones"],
            },
            {
              id: "pm-entry-t3",
              name: "Asignar roles al equipo",
              description:
                "Identificar los roles del proyecto (PM, DEV, CUS) y asignar las personas correspondientes.",
              inputs: ["Lista de tareas con estimaciones"],
              outputs: ["Composición del equipo del proyecto"],
            },
            {
              id: "pm-entry-t4",
              name: "Documentar el Plan de Proyecto",
              description:
                "Elaborar el Plan de Proyecto integrando el alcance, las tareas, el cronograma, los recursos y los entregables.",
              inputs: ["Lista de tareas con estimaciones", "Composición del equipo"],
              outputs: ["Plan de Proyecto"],
            },
            {
              id: "pm-entry-t5",
              name: "Obtener aceptación del Plan de Proyecto",
              description:
                "Presentar el Plan de Proyecto al cliente y obtener su aceptación formal.",
              inputs: ["Plan de Proyecto"],
              outputs: ["Plan de Proyecto aceptado por el cliente"],
            },
          ],
        },
        {
          id: "pm-entry-a2",
          name: "Ejecución y Control del Proyecto",
          description:
            "Ejecutar las tareas del proyecto conforme al plan, monitorear el avance y tomar acciones correctivas cuando se detecten desviaciones.",
          tasks: [
            {
              id: "pm-entry-t6",
              name: "Ejecutar tareas del proyecto",
              description:
                "Realizar las actividades planificadas siguiendo el Plan de Proyecto y registrar el avance.",
              inputs: ["Plan de Proyecto aceptado"],
              outputs: ["Registros de avance del proyecto"],
            },
            {
              id: "pm-entry-t7",
              name: "Realizar reuniones de seguimiento",
              description:
                "Efectuar reuniones periódicas con el equipo y/o el cliente para revisar el avance, identificar problemas y acordar acciones.",
              inputs: ["Registros de avance del proyecto"],
              outputs: ["Actas de reunión"],
            },
            {
              id: "pm-entry-t8",
              name: "Monitorear avance y corregir desviaciones",
              description:
                "Comparar el avance real con el planificado y tomar acciones correctivas cuando se detecten desviaciones en tiempo, costo o calidad.",
              inputs: ["Plan de Proyecto", "Registros de avance"],
              outputs: ["Plan de Proyecto actualizado (si aplica)"],
            },
            {
              id: "pm-entry-t9",
              name: "Gestionar solicitudes de cambio",
              description:
                "Si el cliente solicita cambios al alcance, evaluar el impacto y actualizar el Plan de Proyecto previo acuerdo. (Tarea condicional: aplica cuando el cliente solicita cambios.)",
              inputs: ["Solicitud de cambio del cliente"],
              outputs: ["Solicitud de cambio aceptada/rechazada", "Plan de Proyecto actualizado"],
            },
          ],
        },
        {
          id: "pm-entry-a3",
          name: "Cierre del Proyecto",
          description:
            "Verificar que todos los entregables estén completos, obtener la aceptación del cliente y archivar los productos de trabajo.",
          tasks: [
            {
              id: "pm-entry-t10",
              name: "Verificar entregables del proyecto",
              description:
                "Confirmar que todos los entregables definidos en el Plan de Proyecto han sido completados y aceptados por el cliente.",
              inputs: ["Plan de Proyecto", "Productos de trabajo del proyecto"],
              outputs: ["Lista de verificación de entregables"],
            },
            {
              id: "pm-entry-t11",
              name: "Obtener aceptación del cliente",
              description:
                "Obtener la aceptación formal del cliente sobre el software entregado y el cierre del proyecto.",
              inputs: ["Software entregado", "Lista de verificación de entregables"],
              outputs: ["Registro de Aceptación del cliente"],
            },
            {
              id: "pm-entry-t12",
              name: "Archivar productos de trabajo en el repositorio",
              description:
                "Guardar todos los productos de trabajo del proyecto en el repositorio del proyecto para futura referencia.",
              inputs: ["Todos los productos de trabajo del proyecto"],
              outputs: ["Repositorio del proyecto archivado"],
            },
          ],
        },
      ],
      roles: ["Gerente de Proyecto", "Desarrollador", "Cliente"],
      workProducts: [
        {
          id: "wp-pm-entry-1",
          name: "Plan de Proyecto",
          description:
            "Documento que describe el alcance, las tareas, el cronograma, los recursos asignados y los entregables del proyecto.",
        },
        {
          id: "wp-pm-entry-2",
          name: "Registros de Avance",
          description: "Registros del progreso real del proyecto versus lo planificado.",
        },
        {
          id: "wp-pm-entry-3",
          name: "Actas de Reunión",
          description:
            "Documentación de los acuerdos y decisiones tomadas en las reuniones de seguimiento. (Condicional: si se realizan reuniones.)",
        },
        {
          id: "wp-pm-entry-4",
          name: "Solicitudes de Cambio",
          description:
            "Registro de los cambios solicitados al alcance del proyecto y su resolución. (Condicional: si el cliente solicita cambios.)",
        },
        {
          id: "wp-pm-entry-5",
          name: "Registro de Aceptación",
          description: "Acta de aceptación formal del proyecto completado por parte del cliente.",
        },
      ],
    },
    {
      id: "si-entry",
      name: "Implementación de Software",
      abbreviation: "IS",
      purpose:
        "Realizar las tareas de análisis, diseño, construcción, integración y pruebas de productos de software nuevos o modificados de acuerdo con los requisitos especificados.",
      outcomes: [
        "Los requisitos de los clientes son recopilados y transformados en especificaciones de software",
        "Se diseña e implementa el software que satisface las especificaciones",
        "Se realizan pruebas de verificación y se verifica que el software cumpla los requisitos",
        "El software es entregado al cliente",
      ],
      activities: [
        {
          id: "si-entry-a1",
          name: "Inicio de la Implementación",
          description: "Revisar y acordar los requisitos del cliente para comenzar el desarrollo.",
          tasks: [
            {
              id: "si-entry-t1",
              name: "Revisar declaración de trabajo",
              description:
                "Revisar el documento de declaración de trabajo o contrato con el cliente para entender el alcance.",
              inputs: ["Declaración de trabajo", "Contrato del cliente"],
              outputs: ["Comprensión documentada del alcance"],
            },
            {
              id: "si-entry-t2",
              name: "Establecer repositorio",
              description:
                "Configurar el repositorio de trabajo donde se almacenarán los productos de trabajo.",
              inputs: ["Recursos disponibles"],
              outputs: ["Repositorio del proyecto configurado"],
            },
          ],
        },
        {
          id: "si-entry-a2",
          name: "Análisis de Requisitos",
          description: "Obtener, analizar y documentar los requisitos de software del cliente.",
          tasks: [
            {
              id: "si-entry-t3",
              name: "Obtener requisitos",
              description:
                "Recopilar los requisitos funcionales y no funcionales del cliente mediante entrevistas o talleres.",
              inputs: ["Necesidades del cliente"],
              outputs: ["Lista de requisitos preliminar"],
            },
            {
              id: "si-entry-t4",
              name: "Documentar requisitos",
              description:
                "Documentar los requisitos acordados en la especificación de requisitos de software.",
              inputs: ["Lista de requisitos preliminar"],
              outputs: ["Especificación de requisitos de software"],
            },
            {
              id: "si-entry-t5",
              name: "Obtener aprobación del cliente",
              description: "Obtener la aprobación del cliente sobre los requisitos documentados.",
              inputs: ["Especificación de requisitos de software"],
              outputs: ["Requisitos aprobados por el cliente"],
            },
          ],
        },
        {
          id: "si-entry-a3",
          name: "Diseño y Construcción",
          description: "Diseñar, codificar y realizar pruebas unitarias del software.",
          tasks: [
            {
              id: "si-entry-t6",
              name: "Desarrollar diseño",
              description: "Crear el diseño del software a partir de los requisitos especificados.",
              inputs: ["Especificación de requisitos de software"],
              outputs: ["Diseño de software"],
            },
            {
              id: "si-entry-t7",
              name: "Desarrollar componentes",
              description: "Codificar los componentes de software siguiendo el diseño especificado.",
              inputs: ["Diseño de software"],
              outputs: ["Código fuente", "Casos de prueba unitarios"],
            },
          ],
        },
        {
          id: "si-entry-a4",
          name: "Pruebas e Integración",
          description: "Integrar los componentes y realizar pruebas del software completo.",
          tasks: [
            {
              id: "si-entry-t8",
              name: "Integrar componentes",
              description: "Integrar todos los componentes de software desarrollados.",
              inputs: ["Código fuente de componentes"],
              outputs: ["Software integrado"],
            },
            {
              id: "si-entry-t9",
              name: "Realizar pruebas",
              description: "Ejecutar casos de prueba sobre el software integrado.",
              inputs: ["Software integrado", "Casos de prueba"],
              outputs: ["Resultados de pruebas", "Software verificado"],
            },
          ],
        },
        {
          id: "si-entry-a5",
          name: "Entrega del Producto",
          description: "Entregar el software verificado al cliente.",
          tasks: [
            {
              id: "si-entry-t10",
              name: "Entregar software",
              description:
                "Empaquetar y entregar el software al cliente con la documentación correspondiente.",
              inputs: ["Software verificado", "Documentación"],
              outputs: ["Producto de software entregado"],
            },
          ],
        },
      ],
      roles: ["Propietario/Desarrollador", "Cliente"],
      workProducts: [
        {
          id: "wp-entry-1",
          name: "Especificación de Requisitos de Software",
          description:
            "Documento que describe los requisitos funcionales y no funcionales del software a desarrollar.",
        },
        {
          id: "wp-entry-2",
          name: "Diseño de Software",
          description: "Descripción de la arquitectura y diseño detallado del software.",
        },
        {
          id: "wp-entry-3",
          name: "Código Fuente",
          description: "Código fuente del software implementado y documentado.",
        },
        {
          id: "wp-entry-4",
          name: "Casos de Prueba y Resultados",
          description: "Casos de prueba diseñados y resultados obtenidos de su ejecución.",
        },
        {
          id: "wp-entry-5",
          name: "Registro de Aceptación",
          description: "Registro de la aceptación del software por parte del cliente.",
        },
      ],
    },
  ],
  roles: [
    {
      id: "r-entry-1",
      name: "Gerente de Proyecto",
      abbreviation: "PM",
      description:
        "Responsable de planificar, ejecutar y controlar el proyecto. En VSEs muy pequeñas puede ser la misma persona que el desarrollador.",
      responsibilities: [
        "Revisar y acordar la Declaración de Trabajo con el cliente",
        "Elaborar y mantener el Plan de Proyecto",
        "Monitorear el avance y tomar acciones correctivas",
        "Coordinar reuniones de seguimiento",
        "Obtener la aceptación del cliente al cierre",
      ],
    },
    {
      id: "r-entry-2",
      name: "Desarrollador",
      abbreviation: "DEV",
      description:
        "Realiza las actividades técnicas de análisis de requisitos, diseño, construcción, pruebas y entrega del software.",
      responsibilities: [
        "Obtener y documentar los requisitos del software",
        "Diseñar y construir los componentes de software",
        "Desarrollar y ejecutar casos de prueba",
        "Integrar los componentes y verificar el software",
        "Entregar el software al cliente",
      ],
    },
    {
      id: "r-entry-3",
      name: "Cliente",
      abbreviation: "CUS",
      description:
        "Persona u organización que requiere el software. Proporciona requisitos, aprueba entregables y acepta formalmente el producto.",
      responsibilities: [
        "Proporcionar la Declaración de Trabajo y requisitos",
        "Aprobar el Plan de Proyecto",
        "Revisar y aprobar la Especificación de Requisitos",
        "Aceptar formalmente el software entregado",
        "Solicitar cambios al alcance cuando sea necesario",
      ],
    },
  ],
  deploymentPackages: [
    "Gestión de Proyecto - Entrada (PM-EN)",
    "Requerimientos de Software (RS)",
    "Implementación de Software (IS)",
  ],
};
