import React from "react";
import TeamInfo from "../components/information/TeamInfo";

const Acerca = () => {

  return (
    <div>
      <h1>INNOVADORAS DIGITALES</h1>
      <section>
        <h2> Nuestra Historia y Visión</h2>
        <p>
          INNOVADORAS DIGITALES es una iniciativa privada dedicada a acercar a las personas a distintas áreas del conocimiento, como la ciencia, la tecnología y el arte. Creamos páginas interactivas diseñadas para clientes con intereses educativos, ofreciendo una experiencia enriquecedora y personalizada. Usamos APIs públicas y desarrolladas a medida para adaptarnos a las necesidades de cada cliente, brindando un acceso accesible y atractivo al aprendizaje.
          <br />
          Nuestra Misión
          <br />
          Despertar y fomentar la curiosidad en diversas áreas del saber, impulsando a estudiantes y profesionales a descubrir oportunidades educativas tanto a nivel nacional como internacional.
          <br />
          Propuesta de Valor
          <br />
          Ofrecemos una experiencia educativa única mediante recursos interactivos y contenidos de alta calidad. Nuestros usuarios desarrollan habilidades prácticas y acceden a una red de expertos en diversas disciplinas, ampliando sus oportunidades de aprendizaje y crecimiento.
          <br />
          Modelo de Negocio
          <br />
          Generamos ingresos mediante las siguientes fuentes:
          <br />
          Suscripciones premium: acceso a contenido exclusivo para instituciones educativas, incluyendo becas y formación especializada.
          <br />
          Colaboraciones con instituciones educativas: alianzas para desarrollar y compartir contenido de manera conjunta.
          <br />
          Talleres en línea y eventos con expertos: oportunidades para que los usuarios interactúen con figuras destacadas en ciencia, tecnología y arte.
          <br />
          Mercado Potencial
          <br />
          Con el creciente interés por la educación digital en Colombia, Innovadoras Digitales está lista para captar a estudiantes y profesionales en busca de aprendizaje continuo. Planeamos incorporar gamificación, desafíos y recompensas para hacer el proceso educativo más dinámico.
          <br />
          Escalabilidad
          <br />
          A mediano plazo, expandiremos nuestras operaciones a otros países, diversificando nuestros contenidos conforme a las tendencias educativas globales. Esto nos permitirá llegar a una audiencia internacional.
          <br />
          Estrategia de Marketing
          <br />
          Para posicionar y hacer crecer nuestra marca, utilizaremos las siguientes estrategias:
          <br />
1. Marketing Digital:
          <br />
Redes Sociales: en Facebook, Instagram, LinkedIn y Twitter compartiremos contenido educativo, interactuaremos con nuestra audiencia y promocionaremos nuestros servicios.
          <br />
	Publicidad Pagada: inversión en anuncios pagados en Google Ads, Facebook Ads y otras plataformas para llegar a un público más amplio y específico.
          <br />
2. Eventos y Talleres Presenciales: organizaremos eventos en colegios, universidades y centros educativos, promoviendo nuestra plataforma y estableciendo conexiones directas con usuarios potenciales.
<br />
3. Colaboraciones con Expertos: colaboraremos con figuras destacadas en ciencia, tecnología y arte para aumentar la visibilidad y credibilidad de nuestra plataforma.
<br />
4. Pruebas Gratuitas y Demostraciones: ofreceremos pruebas gratuitas y demostraciones para que los usuarios experimenten el valor de nuestros servicios.
<br />
          Sostenibilidad
          <br />
          Nuestra iniciativa se basa en la calidad de nuestros contenidos, la innovación continua y el compromiso con nuestra comunidad. A través de prácticas de aprendizaje adaptativo y accesibilidad digital, ofreceremos una experiencia de aprendizaje inclusiva y personalizada, asegurando un crecimiento sostenible en el sector de la educación digital.
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
