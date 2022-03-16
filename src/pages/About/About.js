import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { darkTheme } from '../../components/Themes'
import astronaut from '../../assets/Images/spaceman.png';
import javascript from '../../assets/Images/javascript.png';
import react from '../../assets/Images/react.png';
import typescript from '../../assets/Images/typescript.png';
import nextjs from '../../assets/Images/nextjs.jpeg';
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
    flex-direction: column;

    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    padding: 2rem;
    width: 60vw;
    z-index: 3;
    line-height: 1.5;
    font-size: calc(0.6rem + 1vw);
    backdrop-filter: blur(4px);

    position: absolute;
    left: calc(5rem + 5vw);
    top: 10rem;

    font-family: 'Ubuntu Mono', monospace;
    font-style: italic;

    & img {
        width: calc(0.6rem + 1vw);
    }
    & p {
        margin-bottom: 1rem;
    }
    @media (max-width: 480px){
        width: 55vw;
        padding: 1rem;
        height: 60vh;

        overflow-y: auto;
        /* custom scrollbar */
        ::-webkit-scrollbar {
            width: 15px;
        }

        ::-webkit-scrollbar-track {
            background-color: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background-color: #d6dee1;
            border-radius: 20px;
            border: 6px solid transparent;
            background-clip: content-box;
        }

        ::-webkit-scrollbar-thumb:hover {
            background-color: #a8bbbf;
        }
    }
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
                    <p>
                        Meticulous Front-end Web Developer with a few years of working experience in this field. I love to create simple yet beautiful apps, e-commerce platforms and websites with great user experience. I am very interested overflow design from Figma prototypes to code and also optimizing web performance and critical rendering path.
                    </p>
                    <p>
                    Interested in the whole frontend stack like trying new things and building great projects. I'm an consultant at Salt. I love to write blogs and read books.
                    </p>
                    <p>
                    I'm also very eager to improve, both personally and professionally.
                    My leadership and organizational skills, as well as technological expertise will ensure successful and timely completion of your company's products. 📈🧲
                    </p>  
                    <p>
                    I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.
                    </p>
                    <span>Let's create together! 🚀</span>    
                </Main>
                <BigTitle text='ABOUT ME' top='10%' left='10%' />
            </AboutWrapper>
        </ThemeProvider>
    )
}

