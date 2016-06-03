(function () {
  if (!window.addEventListener) return // Check for IE9+

  let options = INSTALL_OPTIONS
  let element

  function updateElement() {
    element = Eager.createElement(options.location, element)

    const buttonWrapper = document.createElement("a")
    const button = document.createElement("button")

    buttonWrapper.href = `mailto:${options.email}`
    button.className = "eager-email-button"
    button.style.backgroundColor = "#768d87"
    button.innerText = options.label

    buttonWrapper.appendChild(button)
    element.appendChild(buttonWrapper)
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateElement)
  }
  else {
    updateElement()
  }

  window.INSTALL_SCOPE = {
    setOptions(nextOptions) {
      options = nextOptions

      updateElement()
    }
  }
}())
