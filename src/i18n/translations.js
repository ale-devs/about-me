// Todo el texto de la página en español e inglés.
// Usa **texto** para resaltar palabras en blanco.

export const translations = {
  es: {
    meta: {
      title: "Alessandro Martinez | Portafolio",
      description:
        "Portafolio de Alessandro Martinez: desarrollo web, gestión de datos, automatización con Python y administración de plataformas.",
    },
    header: {
      role: "Desarrollador de software",
      tagline:
        "Desarrollo web · Gestión de datos · Automatización con Python · Administración de plataformas",
    },
    languageLabel: "Idioma",
    menu: {
      about: "Acerca de mí",
      experience: "Experiencia",
      skills: "Mis habilidades",
      projects: "Proyectos",
    },
    about: [
      "Soy desarrollador de software con enfoque en **Desarrollo web**. Inicié en la programación desde temprana edad, lo que me permitió construir una base sólida en tecnologías **frontend** y **backend**.",
      "Disfruto crear soluciones **funcionales**, **escalables** y **adaptadas** a las necesidades reales de cada proyecto, manteniendo siempre una mentalidad de aprendizaje continuo y mejora constante.",
      "Me enfoco en desarrollar aplicaciones web modernas, priorizando la **experiencia** del usuario, el **rendimiento** y la claridad del código.",
      "Actualmente, en **ManpowerGroup**, trabajo como gestor de datos y desarrollador: construyo plataformas con Next.js, TypeScript y PostgreSQL, administro plataformas, utilizo Google Cloud Console y BigQuery, y desarrollo scripts en **Python con Pandas** para optimizar procesos repetitivos y generar reportes en Google Sheets.",
    ],
    aboutPage: {
      stats: [
        { value: "2+", label: "años de experiencia" },
        { value: "4", label: "proyectos publicados" },
        { value: "20+", label: "tecnologías" },
      ],
      nowLabel: "Actualmente",
      nowRole: "Gestor de datos y desarrollador",
      nowCompany: "ManpowerGroup",
      nowText:
        "Construyo plataformas con **Next.js**, **TypeScript** y **PostgreSQL**, administro plataformas con Google Cloud Console y BigQuery, y automatizo procesos con **Python y Pandas**, generando reportes en Google Sheets.",
      focusTitle: "En qué me enfoco",
      focus: [
        { key: "web", title: "Desarrollo web", text: "Aplicaciones modernas con React, Next.js y Laravel, de principio a fin." },
        { key: "data", title: "Datos & automatización", text: "Consultas en BigQuery y scripts en Python con Pandas que ahorran trabajo manual." },
        { key: "platforms", title: "Plataformas", text: "Administración de plataformas y recursos en Google Cloud Console." },
      ],
    },
    experience: {
      responsibilitiesTitle: "Responsabilidades clave",
      currentLabel: "Actual",
      units: { year: ["año", "años"], month: ["mes", "meses"] },
      techTitle: "Tecnologías utilizadas",
      jobs: [
        {
          company: "ManpowerGroup",
          role: "Gestor de datos y desarrollador",
          period: "Enero 2026 – Actualidad",
          start: "2026-01",
          end: null,
          current: true,
          paragraphs: [
            "Me desempeño como **gestor de datos** y **desarrollador**, construyendo y manteniendo múltiples plataformas internas con **Next.js**, **TypeScript** y **Drizzle ORM** sobre bases de datos **PostgreSQL**.",
            "También me encargo de la **administración de plataformas** y del trabajo con datos: gestiono recursos desde **Google Cloud Console**, realizo consultas en **BigQuery** y **automatizo procesos** con Python y la librería Pandas, apoyándome en Google Sheets para reportes y seguimiento.",
            "Además, participo en la **resolución de problemas de ciberseguridad** y en el **aseguramiento de calidad (QA)**, revisando y probando las plataformas para que sean seguras y funcionen correctamente.",
          ],
          responsibilities: [
            "Desarrollo de plataformas web con Next.js y TypeScript.",
            "Desarrollo de la plataforma educativa Excelencia Escolar.",
            "Modelado y consultas de bases de datos PostgreSQL con Drizzle ORM.",
            "Administración de plataformas y gestión desde Google Cloud Console.",
            "Extracción y análisis de datos con BigQuery.",
            "Automatización de procesos con Python y Pandas.",
            "Elaboración de reportes en Google Sheets (nivel intermedio).",
            "Resolución de problemas de ciberseguridad en las plataformas.",
            "Aseguramiento de calidad (QA) y pruebas de las plataformas.",
          ],
          tech: ["Next.js", "TypeScript", "Express", "Drizzle ORM", "PostgreSQL", "Python", "Pandas", "BigQuery", "Google Sheets", "Google Cloud Console"],
        },
        {
          company: "Formación Docente",
          role: "Desarrollador web full stack",
          period: "Abril 2024 – Diciembre 2025",
          start: "2024-04",
          end: "2025-12",
          paragraphs: [
            "Mi experiencia se centró en el desarrollo del portal **Formación Docente**, participando activamente en la construcción y evolución de la plataforma en un entorno real de producción.",
            "Durante este período trabajé de forma integral en el **frontend** y **backend**, desarrollando funcionalidades orientadas a la estabilidad, mantenibilidad y claridad del código.",
            "Adicionalmente, formé parte del desarrollo del **panel de control administrativo**, implementando interfaces dinámicas y flujos internos que mejoraron la experiencia de gestión para los usuarios del sistema.",
          ],
          responsibilities: [
            "Desarrollo frontend y backend del portal en producción.",
            "Construcción del panel de control administrativo.",
            "Implementación de interfaces dinámicas y flujos internos de gestión.",
          ],
          tech: ["PHP", "Laravel", "JavaScript", "React", "Inertia.js", "Tailwind CSS"],
        },
      ],
    },
    skills: {
      title: "Habilidades",
      learningTitle: "En aprendizaje",
      learningHint: "Lo que estoy estudiando ahora",
      learning: ["Vue.js"],
      groups: {
        frontend: { title: "Frontend", items: ["JavaScript", "TypeScript", "React", "Next.js", "Inertia.js", "Tailwind CSS"] },
        backend: { title: "Backend", items: ["PHP", "Laravel", "Node.js", "Express", "Drizzle ORM"] },
        database: { title: "Base de datos", items: ["MySQL", "PostgreSQL", "BigQuery"] },
        data: {
          title: "Datos & automatización",
          items: ["Python", "Pandas (automatización de procesos)", "Google Sheets (intermedio)", "Consultas y análisis en BigQuery"],
        },
        cloud: {
          title: "Cloud & plataformas",
          items: ["Google Cloud Console", "Administración de plataformas", "Gestión de usuarios y permisos"],
        },
        styles: { title: "Estilos & arquitectura CSS", items: ["Sass / SCSS", "Metodología BEM"] },
      },
    },
    projects: {
      title: "Proyectos",
      subtitle: "Algunos trabajos personales y profesionales.",
      techTitle: "Tecnologías",
      types: { personal: "Personal", professional: "Profesional" },
      items: [
        {
          title: "Excelencia Escolar",
          description:
            "Plataforma educativa en la que trabajo en el desarrollo de funcionalidades, la gestión de datos y la calidad del sistema.",
          highlights: ["Desarrollo full stack", "Plataforma en producción", "QA y seguridad"],
        },
        {
          title: "Festival Musical SV",
          description:
            "Landing page para presentar un evento musical, con diseño responsivo y una estructura clara para navegar rápido.",
          highlights: ["Landing page", "Interfaz responsiva", "Enfoque en presentación"],
        },
        {
          title: "Cafetería Alessandro",
          description:
            "Sitio para mostrar la información de una cafetería de forma atractiva, con secciones organizadas para el contenido y la navegación.",
          highlights: ["UI clara", "Diseño responsivo", "Estructura por secciones"],
        },
        {
          title: "Portal Formación Docente",
          description:
            "Desarrollo y evolución del portal en frontend y backend, incluyendo un panel administrativo con interfaces dinámicas para la gestión interna.",
          highlights: ["Frontend + Backend", "Panel administrativo", "Trabajo en producción"],
        },
      ],
    },
  },

  en: {
    meta: {
      title: "Alessandro Martinez | Portfolio",
      description:
        "Portfolio of Alessandro Martinez: web development, data management, Python automation and platform administration.",
    },
    header: {
      role: "Software developer",
      tagline:
        "Web development · Data management · Python automation · Platform administration",
    },
    languageLabel: "Language",
    menu: {
      about: "About me",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
    },
    about: [
      "I'm a software developer focused on **web development**. I started programming at an early age, which allowed me to build a solid foundation in **frontend** and **backend** technologies.",
      "I enjoy building **functional**, **scalable** solutions **tailored** to the real needs of each project, always keeping a mindset of continuous learning and improvement.",
      "I focus on developing modern web applications, prioritizing user **experience**, **performance** and clean, readable code.",
      "Currently, at **ManpowerGroup**, I work as a data manager and developer: I build platforms with Next.js, TypeScript and PostgreSQL, administer platforms, use Google Cloud Console and BigQuery, and write **Python and Pandas** scripts to automate repetitive processes and generate reports in Google Sheets.",
    ],
    aboutPage: {
      stats: [
        { value: "2+", label: "years of experience" },
        { value: "4", label: "published projects" },
        { value: "20+", label: "technologies" },
      ],
      nowLabel: "Currently",
      nowRole: "Data manager & developer",
      nowCompany: "ManpowerGroup",
      nowText:
        "I build platforms with **Next.js**, **TypeScript** and **PostgreSQL**, manage platforms with Google Cloud Console and BigQuery, and automate processes with **Python and Pandas**, producing reports in Google Sheets.",
      focusTitle: "What I focus on",
      focus: [
        { key: "web", title: "Web development", text: "Modern applications with React, Next.js and Laravel, end to end." },
        { key: "data", title: "Data & automation", text: "BigQuery queries and Python + Pandas scripts that save manual work." },
        { key: "platforms", title: "Platforms", text: "Platform administration and resource management in Google Cloud Console." },
      ],
    },
    experience: {
      responsibilitiesTitle: "Key responsibilities",
      currentLabel: "Current",
      units: { year: ["year", "years"], month: ["month", "months"] },
      techTitle: "Technologies used",
      jobs: [
        {
          company: "ManpowerGroup",
          role: "Data manager & developer",
          period: "January 2026 – Present",
          start: "2026-01",
          end: null,
          current: true,
          paragraphs: [
            "I work as a **data manager** and **developer**, building and maintaining multiple internal platforms with **Next.js**, **TypeScript** and **Drizzle ORM** on top of **PostgreSQL** databases.",
            "I'm also responsible for **platform administration** and data work: I manage resources in **Google Cloud Console**, run queries in **BigQuery** and **automate processes** with Python and the Pandas library, using Google Sheets for reporting and tracking.",
            "I also help **resolve cybersecurity issues** and handle **quality assurance (QA)**, reviewing and testing the platforms to keep them secure and working correctly.",
          ],
          responsibilities: [
            "Web platform development with Next.js and TypeScript.",
            "Development of the Excelencia Escolar education platform.",
            "PostgreSQL data modeling and queries with Drizzle ORM.",
            "Platform administration and management through Google Cloud Console.",
            "Data extraction and analysis with BigQuery.",
            "Process automation with Python and Pandas.",
            "Reporting in Google Sheets (intermediate level).",
            "Resolving cybersecurity issues across the platforms.",
            "Quality assurance (QA) and testing of the platforms.",
          ],
          tech: ["Next.js", "TypeScript", "Express", "Drizzle ORM", "PostgreSQL", "Python", "Pandas", "BigQuery", "Google Sheets", "Google Cloud Console"],
        },
        {
          company: "Formación Docente",
          role: "Full stack web developer",
          period: "April 2024 – December 2025",
          start: "2024-04",
          end: "2025-12",
          paragraphs: [
            "My work focused on developing the **Formación Docente** portal, actively contributing to building and evolving the platform in a real production environment.",
            "During this time I worked across both **frontend** and **backend**, delivering features focused on stability, maintainability and code clarity.",
            "I also helped build the **administrative dashboard**, implementing dynamic interfaces and internal workflows that improved the management experience for the system's users.",
          ],
          responsibilities: [
            "Frontend and backend development of the portal in production.",
            "Building the administrative dashboard.",
            "Implementing dynamic interfaces and internal management workflows.",
          ],
          tech: ["PHP", "Laravel", "JavaScript", "React", "Inertia.js", "Tailwind CSS"],
        },
      ],
    },
    skills: {
      title: "Skills",
      learningTitle: "Currently learning",
      learningHint: "What I am studying right now",
      learning: ["Vue.js"],
      groups: {
        frontend: { title: "Frontend", items: ["JavaScript", "TypeScript", "React", "Next.js", "Inertia.js", "Tailwind CSS"] },
        backend: { title: "Backend", items: ["PHP", "Laravel", "Node.js", "Express", "Drizzle ORM"] },
        database: { title: "Databases", items: ["MySQL", "PostgreSQL", "BigQuery"] },
        data: {
          title: "Data & automation",
          items: ["Python", "Pandas (process automation)", "Google Sheets (intermediate)", "Querying and analysis in BigQuery"],
        },
        cloud: {
          title: "Cloud & platforms",
          items: ["Google Cloud Console", "Platform administration", "User and permission management"],
        },
        styles: { title: "Styling & CSS architecture", items: ["Sass / SCSS", "BEM methodology"] },
      },
    },
    projects: {
      title: "Projects",
      subtitle: "A selection of personal and professional work.",
      techTitle: "Technologies",
      types: { personal: "Personal", professional: "Professional" },
      items: [
        {
          title: "Excelencia Escolar",
          description:
            "Education platform where I work on feature development, data management and overall system quality.",
          highlights: ["Full stack development", "Production platform", "QA & security"],
        },
        {
          title: "Festival Musical SV",
          description:
            "Landing page to showcase a music event, with a responsive design and a clear structure for quick navigation.",
          highlights: ["Landing page", "Responsive UI", "Presentation-focused"],
        },
        {
          title: "Cafetería Alessandro",
          description:
            "Website presenting a coffee shop's information in an attractive way, with well-organized sections for content and navigation.",
          highlights: ["Clean UI", "Responsive design", "Section-based layout"],
        },
        {
          title: "Formación Docente Portal",
          description:
            "Development and evolution of the portal across frontend and backend, including an admin dashboard with dynamic interfaces for internal management.",
          highlights: ["Frontend + Backend", "Admin dashboard", "Production work"],
        },
      ],
    },
  },
};
