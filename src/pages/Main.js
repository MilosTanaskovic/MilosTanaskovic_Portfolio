import React, { useState } from 'react'
import styled from 'styled-components'
import ContactLink from '../components/CustomLinks/ContactLink';
import PowerButton from '../components/Buttons/PowerButton';
import SocialIcons from '../components/Icons/SocialIcons';
import Logo from '../components/Logo/Logo';
import BlogLink from '../components/CustomLinks/BlogLink';
import WorkLink from '../components/CustomLinks/WorkLink';
import AboutLink from '../components/CustomLinks/AboutLink';
import SkillsLink from '../components/CustomLinks/SkillsLink';
import CustomCenterButton from '../components/Buttons/CustomCenterButton';
import DarkDiv from '../components/Containers/DarkDiv';
import HomeIntro from '../components/Intros/HomeIntro';
import { MilosLogo } from '../components/Logo/MilosLogo';
import DesignLink from '../components/CustomLinks/work/Design';
import FrontendLink from '../components/CustomLinks/work/Frontend';
import FullStackLink from '../components/CustomLinks/work/FullStack';

const MainContainer = styled.div`
    background: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    position: relative;

    h2,h3,h4,h5,h6 {
        font-family: 'Karla', sans-serif;
        font-weight: 500;
    }
`;

const Container = styled.div`
    padding: 2rem;
`;

const BottomBar = styled.div`
    display: flex;
    justify-content: space-evenly;

    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
    width: 100%;
`;

export default function Main() {
    const [click, setClick] = useState(false);
    return (
        <MainContainer>
        <DarkDiv click={click} />
            <Container>
                <PowerButton />
                <MilosLogo theme={click ? 'dark' : 'light'}/>
                <Logo theme={click ? 'dark' : 'light'} />
                <SocialIcons theme={click ? 'dark' : 'light'} />
                <CustomCenterButton click={click} setClick={setClick} />
                <ContactLink />
                <AboutLink click={click} />
                <SkillsLink />          
                <BottomBar>
                    {/* <WorkLink click={click} /> */}
                    <DesignLink click={click} />
                    <FrontendLink click={click}/>
                    <FullStackLink />
                    {/* <BlogLink /> */}
                </BottomBar>
            </Container>
            {click ? <HomeIntro click={click} /> : null}
        </MainContainer>
    )
}
