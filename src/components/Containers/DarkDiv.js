import React from 'react'
import styled from 'styled-components'

const DarkDivWrapper = styled.div`
    position: absolute;
    top: 0;
    background-color: black;
    bottom: 0;
    right: 50%;
    width: ${props => props.click ? '50%' : '0%'};
    height: ${props => props.click ? '100%' : '0%'};
    z-index: 1;
    transition: height 0.5s ease, width 1s ease 0.5s;
`;

export default function DarkDiv({click}) {
    return (
        <DarkDivWrapper click={click} />
    )
}
