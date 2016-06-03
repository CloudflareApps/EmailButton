"use strict";

(function () {
  if (!window.addEventListener) return; // Check for IE9+

  var options = INSTALL_OPTIONS;
  var element = void 0;

  function updateElement() {
    element = Eager.createElement(options.location, element);

    var buttonWrapper = document.createElement("a");
    var button = document.createElement("button");

    buttonWrapper.href = "mailto:" + options.email;
    button.className = "eager-email-button";
    button.style.backgroundColor = "#768d87";
    button.innerText = options.label;

    buttonWrapper.appendChild(button);
    element.appendChild(buttonWrapper);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateElement);
  } else {
    updateElement();
  }

  window.INSTALL_SCOPE = {
    setOptions: function setOptions(nextOptions) {
      options = nextOptions;

      updateElement();
    }
  };
})();