import styled from "styled-components";

export const HomeStyles = styled("div")`
  background: #fefefe;
  padding: ${({ padding }) => padding || "0"};
  width: 700px;
  height: 80vh;
  overflow-x: auto;
  border-radius: 0.85em;
  border: 1px solid #ddd;
  position: relative;

  .student__card {
    &:first-child {
      border-top-right-radius: 0.5em;
      border-top-left-radius: 0.5em;
    }
    &:last-child {
      border-bottom-right-radius: 0.5em;
      border-bottom-left-radius: 0.5em;
    }
  }
`;
