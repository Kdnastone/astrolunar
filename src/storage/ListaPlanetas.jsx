import React, { useEffect, useState } from "react";

const ListaPlanetas = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const savedPlanets = JSON.parse(localStorage.getItem("planets")) || [];
    setPlanets(savedPlanets);
  }, []);

  const handleDelete = (index) => {
    const updatedPlanets = planets.filter((_, i) => i !== index);
    setPlanets(updatedPlanets);
    localStorage.setItem("planets", JSON.stringify(updatedPlanets));
  };

  const handleEdit = (index) => {
    const newName = prompt("Edita el nombre del planeta:", planets[index].name);
    const newDescription = prompt("Edita la descripción del planeta:", planets[index].description);
    if (newName && newDescription) {
      const updatedPlanets = [...planets];
      updatedPlanets[index] = { ...updatedPlanets[index], name: newName, description: newDescription }; // Edita el nombre y descripción
      setPlanets(updatedPlanets);
      localStorage.setItem("planets", JSON.stringify(updatedPlanets));
    }
  };

  return (
    <div>
      <h1>Lista de Planetas</h1>
      <ul>
        {planets.map((planet, index) => (
          <li key={index}>
            <h2>{planet.name}</h2>
            <p>{planet.description}</p>
            {planet.image && <img src={planet.image} alt={planet.name} style={{ width: "100px", height: "100px" }} />}
            <button onClick={() => handleEdit(index)}>Editar</button>
            <button onClick={() => handleDelete(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaPlanetas;
