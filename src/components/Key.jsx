import React, { useContext } from "react";
import { boardContext } from "../App";

const Key = ({ key, className, letter, disabled }) => {
  // Subscribes to context created in App.js and uses the states previously defined
  const { onPlayerLetter, onPlayerEnter, onPlayerDelete } =
    useContext(boardContext);

  // Onclick when player selects a key on keyboard
  const playerSelectsLetter = () => {
    if (letter === "ENTER") {
      onPlayerEnter();
    } else if (letter === "DELETE") {
      onPlayerDelete();
    } else {
      onPlayerLetter(letter);
    }
  };

  return (
    <div
      className={className}
      key={key}
      onClick={playerSelectsLetter}
      id={disabled ? "disabled" : ""}
    >
      {letter}
    </div>
  );
};

export default Key;
