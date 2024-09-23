import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"
import { checkColor, colorizeText, getSize } from "../../utils"

const Component = styled.div`
  & > h1,
  & > h2,
  & > h3,
  & > h4,
  & > h5,
  & > h6,
  & > ul,
  & > pre,
  & > p {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }

  p {
    font-size: 18px;
    line-height: 32px;
    font-weight: 400;
    color: ${checkColor("black")};
    text-align: left;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${checkColor("black")};
    font-weight: 700;
  }

  h1 {
    font-size: ${getSize("h700").size};
    line-height: ${getSize("h700").interline};

    @media (min-width: 992px) {
      font-size: ${getSize("h800").size};
      line-height: ${getSize("h800").interline};
    }

    @media (min-width: 1280px) {
      font-size: ${getSize("h900").size};
      line-height: ${getSize("h900").interline};
    }
  }

  h2 {
    font-size: ${getSize("h600").size};
    line-height: ${getSize("h600").interline};

    @media (min-width: 992px) {
      font-size: ${getSize("h700").size};
      line-height: ${getSize("h700").interline};
    }

    @media (min-width: 1280px) {
      font-size: ${getSize("h800").size};
      line-height: ${getSize("h800").interline};
    }
  }

  h3,
  h4,
  h5,
  h6 {
    font-size: ${getSize("h500").size};
    line-height: ${getSize("h500").interline};

    @media (min-width: 992px) {
      font-size: ${getSize("h600").size};
      line-height: ${getSize("h600").interline};
    }

    @media (min-width: 1280px) {
      font-size: ${getSize("h700").size};
      line-height: ${getSize("h700").interline};
    }
  }

  ul {
    font-family: Urbanist, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: ${checkColor("black")};
    text-align: left;
    list-style: none;

    li {
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      color: ${checkColor("black")};
      text-align: left;
      padding: 0px 0px 0px 16px;
      list-style: none;
      position: relative;

      &:not(:last-child) {
        margin-bottom: 8px;
      }

      &::before {
        content: "";
        width: 0px;
        height: 0px;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-left: ${props => `6px solid ${checkColor(props.theme + "20")}`};
        position: absolute;
        top: 50%;
        left: 0px;
        transform: translateY(-50%);
      }

      br {
        display: none;
      }
    }
  }

  a {
    font-size: inherit;
    font-weight: inherit;
    color: ${props => checkColor(props.theme + "20")};
    line-height: 24px;
    text-decoration: none;
    transition: color 0.3s ease 0s;

    &:hover {
      color: ${props => checkColor(props.theme + "40")};
    }
  }

  hr {
    margin-bottom: 16px;
    border: 0;
  }
`

const RichText = ({ className, text, theme }) => (
  <Component className={className} theme={theme}>
    {parse(colorizeText(text, theme))}
  </Component>
)

export default RichText
