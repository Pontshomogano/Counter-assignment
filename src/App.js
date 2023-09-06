import React, { useState } from "react";
import { ChevronUp } from "react-feather";
import { ChevronsUp } from "react-feather";
import { RotateCcw } from "react-feather";
import { Hash } from "react-feather";
import { ChevronsDown } from "react-feather";
import { ChevronDown } from "react-feather";

function App() {
  const [counter, setCounter] = useState(0);

  const HandleIncrement = (event) => {
    setCounter(counter + 1);
  };

  const HandleIncrementTen = (event) => {
    setCounter(counter + 10);
  };
  const ResetHandle = (event) => {
    setCounter(counter * 0);
  };
  const RandomHandle = (event) => {
    setCounter(counter * 0);
  };

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomClick = () => {
    setCounter(randomNumberInRange(1, 100));
  };

  const decrementTen = (event) => {
    setCounter(counter - 10);
  };
  const handleDecreaseOne = (event) => {
    setCounter(counter - 1);
  };
  return (
    <section className="container">
      <div className="current-v">Current value:</div>
      <div className="label-counter">{counter}</div>
      <button className="one-btn" onClick={HandleIncrement}>
        {" "}
        <ChevronUp />
      </button>
      <button className="ten-btn" onClick={HandleIncrementTen}>
        <ChevronsUp />
      </button>
      <button className="zero-btn" onClick={ResetHandle}>
        {" "}
        <RotateCcw />
      </button>
      <button className="random-btn" onClick={randomClick}>
        {" "}
        <Hash />
      </button>
      <button className="tendown-btn" onClick={decrementTen}>
        {" "}
        <ChevronsDown />
      </button>
      <button className="onedown-btn" onClick={handleDecreaseOne}>
        <ChevronDown />
      </button>
    </section>
  );
}
export default App;
