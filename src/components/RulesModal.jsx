import React, { useContext } from "react";
import { boardContext } from "../App";
import correct from "../assets/correct.webp";
import almost from "../assets/almost.webp";
import incorrect from "../assets/incorrect.webp";

const RulesModal = () => {
  // Subscribes to context created in App.js and uses the states previously defined
  const { setFirstGame } = useContext(boardContext);

  return (
    <div className="modal-rules-container">
      <h3 className="modal-header">WORDLE</h3>
      <p className="small-para-margin">
        Guess the <span className="bold-small-para">WORDLE</span> in 6 tries.
      </p>
      <p className="small-para-margin">
        After each guess, the colour of the tiles will change to show how close
        your guess was to the word.
      </p>
      <hr />
      <img
        className="rules-img"
        src={correct}
        alt="Game row spelling out the word raven. The R tile is green and the other letter tiles are not filled in."
      />
      <p className="small-para-margin">
        The letter <span className="bold-small-para">R</span> is in the word and
        in the correct spot.
      </p>
      <img
        className="rules-img"
        src={almost}
        alt="Game row spelling out the word issue. The I tile is blue and the other letter tiles are not filled in."
      />
      <p className="small-para-margin">
        The letter <span className="bold-small-para">I</span> is in the word but
        is in the wrong spot.
      </p>
      <img
        className="rules-img"
        src={incorrect}
        alt="Game row spelling out the word might. The M tile is not filled in and the other letter tiles are green."
      />
      <p className="small-para-margin">
        The letter <span className="bold-small-para">M</span> is not in the word
        in any spot.
      </p>
      <hr />
      <div className="button-container">
        <button
          onClick={() => {
            setFirstGame(false);
          }}
        >
          Start Game
        </button>
      </div>
    </div>
  );
};

export default RulesModal;
