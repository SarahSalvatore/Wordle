import React, { useContext, useState, useEffect } from "react";
import { boardContext } from "../App";
import Definition from "./Definition";

const GameEndModal = () => {
  // Subscribes to context created in App.js and uses the states previously defined
  const { gameEnd, setGameEnd, correctWord } = useContext(boardContext);

  // Holds the current words definition and displays to player at game end
  const [wordDefinition, setWordDefinition] = useState([]);

  useEffect(() => {
    // Fetches current words definition from Free Dictionary API
    const getWordDefinition = async () => {
      if (gameEnd.gameOver === true) {
        await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${correctWord}`,
          {
            method: "GET",
          }
        )
          .then((response) => response.json())
          .then((definition) => setWordDefinition(definition));
      }
    };
    getWordDefinition();
  }, [gameEnd.gameOver, correctWord]);

  return (
    <div>
      <h3>{gameEnd.playerWon ? "You Win!" : "Game Over"}</h3>
      <h4>{correctWord}</h4>
      {wordDefinition &&
        wordDefinition.map((item) => {
          return (
            <Definition
              key={item.meanings[0].partOfSpeech}
              partOfSpeech={item.meanings[0].partOfSpeech}
              definition={item.meanings[0].definitions[0].definition}
            />
          );
        })}
      <button>Play Again</button>
    </div>
  );
};

export default GameEndModal;
