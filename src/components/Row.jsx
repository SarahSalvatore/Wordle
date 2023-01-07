import React from "react";
import Letter from "./Letter";

const Row = ({ rowValue }) => {
  return (
    // Row comprised of 5 letters
    <div className="row">
      <Letter position={0} value={rowValue} />
      <Letter position={1} value={rowValue} />
      <Letter position={2} value={rowValue} />
      <Letter position={3} value={rowValue} />
      <Letter position={4} value={rowValue} />
    </div>
  );
};

export default Row;
