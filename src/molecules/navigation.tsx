import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { navigation, NavMenuItem } from '../utils/navigation';

export default () => {
    return <NavBar>
        {navigation.map((item: NavMenuItem) => <NavLink to={item.path}>{item.name}</NavLink>)}
    </NavBar>
}

const NavBar = styled.div`
    display: flex;
`;
