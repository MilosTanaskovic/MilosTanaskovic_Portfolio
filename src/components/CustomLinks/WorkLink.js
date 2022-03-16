import React from 'react'
import {motion} from 'framer-motion'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const WorkLinkWrapper = styled(NavLink)`
    //color: ${props => props.click ? props.theme.body :props.theme.text};
    color: ${props => props.theme.text};
    position: absolute;
    top: 50%;
    //left: calc(1rem + 2vw);
    right: calc(1rem + 2vw);
    //transform: translate(-50%, -50%) rotate(-90deg);
    transform: rotate(90deg) translate(-50%, -50%);
    text-decoration: none;
    z-index: 1;
`;

export default function WorkLink({click}) {
    return (
        <WorkLinkWrapper to='/work' click={click}>
            <motion.h2
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
            >
                Work
            </motion.h2>    
        </WorkLinkWrapper>
    )
}