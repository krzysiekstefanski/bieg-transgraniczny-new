import React from "react"
import styled from "styled-components"
import { checkColor } from "../../utils";
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
  // background-color: ${checkColor("transgraniczny40")};
  border-radius: 8px;
  z-index: 0;
  transform: scale(1);
  vertical-align: middle;
  //background-color: transparent;
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
    height: 24px;
    width: 24px;
    position: absolute;
    top: 3px;
    left: 3px;
    fill: none;
    stroke: ${checkColor("transgraniczny100")};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 24;
    stroke-dashoffset: 24;
    transition: all 0.3s ease;
    transition-delay: 0.1s;
    transform: translate3d(0, 0, 0);
    z-index: 99;
  }

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    transform: scale(0);
    opacity: 1;
    border-radius: 50%;
  }

  &::after {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
  }

  .active {
    background-color: transparent;
    animation: wave 0.4s ease;

    &::before {
      transform: scale(3.5);
      opacity: 0;
      transition: all 0.6s ease;
    }
  }
`

// const Label = styled.label`
//   display: flex;
//   align-items: center !important;
//   padding-left: 40px !important;
//   position: relative;

//   .checkbox:checked ~ .checkmark {
//     background-color: transparent;
//     animation: wave 0.4s ease;

//     svg {
//       stroke-dashoffset: 0;
//     }

//     &::before {
//       transform: scale(3.5);
//       opacity: 0;
//       transition: all 0.6s ease;
//     }
//   }
// `

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

class FormAcceptance extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            details: [{ id: 0, name: "checkbox", active: false }],
        }
    }

    handleClick = e => {
        e.target.closest("input").classList.toggle("active")
    }

    render() {
        return (
            <Wrapper>
                <Box padding="0 0 0 40px" position="relative">
                    <Checkbox className={"checkbox"} type={"checkbox"} />
                    <Checkmark className={"checkmark"}>
                        <svg width="16px" height="16px" viewBox="-1 0 16 12">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                    </Checkmark>
                    <Text>
                        Zgadzam się z <Link to="/">Polityką prywatności</Link>
                    </Text>
                </Box>
            </Wrapper>
        )
    }
}

export default FormAcceptance
