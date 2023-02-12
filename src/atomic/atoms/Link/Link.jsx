import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { getSize, checkColor } from "../../utils"

const Component = styled(Link)`
    display: ${(props) => props.display};
    font-family: ${(props) => props.family ? `${props.family}, sans-serif` : "Urbanist, sans-serif"};
    font-size: ${(props) => props.size ? getSize(props.size).size : props.fontSize ?? 'inherit'};
    line-height: ${(props) => props.size ? getSize(props.size).interline : props.interline ?? 'inherit'};
    font-weight: ${(props) => props.size ? getSize(props.size).weight : props.weight ?? 'inherit'};
    color: ${(props) => props.color ? checkColor(props.color) : checkColor("transgraniczny20")};
    line-height: ${(props) => (props.big ? "28" : "24")}px;
    text-decoration: none;
    padding: ${(props) => (props.padding)};
    margin: ${(props) => props.margin};
    margin-bottom: ${(props) => props.mb};
    transition: color .3s ease;

    :hover {
        color: ${(props) => props.hover ? checkColor(props.hover) : checkColor("transgraniczny40")};
    }

    @media (min-width: 576px) {
        margin: ${(props) => props.marginSM}; 
    }
`;

const CustomLink = ({ className, children, to, href, text, onClick, ...rest }) => (
    <Component
        className={className}
        to={to}
        href={href}
        onClick={e => onClick(e)}
        {...rest}>
        {text ?? children}
    </Component>
);

export default CustomLink;
