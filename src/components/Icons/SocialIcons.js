import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FacebookSvg, GithubSvg, TwitterSvg, YouTubeSvg } from '../AllSvgs'

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
    background-color: ${props => props.theme.text};
`;

export default function SocialIcons() {
    return (
        <IconsWrapper>
            <div>
                <NavLink style={{color:'inherit'}} target='_blank' to={{pathname:'https://github.com/MilosTanaskovic'}}>
                    <GithubSvg width={25} height={25} fill='currentColor' />
                </NavLink>
            </div>
            <div>
                <NavLink style={{color:'inherit'}} target='_blank' to={{pathname:''}}>
                    <TwitterSvg width={25} height={25} fill='currentColor' />
                </NavLink>
            </div>
            <div>
                <NavLink style={{color:'inherit'}} target='_blank' to={{pathname:''}}>
                    <FacebookSvg width={25} height={25} fill='currentColor' />
                </NavLink>
            </div>
            <div>
                <NavLink style={{color:'inherit'}} target='_blank' to={{pathname:''}}>
                    <YouTubeSvg width={25} height={25} fill='currentColor' />
                </NavLink>
            </div>

            <Line />
        </IconsWrapper>
    )
}
