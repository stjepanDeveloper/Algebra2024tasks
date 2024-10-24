import React from "react";

const CharacterDetails = ({
  name,
  bestFriend,
  likesSchool,
  changeCharacter,
}) => {
  // Format the likesSchool value for display
  const schoolChoice = likesSchool ? "do" : "don't";

  return (
    <div>
      <p>
        Hi, my name is {name}. My best friend is {bestFriend} and my mother is
        Marge Simpson. I really, really {schoolChoice} love school.
      </p>
      <button onClick={changeCharacter}>Change to Bart</button>
    </div>
  );
};

export default CharacterDetails;