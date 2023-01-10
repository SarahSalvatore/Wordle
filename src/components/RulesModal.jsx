import React from "react";
import correct from "../assets/correct.webp";
import almost from "../assets/almost.webp";
import incorrect from "../assets/incorrect.webp";

const RulesModal = () => {
  return (
    <div>
      <button>x</button>
      <p>
        Guess the <span>WORDLE</span> in 6 tries.
      </p>
      <p>
        After each guess, the colour of the tiles will change to show how close
        your guess was to the word.
      </p>
      <hr />
      <img
        src={correct}
        alt="Game row spelling out the word raven. The R tile is green and the other letter tiles are not filled in."
      />
      <p>The letter R is in the word and in the correct spot.</p>
      <img
        src={almost}
        alt="Game row spelling out the word issue. The I tile is blue and the other letter tiles are not filled in."
      />
      <p>The letter I is in the word but is in the wrong spot.</p>
      <img
        src={incorrect}
        alt="Game row spelling out the word might. The M tile is not filled in and the other letter tiles are green."
      />
      <p>The letter M is not in the word in any spot.</p>
      <hr />
      <p>There are over 2000 WORDLES available today!</p>
    </div>
  );
};

export default RulesModal;
