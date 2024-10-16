import styled from "styled-components"

import { ColumnOptions, StyledComponent } from "../../../interfaces"
import { LeftColumnWrapperProps, TwoColumnsProps } from "./twoColumns.types"

export const Component: StyledComponent<"div"> = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 35px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const LeftColumnWrapper: StyledComponent<
  "div",
  LeftColumnWrapperProps
> = styled.div<LeftColumnWrapperProps>`
  display: flex;
  align-self: ${({ options }) => options.align};
  position: relative;

  @media (min-width: 768px) {
    max-width: 570px;
    width: 50%;
  }
`

export const RightColumnWrapper: StyledComponent<
  "div",
  TwoColumnsProps
> = styled.div`
  display: flex;
  position: relative;

  @media (min-width: 768px) {
    max-width: 570px;
    width: 50%;
  }
`
