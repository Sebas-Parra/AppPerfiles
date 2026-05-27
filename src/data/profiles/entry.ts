import type { Profile } from "@/types/iso29110";

export const entryProfile: Profile = {
  id: "entry",
  name: "Perfil de Entrada",
  level: 1,
  color: "green",
  gradient: "from-green-500 to-emerald-600",
  icon: "🌱",
  targetAudience: "VSEs que realizan un único proyecto con un único proceso de desarrollo",
  description:
    "El Perfil de Entrada está diseñado para organizaciones muy pequeñas que están comenzando a implementar prácticas de ingeniería de software. Cubre un único proceso básico de implementación de software sin gestión de proyectos formal.",
  characteristics: [
    "Organización de una sola persona o equipo muy pequeño",
    "Proceso único y simple de desarrollo",
    "Sin gestión formal de proyectos",
    "Orientado a iniciarse en buenas prácticas",
    "Documentación mínima requerida",
    "Ideal para proyectos muy pequeños y de corta duración",
  ],
  processes: [
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
      name: "Propietario/Desarrollador",
      abbreviation: "PD",
      description:
        "Persona responsable tanto de la gestión del proyecto como del desarrollo del software. Puede ser el dueño de la VSE.",
      responsibilities: [
        "Realizar el análisis de requisitos",
        "Diseñar y construir el software",
        "Ejecutar pruebas",
        "Entregar el producto al cliente",
        "Mantener comunicación con el cliente",
      ],
    },
    {
      id: "r-entry-2",
      name: "Cliente",
      abbreviation: "CL",
      description:
        "Persona u organización que requiere el software y proporciona los requisitos.",
      responsibilities: [
        "Proporcionar requisitos del software",
        "Aprobar especificaciones",
        "Aceptar el producto final",
        "Proporcionar retroalimentación durante el desarrollo",
      ],
    },
  ],
  deploymentPackages: [
    "Requerimientos de Software (RS)",
    "Implementación de Software (IS)",
  ],
};
