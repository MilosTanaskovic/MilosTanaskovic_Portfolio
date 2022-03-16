import React, {useRef, useEffect} from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { darkTheme } from '../../components/Themes'
import Logo from '../../components/Logo/Logo';
import SocialIcons from '../../components/Icons/SocialIcons';
import PowerButton from '../../components/Buttons/PowerButton';

import { workData } from '../../data/WorkData';
import Card from '../../components/Containers/Card';
import { ReactSvg, SaltSvg, YinYangSvg } from '../../components/AllSvgs';
import BigTitle from '../../components/Containers/BigTitle';
import {motion} from 'framer-motion';

const AboutWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    background-color: ${props => props.theme.body};
    height: 400vh;
    position: relative;
    align-items: center;

`;

const Main = styled(motion.ul)`
    position: fixed;
    top: 12rem;
    left: calc(10rem + 15vw);
    height: 40vh;
    display: flex;

    color: white;
`;

const Rotate = styled.span`
    display: block;
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    width: 80px;
    height: 80px;
    z-index: 1;
`;

// framer-motion configuration
const container = {

    hidden: {opacity: 0},
    show: {
        opacity: 1,

        transition: {
            staggerChildren: 0.5,
            duration: 0.5,
        }
    }
}
export default function Work() {
    const ref = useRef(null);
    const yinyang = useRef(null)
    useEffect(() => {
       let element = ref.current;

       const rotate = () => {
           element.style.transform = `translateX(${-window.pageYOffset}px)`
           yinyang.current.style.transform = 'rotate(' + -window.pageYOffset + 'deg)'
       }

       window.addEventListener('scroll', rotate)

       return () => window.removeEventListener('scroll', rotate);

    }, [])
    return (
        <ThemeProvider theme={darkTheme}>
            <AboutWrapper>
                <Logo theme='dark' />
                <SocialIcons theme='dark' />
                <PowerButton />
               <Main ref={ref} variants={container} initial='hidden' animate='show'>
                {
                    workData.map( item => {
                         
                        return(
                            <Card key={item.id} data={item} />
                        )
                    })
                
                }
               </Main>
                <Rotate ref={yinyang}>
                    <ReactSvg width={80} height={80} fill={darkTheme.text} />
                    {/* <YinYangSvg width={80} height={80} fill={darkTheme.text} /> */}
                </Rotate>
                <BigTitle text='WORK' top='10%' right='20%' />
            </AboutWrapper>
        </ThemeProvider>
    )
}


