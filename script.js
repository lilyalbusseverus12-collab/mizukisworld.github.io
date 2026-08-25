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

function createFloatingElement() {
  const items = ['🌸', '✨', '💖', '⭐', '🎀'];
  const element = document.createElement('div');
  
  element.classList.add('floating-element');
  element.textContent = items[Math.floor(Math.random() * items.length)];
  
  // Rastgele yatay pozisyon, boyut ve animasyon süresi
  element.style.left = Math.random() * 100 + 'vw';
  element.style.fontSize = (Math.random() * 15 + 15) + 'px';
  element.style.animationDuration = (Math.random() * 3 + 4) + 's';

  document.body.appendChild(element);

  setTimeout(() => {
    element.remove();
  }, 7000);
}

// Her 400 milisaniyede bir yeni bir kalp/yıldız oluştur
setInterval(createFloatingElement, 400);

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
