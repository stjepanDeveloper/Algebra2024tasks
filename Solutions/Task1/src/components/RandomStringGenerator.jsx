import React, { useState } from "react";
import randomstring from "randomstring";

const RandomStringGenerator = () => {
  const [randomString, setRandomString] = useState("");

  const generateRandomString = () => {
    const newRandomString = randomstring.generate(12);
    setRandomString(newRandomString);
  };

  return (
    <div>
      <h2>Random String Generator</h2>
      <p>Generated string : {randomString} </p>
      <button onClick={generateRandomString}>Click Me</button>
    </div>
  );
};

export default RandomStringGenerator;
