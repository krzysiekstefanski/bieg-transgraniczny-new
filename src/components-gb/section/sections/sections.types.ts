import { EventTheme } from "../../../enums-gb"

export interface SectionsProps {
  data: any
  theme: EventTheme
  disabled?: boolean
  className?: string
}

export interface SectionProps {
  $background: boolean
}

export interface ContentWrapperProps {
  $columns: number
  $frame: boolean
  $width: string
}

export interface DecorationWrapperProps {
  $theme: EventTheme
}
