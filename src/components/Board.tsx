import React from "react";
import styled from "styled-components";

interface CustomProps {
  readonly gameEnded?: boolean;
}

const Board = styled.div<CustomProps & React.HTMLProps<HTMLDivElement>>`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 80vh;
  width: 80vh;
  max-width: 500px;
  max-height: 500px;
  opacity: ${(props: CustomProps) => (props.gameEnded ? 0.5 : 1)};
` as React.FC<CustomProps & React.HTMLProps<HTMLDivElement>>;

export default Board;
