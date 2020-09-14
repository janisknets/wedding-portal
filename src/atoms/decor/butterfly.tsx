import React from 'react';
import styled from 'styled-components';

import Butterfly from './butterfly.svg';

export default () => {
    return <ButterflyImage src={Butterfly} />
}

const ButterflyImage = styled.img`
    max-width: 10vw;
    max-height: 10vh;
    display: inline-block;
`;
