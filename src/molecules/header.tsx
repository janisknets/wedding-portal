import React from 'react';
import styled from 'styled-components';
import Navigation from './navigation';

export default () => {
    return <Header>
        <Navigation />
    </Header>
}

const Header = styled.div`
    text-align: center;
    height: 3rem;
`;
