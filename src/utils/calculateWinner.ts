const WINNING_POSITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const playerWins = (grid: string[], player: string) => {
  return WINNING_POSITIONS.some(
    (positions) =>
      grid[positions[0]] === player &&
      grid[positions[1]] === player &&
      grid[positions[2]] === player
  );
};

const calculateWinner = (grid: string[], players: string[]) => {
  const playersClassification: { [player: string]: boolean } = {};

  players.reduce((playersClassification, player) => {
    return {
      ...playersClassification,
      [player]: playerWins(grid, player),
    };
  }, playersClassification);

  const winner = Object.keys(playersClassification).find(
    (key) => playersClassification[key] === true
  );

  return winner || "tie";
};

export { playerWins, calculateWinner };
