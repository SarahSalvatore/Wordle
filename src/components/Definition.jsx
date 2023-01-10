import React from "react";

const Definition = ({ partOfSpeech, definition }) => {
  return (
    <div>
      <p>{partOfSpeech}</p>
      <p>{definition}</p>
    </div>
  );
};

export default Definition;
