/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("nav-links");
  x.classList.toggle("show");
}

// jQuery to check scroll position to trigger fade in animation for gallery
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

// jQuery to check scroll position to trigger slide in animation for mission & values
document.addEventListener("DOMContentLoaded", function(event) {
    document.addEventListener("scroll", function(event) {
        const missionGrids = document.getElementsByClassName("values-mission");
        const windowOffsetTop = window.innerHeight + window.scrollY;

        Array.prototype.forEach.call(missionGrids, (missionGrid) => {
            const missionGridOffsetTop = missionGrid.offsetTop;

            if (windowOffsetTop >= missionGridOffsetTop) {
                addClass(missionGrid, "slide-in-right");
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