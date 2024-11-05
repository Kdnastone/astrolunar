
import React from "react";
import TeamInfo from "../components/information/TeamInfo";

const Acerca = () => {

  return (
    <div>
      <h1>INNOVADORAS DIGITALES</h1>
      <section>
        <h2>Nuestra Historia</h2>
        <p>
          Visión General 
          <br />
          INNOVADORAS DIGITALES es una iniciativa privada que busca acercar a las personas a diferentes áreas de aprendizaje, como la ciencia, la tecnología y el arte, a través de la creación de páginas interactivas diseñadas especialmente para clientes con interés educativo. Estas páginas son desarrolladas utilizando APIs públicas, lo que permite a los usuarios explorar y aprender de manera accesible y atractiva.
          <br />
          Nuestra Misión
          <br />
          Nuestra misión es crear curiosidad por los temas relacionados en nuestras plataformas y motivar a los estudiantes a explorar oportunidades de estudio, tanto a nivel nacional como internacional.
          <br />
          Propuesta de Valor
          <br />
          Ofrecemos una experiencia educativa única y atractiva mediante el uso de recursos interactivos y contenidos de alta calidad. Nuestros usuarios desarrollan habilidades prácticas y obtienen acceso a una red de expertos en diversas disciplinas. 
          <br />
          Modelo de Negocio
          <br />
          Nuestros ingresos se obtendrán a través de:
          <br />
          Suscripciones premium para aquellas instituciones que quieran acceso a contenido exclusivo como oferta de becas. 
          <br />
          Colaboraciones con instituciones educativas.
          <br />
          Talleres en línea y eventos con expertos.
          <br />
          Mercado Potencial
          <br />
          Con un creciente interés en la educación digital, especialmente en Colombia, estamos posicionados para captar un segmento de estudiantes y profesionales en búsqueda de aprendizaje continuo.
          <br />
          Escalabilidad
          <br />
          Planeamos expandir nuestras operaciones a otros países y agregar nuevos temas de aprendizaje basados en las tendencias del mercado.
          <br />
          Estrategia de Marketing
          <br />
          Atraeremos usuarios a través de campañas digitales, colaboraciones con influenciadores y ofertas promocionales.
          <br />
          Impacto Social
          <br />
          Nos comprometemos a apoyar a comunidades desfavorecidas mediante acceso gratuito a recursos y talleres en escuelas locales.
          <br />
          Sostenibilidad
          <br />
          Nuestra iniciativa se basará en la calidad del contenido, la innovación continua y el compromiso con nuestra comunidad para asegurar un crecimiento sostenible.
        </p>
      </section>
      {/* Cards de los miembros del equipo */}
      <div className="team-cards">
          {TeamInfo.map((miembro, index) => (
            <div className="card" key={index}>
              <img src={miembro.image} alt={miembro.nombre} />
              <h2>{miembro.nombre}</h2>
              <p>
                {/* href: Enlace para abrir GitHub según miembro */}
                {/* target: Abre el enlace en una nueva pestaña */}
                {/* noopener: Evita que la nueva página tenga acceso al objeto window.opener. */}
                {/* noreferrer: Evita que la nueva página reciba info. de la URL de origen. */}
                <a href={miembro.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              </p>
              <p>
                {/* href: Enlace para abrir LinkedIn según miembro */}
                <a href={miembro.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </p>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Acerca;
