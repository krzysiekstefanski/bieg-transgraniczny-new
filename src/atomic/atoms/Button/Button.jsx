import styled from "styled-components"
import { getSize, checkColor, getColor } from "../../utils"

const Button = styled.button`
  font-family: Inter, sans-serif;
  display: ${props => props.display ?? "flex"};
  justify-content: ${props => props.justify ?? "center"};
  align-items: ${props => props.align ?? "center"};
  width: ${props => props.width};
  max-width: ${props => props.max};
  max-height: ${props => props.maxHeight};
  height: ${props => props.height};
  color: ${props =>
    props.color ?? props.variant
      ? ButtonVariants[props.variant].color
      : ButtonVariants["red"].color};
  padding: ${props =>
    props.padding ?? props.size
      ? ButtonSizes[props.size]?.padding
      : ButtonSizes["medium"]?.padding};
  border: ${props =>
    props.border ?? props.variant
      ? ButtonVariants[props.variant].border
      : ButtonVariants["red"].border};
  background-color: ${props =>
    props.backgroundColor ?? props.variant
      ? ButtonVariants[props.variant].backgroundColor
      : ButtonVariants["red"].backgroundColor};
  border-radius: ${props => props.borderRadius ?? "8px"};
  font-size: ${props =>
    props.size
      ? getSize(ButtonSizes[props.size].textSize).size
      : getSize(ButtonSizes["medium"].textSize).size};
  font-weight: ${props =>
    props.variant
      ? ButtonVariants[props.variant].fontWeight
      : ButtonVariants["red"].fontWeight};
  line-height: ${props =>
    props.size
      ? getSize(ButtonSizes[props.size].textSize).interline
      : getSize(ButtonSizes["medium"].textSize).interline};
  letter-spacing: ${props =>
    getSize(ButtonSizes[props.size]?.textSize).spacing};
  text-decoration: none;
  transition: ${props =>
    props.variant
      ? ButtonVariants[props.variant].transition
      : ButtonVariants["red"].transition};
  white-space: ${props => props.wrap ?? "nowrap"};
  cursor: ${props => props.cursor ?? "pointer"};
  margin: ${props => props.margin};
  :hover {
    color: ${props =>
      props.hoverColor ?? props.variant
        ? ButtonVariants[props.variant].hoverColor
        : ButtonVariants["red"].hoverColor};
    background-color: ${props =>
      props.hoverBackgroundColor ?? props.variant
        ? ButtonVariants[props.variant].hoverBackgroundColor
        : ButtonVariants["red"].hoverBackgroundColor};
    border: ${props =>
      props.hoverBorder ?? props.variant
        ? ButtonVariants[props.variant].hoverBorder
        : ButtonVariants["red"].hoverBorder};
  }

  @media (max-width: 374px) {
    width: ${props => props.widthXS};
    margin: ${props => props.marginXS};
  }

  @media (min-width: 576px) {
    display: ${props => props.displaySM};
    width: ${props => props.widthSM};
  }

  @media (min-width: 769px) {
    display: ${props => props.displayMD};
    max-width: ${props => props.maxMD};
    margin: ${props => props.marginMD};
    padding: ${props => props.paddingMD ?? ButtonSizes[props.sizeMD]?.padding};
    font-size: ${props => getSize(ButtonSizes[props.sizeMD]?.textSize).size};
    line-height: ${props =>
      getSize(ButtonSizes[props.sizeMD]?.textSize).interline};
  }

  @media (min-width: 992px) {
    display: ${props => props.displayLG};
    margin: ${props => props.marginLG};
    padding: ${props => props.paddingLG ?? ButtonSizes[props.sizeLG]?.padding};
    font-size: ${props => getSize(ButtonSizes[props.sizeLG]?.textSize).size};
    line-height: ${props =>
      getSize(ButtonSizes[props.sizeLG]?.textSize).interline};
  }

  @media (min-width: 1280px) {
    margin: ${props => props.marginXL};
    padding: ${props => props.paddingXL ?? ButtonSizes[props.sizeXL]?.padding};
    font-size: ${props => getSize(ButtonSizes[props.sizeXL]?.textSize).size};
    line-height: ${props =>
      getSize(ButtonSizes[props.sizeXL]?.textSize).interline};
  }

  @media (min-width: 1440px) {
    margin: ${props => props.marginXXL};
    padding: ${props =>
      props.paddingXXL ?? ButtonSizes[props.sizeXXL]?.padding};
    font-size: ${props => getSize(ButtonSizes[props.sizeXXL]?.textSize).size};
    line-height: ${props =>
      getSize(ButtonSizes[props.sizeXXL]?.textSize).interline};
  }

  @media (min-width: 1920px) {
    margin: ${props => props.marginHD};
    padding: ${props => props.paddingHD ?? ButtonSizes[props.sizeHD]?.padding};
    font-size: ${props => getSize(ButtonSizes[props.sizeHD]?.textSize).size};
    line-height: ${props =>
      getSize(ButtonSizes[props.sizeHD]?.textSize).interline};
  }

  :focus {
    color: ${props =>
      props.focusColor ?? props.variant
        ? ButtonVariants[props.variant].focusColor
        : ButtonVariants["red"].focusColor};
    background-color: ${props =>
      props.focusBackgroundColor ?? props.variant
        ? ButtonVariants[props.variant].focusBackgroundColor
        : ButtonVariants["red"].focusBackgroundColor};
    border: ${props =>
      props.focusBorder ?? props.variant
        ? ButtonVariants[props.variant].focusBorder
        : ButtonVariants["red"].focusBorder};
    outline: ${props =>
      props.focusOutline ?? props.variant
        ? ButtonVariants[props.variant].focusOutline
        : ButtonVariants["red"].focusOutline};
  }

  :focus-visible {
    color: ${props =>
      props.focusColor ?? props.variant
        ? ButtonVariants[props.variant].focusColor
        : ButtonVariants["red"].focusColor};
    background-color: ${props =>
      props.focusBackgroundColor ?? props.variant
        ? ButtonVariants[props.variant].focusBackgroundColor
        : ButtonVariants["red"].focusBackgroundColor};
    border: ${props =>
      props.focusBorder ?? props.variant
        ? ButtonVariants[props.variant].focusBorder
        : ButtonVariants["red"].focusBorder};
    outline: ${props =>
      props.focusOutline ?? props.variant
        ? ButtonVariants[props.variant].focusOutline
        : ButtonVariants["red"].focusOutline};
  }

  :disabled {
    background-color: ${props =>
      props.variant !== "blank" && checkColor("grey20")};
    color: ${props => props.variant !== "blank" && checkColor("grey20")};
    border-color: ${props => props.variant !== "blank" && "transparent"};
    cursor: not-allowed;
  }
`

