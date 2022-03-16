import React from 'react'
import {motion} from 'framer-motion';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const AboutLinkWrapper = styled(NavLink)`
    color: ${props => props.click ? props.theme.body : props.theme.text};
    text-decoration: none;
    z-index: 1;
`;

export default function AboutLink({click}) {
    return (
        <AboutLinkWrapper to='/about' click={click}>
            <motion.h2
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
            >
                About Me.
            </motion.h2>    
        </AboutLinkWrapper>
    )
}