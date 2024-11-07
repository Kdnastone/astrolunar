
// importar librerías necesarias
import { useState } from "react";
import "../styles/Form.css"

// Crear componente funcional Crear
const Crear = ({ onAddPlanet }) => {
  // Definir estados para el nombre, descripción, imagen y URL de la imagen
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

// Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    // Evitar que el formulario recargue la página
    e.preventDefault();
    // Usa la URL de la imagen o la imagen cargada
    const newPlanet = { name, description, image: imageUrl || image }; 
    // Llama a la función proporcionada para agregar el planeta
    onAddPlanet(newPlanet); 
    // Reiniciar el formulario
    setName("");
    setDescription("");
    setImage("");
    setImageUrl("");
  };

  // Función para manejar el cambio de la imagen (cargada o por URL)
  const handleImageChange = (e) => {
    // Obtener el archivo de la imagen cargada
    const file = e.target.files[0];
    if (file) {
      // Crear un objeto FileReader para leer el archivo
      const reader = new FileReader();
      // Cuando el archivo se haya leído, establecer la imagen
      reader.onloadend = () => {
        // Establece la URL de la imagen cargada
        setImage(reader.result); 
        // Aseura que no haya una URL al cargar una imagen
        setImageUrl(""); 
      };
      // Leer el archivo como una URL de datos
      reader.readAsDataURL(file);
    }
  };

  return (
    // Formulario para añadir un planeta
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nombre:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Descripción:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label className="file-label">
          Imagen (Seleccionar archivo):
          <input type="file" accept="image/*" onChange={handleImageChange} className="file-input" />
          <span className="custom-file-button">Seleccionar archivo</span>
        </label>
      </div>
      <div>
        <label>
          Imagen (Usar URL):
          <input
            type="text"
            placeholder="Ingresa la URL de la imagen"
            value={imageUrl}
            onChange={(e) => {
              setImageUrl(e.target.value);
              setImage("");
            }}
          />
        </label>
      </div>
      {/* Previsualización de la imagen */}
      {image && (
        <div>
          <h3>Previsualización de la imagen cargada:</h3>
          <img src={image} alt="Vista previa" style={{ width: "150rem", height: "150rem" }} />
        </div>
      )}
      {imageUrl && (
        <div>
          <h3>Previsualización de la imagen de la URL:</h3>
          <img src={imageUrl} alt="Vista previa de URL" style={{ width: "100px", height: "100px" }} />
        </div>
      )}
      <button type="submit">Añadir Planeta</button>
    </form>
  );
};

export default Crear;
