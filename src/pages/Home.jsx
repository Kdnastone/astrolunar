import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">      </header>

        <h1>Explorando el sistema solar</h1>


      <section className="history-section">
        <h1>Nuestra Historia</h1>

      
        <p>
          Esta es una página que utiliza la API de la NASA, la cual está
          relacionada con Marte. Esta API está diseñada para recopilar datos de
          imágenes obtenidas por los rovers Curiosity, Opportunity y Spirit de
          la NASA en Marte, facilitando su acceso a estudiantes, educadores,
          y ciudadanos.
        </p>
        <p>
          El propósito de esta página es apoyar los procesos educativos
          relacionados con la ciencia y fomentar la curiosidad de los
          estudiantes sobre el espacio. 
          A través de esta plataforma, buscamos proporcionar recursos que 
          inspiren a los estudiantes a explorar y aprender más sobre el 
          fascinante mundo de la exploración espacial.
        </p>
      </section>

      <footer className="footer-section">
        <p>© 2024 Explorador del sistema solar. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
