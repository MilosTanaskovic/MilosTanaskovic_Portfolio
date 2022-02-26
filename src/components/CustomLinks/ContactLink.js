import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const ContactLinkWrapper = styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    top: 2rem;
    right: calc(1rem + 2vw);
    text-decoration: none;
    z-index: 1;
`;

export default function ContactLink() {
    return (
        <ContactLinkWrapper target='_blank' to={{pathname:'mailto:milos@tanaskovic.se'}}>
            <h2>
                Say hi 🙋🏻‍♂️
            </h2>    
        </ContactLinkWrapper>
    )
}
