import styled from "styled-components";

interface IIBProps {
  readonly height?: string
  readonly width?: string
}

export const ImageBox = styled("div")<IIBProps>`
  height: ${({ height }) => height || "120px"};
  width: ${({ width }) => width || "120px"};
  border-radius: 50%;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5em;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
