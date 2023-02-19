import * as React from "react"
import styled from "styled-components"
import { colors } from "../../colors"
import { checkColor } from "../../utils"

const Component = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  width: 45px;
  padding: 5px;
  position: relative;
  background: transparent;
  border: 0;
  cursor: pointer;
  z-index: 1;

  @media (min-width: 992px) {
    display: none;
  }

  &:focus {
    outline-color: #fff;
  }

  span {
    display: block;
    height: 6px;
    width: 35px;
    background-color: ${props =>
      props.color ? checkColor(props.color) : checkColor(props.theme + "00")};
    border-radius: 2px;
    position: relative;
    transition: background-color 0.3s ease;
  }

  &.active {
    justify-content: center;
    padding: 2px;

    span {
      position: absolute;
      transition: transform 0.3s ease;

      &:nth-child(1) {
        top: calc(50% - 3px);
        transform: rotate(45deg);
        transform-origin: center;
      }

      &:nth-child(2) {
        display: none;
      }

      &:nth-child(3) {
        bottom: calc(50% - 3px);
        transform: rotate(-45deg);
        transform-origin: center;
      }
    }
  }
`

const Hamburger = ({ theme, hamburgerClick, active }) => (
  <Component
    className={"hamburger" + (active && " active")}
    onClick={hamburgerClick}
    theme={theme}
  >
    <span />
    <span />
    <span />
  </Component>
)

export default Hamburger
