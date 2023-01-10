import React, { useContext, useState, useEffect } from "react";
import { defaultBoard } from "../data/defaultBoard";
import { boardContext } from "../App";
import Definition from "./Definition";

const GameEndModal = () => {
  // Subscribes to context created in App.js and uses the states previously defined
  const { gameEnd, correctWord, currentPlay } = useContext(boardContext);

  // Holds the current words definition and displays to player at game end
  const [wordDefinition, setWordDefinition] = useState([]);

  // Generates new game on Play Again button click
  // Sets board to empty, gameEnd to false and generates new word
  const startNewGame = () => {
    window.location.reload(true);
  };

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
          // API returns an array of definitions based on word type (eg. noun, adj, verb)
          .then((definition) => setWordDefinition(definition))
          // If error, set word definition to same syntax as API response
          .catch((error) => {
            setWordDefinition([
              {
                meanings: {
                  partOfSpeech: "error",
                  definitions: {
                    definition:
                      "We're sorry, an error has occurred. Unable to provide word definition at this time.",
                  },
                },
              },
            ]);
          });
      }
    };
    getWordDefinition();
  }, [gameEnd.gameOver, correctWord]);

  return (
    <div className="modal-container">
      <h3 className="modal-header">
        {gameEnd.playerWon ? "You Win!" : "Game Over!"}
      </h3>
      <hr />
      <p className="modal-para">
        {gameEnd.playerWon
          ? `You guessed the correct word in ${currentPlay.rowPosition} ${
              currentPlay.rowPosition > 1 ? "attempts" : "attempt"
            }`
          : "good try, but the correct word was:"}
      </p>
      <h4 className="modal-para-word">{correctWord}</h4>
      <hr />
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
      <div className="button-container">
        <button onClick={startNewGame}>Play Again</button>
      </div>
    </div>
  );
};

export default GameEndModal;
