import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from '../../components/Themes'
import { DesignSvg, DevelopeSvg , NodeJsSvg} from '../../components/AllSvgs'
import Logo from '../../components/Logo/Logo';
import SocialIcons from '../../components/Icons/SocialIcons';
import PowerButton from '../../components/Buttons/PowerButton';
import Particle from '../../components/Containers/Particle';
import BigTitle from '../../components/Containers/BigTitle';

const MySkillsWrapper = styled.div`
    background-color: ${props => props.theme.body};
   
    position: relative;

    
`;

const MainWrapper = styled.div`
    /* display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 2rem;
    align-content: center; */
    display: flex;
    justify-content: space-evenly;
    align-items: center; 
    gap: 2rem;

    width: 90vw;
    height: 100vh;

    padding-left: 6rem;
    padding-right: 6rem;
    @media (max-width: 1020px){
        flex-direction: column;
        height: auto;
        gap: 2rem;
        padding: 6rem 0;
        width: 100vw;
    }
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.body};
    padding: 1rem;
    width: 30vw;
    height: 70vh;
    z-index: 3;
    line-height: 1.5;
    font-family: 'Ubuntu Mono', monospace;
    cursor: pointer;

    &:hover{
        color: ${props => props.theme.body};
        background-color: ${props => props.theme.text};
    }

    @media (max-width: 1020px){
        width: 50vw;
    }
`;

const Title = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(1em + 1vw);

    ${Main}:hover &{
        &>*{
            fill: ${props => props.theme.body};
        }
    }

    &>*:first-child{
        margin-right: 1rem;
    }
`;

const Description = styled.div`
    color: ${props => props.theme.text};
    font-size: calc(0.6em + 1vw);
    padding: 0.5rem 0;

    ${Main}:hover &{
        color: ${props => props.theme.body};
    }

    strong{
        margin-bottom: 1rem;
        text-transform: uppercase;
    }

    ul,p {
        margin-left: 2rem;
    }
`;

export default function MySkills() {
    return (
        <ThemeProvider theme={lightTheme}>
            <MySkillsWrapper>

                <Logo theme='light' />
                <SocialIcons theme='light' />
                <PowerButton />
                <Particle theme='light' />
                <MainWrapper>
                    <Main>
                        <Title>
                            <DesignSvg width={40} height={40}/> Designer
                        </Title>
                        <Description>
                            I love to create design which speaks, Keep it clean, minimal and simple.
                        </Description>
                        <Description>
                            <strong>I like to Design</strong>
                            <ul>
                                <li>Web Design</li>
                                <li>Mobile Apps</li>
                            </ul>
                        </Description>
                        <Description>
                            <strong>Tools</strong>
                            <ul>
                                <li>Figma</li>
                            </ul>
                        </Description>
                    </Main>
                    <Main>
                        <Title>
                            <DevelopeSvg width={40} height={40}/> Frontend Developer
                        </Title>
                        <Description>
                            I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
                        </Description>
                        <Description>
                            <strong>Skills</strong>
                            <p>Html5, Css3/Sass, JS/ES6+, TypeScript, React/Next.js, Redux/Context API/MobX, Bootstrap/Tailwind/MaterialUI, Firebase etc.</p>
                        </Description>
                        <Description>
                            <strong>Tools</strong>
                            <p>VScode, Github, Codepen etc.</p>
                        </Description>
                    </Main>
                
                    <Main>
                        <Title>
                            <NodeJsSvg width={40} height={40} /> Full-Stack Developer
                        </Title>
                        <Description>
                            I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
                        </Description>
                        <Description>
                            <strong>Skills</strong>
                            <p>Html5, Css3/Sass, JS/ES6+, TypeScript, React/Next.js, Redux/Context API/MobX, Bootstrap/Tailwind/MaterialUI, Firebase etc.</p>
                        </Description>
                        <Description>
                            <strong>Tools</strong>
                            <p>VScode, Github, Codepen etc.</p>
                        </Description>
                    </Main>
                  
                </MainWrapper>
                
                <BigTitle text='SKILLS' top='80%' left='30%' />
            </MySkillsWrapper>
        </ThemeProvider>
    )
}
