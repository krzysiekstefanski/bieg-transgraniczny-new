import React from "react"
import parse from "html-react-parser"
import { colorize } from "../../../utils-gb"
import { TextAlign } from "../../../enums-gb"
import { Container } from "./title.styled"
import { TitleProps } from "./title.types"

export const Title: React.FC<TitleProps> = (props: TitleProps): JSX.Element => {
  const {
    className,
    text,
    align = TextAlign.Center,
    level = 1,
    eventTheme,
  }: TitleProps = props

  return (
    <Container className={className} $level={level} $align={align}>
      {parse(colorize(text, eventTheme))}
    </Container>
  )
}
