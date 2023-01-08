import React from "react";
import { keyboard } from "../data/keyboard";
import Key from "./Key";

const Keyboard = () => {
  return (
    <div className="keyboard">
      <div className="keyboard-row">
        {keyboard[0].map((key) => {
          return <Key key={key} className="key" letter={key} />;
        })}
      </div>
      <div className="keyboard-row">
        {keyboard[1].map((key) => {
          return <Key key={key} className="key" letter={key} />;
        })}
      </div>
      <div className="keyboard-row">
        <Key key="enter" className="large-key" letter="ENTER" />
        {keyboard[2].map((key) => {
          return <Key key={key} className="key" letter={key} />;
        })}
        <Key key="delete" className="large-key" letter="DELETE" />
      </div>
    </div>
  );
};

export default Keyboard;
