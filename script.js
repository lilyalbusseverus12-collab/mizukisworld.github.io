// ===============================
// LOADING SCREEN
// ===============================

window.addEventListener("load", function () {
    const loadingScreen = document.getElementById("loading-screen");

    if (loadingScreen) {
        setTimeout(function () {
            loadingScreen.classList.add("hide");
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
                entry.target.classList.add("show");
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


// ===============================
// GALLERY LIGHTBOX
// ===============================

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(function (image) {
    image.addEventListener("click", function () {

        const lightbox = document.createElement("div");
        lightbox.classList.add("lightbox");

        const content = document.createElement("div");
        content.classList.add("lightbox-content");

        const largeImage = document.createElement("img");
        largeImage.src = image.src;
        largeImage.alt = image.alt;

        const closeButton = document.createElement("button");
        closeButton.classList.add("lightbox-close");
        closeButton.innerHTML = "✕";

        content.appendChild(largeImage);
        content.appendChild(closeButton);
        lightbox.appendChild(content);

        document.body.appendChild(lightbox);

        closeButton.addEventListener("click", function () {
            lightbox.remove();
        });

        lightbox.addEventListener("click", function (event) {
            if (event.target === lightbox) {
                lightbox.remove();
            }
        });

        document.addEventListener("keydown", function escapeHandler(event) {
            if (event.key === "Escape") {
                lightbox.remove();
                document.removeEventListener("keydown", escapeHandler);
            }
        });
    });
});
