import * as React from "react"

import { Component } from "./hamburger.styled"
import { HamburgerProps } from "./hamburger.types"

export const Hamburger: React.FC<HamburgerProps> = (
  props: HamburgerProps
): JSX.Element => {
  const { className, hamburgerClick, active }: HamburgerProps = props

  return (
    <Component
      className={`hamburger ${active && ` active` && !!className}`}
      onClick={hamburgerClick}
    >
      <span />
      <span />
      <span />
    </Component>
  )
}
