import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const SkillsLinkWrapper = styled(NavLink)`
    color: ${props => props.theme.text};
    text-decoration: none;
    z-index: 1;
`;

export default function SkillsLink() {
    return (
        <SkillsLinkWrapper to='/skills'>
            <h2>
                My Skills.
            </h2>    
        </SkillsLinkWrapper>
    )
}