const ButtonSizes = {
  small: {
    padding: `9px 27px`,
    textSize: `buttonS`,
  },
  medium: {
    padding: `11px 39px`,
    textSize: `button`,
  },
  big: {
    padding: `15px 39px`,
    textSize: `button`,
  },
}

const ButtonVariants = {
  blank: {
    color: checkColor("black"),
    fontWeight: "500",
    backgroundColor: "transparent",
    hoverColor: checkColor("black"),
    hoverBackgroundColor: "transparent",
    focusColor: checkColor("black"),
    focusBackgroundColor: "transparent",
    focusBorder: "1px solid transparent",
    focusOutline: "none",
    border: "1px solid transparent",
    hoverBorder: "1px solid transparent",
    focusBorder: "1px solid transparent",
  },
  red: {
    color: checkColor("white"),
    fontWeight: "700",
    backgroundColor: checkColor("red20"),
    border: "1px solid transparent",
    hoverColor: checkColor("white"),
    hoverBackgroundColor: checkColor("red40"),
    hoverBorder: "1px solid transparent",
    focusColor: checkColor("white"),
    focusBackgroundColor: checkColor("red40"),
    focusBorder: "1px solid transparent",
    focusOutline: "none",
    transition: "0.25s ease-in background-color",
  },
  niepodleglosci: {
    color: checkColor("white"),
    fontWeight: "700",
    backgroundColor: checkColor("niepodleglosci20"),
    border: "1px solid transparent",
    hoverColor: checkColor("white"),
    hoverBackgroundColor: checkColor("niepodleglosci40"),
    hoverBorder: "1px solid transparent",
    focusColor: checkColor("white"),
    focusBackgroundColor: checkColor("niepodleglosci40"),
    focusBorder: "1px solid transparent",
    focusOutline: "none",
    transition: "0.25s ease-in background-color",
  },
  niepodleglosciOutline: {
    color: checkColor("black"),
    fontWeight: "700",
    backgroundColor: checkColor("white"),
    border: `1px solid ${checkColor("niepodleglosci20")}`,
    hoverColor: checkColor("niepodleglosci20"),
    hoverBorder: `1px solid ${checkColor("niepodleglosci40")}`,
    focusColor: checkColor("transgraniczny20"),
    focusBorder: `1px solid ${checkColor("niepodleglosci40")}`,
    focusOutline: "none",
    transition: "0.25s ease-in background-color, 0.1s ease-in color",
  },
  green: {
    color: checkColor("white"),
    fontWeight: "700",
    backgroundColor: checkColor("transgraniczny20"),
    border: "1px solid transparent",
    hoverColor: checkColor("white"),
    hoverBackgroundColor: checkColor("transgraniczny40"),
    hoverBorder: "1px solid transparent",
    focusColor: checkColor("white"),
    focusBackgroundColor: checkColor("transgraniczny40"),
    focusBorder: "1px solid transparent",
    focusOutline: "none",
    transition: "0.25s ease-in background-color",
  },
  transgraniczny: {
    color: checkColor("white"),
    fontWeight: "700",
    backgroundColor: checkColor("transgraniczny20"),
    border: "1px solid transparent",
    hoverColor: checkColor("white"),
    hoverBackgroundColor: checkColor("transgraniczny40"),
    hoverBorder: "1px solid transparent",
    focusColor: checkColor("white"),
    focusBackgroundColor: checkColor("transgraniczny40"),
    focusBorder: "1px solid transparent",
    focusOutline: "none",
    transition: "0.25s ease-in background-color",
  },
  greenOutline: {
    color: checkColor("black"),
    fontWeight: "700",
    backgroundColor: checkColor("white"),
    border: `1px solid ${checkColor("transgraniczny20")}`,
    hoverColor: checkColor("transgraniczny20"),
    //hoverBackgroundColor: checkColor("transgraniczny40"),
    hoverBorder: `1px solid ${checkColor("transgraniczny40")}`,
    focusColor: checkColor("transgraniczny20"),
    //focusBackgroundColor: checkColor("transgraniczny40"),
    focusBorder: `1px solid ${checkColor("transgraniczny40")}`,
    focusOutline: "none",
    transition: "0.25s ease-in background-color, 0.1s ease-in color",
  },
  transgranicznyOutline: {
    color: checkColor("black"),
    fontWeight: "700",
    backgroundColor: checkColor("white"),
    border: `1px solid ${checkColor("transgraniczny20")}`,
    hoverColor: checkColor("transgraniczny20"),
    hoverBorder: `1px solid ${checkColor("transgraniczny40")}`,
    focusColor: checkColor("transgraniczny20"),
    focusBorder: `1px solid ${checkColor("transgraniczny40")}`,
    focusOutline: "none",
    transition: "0.25s ease-in background-color, 0.1s ease-in color",
  },
}

export default Button
