import React from 'react'
import {motion} from 'framer-motion'
import { WorkLinkWrapper } from './main-styled';

export default function DesignLink({click}) {
    
    return (
        <WorkLinkWrapper to='/design' click={click}>
            <motion.h2
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
            >
                Design
            </motion.h2>    
        </WorkLinkWrapper>
    )
}