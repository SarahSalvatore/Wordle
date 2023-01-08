import React, { useContext } from "react";
import { boardContext } from "../App";

const Letter = ({ position, value }) => {
  const { board, correctWord, currentPlay } = useContext(boardContext);
  const letter = board[value][position];

  // Correct letter in the correct position
  const correctLetter = correctWord[position] === letter.toLowerCase();

  // Correct letter in the wrong position
  const almostLetter =
    !correctLetter &&
    letter !== "" &&
    correctWord.includes(letter.toLowerCase());

  // Only provides color coding id once the row is complete
  const letterState =
    currentPlay.rowPosition > value &&
    (correctLetter ? "correct" : almostLetter ? "almost" : "incorrect");

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
};

export default Letter;
