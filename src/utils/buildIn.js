// Hace que el contenido "se construya" pieza por pieza:
// cada elemento aparece en orden con un pequeño retraso, y los títulos se escriben de izquierda a derecha.

const PIECES = [
  "h1", "h3", "h4", "p", "li", "img", "article", "button",
  ".spotlight-card",
  "span.rounded-md", "span.rounded-lg", "span.rounded-full", "span.rounded-xl",
].join(",");

const HEADINGS = new Set(["H1", "H3", "H4"]);

export function buildIn(container, { step = 16, max = 600 } = {}) {
  if (!container) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const pieces = [...container.querySelectorAll(PIECES)].filter(
    // Los puntos que parpadean ya tienen su propia animación
    (el) => !el.classList.contains("animate-ping")
  );

  pieces.forEach((el, i) => {
    const delay = Math.min(i * step, max);
    const name = HEADINGS.has(el.tagName) ? "build-type" : "build-in";
    // Reinicia la animación aunque el elemento ya existiera
    el.style.animation = "none";
    void el.offsetWidth;
    el.style.animation = `${name} 380ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms both`;
  });
}
