import { useEffect, useState } from "react";

const ListaPlanetas =() =>{
    const [planets, setPlanets] = useState([]);

    useEffect(()=>{
        const savedPlanets = JSON.parse(localStorage.getItem("planets")) ||
        setPlanets(savedPlanets);
    }, []);

    const handleEdit =(index)=> {
        const newName = prompt("Edita el nombre del planeta:", planeta[index].name)
        const newDescription= prompt("edita la descripción del planeta:", planets[index].description)
        if (newName && newDescription) {
            const updatePlanets = [...planets];
            updatePlanets[index] = {...updatePlanets[index], name:newName, description:newDescription}
            setPlanets(updatePlanets);
            localStorage.setItem("planets",JSON.stringify(updatePlanets));
        }
    };

    return (
        <div>
            <h1>
                Lista de planetas
            </h1>
            <ul>
                {planets.map((planet, index)=> (
                    <li key = {index}>
                        <h2>
                            {planet.name}
                        </h2>
                        <p>
                            {planet.description}
                        </p>
                        {planet.image && <img src = {planet.image} alt= {planet.name} style={{width:"100px", height: "100px"}}/>}
                         <button onClick={() => handleEdit(index)}>Editar</button>
                         <button onClick={() => handleDelete(index)}>Borrar</button>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default ListaPlanetas;