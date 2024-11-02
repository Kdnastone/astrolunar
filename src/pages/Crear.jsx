// Importar librerias
import { useState } from "react";

// Crear componentes para Crear planetas
const Crear = ({onAddPlanet}) =>{
    // Definir estados para crear el nombre, la descripción y la imagen
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    // Opción de escoger un origen de la imagen
    // De un archivo
    const [image, setImage] = useState("");
    // Opción de una URL
    const [imageUrl, setImageUrl] = useState("");

//Formulario
    const handleSubmit = (e) => {
        //Evitar que se recargue
        e.preventDefault();
        //imagen cargada
        const newPlanet = {name, description, image: imageUrl || image};
        // llama a la función para qgregar planeta
        onAddPlanet(newPlanet);
        //Reiniciar el formulario
        setName("");
        setDescription("");
        setImage("");
        setImageUrl("");

        //Obtener la previsualización de la imagen cargada
        const handleImageChange = (e) =>{
            const file = e.target.files[0];
        if (file) {
            //ller el arcivo
            const reader = new FileReader();
            reader.onloadend =() =>{
                setImage(reader.result);
                setImageUrl("");
            };
            //Leer archivo como uan url de datos
            reader.readAsDataURL (file);

        };

    //formulario para añadir el planeta
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Nombre del planeta:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                    required
                    />
                </label>
                <label>
                    Descripción del planeta:
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}
                    required
                    />
                </label>
                <label>
                    Imagen (archivo):
                    <input type="file" accept="image/*" onChange={handleImageChange}/>
                </label>
                <label>
                    Imagen (URL):
                    <input type="text" placeholder="Ingresa la URL de la imagen" value={imageUrl} onChange={(e) =>{
                        setImageUrl(e.target.value);
                        setImage("");
                    }}/>
                </label>
            </div>
            {/*Previsualizacíon de la imagen*/}
            {image &&(
                <div>
                    <h3>Previsualización de la imagen cargada:</h3>
                    <img src={image} alt="Vista previa" style={{width:"150rem", height:"150rem" }}/>
                </div>
            )}
            <button type="submit">Añadir Planeta</button>
        </form>

    );       
        };
    }};
    
  
export default Crear;
