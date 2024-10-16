import { ColumnOptions, TwoColumnsOptions } from "../../../interfaces"

export interface TwoColumnsProps {
  leftColumn: React.ReactNode
  rightColumn: React.ReactNode
  options?: TwoColumnsOptions
  className?: string
}

export interface LeftColumnWrapperProps {
  options: ColumnOptions
}
