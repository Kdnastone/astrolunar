import React from "react";
import TeamInfo from "../components/information/TeamInfo";
import '../styles/Acerca.css'

const Acerca = () => {

  return (
    <div>
      <h1>INNOVADORAS DIGITALES</h1>
      
      <section>
  <p>
  <h2>Nosotras</h2>INNOVADORAS DIGITALES es una iniciativa privada que conecta a las personas con diversas áreas del conocimiento, como ciencia, tecnología y arte, a través de experiencias interactivas. Nos especializamos en crear páginas personalizadas para clientes con intereses educativos, ofreciendo una experiencia única y enriquecedora. 
  Utilizamos tanto APIs públicas como soluciones desarrolladas a medida para ajustarnos a las necesidades específicas de cada cliente, brindando un acceso atractivo y accesible al aprendizaje.
  </p>
  <p><h2>Nuestra vision</h2>Ser líderes en la creación de experiencias digitales interactivas que inspiren el aprendizaje y el descubrimiento en áreas como la ciencia, la tecnología y el arte.
    Aspiramos a convertirnos en un referente educativo innovador que conecta a personas de todas las edades con el conocimiento, a través de plataformas accesibles, creativas y personalizadas.</p>
  
  <p><h2>Nuestra Misión</h2>
  Facilitar el acceso al conocimiento mediante el diseño de páginas interactivas que respondan a los intereses educativos de cada cliente.
  A través de soluciones tecnológicas avanzadas y el uso de APIs tanto públicas como personalizadas, buscamos crear entornos de aprendizaje atractivos y accesibles que impulsen la curiosidad y el desarrollo personal.
  </p>

  
  <p>
  <h2>Propuesta de Valor</h2>
    Ofrecemos una experiencia educativa única mediante recursos interactivos y contenidos de alta calidad. Nuestros usuarios desarrollan habilidades prácticas y acceden a una red de expertos en diversas disciplinas, ampliando sus oportunidades de aprendizaje y crecimiento.
  </p>

  
  <p><h2>Modelo de Negocio</h2>
    Generamos ingresos mediante las siguientes fuentes:
    <ul>
    <li><strong>Suscripciones premium:</strong> acceso a contenido exclusivo para instituciones educativas, incluyendo becas y formación especializada.</li>
    <li><strong>Colaboraciones con instituciones educativas:</strong> alianzas para desarrollar y compartir contenido de manera conjunta.</li>
    <li><strong>Talleres en línea y eventos con expertos:</strong> oportunidades para que los usuarios interactúen con figuras destacadas en ciencia, tecnología y arte.</li>
  </ul>
  </p>
  
  <p> <h2>Mercado Potencial</h2>
    Con el creciente interés por la educación digital en Colombia, Innovadoras Digitales está lista para captar a estudiantes y profesionales en busca de aprendizaje continuo. Planeamos incorporar gamificación, desafíos y recompensas para hacer el proceso educativo más dinámico.
  </p>


  <p><h2>Escalabilidad</h2>
    A mediano plazo, expandiremos nuestras operaciones a otros países, diversificando nuestros contenidos conforme a las tendencias educativas globales. Esto nos permitirá llegar a una audiencia internacional.
  </p>

  
  <p><h2>Estrategia de Marketing</h2>
    Para posicionar y hacer crecer nuestra marca, utilizaremos las siguientes estrategias:
    <ul>
    <li><strong>Marketing Digital:</strong>
      <ul>
        <li><strong>Redes Sociales:</strong> en Facebook, Instagram, LinkedIn y Twitter compartiremos contenido educativo, interactuaremos con nuestra audiencia y promocionaremos nuestros servicios.</li>
        <li><strong>Publicidad Pagada:</strong> inversión en anuncios pagados en Google Ads, Facebook Ads y otras plataformas para llegar a un público más amplio y específico.</li>
      </ul>
    </li>
    <li><strong>Eventos y Talleres Presenciales:</strong> organizaremos eventos en colegios, universidades y centros educativos, promoviendo nuestra plataforma y estableciendo conexiones directas con usuarios potenciales.</li>
    <li><strong>Colaboraciones con Expertos:</strong> colaboraremos con figuras destacadas en ciencia, tecnología y arte para aumentar la visibilidad y credibilidad de nuestra plataforma.</li>
    <li><strong>Pruebas Gratuitas y Demostraciones:</strong> ofreceremos pruebas gratuitas y demostraciones para que los usuarios experimenten el valor de nuestros servicios.</li>
  </ul>
  </p>
  <p><h2>Sostenibilidad</h2>
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
              
            </div>
          ))}
        </div>
    </div>
  );
};

export default Acerca;
