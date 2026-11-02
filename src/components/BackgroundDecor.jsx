import React from "react";

// Fondo decorativo: cuadrícula de puntos y una mancha morada difuminada.
function BackgroundDecor() {
  return (
    <div className="bg-decor" aria-hidden="true">
      <div className="bg-dots" />
      <div className="bg-blob bg-blob--indigo" />
    </div>
  );
}

export default BackgroundDecor;
