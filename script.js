window.addEventListener("load", applyStyles);

function applyStyles() {
  var optionElements = document.querySelectorAll("option");

  if (optionElements.length > 0) {
    optionElements.forEach(function (element) {
      element.style.cssText = `
        background-color: hsla(194, 85%, 21%, 1);
        color: white;
        font-weight: 600;
      `;

    });
  
  
  }


}
