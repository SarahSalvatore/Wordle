import React, { useCallback, useEffect, useContext } from "react";
import Key from "./Key";
import { boardContext } from "../App";
import { keyboard } from "../data/keyboard";
import { acceptedKeys } from "../data/keyboard";

const Keyboard = () => {
  const { onPlayerLetter, onPlayerEnter, onPlayerDelete, disabledLetters } =
    useContext(boardContext);

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === "Enter") {
        onPlayerEnter();
      } else if (event.key === "Backspace" || event.key === "Delete") {
        onPlayerDelete();
      } else {
        acceptedKeys.forEach((letter) => {
          if (event.key === letter) {
            onPlayerLetter(letter.toUpperCase());
          }
        });
      }
    },
    [onPlayerDelete, onPlayerEnter, onPlayerLetter]
  );

  useEffect(() => {
    // Listens for keydown events
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="keyboard-container">
      <div className="keyboard" onKeyDown={handleKeyPress}>
        <div className="keyboard-row">
          {keyboard[0].map((key) => {
            return (
              <Key
                key={key}
                className="key"
                letter={key}
                disabled={disabledLetters.includes(key)}
              />
            );
          })}
        </div>
        <div className="keyboard-row">
          {keyboard[1].map((key) => {
            return (
              <Key
                key={key}
                className="key"
                letter={key}
                disabled={disabledLetters.includes(key)}
              />
            );
          })}
        </div>
        <div className="keyboard-last-row">
          <Key key="enter" className="large-key" id="enter" letter="ENTER" />
          {keyboard[2].map((key) => {
            return (
              <Key
                key={key}
                className="key"
                letter={key}
                disabled={disabledLetters.includes(key)}
              />
            );
          })}
          <Key key="delete" className="large-key" letter="DELETE" />
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
