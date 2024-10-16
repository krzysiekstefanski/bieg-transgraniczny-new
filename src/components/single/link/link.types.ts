import { ReactNode } from "react"

export interface LinkProps {
  text: string | ReactNode
  to: string
  active?: boolean
  style?: React.CSSProperties
  className?: string
}

export interface ContainerProps {
  $active?: boolean
}
