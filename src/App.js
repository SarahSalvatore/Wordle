import React, { useState, createContext } from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import Footer from "./components/Footer";
import { defaultBoard } from "./data/words";
import "./styles/main.css";

export const boardContext = createContext();

function App() {
  // Board initial state is set to the empty default board
  const [board, setBoard] = useState(defaultBoard);

  // Player's initial position on the board is set to row 0 letter 0
  const [currentPlay, setCurrentPlay] = useState({
    rowPosition: 0,
    letterPosition: 0,
  });

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
    // If player presses enter on the last letter of the row, go to the next row
    setCurrentPlay({
      rowPosition: currentPlay.rowPosition + 1,
      letterPosition: 0,
    });
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
            currentPlay,
            setCurrentPlay,
            onPlayerLetter,
            onPlayerEnter,
            onPlayerDelete,
          }}
        >
          <Board />
          <Keyboard />
        </boardContext.Provider>
      </section>
      <Footer />
    </main>
  );
}

export default App;
