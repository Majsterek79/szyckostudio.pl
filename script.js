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

for (const element of document.querySelectorAll(".section-title, .product, .principle-grid > div, .roadmap article, .contact")) {
  element.classList.add("reveal");
  observer.observe(element);
}
