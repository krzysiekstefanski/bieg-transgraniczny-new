import { ReactNode } from "react"
import { TextAlign } from "../../../enums"

export interface TextProps {
  text: string | ReactNode
  align?: TextAlign
  style?: React.CSSProperties
  is?: string
  className?: string
}

export interface ContainerProps {
  $align: TextAlign
  $is: string
}
