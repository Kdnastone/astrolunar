import React from 'react';
import '../styles/Home.css'; // Asegúrate de tener un archivo de estilos

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Explorando Marte con la NASA</h1>
      </header>

      <section className="history-section">
        <h2>Nuestra Historia</h2>
        <p>
          Esta es una página que utiliza la API de la NASA, la cual está
          relacionada con Marte. Esta API está diseñada para recopilar datos de
          imágenes obtenidas por los rovers Curiosity, Opportunity y Spirit de
          la NASA en Marte, facilitando su acceso a desarrolladores, educadores
          y científicos ciudadanos.
        </p>
        <p>
          El propósito de esta página es apoyar los procesos educativos
          relacionados con la ciencia y fomentar la curiosidad de los
          estudiantes sobre el espacio. A través de esta plataforma, buscamos
          proporcionar recursos que inspiren a los estudiantes a explorar y
          aprender más sobre el fascinante mundo de la exploración espacial.
        </p>
      </section>

      <footer className="footer-section">
        <p>© 2024 Explorador del sistema solar. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;