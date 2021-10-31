import React, { useState } from "react";
import Board from "./components/Board";
import Square from "./components/Square";

const App = () => {
  const [squares] = useState(new Array(9).fill(""));

  return (
    <>
      <h1>My Tic Tac Toe game version!</h1>
      <Board>
        {squares.map((square, index) => (
          <Square key={`square-${index}`}>{square}</Square>
        ))}
      </Board>
    </>
  );
};

export default App;
