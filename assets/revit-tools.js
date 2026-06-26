(function () {
  var cards = Array.prototype.slice.call(document.querySelectorAll("[data-tool-card]"));

  function setCard(card, expanded) {
    var button = card.querySelector("[data-tool-toggle]");
    var detail = button ? document.getElementById(button.getAttribute("aria-controls")) : null;

    if (!button || !detail) {
      return;
    }

    card.classList.toggle("is-expanded", expanded);
    button.setAttribute("aria-expanded", expanded ? "true" : "false");
    button.textContent = expanded ? "Hide details" : "View details";
    detail.hidden = !expanded;
  }

  function closeAll(exceptCard) {
    cards.forEach(function (card) {
      if (card !== exceptCard) {
        setCard(card, false);
      }
    });
  }

  cards.forEach(function (card) {
    var button = card.querySelector("[data-tool-toggle]");
    var closeButton = card.querySelector("[data-tool-close]");

    if (button) {
      button.addEventListener("click", function () {
        var isExpanded = button.getAttribute("aria-expanded") === "true";
        closeAll(card);
        setCard(card, !isExpanded);
      });
    }

    if (closeButton) {
      closeButton.addEventListener("click", function () {
        setCard(card, false);
        if (button) {
          button.focus();
        }
      });
    }
  });
})();
