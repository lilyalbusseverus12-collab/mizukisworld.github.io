// ===============================
// LOADING SCREEN
// ===============================

window.addEventListener("load", function () {
    const loadingScreen = document.getElementById("loading-screen");

    if (loadingScreen) {
        setTimeout(function () {
            loadingScreen.classList.add("hidden");
        }, 800);
    }
});


// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ===============================
// SCROLL REVEAL
// ===============================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach(function (section) {
    observer.observe(section);
});
