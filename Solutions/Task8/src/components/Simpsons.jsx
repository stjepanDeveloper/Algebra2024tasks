import React, { useState } from "react";
import CharacterDetails from "./CharacterDetails";


const Simpsons = () => {
  // Step 1: Define the initial state for Lisa
  const [character, setCharacter] = useState({
    name: "Lisa",
    bestFriend: "Janey Powell",
    likesSchool: true,
    backgroundColor: "#ff81c1",
  });

  // Step 2: Function to change state to Bart's details
  const changeToBart = () => {
    setCharacter({
      name: "Bart",
      bestFriend: "Milhouse Van Houten",
      likesSchool: false,
      backgroundColor: "#2f64d6",
    });
  };

  return (
    <div
      style={{
        backgroundColor: character.backgroundColor,
        padding: "20px",
        borderRadius: "10px",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <CharacterDetails
        name={character.name}
        bestFriend={character.bestFriend}
        likesSchool={character.likesSchool}
        changeCharacter={changeToBart}
      />
    </div>
  );
};

export default Simpsons;