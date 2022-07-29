import React from "react";

/**
 * @description       Componente que se renderiza cuando no existe data
 * @param title       Titulo basado en que page se encuentre el componente
 */
const DataHero = ({ title }) => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content text-center text-primary-content">
        <div className="max-w-md">
          <h1 className="mb-5 md:text-6xl font-bold text-3xl underline text-accent">
            No hay {title}
          </h1>
          <p className="mb-5 text-2xl">
            Intenta crear uno nuevo o espera que la página recargue para obtener
            los resultados
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataHero;
