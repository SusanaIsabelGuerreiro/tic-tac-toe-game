import React, { useState } from "react";
import Board from "./components/Board";
import Square from "./components/Square";
import usePlayerGaming from "./hooks/usePlayerGaming";

const App = () => {
  const [grid, setGrid] = useState<string[]>(new Array(9).fill(""));
  const [playerGaming, changePlayerGaming] = usePlayerGaming();

  const fillBoardSquare = ({
    index,
    content,
  }: {
    index: number;
    content: string;
  }) => {
    grid[index] = content;
    setGrid([...grid]);
    changePlayerGaming();
  };

  const handleClickOnSquare = (index: number) => {
    if (grid[index] !== "") return;

    fillBoardSquare({ index, content: playerGaming });
  };

  return (
    <>
      <h1>My Tic Tac Toe game version!</h1>
      <Board>
        {grid.map((square, index) => (
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
