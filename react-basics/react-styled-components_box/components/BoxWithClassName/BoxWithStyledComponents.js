import styled from "styled-components";


export default function BoxWithStyledComponents({ isBlack }) {
  return (
    <Box $highlighted={isBlack}></Box>
  );
}


const Box = styled.div `
  width: 100px;
  height: 100px;
  margin: 2rem;
  background-color: ${(props) => (props.$highlighted ? "black" : "green")};

  &:hover {
        background-color: red;
    }
`;