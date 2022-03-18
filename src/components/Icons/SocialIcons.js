import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FacebookSvg, GithubSvg, TwitterSvg, YouTubeSvg, LinkedInSvg, StackOverflowSvg } from '../AllSvgs'
import { darkTheme } from '../../components/Themes'

const IconsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 2rem;

    z-index: 3;

    &>*:not(:last-child){
        margin: 0.5rem 0;
    }
`;

const Line = styled.span`
    width: 2px;
    height: 8rem;
    background-color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};

    @media (max-width: 600px){
        height: 5rem;
        background-color: inherit;
    }
`;

export default function SocialIcons(props) {
    return (
        <IconsWrapper>
            <div>
                <NavLink style={{color:'inherit'}} target='_blank' to={{pathname:'https://github.com/MilosTanaskovic'}}>
                    <GithubSvg width={25} height={25} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body } />
                </NavLink>
            </div>
            <div>
                <NavLink style={{color:'inherit'}} target='_blank' to={{pathname:'https://www.linkedin.com/in/milos-tanaskovic-%F0%9F%91%A8%F0%9F%8F%BB%E2%80%8D%F0%9F%92%BB-web3-codedancing%E2%84%A2-%F0%9F%8C%90-619742130/'}}>
                    <LinkedInSvg width={25} height={25} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body } />
                </NavLink>
            </div>
            <div>
                <NavLink style={{color:'inherit'}} target='_blank' to={{pathname:'https://stackoverflow.com/users/11797438/milos-tanaskovic'}}>
                    <StackOverflowSvg width={25} height={25} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body } />
                </NavLink>
            </div>
            <div>
                <NavLink style={{color:'inherit'}} target='_blank' to={{pathname:'https://twitter.com/CodeDancing?t=tfcvq8aUq13YdOdvlYpONA&s=09'}}>
                    <TwitterSvg width={25} height={25} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body } />
                </NavLink>
            </div>
            <div>
                <NavLink style={{color:'inherit'}} target='_blank' to={{pathname:'https://www.facebook.com/codedancingstudio'}}>
                    <FacebookSvg width={25} height={25} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body } />
                </NavLink>
            </div>
            {/**
            <div>
                <NavLink style={{color:'inherit'}} target='_blank' to={{pathname:''}}>
                    <YouTubeSvg width={25} height={25} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body } />
                </NavLink>
            </div>
             */ }

            <Line color={props.theme} />
        </IconsWrapper>
    )
}
