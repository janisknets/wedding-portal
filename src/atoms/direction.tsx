import React from 'react';
import styled from 'styled-components';

export default ({ text, link, icon }: { text: string, link: string, icon: string}) => {
    return <DirectionBox>
        <div>
          <DirectionLink href={link} target='_blank' ><DirectonIcon />{text}</DirectionLink>
        </div>
    </DirectionBox>;
}

const DirectionBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.2rem;
  margin: 0.3rem;
  text-align: left;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 2rem;
  color: ${props => props.theme.colors.primaryDark};
`;

const DirectonIcon = styled.span`
    min-width: 2rem;
    min-height: 2em;
    display: inline-flex;
    margin-right: 1rem;
    font-size: 1rem;
    vertical-align: middle;
    background: url(https://www.waze.com/webcms/static/compiled/eab8d17c745136dfb5b5c40fb8b2564a.svg);
    background-position: center;
    background-repeat: no-repeat;
`;

const DirectionLink = styled.a`
  font-family: ${props => props.theme.fonts.primary};
  font-size: 2rem;
  display: inline-flex;
  color: ${props => props.theme.colors.primaryLight};
  text-decoration: none;
`;