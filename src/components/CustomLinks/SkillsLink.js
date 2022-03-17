import React from 'react'
import {motion} from 'framer-motion'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const SkillsLinkWrapper = styled(NavLink)`
    /* color: ${props => props.theme.text};
    text-decoration: none;
    z-index: 1; */

    color: ${props => props.theme.text};
    position: absolute;
    top: 50%;
    //left: calc(1rem + 2vw);
    right: calc(0rem + 2vw);
    //transform: translate(-50%, -50%) rotate(-90deg);
    transform: rotate(90deg) translate(-50%, -50%);
    text-decoration: none;
    z-index: 1;
`;

export default function SkillsLink() {
    return (
        <SkillsLinkWrapper to='/skills'>
            <motion.h2
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
            >
                My Skills.
            </motion.h2>    
        </SkillsLinkWrapper>
    )
}