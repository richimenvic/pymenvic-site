(function () {
  var key = "pymenvic-locale";
  var current = localStorage.getItem(key) === "en" ? "en" : "es";

  var es = {
    "Home": "Inicio",
    "Apps": "Apps",
    "Revit Tools": "Revit Tools",
    "Learning": "Aprendizaje",
    "Support": "Soporte",
    "Explore Revit Tools": "Explorar Revit Tools",
    "View Apps": "Ver apps",
    "Get Support": "Obtener soporte",
    "Request support": "Solicitar soporte",
    "View learning notes": "Ver notas de aprendizaje",
    "Email support": "Enviar email a soporte",
    "PadelScoreGT5 support": "Soporte PadelScoreGT5",
    "Open Support": "Abrir soporte",
    "Email Menvic": "Enviar email a Menvic",
    "Open Revit Tools": "Abrir Revit Tools",
    "Open Apps": "Abrir apps",
    "View Padel Score": "Ver Padel Score",
    "Privacy Policy": "Política de privacidad",
    "View preview": "Ver preview",
    "Apps, Revit tools, and support pages in one place.": "Apps, herramientas Revit y soporte en un solo lugar.",
    "pyMenvic collects public material for Menvic software: pyRevit utilities, compact apps, support paths, privacy pages, and learning notes.": "pyMenvic reúne material público de Menvic: utilidades pyRevit, apps compactas, rutas de soporte, páginas de privacidad y notas de aprendizaje.",
    "Revit production tools remain the technical core. Apps are documented here when they need public support, policy, or preview pages.": "Las herramientas para producción en Revit siguen siendo el núcleo técnico. Las apps se documentan aquí cuando necesitan soporte público, políticas o páginas de preview.",
    "Small tools with practical support pages.": "Herramientas pequeñas con páginas de soporte prácticas.",
    "This section lists standalone apps by Menvic. Each entry explains what it does, where it runs, and how to find support or policy details.": "Esta sección lista apps independientes de Menvic. Cada entrada explica qué hace, dónde funciona y cómo encontrar soporte o detalles de políticas.",
    "Current public app information focuses on Padel Score. Private or internal tools appear only when a preview is useful and the scope is clear.": "La información pública actual se centra en Padel Score. Las herramientas privadas o internas aparecen solo cuando una vista previa es útil y el alcance está claro.",
    "Available apps": "Apps disponibles",
    "A short catalog of app pages that are ready to document publicly.": "Un catálogo breve de apps listas para documentarse públicamente.",
    "Support shortcuts": "Accesos rápidos de soporte",
    "Direct policy and support routes for app review, user questions, and data requests.": "Rutas directas a políticas y soporte para revisión de apps, preguntas de usuarios y solicitudes de datos.",
    "The technical core for Revit production support.": "El núcleo técnico para soporte de producción en Revit.",
    "This area is reserved for Menvic Revit tools: pyRevit utilities, BIM checks, documentation helpers, and repeatable office workflow support.": "Esta área está reservada para herramientas Revit de Menvic: utilidades pyRevit, revisiones BIM, ayudas de documentación y soporte para flujos de oficina repetibles.",
    "The page is intentionally clear about status. Public tool information will appear here when a utility has a stable scope, support path, and documentation that can be maintained.": "La página es intencionalmente clara sobre el estado. La información pública aparecerá aquí cuando una utilidad tenga alcance estable, ruta de soporte y documentación mantenible.",
    "Planned tool areas": "Áreas de herramientas previstas",
    "No fake downloads, no unsupported claims.": "Sin descargas falsas ni promesas sin soporte.",
    "Practical resources for tools and production workflows.": "Recursos prácticos para herramientas y flujos de producción.",
    "The learning area collects concise notes for Revit production, BIM documentation, pyRevit automation, app support, and small static web projects.": "El área de aprendizaje reúne notas concisas para producción Revit, documentación BIM, automatización pyRevit, soporte de apps y pequeños proyectos web estáticos.",
    "Resource areas": "Areas de recursos",
    "Publishing approach": "Enfoque de publicacion",
    "Clear paths for app, Revit tool, and privacy support.": "Rutas claras para soporte de apps, herramientas Revit y privacidad.",
    "Use this page to reach Menvic support, open public app policy pages, or route a question about pyMenvic Revit tools and learning resources.": "Usa esta página para contactar con soporte de Menvic, abrir políticas públicas de apps o enviar preguntas sobre herramientas pyMenvic y recursos de aprendizaje.",
    "For faster handling, include the tool or app name, device or Revit context, what you expected, and what happened.": "Para una respuesta más rápida, incluye el nombre de la app o herramienta, dispositivo o contexto Revit, lo esperado y lo ocurrido.",
    "Support routes": "Rutas de soporte",
    "What to include": "Que incluir",
    "Padel Score": "Padel Score",
    "Keep score from your wrist.": "Lleva el marcador desde la muñeca.",
    "Padel Score is a minimal app for keeping padel and tennis score from a Huawei Watch. It works offline, saves matches locally, and keeps match controls available during play.": "Padel Score es una app mínima para llevar el marcador de pádel y tenis desde un Huawei Watch. Funciona offline, guarda partidos localmente y mantiene los controles disponibles durante el juego.",
    "Screenshots": "Capturas",
    "Features": "Funciones",
    "How it works": "Cómo funciona",
    "Availability": "Disponibilidad",
    "Focused on Huawei Watch": "Enfocada en Huawei Watch",
    "Reservas Padel Salchi": "Reservas Padel Salchi",
    "Private reservation system for a community padel court.": "Sistema privado de reservas para una pista comunitaria de padel.",
    "What it includes": "Que incluye",
    "Screens": "Pantallas",
    "Last updated: 2 June 2026": "Última actualización: 2 de junio de 2026",
    "Skip to content": "Saltar al contenido",
    "Menvic apps": "Apps de Menvic",
    "App page standard": "Estándar de página de app",
    "Public app entries should answer three questions quickly: platform, core task, and support route.": "Las fichas públicas de apps deben responder rápido a tres preguntas: plataforma, tarea principal y ruta de soporte.",
    "Compatibility": "Compatibilidad",
    "Device, OS, or deployment context.": "Dispositivo, sistema operativo o contexto de despliegue.",
    "Policy and support": "Política y soporte",
    "Privacy, contact, and data request links.": "Enlaces de privacidad, contacto y solicitudes de datos.",
    "Huawei Watch app": "App para Huawei Watch",
    "A minimal padel and tennis scorekeeper for Huawei Watch and HarmonyOS. It handles match scoring from the wrist, works offline, and keeps match history local.": "Un marcador minimalista de pádel y tenis para Huawei Watch y HarmonyOS. Gestiona el tanteo desde la muñeca, funciona sin conexión y mantiene el historial de partidos en local.",
    "No login, no account registration, no payments, no network access, and no personal data collection.": "Sin inicio de sesión, sin registro de cuenta, sin pagos, sin acceso a red y sin recopilación de datos personales.",
    "Private web app": "App web privada",
    "A private reservation management web app for a community padel court, including booking flow, PIN management, and simple administration tools.": "Una app web privada para gestionar reservas de una pista comunitaria de pádel, con flujo de reservas, gestión de PIN y herramientas sencillas de administración.",
    "Private project. The public page is only a preview with selected screenshots.": "Proyecto privado. La página pública es solo una vista previa con capturas seleccionadas.",
    "Future apps": "Apps futuras",
    "Planned": "Planificado",
    "Additional apps may be added when they have a stable scope, a clear user need, and a support page that can be maintained.": "Se podrán añadir más apps cuando tengan un alcance estable, una necesidad de usuario clara y una página de soporte mantenible.",
    "Public description before listing.": "Descripción pública antes de aparecer en el listado.",
    "Privacy and support route when required.": "Ruta de privacidad y soporte cuando sea necesaria.",
    "Compatibility notes kept visible.": "Notas de compatibilidad siempre visibles.",
    "PadelScoreGT5 privacy": "Privacidad de PadelScoreGT5",
    "PadelScoreGT5 Privacy Policy": "Política de privacidad de PadelScoreGT5",
    "PadelScoreGT5 Support": "Soporte de PadelScoreGT5",
    "General support": "Soporte general",
    "pyMenvic is a collection of independent tools and resources by Menvic.": "pyMenvic es una colección de herramientas y recursos independientes de Menvic.",
    "pyMenvic is a collection of BIM / Revit tools, practical apps, and learning resources by Menvic.": "pyMenvic es una colección de herramientas BIM / Revit, apps prácticas y recursos de aprendizaje de Menvic.",
    "Support:": "Soporte:",
    "Padel Score | pyMenvic Apps": "Padel Score | Apps de pyMenvic",
    "Coming soon": "Próximamente",
    "View features": "Ver funciones",
    "Real app screens in interactive cards. Hover or focus a card to flip it and read what that screen does.": "Pantallas reales de la app en tarjetas interactivas. Pasa el cursor o enfoca una tarjeta para girarla y leer qué hace esa pantalla.",
    "Start from the watch": "Inicio desde el reloj",
    "Open the app, start a match, check history, or adjust match settings.": "Abre la app, inicia un partido, consulta el historial o ajusta la configuración.",
    "Live scoring": "Tanteo en directo",
    "Tap the team that wins the point and follow games, sets, time, and serving indicator.": "Toca el equipo que gana el punto y sigue juegos, sets, tiempo e indicador de saque.",
    "Match settings": "Configuración del partido",
    "Choose 40-40 behavior, 6-6 behavior, and vibration preferences.": "Elige el comportamiento en 40-40, en 6-6 y las preferencias de vibración.",
    "Serve selection": "Selección de saque",
    "Select who serves first before the match starts.": "Selecciona quién saca primero antes de empezar el partido.",
    "Deuce moments": "Momentos de deuce",
    "Follow advantage or golden point situations without dense controls during play.": "Sigue situaciones de ventaja o punto de oro sin controles densos durante el juego.",
    "Deciding set": "Set decisivo",
    "Keep the final set readable when the match is tight and every point matters.": "Mantén legible el set final cuando el partido está ajustado y cada punto importa.",
    "Local history": "Historial local",
    "Review recent matches stored locally on the watch.": "Consulta partidos recientes guardados localmente en el reloj.",
    "Final result": "Resultado final",
    "Finish the match and see the final sets summary clearly.": "Finaliza el partido y consulta con claridad el resumen de sets.",
    "Hover to return": "Pasa el cursor para volver",
    "Core functions for tracking a match from the watch without account setup or network access.": "Funciones principales para seguir un partido desde el reloj sin configurar cuentas ni acceso a red.",
    "One-tap scoring": "Tanteo con un toque",
    "Tap the team that wins the point and keep the marker moving without phone interaction.": "Toca el equipo que gana el punto y mantén el marcador avanzando sin usar el teléfono.",
    "Auto-save & resume": "Autoguardado y reanudación",
    "Matches are saved locally so you can pause and resume without rebuilding the score.": "Los partidos se guardan localmente para que puedas pausar y reanudar sin reconstruir el marcador.",
    "Padel/Tennis rules": "Reglas de pádel/tenis",
    "Best of 3 or best of 5, Advantage, Golden Point, Win by 2, and tie-break at 6-6.": "Mejor de 3 o mejor de 5, ventaja, punto de oro, ganar por 2 y tie-break en 6-6.",
    "Local match history": "Historial local de partidos",
    "Review recent matches stored on the watch, without accounts or cloud sync.": "Consulta partidos recientes guardados en el reloj, sin cuentas ni sincronización en la nube.",
    "Undo / pause / finish": "Deshacer / pausar / finalizar",
    "Correct a point, pause a match, or finish cleanly from dedicated watch controls.": "Corrige un punto, pausa un partido o finaliza limpiamente desde controles dedicados en el reloj.",
    "Offline by design": "Diseñada para funcionar sin conexión",
    "Designed to work on court without network access, login, or external services.": "Diseñada para funcionar en pista sin acceso a red, inicio de sesión ni servicios externos.",
    "A short flow for starting a match from the watch.": "Un flujo breve para iniciar un partido desde el reloj.",
    "Install on Huawei Watch": "Instalar en Huawei Watch",
    "Use the compatible Huawei Watch / HarmonyOS installation path for your region.": "Usa la ruta de instalación compatible con Huawei Watch / HarmonyOS para tu región.",
    "Open Padel Score": "Abrir Padel Score",
    "Launch the app directly from the watch.": "Inicia la app directamente desde el reloj.",
    "Set match format": "Configurar formato del partido",
    "Choose best of 3 or best of 5 and the scoring rule for the match.": "Elige mejor de 3 o mejor de 5 y la regla de tanteo del partido.",
    "Choose who serves first": "Elegir quién saca primero",
    "Set the first server and follow the serve indicator during play.": "Define el primer sacador y sigue el indicador de saque durante el juego.",
    "Tap the team that wins the point": "Tocar el equipo que gana el punto",
    "The score updates from the wrist, including tie-breaks at 6-6.": "El marcador se actualiza desde la muñeca, incluidos los tie-breaks en 6-6.",
    "Padel Score is currently focused on Huawei Watch / HarmonyOS. Availability may depend on Huawei AppGallery region and device compatibility.": "Padel Score está enfocado actualmente en Huawei Watch / HarmonyOS. La disponibilidad puede depender de la región de Huawei AppGallery y de la compatibilidad del dispositivo.",
    "Focused on Huawei Watch. Other platforms may be evaluated later.": "Enfocada en Huawei Watch. Otras plataformas podrán evaluarse más adelante.",
    "Reservas Padel Salchi | pyMenvic Apps": "Reservas Padel Salchi | Apps de pyMenvic",
    "Project preview": "Vista previa del proyecto",
    "Private reservation system for the La Salchi community padel court.": "Sistema privado de reservas para la pista comunitaria de pádel de La Salchi.",
    "The live app is not linked from this page.": "La app en producción no está enlazada desde esta página.",
    "The screenshots show the booking flow, PIN management, administration tools, and reports.": "Las capturas muestran el flujo de reservas, la gestión de PIN, las herramientas de administración y los informes.",
    "This page is a visual preview of an internal web application by Menvic. It helps residents reserve court time, manage PIN access, and handle simple administration tasks from a clear browser interface.": "Esta página es una vista previa visual de una aplicación web interna de Menvic. Ayuda a los residentes a reservar la pista, gestionar el acceso por PIN y realizar tareas sencillas de administración desde una interfaz web clara.",
    "A simple interface focused on reservation flow, privacy, and lightweight administration.": "Una interfaz sencilla centrada en el flujo de reservas, la privacidad y una administración ligera.",
    "Reservation flow": "Flujo de reserva",
    "Residents can select an available day and time slot, then confirm the reservation with their portal, vivienda, and PIN.": "Los residentes pueden seleccionar un día y una franja disponible, y confirmar la reserva con su portal, vivienda y PIN.",
    "Cancellation and slot status": "Cancelación y estado de franjas",
    "The system distinguishes available, selected, and reserved slots, and supports reservation cancellation.": "El sistema distingue franjas disponibles, seleccionadas y reservadas, y permite cancelar reservas.",
    "PIN management": "Gestión de PIN",
    "Users can update their vivienda PIN from a dedicated page designed for first access or later changes.": "Los usuarios pueden actualizar el PIN de su vivienda desde una página dedicada para el primer acceso o cambios posteriores.",
    "Admin and reports": "Administración e informes",
    "An internal administration area supports PIN reset, cleanup actions, and simple reservation reporting.": "Un área interna de administración permite restablecer PIN, realizar acciones de limpieza y consultar informes sencillos de reservas.",
    "Real screenshots from the project, showing the reservation workflow and internal management screens.": "Capturas reales del proyecto que muestran el flujo de reservas y las pantallas internas de gestión.",
    "Reservation selection": "Selección de reserva",
    "Main reservation page with calendar, available slots, and confirmation panel.": "Página principal de reservas con calendario, franjas disponibles y panel de confirmación.",
    "Occupied and available slots": "Franjas ocupadas y disponibles",
    "Status-based slot display with selected, free, and reserved time ranges.": "Visualización de franjas por estado, con rangos seleccionados, libres y reservados.",
    "Cancellation flow": "Flujo de cancelación",
    "Dedicated confirmation state for cancelling an existing reservation.": "Estado de confirmación dedicado para cancelar una reserva existente.",
    "Change PIN": "Cambiar PIN",
    "Simple PIN update page for vivienda access management.": "Página sencilla para actualizar el PIN de acceso de la vivienda.",
    "Administration": "Administración",
    "Internal panel for PIN reset and reservation cleanup operations.": "Panel interno para restablecer PIN y realizar operaciones de limpieza de reservas.",
    "Reports": "Informes",
    "Administrative reporting view with summary cards and reservation details.": "Vista de informes administrativos con tarjetas de resumen y detalles de reservas.",
    "This page is a visual documentation page only. It does not link to the live private app.": "Esta página es solo documentación visual. No enlaza con la app privada en producción.",
    "pyMenvic / pyRevit utilities": "Utilidades pyMenvic / pyRevit",
    "Install pyMenvic": "Instalar pyMenvic",
    "Request setup access": "Solicitar acceso de instalación",
    "For Windows environments using Revit and pyRevit.": "Para entornos Windows que usan Revit y pyRevit.",
    "Need help with setup, access token or office configuration? Contact Menvic.": "¿Necesitas ayuda con la instalación, el token de acceso o la configuración de oficina? Contacta con Menvic.",
    "Current status": "Estado actual",
    "The Windows installer is available from the official pyMenvic GitHub release. Use it only for pyRevit / Revit tool setup.": "El instalador de Windows está disponible desde la release oficial de pyMenvic en GitHub. Úsalo solo para configurar herramientas pyRevit / Revit.",
    "Production utilities": "Utilidades de producción",
    "Task automation, model review, and documentation support.": "Automatización de tareas, revisión de modelos y soporte de documentación.",
    "Office standards": "Estándares de oficina",
    "Repeatable checks, naming patterns, and practical QA guidance.": "Comprobaciones repetibles, patrones de nomenclatura y guía práctica de QA.",
    "Revit tools showcase": "Muestra de herramientas Revit",
    "A focused look at the main pyMenvic utilities for Revit production, coordination, worksets, documentation, and model setup.": "Una mirada centrada a las principales utilidades pyMenvic para producción Revit, coordinación, worksets, documentación y configuración de modelos.",
    "Schedules": "Planificaciones",
    "Publishing": "Publicación",
    "Coordination": "Coordinación",
    "Worksets": "Worksets",
    "Standards": "Estándares",
    "Mapping": "Mapeo",
    "Audit": "Auditoría",
    "Views": "Vistas",
    "Documentation": "Documentación",
    "Screenshot pending": "Captura pendiente",
    "Browse Revit schedules, inspect fields, understand editable and non-editable data, and export schedule data and schema to Excel for review.": "Explora tablas de planificación de Revit, inspecciona campos, distingue datos editables y no editables, y exporta datos y esquema a Excel para revisión.",
    "Prepare sheet sets for printing and export. Organize sheets by discipline, manage revision-based naming, and support PDF, DWG and DXF export workflows.": "Prepara conjuntos de planos para impresión y exportación. Organiza planos por disciplina, gestiona nomenclatura por revisión y soporta flujos PDF, DWG y DXF.",
    "Review Revit links and assign instance/type worksets using discipline-based suggestions to keep linked models organized.": "Revisa vínculos Revit y asigna worksets de instancia/tipo mediante sugerencias por disciplina para mantener organizados los modelos vinculados.",
    "Scan loaded Revit links, detect worksets used by linked models, identify missing host worksets, and create required worksets when needed.": "Analiza vínculos Revit cargados, detecta worksets usados por modelos vinculados, identifica worksets faltantes en el anfitrión y crea los necesarios cuando haga falta.",
    "Apply office workset naming standards across disciplines such as Architecture, Structure, Mechanical, Electrical, Plumbing, Site, Low Power and Rebars.": "Aplica estándares de nomenclatura de worksets de oficina en disciplinas como Arquitectura, Estructura, Mecánica, Electricidad, Fontanería, Sitio, Baja Tensión y Armaduras.",
    "Manage mapping rules between detected model content, disciplines and target worksets for consistent workset assignment.": "Gestiona reglas de mapeo entre contenido detectado del modelo, disciplinas y worksets de destino para una asignación coherente.",
    "Audit coordination elements such as levels, grids and scope boxes to verify correct workset assignment.": "Audita elementos de coordinación como niveles, rejillas y cajas de referencia para verificar la asignación correcta de worksets.",
    "Review and organize Revit view types to support cleaner project setup, naming consistency and model management.": "Revisa y organiza tipos de vista de Revit para mejorar la configuración del proyecto, la coherencia de nombres y la gestión del modelo.",
    "Browse detail families loaded in the project, preview drafting components and support faster detail documentation workflows.": "Explora familias de detalle cargadas en el proyecto, previsualiza componentes de dibujo y acelera flujos de documentación de detalles.",
    "Publishing rule": "Regla de publicación",
    "Until a Revit tool is ready for public use, this page will describe the intended direction and route visitors to support or learning material.": "Hasta que una herramienta Revit esté lista para uso público, esta página describirá la dirección prevista y dirigirá a los visitantes a soporte o material de aprendizaje.",
    "For tool questions, workflow support, or pyRevit collaboration, use the support page or contact Menvic directly.": "Para preguntas sobre herramientas, soporte de flujos de trabajo o colaboración pyRevit, usa la página de soporte o contacta directamente con Menvic.",
    "Notes / guides / workflows": "Notas / guías / flujos de trabajo",
    "Resources here should be useful without becoming a course platform. The goal is reference material that helps users understand how a tool or workflow is intended to be used.": "Los recursos deben ser útiles sin convertirse en una plataforma de cursos. El objetivo es material de referencia que ayude a entender cómo debe usarse una herramienta o flujo de trabajo.",
    "Revit tool area": "Área de herramientas Revit",
    "Ask for support": "Solicitar soporte",
    "Format": "Formato",
    "Short, practical resources. No accounts, checkout, paid course area, or hidden learning portal.": "Recursos breves y prácticos. Sin cuentas, pagos, área de cursos de pago ni portal oculto de aprendizaje.",
    "Workflows": "Flujos de trabajo",
    "Step-by-step notes for recurring production tasks.": "Notas paso a paso para tareas recurrentes de producción.",
    "References": "Referencias",
    "Checklists, examples, and implementation notes.": "Listas de comprobación, ejemplos y notas de implementación.",
    "The learning route is structured around practical lookup: what the note covers, who it helps, and which public route it relates to.": "La ruta de aprendizaje está estructurada para consulta práctica: qué cubre la nota, a quién ayuda y con qué ruta pública se relaciona.",
    "Revit workflows": "Flujos de trabajo Revit",
    "Production notes for Revit-based architecture work.": "Notas de producción para trabajo arquitectónico basado en Revit.",
    "Related /revit-tools/": "Relacionado /revit-tools/",
    "BIM documentation": "Documentación BIM",
    "Coordination, auditing, documentation, and standards references.": "Referencias de coordinación, auditoría, documentación y estándares.",
    "pyRevit automation": "Automatización pyRevit",
    "Examples and patterns for automating repetitive Revit tasks.": "Ejemplos y patrones para automatizar tareas repetitivas de Revit.",
    "App notes": "Notas de apps",
    "Support page patterns, static site notes, and app documentation details.": "Patrones de páginas de soporte, notas de sitio estático y detalles de documentación de apps.",
    "Related /apps/": "Relacionado /apps/",
    "Learning content should be short enough to maintain and specific enough to help someone complete a task or understand a decision.": "El contenido de aprendizaje debe ser lo bastante breve para mantenerse y lo bastante específico para ayudar a completar una tarea o entender una decisión.",
    "Guides": "Guías",
    "A guide should describe a real workflow, not a broad topic category.": "Una guía debe describir un flujo de trabajo real, no una categoría temática amplia.",
    "Notes": "Notas",
    "A note can capture a technical decision, limitation, naming rule, or checklist.": "Una nota puede recoger una decisión técnica, limitación, regla de nomenclatura o lista de comprobación.",
    "Examples": "Ejemplos",
    "An example should connect to a tool, route, or support scenario already present on the site.": "Un ejemplo debe conectar con una herramienta, ruta o escenario de soporte ya presente en el sitio.",
    "Support / policies / contact": "Soporte / políticas / contacto",
    "General contact": "Contacto general",
    "Compatibility, privacy, support, and data request questions.": "Preguntas de compatibilidad, privacidad, soporte y solicitudes de datos.",
    "Workflow support, pyRevit questions, and tool availability.": "Soporte de flujos de trabajo, preguntas sobre pyRevit y disponibilidad de herramientas.",
    "Choose the route that matches the question. Public policy and app support pages are linked directly for reviewers and users.": "Elige la ruta que coincida con la pregunta. Las páginas públicas de políticas y soporte de apps están enlazadas directamente para revisores y usuarios.",
    "Email": "Email",
    "For general support, privacy questions, app feedback, or pyMenvic inquiries, contact Menvic directly.": "Para soporte general, preguntas de privacidad, feedback de apps o consultas sobre pyMenvic, contacta directamente con Menvic.",
    "Public routes": "Rutas públicas",
    "Open public app pages for product details, screenshots, support links, and app-specific policy information.": "Abre páginas públicas de apps para ver detalles del producto, capturas, enlaces de soporte e información de políticas específicas.",
    "Padel Salchi preview": "Vista previa de Padel Salchi",
    "PadelScoreGT5 works offline and does not collect or store personal data. Use the public support route for app questions or data requests.": "PadelScoreGT5 funciona sin conexión y no recopila ni almacena datos personales. Usa la ruta pública de soporte para preguntas sobre la app o solicitudes de datos.",
    "For pyMenvic Revit tools, pyRevit utilities, workflow support, or availability questions, use the Revit route or contact Menvic.": "Para herramientas Revit de pyMenvic, utilidades pyRevit, soporte de flujos de trabajo o preguntas de disponibilidad, usa la ruta Revit o contacta con Menvic.",
    "Precise support requests are easier to answer. Add the relevant context when contacting Menvic.": "Las solicitudes de soporte precisas son más fáciles de responder. Añade el contexto relevante al contactar con Menvic.",
    "For app questions": "Para preguntas sobre apps",
    "App name, device model, OS version if known, and the screen or action involved.": "Nombre de la app, modelo del dispositivo, versión del sistema operativo si se conoce y la pantalla o acción implicada.",
    "For Revit tool questions": "Para preguntas sobre herramientas Revit",
    "Revit version, pyRevit context, tool name if known, and a short description of the workflow.": "Versión de Revit, contexto pyRevit, nombre de la herramienta si se conoce y una breve descripción del flujo de trabajo.",
    "For privacy questions": "Para preguntas de privacidad",
    "Name the app or page, then describe the request clearly. Do not include unnecessary sensitive data.": "Indica la app o página y describe la solicitud con claridad. No incluyas datos sensibles innecesarios.",
    "Privacy Policy - PadelScoreGT5": "Política de privacidad - PadelScoreGT5",
    "Support and Data Requests - PadelScoreGT5": "Soporte y solicitudes de datos - PadelScoreGT5",
    "1. Overview": "1. Resumen",
    "2. Personal data collection and use": "2. Recopilación y uso de datos personales",
    "3. Purpose, method, and scope of data processing": "3. Finalidad, método y alcance del tratamiento de datos",
    "4. Device functions and permissions": "4. Funciones del dispositivo y permisos",
    "5. Third parties, SDKs, advertising, and OAID": "5. Terceros, SDKs, publicidad y OAID",
    "6. User rights and privacy requests": "6. Derechos del usuario y solicitudes de privacidad",
    "7. Consent and withdrawal": "7. Consentimiento y retirada",
    "8. Children": "8. Menores",
    "9. Changes to this policy": "9. Cambios en esta política",
    "10. Data retention": "10. Conservación de datos",
    "11. Opt-out": "11. Exclusión voluntaria",
    "PadelScoreGT5 is a simple padel scorekeeper for Huawei Watch. The app works locally on the device and is used only to keep the score of a padel match.": "PadelScoreGT5 es un marcador sencillo de pádel para Huawei Watch. La app funciona localmente en el dispositivo y se utiliza únicamente para llevar el marcador de un partido de pádel.",
    "PadelScoreGT5 does not collect, store, share, sell, transmit, or disclose personal data.": "PadelScoreGT5 no recopila, almacena, comparte, vende, transmite ni divulga datos personales.",
    "The app does not require login, account registration, internet connection, location access, contacts, microphone, camera, payment information, health data, biometric data, call logs, SMS messages, or user-generated content.": "La app no requiere inicio de sesión, registro de cuenta, conexión a internet, acceso a ubicación, contactos, micrófono, cámara, información de pago, datos de salud, datos biométricos, registros de llamadas, mensajes SMS ni contenido generado por usuarios.",
    "Because the app does not collect personal data, there is no purpose, method, or scope of personal data collection or use.": "Como la app no recopila datos personales, no existe finalidad, método ni alcance de recopilación o uso de datos personales.",
    "The score entered by the user is used only temporarily inside the app to display the current match score on the watch screen. This information is not transmitted to the developer or to any third party.": "El marcador introducido por el usuario se utiliza solo de forma temporal dentro de la app para mostrar el resultado actual del partido en la pantalla del reloj. Esta información no se transmite al desarrollador ni a terceros.",
    "The app may use short vibration feedback only to confirm user interactions when adding points. No personal information is collected through this function.": "La app puede usar una vibración corta únicamente para confirmar interacciones del usuario al sumar puntos. No se recopila información personal mediante esta función.",
    "The app does not request sensitive permissions.": "La app no solicita permisos sensibles.",
    "PadelScoreGT5 does not use third-party advertising SDKs, analytics SDKs, marketing tools, or tracking technologies.": "PadelScoreGT5 no utiliza SDKs publicitarios de terceros, SDKs de analítica, herramientas de marketing ni tecnologías de seguimiento.",
    "The app does not use the Open Advertising Identifier (OAID) and does not provide personalized advertising.": "La app no utiliza el Open Advertising Identifier (OAID) y no ofrece publicidad personalizada.",
    "Since PadelScoreGT5 does not collect or store personal data, there is no personal data stored by the app that can be accessed, corrected, copied, exported, deleted, or transferred.": "Dado que PadelScoreGT5 no recopila ni almacena datos personales, la app no conserva datos personales que puedan ser accedidos, corregidos, copiados, exportados, eliminados o transferidos.",
    "If you have any privacy question, data subject rights request, or support request, you can contact us at:": "Para consultas de privacidad, solicitudes relacionadas con derechos de datos o soporte, puedes contactar en:",
    "The app does not request consent for personal data processing because it does not collect or process personal data. If this changes in the future, this policy will be updated and any required consent will be requested before processing personal data.": "La app no solicita consentimiento para el tratamiento de datos personales porque no recopila ni procesa datos personales. Si esto cambia en el futuro, esta política se actualizará y se solicitará cualquier consentimiento requerido antes de tratar datos personales.",
    "PadelScoreGT5 is suitable for general audiences but is not specifically directed only to children. The app does not knowingly collect personal data from children.": "PadelScoreGT5 es apta para público general, pero no está dirigida exclusivamente a menores. La app no recopila deliberadamente datos personales de menores.",
    "This Privacy Policy may be updated if the app changes its functionality. The latest version will always be available on this page.": "Esta Política de Privacidad podrá actualizarse si la app cambia sus funcionalidades. La versión más reciente estará siempre disponible en esta página.",
    "PadelScoreGT5 does not retain personal data because the app does not collect or store personal data. Match score information is temporary and remains only on the device while the app is being used.": "PadelScoreGT5 no conserva datos personales porque la app no recopila ni almacena datos personales. La información del marcador es temporal y permanece únicamente en el dispositivo mientras se usa la app.",
    "Since the app does not collect personal data, no opt-out mechanism is required. Users can stop using the app at any time by uninstalling it from their device.": "Como la app no recopila datos personales, no se requiere ningún mecanismo de exclusión. Los usuarios pueden dejar de usar la app en cualquier momento desinstalándola de su dispositivo.",
    "PadelScoreGT5 does not collect or store personal data. Therefore, there is no personal data stored by the app that can be accessed, corrected, exported, or deleted.": "PadelScoreGT5 no recopila ni almacena datos personales. Por lo tanto, la app no conserva datos personales que puedan ser accedidos, corregidos, exportados o eliminados.",
    "For support questions, privacy questions, or data subject rights requests, contact:": "Para soporte, consultas de privacidad o solicitudes relacionadas con derechos de datos, contacta en:",
    "Zoom": "Ampliar",
    "Expanded screenshot preview": "Vista ampliada de la captura",
    "Close expanded screenshot": "Cerrar captura ampliada",
    "Screenshot preview": "Vista previa de captura"
  };

  function translateValue(value, locale) {
    return locale === "es" && es[value] ? es[value] : value;
  }

  function translateNode(node, locale) {
    var key = node.dataset.i18n;

    if (!key) {
      if (!node.dataset.i18nOriginal) {
        node.dataset.i18nOriginal = node.textContent.trim();
      }

      key = node.dataset.i18nOriginal;
    }

    node.textContent = translateValue(key, locale);
  }

  function translateTextChildren(node, locale) {
    Array.prototype.forEach.call(node.childNodes, function (child, index) {
      if (child.nodeType !== 3 || !child.textContent.trim()) {
        return;
      }

      var originalKey = "i18nText" + index;
      if (!node.dataset[originalKey]) {
        node.dataset[originalKey] = child.textContent;
      }

      var original = node.dataset[originalKey];
      var trimmed = original.trim();
      var leading = original.match(/^\s*/)[0];
      var trailing = original.match(/\s*$/)[0];
      child.textContent = leading + translateValue(trimmed, locale) + trailing;
    });
  }

  function translateAttributes(locale) {
    document.querySelectorAll("[data-i18n-attr]").forEach(function (node) {
      node.dataset.i18nAttr.split(",").forEach(function (name) {
        var attr = name.trim();
        if (!attr) {
          return;
        }

        var originalKey = "i18nOriginal" + attr.replace(/[^a-z0-9]/gi, "_");
        var value = node.getAttribute(attr);
        if (!node.dataset[originalKey] && value) {
          node.dataset[originalKey] = value;
        }

        var original = node.dataset[originalKey];
        if (original) {
          node.setAttribute(attr, translateValue(original, locale));
        }
      });
    });
  }

  function updateLanguageBlocks(locale) {
    document.querySelectorAll("[data-i18n-lang]").forEach(function (node) {
      node.hidden = node.dataset.i18nLang !== locale;
    });
  }

  function apply(locale) {
    current = locale;
    localStorage.setItem(key, locale);
    document.documentElement.lang = locale;
    updateLanguageBlocks(locale);

    document.querySelectorAll("[data-i18n],h1,h2,h3,p,a,button,strong,small,span,li").forEach(function (node) {
      if (node.closest("script,style") || node.classList.contains("language-toggle")) {
        return;
      }

      if (node.dataset.i18n || node.children.length === 0 && node.textContent.trim()) {
        translateNode(node, locale);
      } else {
        translateTextChildren(node, locale);
      }
    });

    translateAttributes(locale);

    document.querySelectorAll(".language-toggle").forEach(function (button) {
      button.innerHTML =
        '<span class="' + (locale === "es" ? "is-active" : "") + '">ES</span>' +
        '<span class="language-separator">/</span>' +
        '<span class="' + (locale === "en" ? "is-active" : "") + '">EN</span>';
      button.setAttribute("aria-label", locale === "es" ? "Cambiar idioma a ingles" : "Switch language to Spanish");
    });
  }

  function installToggle() {
    if (document.querySelector(".language-toggle")) {
      return;
    }

    var button = document.createElement("button");
    button.className = "language-toggle";
    button.type = "button";
    button.addEventListener("click", function () {
      apply(current === "es" ? "en" : "es");
    });

    var nav = document.querySelector(".top-nav");
    if (nav) {
      nav.appendChild(button);
    } else {
      document.body.appendChild(button);
    }
  }

  function installImageZoom() {
    var selector = [
      ".zoom-trigger",
      ".salchi-screen-card .screen-front img",
      ".screen-card .screen-front img",
      ".app-media img",
      ".tool-preview-frame img"
    ].join(",");
    var zoomTargets = Array.prototype.slice.call(document.querySelectorAll(selector)).filter(function (target) {
      return !(target.tagName === "IMG" && target.closest(".zoom-trigger"));
    });

    if (!zoomTargets.length) {
      return;
    }

    var dialog = document.querySelector(".image-zoom-dialog");
    if (!dialog) {
      dialog = document.createElement("dialog");
      dialog.className = "image-zoom-dialog";
      dialog.setAttribute("aria-label", "Expanded screenshot preview");
      dialog.innerHTML =
        '<div class="image-zoom-shell">' +
        '<button class="image-zoom-close" type="button" aria-label="Close expanded screenshot">&times;</button>' +
        '<img src="" alt="">' +
        '<p class="image-zoom-caption"></p>' +
        '</div>';
      document.body.appendChild(dialog);
    }

    var zoomImage = dialog.querySelector("img");
    var zoomCaption = dialog.querySelector(".image-zoom-caption");
    var zoomClose = dialog.querySelector(".image-zoom-close");
    var zoomSelector = selector;

    function imageFor(target) {
      return target.tagName === "IMG" ? target : target.querySelector("img");
    }

    function captionFor(target) {
      var image = imageFor(target);
      var card = target.closest(".screen-card, .app-card, .tool-flip-card");
      var heading = card && card.querySelector("h3");
      return (heading && heading.textContent.trim()) || (image && image.alt) || "Screenshot preview";
    }

    function openZoom(target) {
      var image = imageFor(target);
      if (!image || !image.currentSrc && !image.src) {
        return;
      }

      zoomImage.src = image.currentSrc || image.src;
      zoomImage.alt = image.alt || "";
      zoomCaption.textContent = captionFor(image);

      if (!dialog.open) {
        dialog.showModal();
      }
    }

    if (!dialog.dataset.zoomCaptureInstalled) {
      dialog.dataset.zoomCaptureInstalled = "true";
      document.addEventListener("click", function (event) {
        var target = event.target.closest(zoomSelector);
        if (!target) {
          return;
        }

        if (target.tagName === "IMG" && target.closest(".zoom-trigger")) {
          target = target.closest(".zoom-trigger");
        }

        if (!target.dataset.zoomInstalled) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();
        openZoom(target);
      }, true);
    }

    zoomTargets.forEach(function (target) {
      if (target.dataset.zoomInstalled) {
        return;
      }

      target.dataset.zoomInstalled = "true";

      if (target.tagName !== "BUTTON") {
        target.setAttribute("tabindex", "0");
        target.setAttribute("role", "button");
      }

      target.setAttribute("aria-label", "Zoom " + captionFor(target));

      target.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        openZoom(target);
      });

      target.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          event.stopPropagation();
          openZoom(target);
        }
      });
    });

    if (!dialog.dataset.zoomInstalled) {
      dialog.dataset.zoomInstalled = "true";
      zoomClose.addEventListener("click", function () {
        dialog.close();
      });
      dialog.addEventListener("click", function (event) {
        if (event.target === dialog) {
          dialog.close();
        }
      });
      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && dialog.open) {
          dialog.close();
        }
      });
    }
  }

  installToggle();
  apply(current);
  installImageZoom();
})();
