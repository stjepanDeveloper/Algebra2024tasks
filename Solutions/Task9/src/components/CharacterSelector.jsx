import React, { useState } from "react";

const CharacterSelector = () => {
  const [selectedCharacter, setSelectedCharacter] = useState("");
  const [submittedCharacter, setSubmittedCharacter] = useState("");

  // Define images for the characters
  const characterImages = {
    Bart: "https://svgur.com/i/1B4A.svg",
    Lisa: "https://svgur.com/i/1B3d.svg",
  };

  // Handle change in radio input
  const handleRadioChange = (event) => {
    setSelectedCharacter(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedCharacter(selectedCharacter);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            value="Bart"
            checked={selectedCharacter === "Bart"}
            onChange={handleRadioChange}
          />
          Bart
        </label>
        <label>
          <input
            type="radio"
            value="Lisa"
            checked={selectedCharacter === "Lisa"}
            onChange={handleRadioChange}
          />
          Lisa
        </label>
        <button type="submit">Submit</button>
      </form>

      {submittedCharacter && (
        <div style={{ marginTop: "20px" }}>
          <p>You have selected {submittedCharacter}.</p>
          <img
            src={characterImages[submittedCharacter]}
            alt={submittedCharacter}
            style={{ width: "150px", height: "auto" }}
          />
        </div>
      )}
    </div>
  );
};

export default CharacterSelector;
