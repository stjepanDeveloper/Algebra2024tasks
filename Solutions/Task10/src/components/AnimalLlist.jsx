import React, { useState } from "react";

const AnimalList = () => {
  // Initial state with the list of animals
  const [animals, setAnimals] = useState([
    "Cat 🐈",
    "Cow 🐄",
    "Mouse 🐁",
    "Horse 🐎",
  ]);

  // Function to add a new animal
  const addAnimal = () => {
    const newAnimal = prompt(
      "What animal do you wish to add? (e.g., Dragon 🐉)"
    );
    if (newAnimal && !animals.includes(newAnimal)) {
      setAnimals((prevAnimals) => [...prevAnimals, newAnimal]);
    } else if (animals.includes(newAnimal)) {
      alert("This animal is already in the list!");
    }
  };

  // Function to remove a specific animal
  const removeAnimal = () => {
    const animalToRemove = prompt(
      "Which specific animal do you want to remove? (e.g., Dragon 🐉)"
    );
    if (animalToRemove) {
      setAnimals((prevAnimals) =>
        prevAnimals.filter((animal) => animal !== animalToRemove)
      );
    }
  };

  return (
    <div>
      <h2>Animal List</h2>
      {animals.length > 0 ? (
        <ul>
          {animals.map((animal, index) => (
            <li key={index}>{animal}</li>
          ))}
        </ul>
      ) : (
        <p>There are no animals.</p>
      )}
      <button onClick={addAnimal}>Add New Animal</button>
      <button onClick={removeAnimal} style={{ marginLeft: "10px" }}>
        Remove Specific Animal
      </button>
    </div>
  );
};

export default AnimalList;
