import { useState } from "react";

const usePlayerGaming = (): [string, () => void] => {
  const [firstPlayer, setFirstPlayer] = useState(true);

  const changePlayerGaming = () => setFirstPlayer(!firstPlayer);

  return [firstPlayer ? "X" : "O", changePlayerGaming];
};

export default usePlayerGaming;
