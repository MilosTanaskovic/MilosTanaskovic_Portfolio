import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const WorkLinkWrapper = styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    top: 50%;
    left: calc(1rem + 2vw);
    transform: translate(-50%, -50%) rotate(-90deg);
    text-decoration: none;
    z-index: 1;
`;

export default function WorkLink() {
    return (
        <WorkLinkWrapper to='/work'>
            <h2>
                Work
            </h2>    
        </WorkLinkWrapper>
    )
}