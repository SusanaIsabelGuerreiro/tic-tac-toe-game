import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Board from "./components/Board";
import Button from "./components/Button";
import Square from "./components/Square";
import Text from "./components/Text";
import usePlayerGaming from "./hooks/usePlayerGaming";
import { calculateWinner, playerWins } from "./utils/calculateWinner";

const PLAYERS: string[] = ["X", "O"];

const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

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

  const resetGame = () => {
    setGrid(new Array(9).fill(""));
    setWinner(undefined);
    changePlayerGaming(true);
  };

  useEffect(() => {
    if (!winner && grid.every((square) => square !== "")) {
      const winner = calculateWinner(grid, PLAYERS);
      setWinner(winner);
    }
  }, [grid, winner]);

  return (
    <AppLayout>
      <h1>Tic Tac Toe</h1>
      <Text>
        {winner === undefined
          ? `Player ${playerGaming} turn`
          : PLAYERS.includes(winner)
          ? `Player ${winner} wins!`
          : "It's a tie!"}
      </Text>
      <Board gameEnded={winner !== undefined}>
        {grid.map((square, index) => (
          <Square
            key={`square-${index}`}
            onClick={() => handleClickOnSquare(index)}
          >
            {square}
          </Square>
        ))}
      </Board>
      <Button onClick={() => resetGame()}>New game</Button>
    </AppLayout>
  );
};

export default App;
