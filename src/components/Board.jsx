import React from "react";
import Row from "./Row";

const Board = () => {
  return (
    // Board comprised of 6 rows
    <div className="board">
      <Row rowValue={0} />
      <Row rowValue={1} />
      <Row rowValue={2} />
      <Row rowValue={3} />
      <Row rowValue={4} />
      <Row rowValue={5} />
    </div>
  );
};

export default Board;
