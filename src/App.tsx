import React, { useState } from "react";
import Board from "./components/Board";
import Square from "./components/Square";
import usePlayerGaming from "./hooks/usePlayerGaming";

const App = () => {
  const [squares, setSquares] = useState<string[]>(new Array(9).fill(""));
  const [playerGaming, changePlayerGaming] = usePlayerGaming();

  const fillBoardSquare = ({
    index,
    content,
  }: {
    index: number;
    content: string;
  }) => {
    squares[index] = content;
    setSquares([...squares]);
    changePlayerGaming();
  };

  const handleClickOnSquare = (index: number) => {
    if (squares[index] !== "") return;

    fillBoardSquare({ index, content: playerGaming });
  };

  return (
    <>
      <h1>My Tic Tac Toe game version!</h1>
      <Board>
        {squares.map((square, index) => (
          <Square
            key={`square-${index}`}
            onClick={() => handleClickOnSquare(index)}
          >
            {square}
          </Square>
        ))}
      </Board>
    </>
  );
};

export default App;
