import React from 'react'
import {motion} from 'framer-motion'
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
            <motion.h2
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
            >
                My Skills.
            </motion.h2>    
        </SkillsLinkWrapper>
    )
}