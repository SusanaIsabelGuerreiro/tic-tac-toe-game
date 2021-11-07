import { useState } from "react";

const usePlayerGaming = (): [string, (resetPlayer?: boolean) => void] => {
  const [firstPlayer, setFirstPlayer] = useState(true);

  const changePlayerGaming = (resetPlayer?: boolean) => {
    resetPlayer ? setFirstPlayer(true) : setFirstPlayer(!firstPlayer);
  };

  return [firstPlayer ? "X" : "O", changePlayerGaming];
};

export default usePlayerGaming;
