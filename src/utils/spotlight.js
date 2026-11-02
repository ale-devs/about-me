// Actualiza la posición del brillo dentro de una tarjeta con la clase "spotlight-card".
export function handleSpotlightMove(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  card.style.setProperty("--x", `${e.clientX - rect.left}px`);
  card.style.setProperty("--y", `${e.clientY - rect.top}px`);
}
