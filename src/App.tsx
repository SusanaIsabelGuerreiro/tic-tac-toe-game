import React, { useState } from "react";
import Board from "./components/Board";
import Square from "./components/Square";
import usePlayerGaming from "./hooks/usePlayerGaming";

const playerWins = (grid: string[], player: string) => {
  return (
    (grid[0] === player && grid[1] === player && grid[2] === player) ||
    (grid[3] === player && grid[4] === player && grid[5] === player) ||
    (grid[6] === player && grid[7] === player && grid[8] === player) ||
    (grid[0] === player && grid[3] === player && grid[6] === player) ||
    (grid[1] === player && grid[4] === player && grid[7] === player) ||
    (grid[2] === player && grid[5] === player && grid[8] === player) ||
    (grid[0] === player && grid[4] === player && grid[8] === player) ||
    (grid[2] === player && grid[4] === player && grid[6] === player)
  );
};

const App = () => {
  const [grid, setGrid] = useState<string[]>(new Array(9).fill(""));
  const [playerGaming, changePlayerGaming] = usePlayerGaming();
  const [winner, setWinner] = useState<string>();

  const handleClickOnSquare = (index: number) => {
    if (winner || grid[index] !== "") return;

    grid[index] = playerGaming;
    setGrid([...grid]);

    if (playerWins(grid, playerGaming)) {
      setWinner(playerGaming);
    }

    changePlayerGaming();
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
      {winner && <span>Player {winner} wins!</span>}
    </>
  );
};

export default App;
