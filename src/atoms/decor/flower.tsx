import React from 'react';
import styled from 'styled-components';

import Flowers from './flowers.svg';

export default () => {
    return <FlowerImage src={Flowers} />
}

const FlowerImage = styled.img`
    max-width: 30vw;
    max-height: 30vh;
    position: absolute;
    top: 3rem;
    left: -4vw;
    transform: rotate(180deg);
    z-index: -1;
`;
