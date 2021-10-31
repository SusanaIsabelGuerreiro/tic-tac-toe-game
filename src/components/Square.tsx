import styled from "styled-components";

const Square = styled.div`
  background-color: ${(props) => (props.children ? "lightblue" : "lightgrey")};
  height: auto;
  padding: 10px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Square;
