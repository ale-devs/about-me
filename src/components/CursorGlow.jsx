import React, { useEffect, useRef } from "react";

// Luz suave que sigue al puntero en toda la página.
// La luz se desliza con un pequeño retraso para que el movimiento se sienta natural.
function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    // En pantallas táctiles no hay puntero que seguir.
    if (!el || !window.matchMedia("(pointer: fine)").matches) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ease = reduceMotion ? 1 : 0.12;

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { ...target };
    let frame = 0;
    let started = false;

    const tick = () => {
      pos.x += (target.x - pos.x) * ease;
      pos.y += (target.y - pos.y) * ease;
      el.style.setProperty("--cx", `${pos.x}px`);
      el.style.setProperty("--cy", `${pos.y}px`);

      if (Math.abs(target.x - pos.x) > 0.3 || Math.abs(target.y - pos.y) > 0.3) {
        frame = requestAnimationFrame(tick);
      } else {
        frame = 0;
      }
    };

    const move = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!started) {
        // Primer movimiento: aparece directamente donde está el puntero.
        pos.x = target.x;
        pos.y = target.y;
        started = true;
      }
      el.style.opacity = "1";
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const hide = () => {
      el.style.opacity = "0";
    };

    window.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseleave", hide);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", hide);
    };
  }, []);

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />;
}

export default CursorGlow;
