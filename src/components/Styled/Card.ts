import styled from "styled-components"

interface ICardProps {
  readonly align?: string
  readonly justify?: string
  readonly padding?: string
  readonly direction?: string
}

export const Card = styled("div")<ICardProps>`
  background: #fefefe;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "space-between"};
  padding: ${({ padding }) => padding || "1em 2em"};

  .title {
    text-transform: uppercase;
    font-size: 2rem;
    margin: 0;
  }

  p {
    color: #b3b3b3;
    margin: 0;
    line-height: 1.6;
    padding-left: 0.5em;
  }
`

export const CardContent = styled("div")<ICardProps>`
  display: flex;
  flex: 1;
  padding-left: 1em;
  flex-direction: ${({ direction }) => direction || "column"};
`
