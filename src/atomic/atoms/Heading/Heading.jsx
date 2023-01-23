import styled from "styled-components"
import { getSize, checkColor } from "../../utils"

const Heading = styled.h1`
  display: ${(props) => props.display};
  order: ${(props) => props.order};
  max-width: ${(props) => props.max};
  font-size: ${(props) => props.size ? getSize(props.size).size : props.fontSize ?? '16px'};
  line-height: ${(props) => props.size ? getSize(props.size).interline : props.interline ?? '24px'};
  font-weight: ${(props) => props.size ? getSize(props.size).weight : props.weight ?? '400'};
  letter-spacing: ${(props) => props.spacing};
  color: ${(props) => props.color ? checkColor(props.color) : checkColor("black")};
  text-align: ${(props) => props.align};
  white-space: ${(props) => props.wrap};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};

  @media (max-width: 374px) {
    order: ${(props) => props.orderXS};
    font-size: ${(props) => props.size ? getSize(props.sizeXS).size : props.fontSizeXS};
    line-height: ${(props) => props.size ? getSize(props.sizeXS).interline : props.interlineXS};
    font-weight: ${(props) => props.size ? getSize(props.sizeXS).weight : props.weightXS};
    letter-spacing: ${(props) => props.spacingXS};
    padding: ${(props) => props.paddingXS};
    margin: ${(props) => props.marginXS};
  }

  @media (min-width: 576px) {
    display: ${(props) => props.displaySM};
    order: ${(props) => props.orderSM};
    max-width: ${(props) => props.maxSM};
    font-size: ${(props) => props.size ? getSize(props.sizeSM).size : props.fontSizeSM};
    line-height: ${(props) => props.size ? getSize(props.sizeSM).interline : props.interlineSM};
    font-weight: ${(props) => props.size ? getSize(props.sizeSM).weight : props.weightSM};
    letter-spacing: ${(props) => props.spacingSM};
    text-align: ${(props) => props.alignSM};
    padding: ${(props) => props.paddingSM};
    margin: ${(props) => props.marginSM};
  }

  @media (min-width: 768px) {
    display: ${(props) => props.displayMD};
    order: ${(props) => props.orderMD};
    max-width: ${(props) => props.maxMD};
    font-size: ${(props) => props.size ? getSize(props.sizeMD).size : props.fontSizeMD};
    line-height: ${(props) => props.size ? getSize(props.sizeMD).interline : props.interlineMD};
    font-weight: ${(props) => props.size ? getSize(props.sizeMD).weight : props.weightMD};
    letter-spacing: ${(props) => props.spacingMD};
    text-align: ${(props) => props.alignMD};
    padding: ${(props) => props.paddingMD};
    margin: ${(props) => props.marginMD};
  }

  @media (min-width: 1280px) {
    display: ${(props) => props.displayLG};
    order: ${(props) => props.orderLG};
    max-width: ${(props) => props.maxLG};
    font-size: ${(props) => props.size ? getSize(props.sizeLG).size : props.fontSizeLG};
    line-height: ${(props) => props.size ? getSize(props.sizeLG).interline : props.interlineLG};
    font-weight: ${(props) => props.size ? getSize(props.sizeLG).weight : props.weightLG};
    letter-spacing: ${(props) => props.spacingLG};
    text-align: ${(props) => props.alignLG};
    padding: ${(props) => props.paddingLG};
    margin: ${(props) => props.marginLG};
  }

  @media (min-width: 1440px) {
    display: ${(props) => props.displayXL};
    order: ${(props) => props.orderXL};
    max-width: ${(props) => props.maxXL};
    font-size: ${(props) => props.size ? getSize(props.sizeXL).size : props.fontSizeXL};
    line-height: ${(props) => props.size ? getSize(props.sizeXL).interline : props.interlineXL};
    font-weight: ${(props) => props.size ? getSize(props.sizeXL).weight : props.weightXL};
    letter-spacing: ${(props) => props.spacingXL};
    text-align: ${(props) => props.alignXL};
    padding: ${(props) => props.paddingXL};
    margin: ${(props) => props.marginXL};
  }

  @media (min-width: 1920px) {
    display: ${(props) => props.displayXXL};
    order: ${(props) => props.orderXXL};
    max-width: ${(props) => props.maxXXL};
    font-size: ${(props) => props.size ? getSize(props.sizeXXL).size : props.fontSizeXXL};
    line-height: ${(props) => props.size ? getSize(props.sizeXXL).interline : props.interlineXXL};
    font-weight: ${(props) => props.size ? getSize(props.sizeXXL).weight : props.weightXXL};
    letter-spacing: ${(props) => props.spacingXXL};
    text-align: ${(props) => props.alignXXL};
    padding: ${(props) => props.paddingXXL};
    margin: ${(props) => props.marginXXL};
  }
`;

export default Heading