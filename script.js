const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach((section) => {
    observer.observe(section);
});

/* =========================
   GALLERY LIGHTBOX
========================= */

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach((image) => {

    image.addEventListener("click", () => {

        const lightbox = document.createElement("div");

        lightbox.classList.add("lightbox");

        lightbox.innerHTML = `
            <div class="lightbox-content">
                <button class="lightbox-close">&times;</button>
                <img src="${image.src}" alt="${image.alt}">
            </div>
        `;

        document.body.appendChild(lightbox);

        lightbox.addEventListener("click", (event) => {

            if (
                event.target === lightbox ||
                event.target.classList.contains("lightbox-close")
            ) {
                lightbox.remove();
            }

        });

    });

});

window.addEventListener("load", () => {

    const loadingScreen =
        document.getElementById("loading-screen");

    setTimeout(() => {

        loadingScreen.classList.add("hide");

    }, 800);

});