import React from "react";
import { keyboard } from "../data/keyboard";

const Keyboard = () => {
  return (
    <div className="keyboard">
      <div className="keyboard-row">
        {keyboard[0].map((key) => {
          return (
            <div key={key} className="key">
              {key}
            </div>
          );
        })}
      </div>
      <div className="keyboard-row">
        {keyboard[1].map((key) => {
          return (
            <div key={key} className="key">
              {key}
            </div>
          );
        })}
      </div>
      <div className="keyboard-row">
        {keyboard[2].map((key) => {
          return (
            <div key={key} className="key">
              {key}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Keyboard;
