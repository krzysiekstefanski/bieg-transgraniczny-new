import React from "react"

import { twoColumnsConst } from "./twoColumns.const"
import {
  Component,
  LeftColumnWrapper,
  RightColumnWrapper,
} from "./twoColumns.styled"
import { TwoColumnsProps } from "./twoColumns.types"

export const TwoColumns: React.FC<TwoColumnsProps> = (
  props: TwoColumnsProps
): JSX.Element => {
  const {
    className,
    leftColumn,
    rightColumn,
    options = twoColumnsConst,
  }: TwoColumnsProps = props

  return (
    <Component className={className}>
      <LeftColumnWrapper options={options.leftColumn}>
        {leftColumn}
      </LeftColumnWrapper>
      <RightColumnWrapper options={options.rightColumn}>
        {rightColumn}
      </RightColumnWrapper>
    </Component>
  )
}
