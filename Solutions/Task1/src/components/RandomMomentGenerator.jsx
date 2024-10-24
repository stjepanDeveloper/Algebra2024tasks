import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

const RandomMomentGenerator = () => {
  const [randomMoment, setRandomMoment] = useState("");

  useEffect(() => {
    const randomMoment = setInterval(() => {
      setRandomMoment(dayjs().format("YYYY-MM-DD HH:mm:ss"));
    }, 1000);

    return () => clearInterval(randomMoment);
  }, []);

  return (
    <div>
      <h2>Current date and time</h2>
      <p>{randomMoment}</p>
    </div>
  );
};

export default RandomMomentGenerator;
