import { ReactNode } from "react"
import { TextAlign } from "../../../enums"

export interface TitleProps {
  text: string | ReactNode
  level?: number
  align?: TextAlign
  className?: string
}

export interface ContainerProps {
  $level: number
  $align: TextAlign
}
