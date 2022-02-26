import React from 'react'
import styled, { keyframes } from 'styled-components'
import { YinYangSvg } from '../AllSvgs'

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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;

    &>:first-child {
        animation: ${rotate} infinite 1.5s linear;
    }

    &>:last-child {
        padding-top: 1rem;
    }
`;

export default function CustomCenterButton() {
    return (
        <CustomCenterButtonWrapper>
            <YinYangSvg width={200} height={200} fill='currentColor' />
            <span>click here</span>
        </CustomCenterButtonWrapper>
    )
}
