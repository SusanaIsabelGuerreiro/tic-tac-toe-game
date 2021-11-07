import React, { useEffect, useState } from "react";
import Board from "./components/Board";
import Square from "./components/Square";
import usePlayerGaming from "./hooks/usePlayerGaming";
import { calculateWinner, playerWins } from "./utils/calculateWinner";

const PLAYERS: string[] = ["X", "O"];

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

  useEffect(() => {
    if (!winner && grid.every((square) => square !== "")) {
      const winner = calculateWinner(grid, PLAYERS);
      setWinner(winner);
    }
  }, [grid, winner]);

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <span>
        {winner === undefined
          ? `Player ${playerGaming} turn`
          : PLAYERS.includes(winner)
          ? `Player ${winner} wins!`
          : "It's a tie!"}
      </span>
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
