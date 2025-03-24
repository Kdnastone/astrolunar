import React from "react";
import TeamInfo from "../components/information/TeamInfo";
import '../styles/Acerca.css'

const Acerca = () => {

  return (
    <div>
      <h1>INNOVADORAS DIGITALES</h1>
      
      <section>
  <p>
  <h2>NUESTRA HISTORIA Y VISIÓN
  </h2>INNOVADORAS DIGITALES es una iniciativa privada que ofrece a las instituciones páginas personalizadas para que los estudiantes accedan a diferentes áreas del conocimiento a través de experiencias interactivas. Utilizamos tanto APIs públicas como desarrolladas a medida para adaptar el contenido a las necesidades de aprendizaje de cada estudiante.

  </p>
  <p><h2>Nuestra Misión</h2>
  Ofrecer a las instituciones educativas soluciones digitales personalizadas que proporcionen a los estudiantes acceso interactivo a contenidos educativos.
  </p>

  
  <p>
  <h2>Propuesta de Valor</h2>
  Proporcionar a las instituciones educativas soluciones digitales personalizadas que mejoren la experiencia de aprendizaje de los estudiantes, facilitando su acceso a contenidos interactivos y relevantes para el desarrollo integral y la actualización de conocimientos.
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
  El mercado potencial de Innovadoras Digitales abarca a estudiantes de centros educativos en el aprendizaje continuo, así como a instituciones educativas que buscan mejorar su oferta formativa con contenido digital interactivo en diversas áreas del conocimiento.

  </p>


  <p><h2>Escalabilidad</h2>
  A mediano plazo, planeamos expandir nuestras operaciones a nivel internacional, adaptando y diversificando nuestros contenidos según las tendencias educativas globales, lo que nos permitirá llegar a nuevos mercados y ofrecer soluciones personalizadas para diferentes audiencias.

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
    <li><strong>Eventos y Talleres Presenciales:</strong> Organizaremos eventos en centros educativos para promover nuestra plataforma y establecer conexiones directas con usuarios potenciales, con el fin de obtener retroalimentación que enriquezca nuestros desarrollos y portafolio de servicios.
    </li>
    <li><strong>Colaboraciones con Expertos:</strong> Estableceremos alianzas con figuras destacadas en diversos campos del conocimiento para probar nuestras páginas, retroalimentar nuestro contenido y aumentar la visibilidad y credibilidad de nuestra plataforma.
    </li>
    <li><strong>Pruebas Gratuitas y Demostraciones:</strong> ofreceremos pruebas gratuitas y demostraciones para que los usuarios experimenten el valor de nuestros servicios.</li>
  </ul>
  </p>
  <p><h2>Sostenibilidad</h2>
  Nuestra sostenibilidad se basa en la calidad, la innovación y el compromiso con nuestros clientes. 
Implementamos prácticas de aprendizaje adaptativo y promoviendo la accesibilidad digital, ofreceremos una experiencia de aprendizaje inclusiva y personalizada, garantizando un crecimiento sostenible en el sector de la educación digital.

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
