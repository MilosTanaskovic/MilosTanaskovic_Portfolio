import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { SaltSvg, YinYangSvg } from '../AllSvgs'

const rotate = keyframes`
    from{
        transform: rotate(0);
    }
    to{
        transform: rotate(360deg);
    }
`;

const CustomCenterButtonWrapper = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: ${props => props.click ? '85%' : '50%'};
    left: ${props => props.click ? '92%' : '50%'};
    transform: translate(-50%, -50%);
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    transition: all 1s ease;

    &>:first-child {
        animation: ${rotate} infinite 2.5s linear;
    }

    &>:last-child {
        display: ${props => props.click ? 'none' : 'inline-block'};
        padding-top: 1rem;
    }
`;

export default function CustomCenterButton({click, setClick}) {
    const handleClick = () => setClick(!click);
    return (
        <CustomCenterButtonWrapper click={click}>
            <SaltSvg onClick={() => handleClick()} width={click ? 80 : 200} height={click ? 80 : 200} fill='currentColor' />
            <span>click to salt</span>
        </CustomCenterButtonWrapper>
    )
}
