import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { navigation, TNavMenuItem } from '../utils/navigation';

export default () => {
    return <NavMenu>
        {navigation.map((item: TNavMenuItem) => 
            <NavMenuItem>
                <NavLink to={item.path}>{item.name}</NavLink>
            </NavMenuItem>
        )}
    </NavMenu>
}

const NavMenu = styled.ul`
    background: 1px solid grey; 
    list-style: none; 
    margin: 0; 
    padding: 0;
    display: flex;
    font-family: Roboto;
`;

const NavMenuItem = styled.li`
    flex: 3; 
    & > a {
        text-decoration: none;
    }
`;
