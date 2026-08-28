/* =========================
🌸 LOADING SCREEN
========================= */

window.addEventListener("load", function () {

```
const loadingScreen = document.getElementById("loading-screen");

if (loadingScreen) {

    setTimeout(function () {

        loadingScreen.classList.add("hide");

    }, 800);

}
```

});

/* =========================
✨ SECTION ANIMATION
========================= */

const sections = document.querySelectorAll(".section");

if ("IntersectionObserver" in window) {

```
const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

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
```

} else {

```
sections.forEach(function (section) {

    section.classList.add("show");

});
```

}

/* =========================
🖼️ GALLERY LIGHTBOX
========================= */

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(function (image) {

```
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
```

});

/* =========================
🎵 MUSIC PLAYER
========================= */

const music = document.getElementById("background-music");
const musicButton = document.getElementById("music-toggle");

if (music && musicButton) {

```
musicButton.addEventListener("click", function () {

    if (music.paused) {

        music.play()
            .then(function () {

                musicButton.textContent = "❚❚";

            })
            .catch(function (error) {

                console.log("MUSIC ERROR:", error);

            });

    } else {

        music.pause();

        musicButton.textContent = "▶";

    }

});


music.addEventListener("play", function () {

    musicButton.textContent = "❚❚";

});


music.addEventListener("pause", function () {

    musicButton.textContent = "▶";

});
```

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

```
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
```

}

setInterval(createDecoration, 700);

/* =========================
🌙 DARK MODE
========================= */

const themeButton = document.getElementById("theme-toggle");

if (themeButton) {

```
themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeButton.textContent = "☀️";

    } else {

        themeButton.textContent = "🌙";

    }

});
```

}

/* =========================
💛 SECRET SISTER SURPRISE
========================= */

const secretTrigger = document.getElementById("secret-trigger");
const sisterSecret = document.getElementById("sister-secret");
const closeSecret = document.getElementById("close-secret");

let secretClicks = 0;

if (secretTrigger && sisterSecret) {

```
secretTrigger.addEventListener("click", function () {

    secretClicks++;

    console.log("Secret clicks:", secretClicks);

    if (secretClicks >= 16) {

        document.body.classList.add("sister-mode");

        sisterSecret.classList.add("show");

        secretClicks = 0;

    }

});
```

}

if (closeSecret && sisterSecret) {

```
closeSecret.addEventListener("click", function () {

    sisterSecret.classList.remove("show");

    document.body.classList.remove("sister-mode");

});
```

}
