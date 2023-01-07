import React, { useContext } from "react";
import { boardContext } from "../App";

const Letter = ({ position, value }) => {
  const { board } = useContext(boardContext);
  const letter = board[value][position];
  return <div className="letter">{letter}</div>;
};

export default Letter;
