import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { getSize, checkColor } from "../../utils"

const Component = styled(Link)`
  display: ${props => props.display};
  font-family: ${props =>
    props.family ? `${props.family}, sans-serif` : "Urbanist, sans-serif"};
  font-size: ${props =>
    props.size ? getSize(props.size).size : props.fontSize ?? "inherit"};
  line-height: ${props =>
    props.size ? getSize(props.size).interline : props.interline ?? "inherit"};
  font-weight: ${props =>
    props.size ? getSize(props.size).weight : props.weight ?? "inherit"};
  color: ${props =>
    props.color
      ? checkColor(props.color)
      : props.variant
      ? checkColor(props.variant + "20")
      : checkColor("transgraniczny20")};
  line-height: ${props => (props.big ? "28" : "24")}px;
  text-decoration: none;
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  margin-bottom: ${props => props.mb};
  transition: color 0.3s ease;

  :hover {
    color: ${props =>
      props.hover
        ? checkColor(props.hover)
        : props.theme
        ? checkColor(props.variant + "40")
        : checkColor("transgraniczny40")};
  }

  @media (min-width: 576px) {
    margin: ${props => props.marginSM};
  }
`

const CustomLink = ({
  className,
  children,
  to,
  href,
  text,
  onClick,
  ...rest
}) => (
  <Component className={className} to={to} {...rest}>
    {text ?? children}
  </Component>
)

export default CustomLink
