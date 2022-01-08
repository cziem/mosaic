import styled from "styled-components";

export const Input = styled("input")`
  outline: none;
  border: none;
  border-bottom: ${({ borderBottom }) =>
    borderBottom ? "2px solid #ddd" : ""};
  padding: ${({ padding }) => padding || "0.5em"};
  width: ${({ width }) => width || "100%"};
  color: #b3b3b3;
  font-size: 1em;
  position: ${({ position }) => position || ""};
  top: ${({ top }) => top || 0};

  ::-webkit-input-placeholder {
    color: #b3b3b3;
  }

  :-ms-input-placeholder {
    color: #b3b3b3;
  }

  ::placeholder {
    color: #b3b3b3;
  }
`;
