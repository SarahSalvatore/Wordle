import React, { useContext, useEffect } from "react";
import { boardContext } from "../App";

const Letter = ({ position, value }) => {
  const {
    board,
    correctWord,
    currentPlay,
    disabledLetters,
    setDisabledLetters,
  } = useContext(boardContext);

  const letter = board[value][position];
  const lowerCaseLetter = letter.toLowerCase();

  // Correct letter in the correct position
  const correctLetter = correctWord[position] === lowerCaseLetter;

  // Correct letter in the wrong position
  const almostLetter =
    !correctLetter && letter !== "" && correctWord.includes(lowerCaseLetter);

  // Determines class for letter
  const letterState =
    currentPlay.rowPosition > value
      ? correctLetter
        ? "correct"
        : almostLetter
        ? "almost"
        : "incorrect"
      : "neutral";

  useEffect(() => {
    // Once word guess is complete, if letter is incorrect add to disabled letters array
    if (letterState === "incorrect") {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currentPlay.rowPosition]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
};

export default Letter;
