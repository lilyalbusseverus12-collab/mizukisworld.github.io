/* =========================
   🌸 LOADING SCREEN
========================= */

window.addEventListener("load", function () {

    const loadingScreen = document.getElementById("loading-screen");

    if (loadingScreen) {
        setTimeout(function () {
            loadingScreen.classList.add("hide");
        }, 800);
    }

});


/* =========================
   ✨ SECTION ANIMATION
========================= */

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


/* =========================
   🖼️ GALLERY LIGHTBOX
========================= */

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        const lightbox = document.createElement("div");

        lightbox.className = "lightbox";

        lightbox.innerHTML = `
            <div class="lightbox-content">

                <button class="lightbox-close">×</button>

                <img src="${image.src}" alt="${image.alt}">

            </div>
        `;

        document.body.appendChild(lightbox);

        const closeButton =
            lightbox.querySelector(".lightbox-close");

        closeButton.addEventListener("click", function () {
            lightbox.remove();
        });

        lightbox.addEventListener("click", function (event) {

            if (event.target === lightbox) {
                lightbox.remove();
            }

        });

    });

});


/* =========================
   🎵 MUSIC PLAYER
========================= */

const music = document.getElementById("background-music");
const musicButton = document.getElementById("music-toggle");

if (music && musicButton) {

    musicButton.addEventListener("click", function () {

        if (music.paused) {

            music.play()
                .then(function () {

                    musicButton.textContent = "❚❚";

                })
                .catch(function () {

                    console.log("Music could not be played.");

                });

        } else {

            music.pause();

            musicButton.textContent = "▶";

        }

    });

}


/* =========================
   💕 FLOATING HEARTS & STARS
========================= */

const decorations = [
    "♡",
    "♥",
    "✦",
    "✧",
    "⋆",
    "˚",
    "♡"
];

function createDecoration() {

    const decoration =
        document.createElement("div");

    decoration.className =
        "floating-decoration";

    decoration.textContent =
        decorations[
            Math.floor(
                Math.random() * decorations.length
            )
        ];

    decoration.style.left =
        Math.random() * 100 + "vw";

    decoration.style.fontSize =
        (12 + Math.random() * 18) + "px";

    decoration.style.animationDuration =
        (6 + Math.random() * 7) + "s";

    document.body.appendChild(decoration);

    setTimeout(function () {
        decoration.remove();
    }, 14000);

}


/* Create a new heart/star every 700ms */

setInterval(createDecoration, 700);
