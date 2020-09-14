import React from 'react';
import styled from 'styled-components';

export default ({children}: React.PropsWithChildren<{}>) => {
  return <Header>{children}</Header>;
}

const Header = styled.h2`
  text-align: left;
  font-family: ${props => props.theme.fonts.secondary};
  color: ${props => props.theme.colors.accent};
`;