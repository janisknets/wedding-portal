import React from 'react';
import styled from 'styled-components';

export default ({ name, phone }: { name: string, phone: string }) => {
    return <Contact>
        <Name href={`tel:${phone}`}>{name}<Phone>{phone}</Phone></Name>
    </Contact>;
}

const Contact = styled.div`
    color: ${props => props.theme.colors.primaryDark}; 
`;

const Name = styled.a`
    color: ${props => props.theme.colors.primaryDark};
    font-size: 1.2rem;
    font-family: ${props => props.theme.fonts.primary};
    text-decoration: none;
`;

const Phone = styled.span`
    margin-left: 1rem;
    font-size: 1.2rem;
`;
