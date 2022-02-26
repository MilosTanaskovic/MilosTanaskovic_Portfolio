import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const AboutLinkWrapper = styled(NavLink)`
    color: ${props => props.theme.text};
    text-decoration: none;
    z-index: 1;
`;

export default function AboutLink() {
    return (
        <AboutLinkWrapper to='/about'>
            <h2>
                About.
            </h2>    
        </AboutLinkWrapper>
    )
}