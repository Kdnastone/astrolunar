// importar librerías necesarias
import React from 'react';

const Solar = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <h1>Visualizador del Sistema Solar</h1>
      <iframe
        src="https://eyes.nasa.gov/apps/solar-system/#/home"
        title="NASA Eyes Solar System"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Solar;
