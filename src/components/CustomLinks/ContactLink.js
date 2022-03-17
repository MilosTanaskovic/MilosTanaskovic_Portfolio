import React from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const ContactLinkWrapper = styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    top: 2rem;
    right: calc(1rem + 2vw);
    text-decoration: none;
    z-index: 1;
`;

export default function ContactLink() {
    return (
        <ContactLinkWrapper target='_blank' to={{pathname:'mailto:milostanaskovic.dev.data@gmail.com'}}>
            <motion.h2
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
            >
                Say hi 🙋🏻‍♂️
            </motion.h2>    
        </ContactLinkWrapper>
    )
}
