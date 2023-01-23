import React from 'react';
import styled from 'styled-components';
import Home from '../../../svg/home.inline.svg';
import Zapisy from '../../../svg/zapisy.inline.svg';
import ListaStartowa from '../../../svg/lista-startowa.inline.svg';
import Regulamin from '../../../svg/regulamin.inline.svg';
import Kontakt from '../../../svg/kontakt.inline.svg';

const getName = (name) => {
    switch (name) {
        case 'kontakt':
            return Kontakt;
        case 'zapisy':
            return Zapisy;
        case 'lista-startowa':
            return ListaStartowa;
        case 'regulamin':
            return Regulamin;
        default:
            return Home;
    }
};

const Component = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;

  svg {
    width: 100%;
    height: 100%;
    path {
      fill: ${(props) => props.fill};
      stroke: ${(props) => props.stroke};
    }
  }
`;

const Icon = ({ className, name, size, fill, stroke }) => (
    <Component className={className} size={size} fill={fill} stroke={stroke}>
        {/* <component as={getName(name)} /> */}
        {React.createElement(getName(name), {})}
    </Component>
);

export default Icon;