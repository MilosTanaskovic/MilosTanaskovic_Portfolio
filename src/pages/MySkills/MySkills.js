import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from '../../components/Themes'
import { DesignSvg, DevelopeSvg , NodeJsSvg} from '../../components/AllSvgs'
import Logo from '../../components/Logo/Logo';
import SocialIcons from '../../components/Icons/SocialIcons';
import PowerButton from '../../components/Buttons/PowerButton';
import Particle from '../../components/Containers/Particle';
import BigTitle from '../../components/Containers/BigTitle';
import { NavLink } from 'react-router-dom';

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

const Main = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    text-decoration: none;
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.body};
    padding: 0 1rem 1rem 1rem;
    width: 30vw;
    height: 70vh;
    z-index: 3;
    line-height: 1.5;
    font-family: 'Ubuntu Mono', monospace;
    cursor: pointer;

    overflow-y: scroll;
    overflow-x: none;
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

    &:hover{
        color: ${props => props.theme.body};
        background-color: ${props => props.theme.text};
    }

    @media (max-width: 1020px){
        width: 50vw;
        height: 40vh;
    }
`;

const RibbonWrapper = styled.span`
    position: absolute;
    top: 0;
    right: -2rem;
    background-size: cover;
    text-transform: uppercase;
    color: white;

    z-index: 10;

    @media (max-width: 480px){
       width: 48%;
    }
`

const Ribbon = styled.span`
    position: absolute;
    top: -6.1px;
    right: 10px;

    &:after {
        position: absolute;
        content: "";
        width: 0;
        height: 0;
        border-left: 53px solid transparent;
        border-right: 53px solid transparent;
        border-top: 10px solid #F8463F;
    }

    & span {
        position: relative;
        display: block;
        text-align: center;
        background: #F8463F;
        font-size: 14px;
        line-height: 1;
        padding: 12px 8px 5px;
        border-top-right-radius: 8px;
        width: 90px;
    }

    & span:before, span:after {
        position: absolute;
        content: "";
    }

    & span:before {
        height: 6px;
        width: 6px;
        left: -6px;
        top: 0;
        background: #F8463F;
    }

    & span:after {
        height: 6px;
        width: 8px;
        left: -8px;
        top: 0;
        border-radius: 8px 8px 0 0;
        background: #C02031;
    }

`

const Title = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;

    padding-top: 2rem;
    padding-bottom: .5rem;
    font-size: calc(0.6em + 1vw);
    background-color: inherit;

    position: sticky;
    top: 0rem;

    ${Main}:hover &{
        &>*{
            fill: ${props => props.theme.body};
        }
    }

    &>*:first-child{
        margin-right: 1rem;
    }

    @media (max-width: 1020px){
        font-size: calc(1em + 1vw);
    }
`;

const Description = styled.div`
    color: ${props => props.theme.text};
    font-size: calc(0.3em + 1vw);
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

    @media (max-width: 1020px){
        font-size: calc(0.5em + 1vw);
    }

    @media (max-width: 480px){
        ul,p {
        margin-left: .5rem;
    }
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
                    <Main to={{pathname:'https://github.com/users/MilosTanaskovic/projects/6'}} target='_blank'>                     
                        <Title>
                            <RibbonWrapper>
                                <Ribbon>
                                    <span>Click Here</span>
                                </Ribbon>
                            </RibbonWrapper>
                            <DesignSvg width={40} height={40}/> Design
                        </Title>
                        <Description>
                            I love to create design which speaks, Keep it clean, minimal and simple.
                        </Description>
                        <Description>
                            <strong>I like to Design</strong>
                            <ul>
                                <li>Web Apps/Websites</li>
                                <li>E-commerce Platforms</li>
                                <li>Mobile Apps</li>
                            </ul>
                        </Description>
                        <Description>
                            <strong>Tools</strong>
                            <ul>
                                <li>Figma</li>
                                <li>Adobe XD</li>
                            </ul>
                        </Description>
                    </Main>
                    <Main to={{pathname:'https://github.com/users/MilosTanaskovic/projects/5'}} target='_blank'>
                        <Title>
                            <RibbonWrapper>
                                <Ribbon>
                                    <span>Click Here</span>
                                </Ribbon>
                            </RibbonWrapper>
                            <DevelopeSvg width={40} height={40}/> Frontend Developer
                        </Title>
                        <Description>
                            I value business or brand for which I'm creating, thus I enjoy bringing new ideas to life.
                        </Description>
                        <Description>
                            <strong>Skills</strong>
                            <ul>
                                <li>Html5, Css3(BEM)/Sass</li>
                                <li>JS/ES6+, React, Next.js, TypeScript</li>
                                <li>Redux, Context API, MobX</li>
                                <li>Bootstrap, Semantic-UI-React, Tailwind,  MaterialUI, Styled-Components</li>                    
                            </ul>
                            <strong>React Packages</strong>
                            <p>React-Router, Formik, Framer Motion, </p>
                            <strong>CMS</strong>
                            <p>Storyblok, Webflow, Weebly</p>
                        </Description>
                        <Description>
                            <strong>Tools</strong>
                            <p>VSCode, GitHub </p>
                        </Description>
                    </Main>
                
                    <Main to={{pathname:'https://github.com/users/MilosTanaskovic/projects/7'}} target='_blank'>
                        <Title>
                            <NodeJsSvg width={40} height={40} /> Full-Stack Development
                        </Title>
                        <Description>
                            
                        </Description>
                        <Description>
                            <strong>Skills</strong>
                            <ul>
                                <li>Node, Express.js, ASP.NET Core</li>
                                <li>REST APIs, GraphQL</li>
                                <li>MYSQL, SQLite, MongoDB, Firebase</li>
                                <li>Design DataBase</li>                            
                            </ul>
                        </Description>
                        <Description>
                            <strong>Tools</strong>
                            <p>Postman, GraphQL GUI, MongoDB Atlas</p>
                        </Description>
                    </Main>
                  
                </MainWrapper>
                
                <BigTitle text='SKILLS' top='80%' left='30%' />
            </MySkillsWrapper>
        </ThemeProvider>
    )
}
