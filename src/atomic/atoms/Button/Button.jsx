import styled from "styled-components"
import { getSize, checkColor } from "../../utils"

const Button = styled.button`
  font-family: Inter, sans-serif;
  display: ${(props) => props.display ?? 'flex'};
  justify-content: ${(props) => props.justify ?? 'center'};
  align-items: ${(props) => props.align ?? 'center'};
  width: ${(props) => props.width};
  max-width: ${(props) => props.max};
  max-height: ${(props) => props.maxHeight};
  height: ${(props) => props.height};
  color: ${(props) => props.color ?? props.variant ? ButtonVariants[props.variant].color : ButtonVariants["red"].color};
  padding: ${(props) => props.padding ?? props.size ? ButtonSizes[props.size].padding : ButtonSizes["medium"].padding};
  border: ${(props) => props.border ?? props.variant ? ButtonVariants[props.variant].border : ButtonVariants["red"].border};
  background-color: ${(props) =>
        props.backgroundColor ?? props.variant ? ButtonVariants[props.variant].backgroundColor : ButtonVariants["red"].backgroundColor};
  border-radius: ${(props) => props.borderRadius ?? '8px'};
  font-size: ${(props) => props.size ? getSize(ButtonSizes[props.size].textSize).size : getSize(ButtonSizes["medium"].textSize).size};
  font-weight: ${(props) => props.variant ? ButtonVariants[props.variant].fontWeight : ButtonVariants["red"].fontWeight};
  line-height: ${(props) =>
        props.size ? getSize(ButtonSizes[props.size].textSize).interline : getSize(ButtonSizes["medium"].textSize).interline};
  letter-spacing: ${(props) =>
        getSize(ButtonSizes[props.size]?.textSize).spacing};
  text-decoration: none;
  transition: ${(props) => props.variant ? ButtonVariants[props.variant].transition : ButtonVariants["red"].transition};
  white-space: ${props => props.wrap ?? 'nowrap'};
  cursor: ${(props) => props.cursor ?? 'pointer'};
  margin: ${(props) => props.margin};
  :hover {
    color: ${(props) =>
        props.hoverColor ?? props.variant ? ButtonVariants[props.variant].hoverColor : ButtonVariants["red"].hoverColor};
    background-color: ${(props) =>
        props.hoverBackgroundColor ??
            props.variant ? ButtonVariants[props.variant].hoverBackgroundColor : ButtonVariants["red"].hoverBackgroundColor};
    border: ${(props) =>
        props.hoverBorder ?? props.variant ? ButtonVariants[props.variant].hoverBorder : ButtonVariants["red"].hoverBorder};
  }

  @media (max-width: 374px) {
    width: ${(props) => props.widthXS};
    margin: ${(props) => props.marginXS};
  }

  @media (min-width: 576px) {
    display: ${(props) => props.displaySM};
    width: ${(props) => props.widthSM};
  }

  @media (min-width: 768px) {
    display: ${(props) => props.displayMD};
    max-width: ${(props) => props.maxMD};
    margin: ${(props) => props.marginMD};
    padding: ${(props) =>
        props.paddingMD ?? ButtonSizes[props.sizeMD]?.padding};
    font-size: ${(props) =>
        getSize(ButtonSizes[props.sizeMD]?.textSize).size};
    line-height: ${(props) =>
        getSize(ButtonSizes[props.sizeMD]?.textSize).interline};
  }

  @media (min-width: 992px) {
    display: ${(props) => props.displayLG};
    margin: ${(props) => props.marginLG};
  }

  :focus {
    color: ${(props) =>
        props.focusColor ?? props.variant ? ButtonVariants[props.variant].focusColor : ButtonVariants["red"].focusColor};
    background-color: ${(props) =>
        props.focusBackgroundColor ??
            props.variant ? ButtonVariants[props.variant].focusBackgroundColor : ButtonVariants["red"].focusBackgroundColor};
    border: ${(props) =>
        props.focusBorder ?? props.variant ? ButtonVariants[props.variant].focusBorder : ButtonVariants["red"].focusBorder};
    outline: ${(props) =>
        props.focusOutline ?? props.variant ? ButtonVariants[props.variant].focusOutline : ButtonVariants["red"].focusOutline};
  }

  :focus-visible {
    color: ${(props) =>
        props.focusColor ?? props.variant ? ButtonVariants[props.variant].focusColor : ButtonVariants["red"].focusColor};
    background-color: ${(props) =>
        props.focusBackgroundColor ??
            props.variant ? ButtonVariants[props.variant].focusBackgroundColor : ButtonVariants["red"].focusBackgroundColor};
    border: ${(props) =>
        props.focusBorder ?? props.variant ? ButtonVariants[props.variant].focusBorder : ButtonVariants["red"].focusBorder};
    outline: ${(props) =>
        props.focusOutline ?? props.variant ? ButtonVariants[props.variant].focusOutline : ButtonVariants["red"].focusOutline};
  }

  :disabled {
    background-color: ${(props) => props.variant !== 'blank' && checkColor("grey20")};
    color: ${(props) => props.variant !== 'blank' && checkColor("grey20")};
    border-color: ${(props) => props.variant !== 'blank' && 'transparent'};
    cursor: not-allowed;
  }
`;

const ButtonSizes = {
    medium: {
        padding: `11px 39px`,
        textSize: `button`,
    },
    big: {
        padding: `16px 24px`,
        textSize: `button`,
    },
};

const ButtonVariants = {
    blank: {
        color: checkColor("black"),
        fontWeight: '500',
        backgroundColor: 'transparent',
        hoverColor: checkColor("black"),
        hoverBackgroundColor: 'transparent',
        focusColor: checkColor("black"),
        focusBackgroundColor: 'transparent',
        focusBorder: '1px solid transparent',
        focusOutline: 'none',
        border: '1px solid transparent',
        hoverBorder: '1px solid transparent',
        focusBorder: '1px solid transparent',
    },
    red: {
        color: checkColor("white"),
        fontWeight: '700',
        backgroundColor: checkColor("red20"),
        border: '1px solid transparent',
        hoverColor: checkColor("white"),
        hoverBackgroundColor: checkColor("red40"),
        hoverBorder: '1px solid transparent',
        focusColor: checkColor("white"),
        focusBackgroundColor: checkColor("red40"),
        focusBorder: '1px solid transparent',
        focusOutline: 'none',
        transition: '0.25s ease-in background-color',
    },
    green: {
        color: checkColor("white"),
        fontWeight: '700',
        backgroundColor: checkColor("green20"),
        border: '1px solid transparent',
        hoverColor: checkColor("white"),
        hoverBackgroundColor: checkColor("green40"),
        hoverBorder: '1px solid transparent',
        focusColor: checkColor("white"),
        focusBackgroundColor: checkColor("green40"),
        focusBorder: '1px solid transparent',
        focusOutline: 'none',
        transition: '0.25s ease-in background-color',
    },
};

export default Button;