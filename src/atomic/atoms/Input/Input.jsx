import styled from "styled-components"
import { getSize, checkColor } from "../../utils"

const Input = styled.input`
  font-family: Urbanist, sans-serif;
  width: ${(props) => props.width ?? '100%'};
  max-width: ${(props) => props.max};
  height: ${(props) => props.height ?? 'auto'};
  background-color: ${(props) => props.backgroundColor ?? checkColor("white")};
  border: ${(props) => props.border ?? `1px solid ${checkColor("grey90")}`};
  border-radius: ${(props) => props.borderRadius ?? '8px'};
  font-size: ${(props) => props.size ? getSize(props.size).size : props.fontSize ?? '16px'};
  line-height: ${(props) => props.size ? getSize(props.size).interline : props.interline ?? '28px'};
  font-weight: ${(props) => props.size ? getSize(props.size).weight : props.weight ?? '400'};
  letter-spacing: ${(props) => props.spacing ?? 'normal'};
  color: ${(props) => props.color ? checkColor(props.color) : checkColor("black")};
  padding: ${(props) => props.padding ?? '16px 24px'};
  margin: ${(props) => props.margin};
  -webkit-appearance: none;
  outline: none;
  outline-width: 0;
  transition: border .3s ease;
  
  &[type='search'] {
    background-color: ${checkColor("white")};
  }
  &[type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  &[type='search']::-webkit-search-results-button {
    -webkit-appearance: none;
  }
  &[type='search']::-webkit-search-cancel-button {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    background-size: contain;
    opacity: 0;
    pointer-events: none;
    margin: 0 0 0 14px;
  }
  &[type='search']:focus::-webkit-search-cancel-button {
    opacity: 1;
    pointer-events: all;
  }
  :hover {
    border: 1px solid ${checkColor("grey80")};
  }
  :focus {
    border: 1px solid ${checkColor("grey80")};
    outline: none;
    box-shadow: none;
  }
  :focus-visible {
    border: 1px solid ${checkColor("black")};
    outline: none;
    box-shadow: none;
  }
  :active {
    border: 1px solid ${checkColor("grey60")};
  }
  ::placeholder {
    color: ${checkColor("grey20")};
  }
  &.error {
    border-color: ${checkColor("black")};
    :hover {
      outline: none;
      box-shadow: none;
    }
  }
`;

export default Input