import React from 'react'
import {motion} from 'framer-motion'
import { WorkLinkWrapper } from './main-styled';

export default function FrontendLink({click}) {
    return (
        <WorkLinkWrapper to='/frontend' click={click}>
            <motion.h2
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                style={{color: '#61DBFB'}}
            >
                Frontend
            </motion.h2>    
        </WorkLinkWrapper>
    )
}