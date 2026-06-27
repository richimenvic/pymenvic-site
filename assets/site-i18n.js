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
    "Privacy Policy": "Politica de privacidad",
    "View preview": "Ver preview",
    "Apps, Revit tools, and support pages in one place.": "Apps, herramientas Revit y soporte en un solo lugar.",
    "pyMenvic collects public material for Menvic software: pyRevit utilities, compact apps, support paths, privacy pages, and learning notes.": "pyMenvic reune material publico de Menvic: utilidades pyRevit, apps compactas, soporte, privacidad y notas de aprendizaje.",
    "Revit production tools remain the technical core. Apps are documented here when they need public support, policy, or preview pages.": "Las herramientas para produccion en Revit siguen siendo el nucleo tecnico. Las apps se documentan aqui cuando necesitan soporte publico, politicas o paginas de preview.",
    "Small tools with practical support pages.": "Pequenas herramientas con paginas de soporte practicas.",
    "This section lists standalone apps by Menvic. Each entry explains what it does, where it runs, and how to find support or policy details.": "Esta seccion lista apps independientes de Menvic. Cada entrada explica que hace, donde funciona y como encontrar soporte o politicas.",
    "Current public app information focuses on Padel Score. Private or internal tools appear only when a preview is useful and the scope is clear.": "La informacion publica actual se centra en Padel Score. Las herramientas privadas o internas aparecen solo cuando un preview es util y el alcance esta claro.",
    "Available apps": "Apps disponibles",
    "A short catalog of app pages that are ready to document publicly.": "Un catalogo corto de apps listas para documentarse publicamente.",
    "Support shortcuts": "Accesos rapidos de soporte",
    "Direct policy and support routes for app review, user questions, and data requests.": "Rutas directas a politicas y soporte para revision de apps, preguntas de usuarios y solicitudes de datos.",
    "The technical core for Revit production support.": "El nucleo tecnico para soporte de produccion en Revit.",
    "This area is reserved for Menvic Revit tools: pyRevit utilities, BIM checks, documentation helpers, and repeatable office workflow support.": "Esta area esta reservada para herramientas Revit de Menvic: utilidades pyRevit, revisiones BIM, ayudas de documentacion y soporte para flujos de oficina repetibles.",
    "The page is intentionally clear about status. Public tool information will appear here when a utility has a stable scope, support path, and documentation that can be maintained.": "La pagina es intencionalmente clara sobre el estado. La informacion publica aparecera aqui cuando una utilidad tenga alcance estable, ruta de soporte y documentacion mantenible.",
    "Planned tool areas": "Areas de herramientas previstas",
    "No fake downloads, no unsupported claims.": "Sin descargas falsas ni promesas sin soporte.",
    "Practical resources for tools and production workflows.": "Recursos practicos para herramientas y flujos de produccion.",
    "The learning area collects concise notes for Revit production, BIM documentation, pyRevit automation, app support, and small static web projects.": "El area de aprendizaje reune notas concisas para produccion Revit, documentacion BIM, automatizacion pyRevit, soporte de apps y pequenos proyectos web estaticos.",
    "Resource areas": "Areas de recursos",
    "Publishing approach": "Enfoque de publicacion",
    "Clear paths for app, Revit tool, and privacy support.": "Rutas claras para soporte de apps, herramientas Revit y privacidad.",
    "Use this page to reach Menvic support, open public app policy pages, or route a question about pyMenvic Revit tools and learning resources.": "Usa esta pagina para contactar con soporte de Menvic, abrir politicas publicas de apps o enviar preguntas sobre herramientas pyMenvic y recursos de aprendizaje.",
    "For faster handling, include the tool or app name, device or Revit context, what you expected, and what happened.": "Para una respuesta mas rapida, incluye el nombre de la app o herramienta, dispositivo o contexto Revit, lo esperado y lo ocurrido.",
    "Support routes": "Rutas de soporte",
    "What to include": "Que incluir",
    "Padel Score": "Padel Score",
    "Keep score from your wrist.": "Lleva el marcador desde la muneca.",
    "Padel Score is a minimal app for keeping padel and tennis score from a Huawei Watch. It works offline, saves matches locally, and keeps match controls available during play.": "Padel Score es una app minima para llevar el marcador de padel y tenis desde un Huawei Watch. Funciona offline, guarda partidos localmente y mantiene los controles disponibles durante el juego.",
    "Screenshots": "Capturas",
    "Features": "Funciones",
    "How it works": "Como funciona",
    "Availability": "Disponibilidad",
    "Focused on Huawei Watch": "Enfocada en Huawei Watch",
    "Reservas Padel Salchi": "Reservas Padel Salchi",
    "Private reservation system for a community padel court.": "Sistema privado de reservas para una pista comunitaria de padel.",
    "What it includes": "Que incluye",
    "Screens": "Pantallas",
    "Support and Data Requests - PadelScoreGT5": "Soporte y solicitudes de datos - PadelScoreGT5",
    "Privacy Policy - PadelScoreGT5": "Politica de privacidad - PadelScoreGT5",
    "Last updated: 2 June 2026": "Ultima actualizacion: 2 de junio de 2026"
  };

  function translateNode(node, locale) {
    if (!node.dataset.i18nOriginal) {
      node.dataset.i18nOriginal = node.textContent.trim();
    }

    var original = node.dataset.i18nOriginal;
    node.textContent = locale === "es" && es[original] ? es[original] : original;
  }

  function apply(locale) {
    current = locale;
    localStorage.setItem(key, locale);
    document.documentElement.lang = locale;

    document.querySelectorAll("h1,h2,h3,p,a,button,strong,small,span,li").forEach(function (node) {
      if (node.closest("script,style") || node.classList.contains("language-toggle")) {
        return;
      }

      if (node.children.length === 0 && node.textContent.trim()) {
        translateNode(node, locale);
      }
    });

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
    }
  }

  installToggle();
  apply(current);
  installImageZoom();
})();
