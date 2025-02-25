import { EventTheme } from "../../../enums-gb"

export interface RegisterProps {
  api: number
  eventTheme?: EventTheme
  className?: string
}

export interface TableHeadingProps {
  $eventTheme: EventTheme
}

export interface TableDataProps {
  $eventTheme: EventTheme
}

export interface TableRowProps {
  $eventTheme: EventTheme
}
