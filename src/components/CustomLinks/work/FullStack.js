import React from 'react'
import {motion} from 'framer-motion'
import { WorkLinkWrapper } from './main-styled';

export default function FullStackLink({click}) {
    return (
        <WorkLinkWrapper to='/fullstack' click={click}>
            <motion.h2
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
            >
                Full-Stack
            </motion.h2>    
        </WorkLinkWrapper>
    )
}