import styled from "styled-components";

const Board = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  height: 80vh;
  width: 80vh;
  max-width: 500px;
  max-height: 500px;
`;

export default Board;
