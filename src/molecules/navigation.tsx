import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { navigation, TNavMenuItem } from '../utils/navigation';

export default () => {
    return <NavMenu>
        {navigation.map((item: TNavMenuItem, idx: number) => 
            <NavMenuItem key={idx} >
                <Link to={item.path}>{item.name}</Link >
            </NavMenuItem>
        )}
    </NavMenu>
}

const NavMenu = styled.ul`
    background-color: ${props => props.theme.colors.secondaryDark};
    list-style: none; 
    height: 3rem;
    margin: 0;
    padding: 0;
    vertical-align: center;
    display: flex;
    font-family: ${props => props.theme.fonts.primary};
`;

const NavMenuItem = styled.li`
    flex: 3;
    justify-content: center;
    align-items: center;
    display: flex;
    & > a {
        color: ${props => props.theme.colors.secondaryLight};
        font-family: ${props => props.theme.fonts.primary};
        font-size: 1.4rem;
        font-weight: 400;
        text-decoration: none;
    }
`;
