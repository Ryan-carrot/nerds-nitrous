/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("nav-links");
  x.classList.toggle("show");
}

// jQuery to check scroll position to trigger animation
document.addEventListener("DOMContentLoaded", function(event) {
    document.addEventListener("scroll", function(event) {
        const galleryGrids = document.getElementsByClassName("gallery-grid");
        const windowOffsetTop = window.innerHeight + window.scrollY;

        Array.prototype.forEach.call(galleryGrids, (galleryGrid) => {
            const galleryGridOffsetTop = galleryGrid.offsetTop;

            if (windowOffsetTop >= galleryGridOffsetTop) {
                addClass(galleryGrid, "slide-in-fwd-center");
            }
        });
    });
});

function addClass(element, className) {
    const arrayClasses = element.className.split(" ");
    if (arrayClasses.indexOf(className) === -1) {
        element.className += " " + className;
    }
}