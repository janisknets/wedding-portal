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
    background-color: grey; 
    list-style: none; 
    height: 3rem;
    margin: 0;
    padding: 0;
    vertical-align: center;
    display: flex;
    font-family: Roboto;
`;

const NavMenuItem = styled.li`
    flex: 3;
    justify-content: center;
    align-items: center;
    display: flex;
    & > a {
        text-decoration: none;
    }
`;
