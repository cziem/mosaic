import styled from "styled-components";

export const Box = styled("div")`
  background: #fefefe;
  display: flex;
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  padding: ${({ padding }) => padding || "1em"};
`;
