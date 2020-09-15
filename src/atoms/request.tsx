import React from 'react';
import styled from 'styled-components';

export default ({ text }: { text: string }) => {
  return <TextBlock>{text.split('\n').map((chunk: string, idx: number) => <p key={idx} >{chunk}</p>)}</TextBlock>;
}

const TextBlock = styled.div`
  & p {
    font-size: 1rem;
    font-family: ${props => props.theme.fonts.secondary};
    color: ${props => props.theme.colors.secondaryLight};
  }
`;