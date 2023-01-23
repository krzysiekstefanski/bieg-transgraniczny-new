import styled from "styled-components"
import { getSize, checkColor } from "../../utils"

const Text = styled.p`
  display: ${(props) => props.display};
  grid-column: ${(props) => props.column};
  width: ${(props) => props.width};
  max-width: ${(props) => props.max};
  font-family: Urbanist, sans-serif;
  font-size: ${(props) => props.size ? getSize(props.size).size : props.fontSize ?? '16px'};
  line-height: ${(props) => props.size ? getSize(props.size).interline : props.interline ?? '24px'};
  font-weight: ${(props) => props.size ? getSize(props.size).weight : props.weight ?? '400'};
  letter-spacing: ${(props) => props.spacing};
  color: ${(props) => props.color ? checkColor(props.color) : checkColor("black")};
  text-align: ${(props) => props.align ?? 'left'};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  cursor: ${(props) => props.pointer && 'pointer'};
  pointer-events: ${(props) => props.events};
  text-transform: ${(props) => props.transform};
  white-space: ${(props) => props.wrap};
  text-overflow: ${(props) => props.textOverflow};
  overflow: ${(props) => props.overflow};
  :hover {
    background-color: ${(props) => props.hoverBackgroundColor};
  }

  @media (max-width: 374px) {
    font-size: ${(props) => props.fontSizeXS};
    line-height: ${(props) => props.interlineXS};
    font-weight: ${(props) => props.weightXS};
    letter-spacing: ${(props) => props.spacingXS};
    padding: ${(props) => props.paddingXS};
  }

  @media (min-width: 576px) {
    font-size: ${(props) => props.fontSizeSM};
    line-height: ${(props) => props.interlineSM};
    font-weight: ${(props) => props.weightSM};
    letter-spacing: ${(props) => props.spacingSM};
    padding: ${(props) => props.paddingSM};
  }

  @media (min-width: 768px) {
    font-size: ${(props) => props.fontSizeMD};
    line-height: ${(props) => props.interlineMD};
    font-weight: ${(props) => props.weightMD};
    letter-spacing: ${(props) => props.spacingMD};
    max-width: ${(props) => props.maxMD};
    text-align: ${(props) => props.alignMD};
    padding: ${(props) => props.paddingMD};
    margin: ${(props) => props.marginMD};
  }
  
  @media (min-width: 1280px) {
    display: ${(props) => props.displayLG};
  }
`;

export default Text