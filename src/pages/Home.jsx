import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section"></header>

      <h1>Explorando el Sistema Solar</h1>

      <section className="history-section">
        <h2>Nuestra Historia</h2>

        <p>
          Esta página utiliza la API de la NASA, específicamente aquella 
          relacionada con Marte. La API recopila datos e imágenes obtenidas 
          por los rovers Curiosity, Opportunity y Spirit, permitiendo su acceso 
          a estudiantes, educadores y ciudadanos interesados en la exploración 
          del planeta rojo. En el menú superior encontrarás las siguientes secciones:
        </p>

        <ul>
          <li>
            <strong>Acerca:</strong> Información sobre el equipo desarrollador de 
            <em> Innovadoras Digitales</em>.
          </li>
          <li>
            <strong>Mars:</strong> Imágenes capturadas por los rovers Curiosity, 
            Opportunity y Spirit en Marte.
          </li>
          <li>
            <strong>Crear:</strong> Opción para diseñar un planeta personalizado, 
            asignándole un nombre, una descripción y una imagen.
          </li>
          <li>
            <strong>Lista de Planetas:</strong> Visualización de los planetas creados.
          </li>
          <li>
            <strong>Solar:</strong> Interacción con el visualizador del Sistema Solar 
            de la NASA.
          </li>
        </ul>

        <p>
          El propósito de esta página es apoyar los procesos educativos en ciencias 
          y fomentar la curiosidad de los estudiantes sobre el espacio. A través de 
          esta plataforma, buscamos proporcionar recursos inspiradores que motiven 
          la exploración y el aprendizaje sobre la exploración espacial.
        </p>
      </section>

      <footer className="footer-section">
        <p>© 2024 Explorador del Sistema Solar. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
