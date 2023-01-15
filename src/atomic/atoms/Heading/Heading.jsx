import styled from "styled-components"
import { getSize, getColor } from "../../utils"

const Heading = styled.h1`
  display: ${(props) => props.display};
  max-width: ${(props) => props.max};
  font-size: ${(props) => props.size ? getSize(props.size).size : props.fontSize ?? '16px'};
  line-height: ${(props) => props.size ? getSize(props.size).interline : props.interline ?? '24px'};
  font-weight: ${(props) => props.size ? getSize(props.size).weight : props.weight ?? '400'};
  letter-spacing: ${(props) => props.spacing};
  color: ${(props) => props.color ? getColor(props.color) : getColor("black")};
  text-align: ${(props) => props.align};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  @media (max-width: 374px) {
    font-size: ${(props) => props.fontSizeXS};
    line-height: ${(props) => props.interlineXS};
    font-weight: ${(props) => props.weightXS};
    letter-spacing: ${(props) => props.spacingXS};
    padding: ${(props) => props.paddingXS};
    margin: ${(props) => props.marginXS};
  }
  @media (min-width: 576px) {
    display: ${(props) => props.displaySM};
  }
  @media (min-width: 768px) {
    display: ${(props) => props.displayMD};
    max-width: ${(props) => props.maxMD};
    font-size: ${(props) => props.fontSizeMD};
    line-height: ${(props) => props.interlineMD};
    font-weight: ${(props) => props.weightMD};
    letter-spacing: ${(props) => props.spacingMD};
    text-align: ${(props) => props.alignMD};
    padding: ${(props) => props.paddingMD};
    margin: ${(props) => props.marginMD};
  }
  @media (min-width: 1280px) {
    display: ${(props) => props.displayLG};
    max-width: ${(props) => props.maxLG};
    font-size: ${(props) => props.fontSizeLG};
    line-height: ${(props) => props.interlineLG};
    font-weight: ${(props) => props.weightLG};
    letter-spacing: ${(props) => props.spacingLG};
    text-align: ${(props) => props.alignLG};
    padding: ${(props) => props.paddingLG};
    margin: ${(props) => props.marginLG};
  }
`;

export default Heading