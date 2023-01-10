import React from "react";

const Definition = ({ partOfSpeech, definition }) => {
  return (
    <div className="definition-container">
      <p className="bold-small-para">{partOfSpeech}</p>
      <p className="small-para">{definition}</p>
    </div>
  );
};

export default Definition;
