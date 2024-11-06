// Importar las librerías necesarias
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";

// Importar las páginas necesarias
import Home from "../pages/Home";
import Acerca from "../pages/Acerca";
import Mars from "../pages/Mars";
import Crear from "../pages/Crear";
import ListaPlanetas from "../storage/ListaPlanetas";
import Solar from "../pages/Solar";

const App = () => {
  const handleAddPlanet = (planet) => {
    const savedPlanets = JSON.parse(localStorage.getItem("planets")) || [];
    savedPlanets.push(planet);
    localStorage.setItem("planets", JSON.stringify(savedPlanets));
  };

  return (
    <Router>
      <nav>
        <Link to="/home">Información</Link>
        <Link to="/acerca">Acerca de</Link>
        <Link to="/mars">Fotos de Marte</Link>
        <Link to="/crear">Añadir Planeta</Link>
        <Link to="/ListaPlanetas">Planetas</Link>
        <Link to="/Solar">Sistema Solar</Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/mars" element={<Mars />} />
        <Route path="/crear" element={<Crear onAddPlanet={handleAddPlanet} />}/>
        <Route path="/listaPlanetas" element={<ListaPlanetas />} />
        <Route path="/solar" element={<Solar />} />

        {/* Redirigir a /home por defecto */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* Ruta para manejar 404 Not Found */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;