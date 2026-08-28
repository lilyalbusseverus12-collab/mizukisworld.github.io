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

```javascript
/* =========================
   🎵 MUSIC PLAYER
========================= */

const music = document.getElementById("background-music");
const musicButton = document.getElementById("music-toggle");
const musicBack = document.getElementById("music-back");
const musicForward = document.getElementById("music-forward");
const musicProgress = document.getElementById("music-progress");

if (music && musicButton) {

    /* PLAY / PAUSE */

    musicButton.addEventListener("click", function () {

        if (music.paused) {

            music.play()
                .then(function () {

                    musicButton.textContent = "❚❚";

                })
                .catch(function (error) {

                    console.log("Music could not be played:", error);

                });

        } else {

            music.pause();

            musicButton.textContent = "▶";

        }

    });


    /* BACK 10 SECONDS */

    if (musicBack) {

        musicBack.addEventListener("click", function () {

            music.currentTime = Math.max(
                0,
                music.currentTime - 10
            );

        });

    }


    /* FORWARD 10 SECONDS */

    if (musicForward) {

        musicForward.addEventListener("click", function () {

            music.currentTime = Math.min(
                music.duration,
                music.currentTime + 10
            );

        });

    }


    /* UPDATE PROGRESS BAR */

    music.addEventListener("timeupdate", function () {

        if (music.duration) {

            musicProgress.value =
                (music.currentTime / music.duration) * 100;

        }

    });


    /* CLICK PROGRESS BAR */

    if (musicProgress) {

        musicProgress.addEventListener("input", function () {

            if (music.duration) {

                music.currentTime =
                    (musicProgress.value / 100) * music.duration;

            }

        });

    }

}
```




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

    const decoration = document.createElement("div");

    decoration.className = "floating-decoration";

    decoration.textContent =
        decorations[
            Math.floor(Math.random() * decorations.length)
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

setInterval(createDecoration, 700);

/* =========================
   🌙 DARK MODE
========================= */

const themeButton = document.getElementById("theme-toggle");

if (themeButton) {

    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            themeButton.textContent = "☀️";

        } else {

            themeButton.textContent = "🌙";

        }

    });

}

/* =========================
   💛 SECRET SISTER SURPRISE
========================= */

const secretTrigger = document.getElementById("secret-trigger");
const sisterSecret = document.getElementById("sister-secret");
const closeSecret = document.getElementById("close-secret");

let secretClicks = 0;

if (secretTrigger && sisterSecret) {

    secretTrigger.addEventListener("click", function () {

        secretClicks++;

        console.log("Secret clicks:", secretClicks);

        if (secretClicks >= 16) {

            document.body.classList.add("sister-mode");

            sisterSecret.classList.add("show");

            secretClicks = 0;

        }

    });

}


if (closeSecret && sisterSecret) {

    closeSecret.addEventListener("click", function () {

        sisterSecret.classList.remove("show");

        document.body.classList.remove("sister-mode");

    });

}
