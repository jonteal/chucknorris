import { useEffect, useState } from "react";
import "./Facts.css";

const Facts = () => {
  const [fact, setFact] = useState("");

  const FetchFacts = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-RapidAPI-Host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
        "X-RapidAPI-Key": "e1aaae043emsh9842bd2bcea4049p1ddbb6jsn2e04c900cab6"
      }
    };

    fetch(
      "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random",
      options
    )
      .then((response) => response.json())
      .then((response) => setFact(response.value))
      .catch((err) => console.error(err));
  };

  // useEffect(() => {
  //   FetchFacts();
  // }, []);

  const handleGetFact = (e) => {
    FetchFacts();
  };

  return (
    <>
      <h1 className="title">Chuck Norris</h1>
      <h3 className="subtitle">Facts</h3>
      <button onClick={handleGetFact} className="getFactBtn">
        Get Chuck Norris Fact
      </button>
      <div className="factBox">
        <p>{fact}</p>
      </div>
    </>
  );
};

export default Facts;