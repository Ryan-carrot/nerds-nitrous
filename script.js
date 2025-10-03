/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("nav-links");
  x.classList.toggle("show");
}

// Trigger gallery and mission animations on scroll
// Unified scroll/visibility handler for multiple targets
document.addEventListener("DOMContentLoaded", function () {
  const targets = [
    { selector: ".gallery-grid", className: "slide-in-fwd-center" },
    { selector: ".values-mission", className: "slide-in-right" },
  ];

  // Adjust this offset to trigger earlier/later (px from bottom)
  const triggerOffset = 50;

  function checkVisibility() {
    const vh = window.innerHeight;

    targets.forEach((t) => {
      const nodes = document.querySelectorAll(t.selector);
      nodes.forEach((el) => {
        // skip if already animated
        if (el.dataset.animated === "true") return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= vh - triggerOffset) {
          addClass(el, t.className);
          el.dataset.animated = "true";
        }
      });
    });
  }

  // run on load in case elements are already visible
  checkVisibility();

  // run on scroll and resize
  window.addEventListener("scroll", checkVisibility, { passive: true });
  window.addEventListener("resize", checkVisibility);
});

function addClass(element, className) {
    const arrayClasses = element.className.split(" ");
    if (arrayClasses.indexOf(className) === -1) {
        element.className += " " + className;
    }
}