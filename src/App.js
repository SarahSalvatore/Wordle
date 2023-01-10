import React, { useState, useEffect, createContext } from "react";
import RulesModal from "./components/RulesModal";
import Header from "./components/Header";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import Footer from "./components/Footer";
import GameEndModal from "./components/GameEndModal";
import { defaultBoard } from "./data/defaultBoard";
import { generateWordSet } from "./data/wordSet";
import "./styles/main.css";

export const boardContext = createContext();

function App() {
  // Shows rules the first time app is open but not for consequent plays
  const [firstGame, setFirstGame] = useState(true);

  // Board initial state is set to the empty default board
  const [board, setBoard] = useState(defaultBoard);

  // Represents bank of available words - inital state is empty Set (faster way to lookup word guesses)
  const [wordBank, setWordBank] = useState(new Set());

  // Represents the word bank Set as an array (better way to generate a new random word for new game)
  const [wordBankArray, setWordBankArray] = useState([]);

  // Represents the current game's word
  const [correctWord, setCorrectWord] = useState("");

  // Keeps track of incorrect letters guessed so they can be grayed out on the onscreen keyboard
  const [disabledLetters, setDisabledLetters] = useState([]);

  // Tracks the end of game and if the player won
  const [gameEnd, setGameEnd] = useState({ gameOver: false, playerWon: false });

  // Player's initial position on the board is set to row 0 letter 0
  const [currentPlay, setCurrentPlay] = useState({
    rowPosition: 0,
    letterPosition: 0,
  });

  // UseEffect to set word bank and generate new word from word bank upon initial render
  useEffect(() => {
    generateWordSet().then((words) => {
      setWordBank(words.wordSet);
      setWordBankArray(words.wordArray);
      setCorrectWord(
        words.wordArray[Math.floor(Math.random() * words.wordArray.length)]
      );
    });
  }, []);

  // Player moves
  // Adds letter to current board and then updates the current board position
  const onPlayerLetter = (letter) => {
    if (currentPlay.letterPosition === 5) return;
    const boardInMotion = [...board];
    boardInMotion[currentPlay.rowPosition][currentPlay.letterPosition] = letter;
    setBoard(boardInMotion);
    setCurrentPlay({
      ...currentPlay,
      letterPosition: currentPlay.letterPosition + 1,
    });
  };

  const onPlayerEnter = () => {
    // Cannot enter if player is not on the last letter position
    if (currentPlay.letterPosition !== 5) return;

    // Convert current word try to string
    const wordGuess = board[currentPlay.rowPosition].join("").toLowerCase();

    // Check if word guess is in the bank
    if (wordBank.has(wordGuess)) {
      // If player presses enter on the last letter of the row, go to the next row
      setCurrentPlay({
        rowPosition: currentPlay.rowPosition + 1,
        letterPosition: 0,
      });
    } else {
      alert("Not a word. Delete and try again.");
    }

    if (wordGuess === correctWord) {
      setGameEnd({ gameOver: true, playerWon: true });
      return;
    }

    if (currentPlay.rowPosition === 5) {
      setGameEnd({ gameOver: true, playerWon: false });
    }
  };

  const onPlayerDelete = () => {
    // Cannot delete if player is in the first letter position
    if (currentPlay.letterPosition === 0) return;
    // If player presses delete, go to the previous position and set tile to blank
    const boardInMotion = [...board];
    boardInMotion[currentPlay.rowPosition][currentPlay.letterPosition - 1] = "";
    setBoard(boardInMotion);
    setCurrentPlay({
      ...currentPlay,
      letterPosition: currentPlay.letterPosition - 1,
    });
  };

  return (
    <main className="App">
      <Header />
      <section>
        <boardContext.Provider
          value={{
            board,
            setBoard,
            firstGame,
            setFirstGame,
            currentPlay,
            setCurrentPlay,
            onPlayerLetter,
            onPlayerEnter,
            onPlayerDelete,
            correctWord,
            setCorrectWord,
            wordBankArray,
            disabledLetters,
            setDisabledLetters,
            gameEnd,
            setGameEnd,
          }}
        >
          <Board />
          <Keyboard />
          {firstGame && <RulesModal />}
          {gameEnd.gameOver && <GameEndModal />}
        </boardContext.Provider>
      </section>
      <Footer />
    </main>
  );
}

export default App;
