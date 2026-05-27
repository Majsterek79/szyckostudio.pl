const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.18 }
);

for (const element of document.querySelectorAll(".section-title, .product, .principle-grid > div, .roadmap article, .soon-card, .contact")) {
  element.classList.add("reveal");
  observer.observe(element);
}

const wishlistButton = document.querySelector(".wishlist-button");
const wishlistNote = document.querySelector(".wishlist-note");

if (wishlistButton && wishlistNote) {
  const product = wishlistButton.dataset.product || "nowy projekt";
  const key = `szycko-studio:wishlist:${product}`;
  const saved = localStorage.getItem(key) === "yes";

  function renderWishlistState(active) {
    wishlistButton.textContent = active ? "Dodano do obserwowanych" : "Obserwuję projekt";
    wishlistNote.textContent = active
      ? "Dziękujemy. Na tym urządzeniu projekt jest oznaczony jako obserwowany. Żebyśmy mogli odezwać się przy premierze, wyślij też krótki sygnał mailem."
      : "Kliknięcie zapisuje zainteresowanie lokalnie na tym urządzeniu. Mail pozwoli nam faktycznie poinformować Cię o starcie i promocji.";
  }

  renderWishlistState(saved);

  wishlistButton.addEventListener("click", () => {
    localStorage.setItem(key, "yes");
    renderWishlistState(true);
  });
}
