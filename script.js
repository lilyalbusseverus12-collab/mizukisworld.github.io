// =========================
// 1. İNTERSECTION OBSERVER (Sayfa Kaydırma Efekti)
// =========================
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

// =========================
// 2. MÜZİK ÇALAR KONTROLÜ
// =========================
function toggleMusic() {
  const music = document.getElementById("bgMusic");
  const btn = document.getElementById("musicToggle");

  if (!music || !btn) {
    console.error("Müzik elementi veya buton HTML'de bulunamadı!");
    return;
  }

  if (music.paused) {
    music.play();
    btn.textContent = "⏸️ Müziği Durdur";
  } else {
    music.pause();
    btn.textContent = "🎵 Müziği Aç";
  }
}

// =========================
// 3. YÜZEN PEMBE KALPLER VE YILDIZLAR
// =========================
function createFloatingElement() {
  const items = ['🌸', '✨', '💖', '⭐', '🎀'];
  const element = document.createElement('div');
  
  element.classList.add('floating-element');
  element.textContent = items[Math.floor(Math.random() * items.length)];
  
  element.style.left = Math.random() * 100 + 'vw';
  element.style.fontSize = (Math.random() * 15 + 15) + 'px';
  element.style.animationDuration = (Math.random() * 3 + 4) + 's';

  document.body.appendChild(element);

  setTimeout(() => {
    element.remove();
  }, 7000);
}

setInterval(createFloatingElement, 400);

// =========================
// 4. GALLERY LIGHTBOX (Fotoğraf Büyütme)
// =========================
const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach((image) => {
    image.addEventListener("click", () => {
        const lightbox = document.createElement("div");
        lightbox.classList.add("lightbox");

        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${image.src}" alt="${image.alt}">
                <span class="close-btn">&times;</span>
            </div>
        `;

        document.body.appendChild(lightbox);

        lightbox.addEventListener("click", (e) => {
            if (e.target.classList.contains("lightbox") || e.target.classList.contains("close-btn")) {
                lightbox.remove();
            }
        });
    });
});
