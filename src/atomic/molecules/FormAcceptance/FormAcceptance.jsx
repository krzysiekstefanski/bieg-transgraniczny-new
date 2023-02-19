import React, { useState } from "react"
import styled from "styled-components"
import { checkColor } from "../../utils"
import Box from "../../atoms/Box/Box"
import Text from "../../atoms/Text/Text"
import Link from "../../atoms/Link/Link"

const Wrapper = styled.div`
  width: 100%;
`

const Checkmark = styled.span`
  display: block;
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  max-width: 24px;
  max-height: 24px;
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid ${checkColor("grey80")};
  border-radius: 8px;
  z-index: 0;
  transform: scale(1);
  vertical-align: middle;
  transition: all 0.2s ease;
  margin-right: 15px;
  cursor: pointer;

  @media (min-width: 992px) {
    svg {
      height: 24px;
      width: 24px;
    }
  }

  svg {
    height: 18px;
    width: 18px;
    position: absolute;
    top: 3px;
    left: 3px;
    fill: none;
    stroke: ${props =>
      props.theme
        ? checkColor(props.theme + "20")
        : checkColor("transgraniczny20")};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 24;
    stroke-dashoffset: ${props => (props.isChecked ? "0" : "24")};
    transition: all 0.3s ease;
    transition-delay: 0.1s;
    transform: translate3d(0, 0, 0);
    z-index: 99;
  }
`

const Checkbox = styled.input`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  cursor: pointer;
  opacity: 0;

  &:hover {
    & + .checkmark {
      border-color: ${checkColor("grey60")};
    }
  }
`

const FormAcceptance = ({ theme }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleClick = () => {
    setIsChecked(!isChecked)
  }

  return (
    <Wrapper>
      <Box padding="0 0 0 40px" position="relative">
        <Checkbox
          className={"checkbox"}
          type={"checkbox"}
          onClick={handleClick}
        />
        <Checkmark theme={theme} isChecked={isChecked}>
          <svg width="16px" height="16px" viewBox="-1 0 16 12">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </Checkmark>
        <Text>
          Zgadzam się z{" "}
          <Link variant={theme} to="/">
            Polityką prywatności
          </Link>
        </Text>
      </Box>
    </Wrapper>
  )
}

export default FormAcceptance
