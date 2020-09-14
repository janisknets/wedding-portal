import React from 'react';
import styled from 'styled-components';

export default ({ text }: { text: string }) => {
  return <TextBlock>{text}</TextBlock>;
}

const TextBlock = styled.div`
  font-size: 1rem;
  text-align: justify;
  font-family: ${props => props.theme.fonts.secondary};
  color: ${props => props.theme.colors.secondaryLight};
`;