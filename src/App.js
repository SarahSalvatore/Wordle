import Header from "./components/Header";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import "./styles/main.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Board />
      <Keyboard />
    </div>
  );
}

export default App;
