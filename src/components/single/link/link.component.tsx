import React from "react"

import { Component } from "./link.styled"
import { LinkProps } from "./link.types"

export const Link: React.FC<LinkProps> = (props: LinkProps): JSX.Element => {
  const { className, text, to, active = false, style }: LinkProps = props

  return (
    <Component className={className} href={to} $active={active} style={style}>
      {text}
    </Component>
  )
}
