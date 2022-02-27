import React from 'react'
import {motion} from 'framer-motion'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const BlogLinkWrapper = styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    top: 50%;
    right: calc(1rem + 2vw);
    transform: rotate(90deg) translate(-50%, -50%);
    text-decoration: none;
    z-index: 1;
`;

export default function BlogLink() {
    return (
        <BlogLinkWrapper to='/blog'>
            <motion.h2
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
            >
                Blog
            </motion.h2>    
        </BlogLinkWrapper>
    )
}
