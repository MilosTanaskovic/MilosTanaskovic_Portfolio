import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { darkTheme } from '../../components/Themes'
import astronaut from '../../assets/Images/spaceman.png';
import Logo from '../../components/Logo/Logo';
import SocialIcons from '../../components/Icons/SocialIcons';
import PowerButton from '../../components/Buttons/PowerButton';
import Particle from '../../components/Containers/Particle';
import BigTitle from '../../components/Containers/BigTitle';

const AboutWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    background-color: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;

`;

const float = keyframes`
    0% {transform: translateY(-10px)}
    50% {transform: translateY(15px) translateX(15px)}
    100% {transform: translateY(-10px)}

`;

const Spaceman = styled.div`
    position: absolute;
    top: 10%;
    right: 5%;
    width: 20vw;
    animation: ${float} 4s ease infinite;
    img{
        width: 100%;
        height: auto;
    }
`;
const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    padding: 2rem;
    width: 50vw;
    height: 60vh;
    z-index: 3;
    line-height: 1.5;
    font-size: calc(0.6rem + 1vw);
    backdrop-filter: blur(4px);

    position: absolute;
    left: calc(5rem + 5vw);
    top: 10rem;

    font-family: 'Ubuntu Mono', monospace;
    font-style: italic;
`;

export default function About() {
    return (
        <ThemeProvider theme={darkTheme}>
            <AboutWrapper>
                <Logo theme='dark' />
                <SocialIcons theme='dark' />
                <PowerButton />
                <Particle theme='dark' />
                <Spaceman>
                    <img src={astronaut} alt='spaceman' />
                </Spaceman>
                <Main>
                I'm a front-end developer located in Stockholm, Sweden. I love to create simple yet beautiful websites with great user experience.
                <br /> <br />
                I'm interested in the whole frontend stack Like trying new things and building great projects. I'm an Consultant at salt and blogger. I love to write blogs and read books.
                <br /> <br />
                I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.
                </Main>
                <BigTitle text='ABOUT ME' top='10%' left='10%' />
            </AboutWrapper>
        </ThemeProvider>
    )
}

