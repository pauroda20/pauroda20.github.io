// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Configuración del Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.2, // El elemento debe estar 20% visible para activar la animación
    }
  );

  // Observar todos los elementos con la clase "animate"
  document.querySelectorAll(".animate").forEach((el) => observer.observe(el));
});