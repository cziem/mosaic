import styled from "styled-components"

interface IBoxProps {
  readonly align?: string
  readonly justify?: string
  readonly padding?: string
  readonly position?: string
}

export const Box = styled("div")<IBoxProps>`
  background: #fefefe;
  display: flex;
  padding: ${({ padding }) => padding || "1em"};
  align-items: ${({ align }) => align || "center"};
  position: ${({ position }) => position || "unset"};
  justify-content: ${({ justify }) => justify || "flex-start"};
`
