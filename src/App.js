import React, { useState, createContext } from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import Footer from "./components/Footer";
import { defaultBoard } from "./data/words";
import "./styles/main.css";

export const boardContext = createContext();

function App() {
  // Board initial state is set to the empty default board.
  const [board, setBoard] = useState(defaultBoard);

  return (
    <main className="App">
      <Header />
      <section>
        <boardContext.Provider value={{ board, setBoard }}>
          <Board />
          <Keyboard />
        </boardContext.Provider>
      </section>
      <Footer />
    </main>
  );
}

export default App;
