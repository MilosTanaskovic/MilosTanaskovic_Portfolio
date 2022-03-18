import { motion } from 'framer-motion';
import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { GithubSvg } from '../AllSvgs';

const CardWrapper = styled(motion.li)`
    width: 16rem;
    height: 40vh;
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
    padding: 1.5rem 2rem;
    margin-right: 8rem;
    border-radius: 0 50px 0 50px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    border: 1px solid ${props => props.theme.body};
    transition: all 0.2s ease;

    &:hover{
        background-color: ${props => props.theme.body};
        color: ${props => props.theme.text};
        border: 1px solid ${props => props.theme.text};
    }
`;

const Title = styled.h2`
    font-size: calc(1rem + 0.5vw);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & span {
        background-color:#F8463F; 
        font-family: 'Patua One', cursive;
        color:#fff;
        text-align: center;
        border-radius: 0 20px 0 0;
        padding: 0 .5rem;
    }
`;

const Description = styled.h2`
    font-size: calc(0.8em + 0.3vw);
    font-family: 'Karla', sans-serif;
    font-family: 500;
`;

const Tags = styled.div`
    border-top: 2px solid ${props => props.theme.body};
    padding-top: 0.5rem;

    display: flex;
    flex-wrap: wrap;
    ${CardWrapper}:hover &{
        border-top: 2px solid ${props => props.theme.body};
    }
`;

const Tag = styled.span`
    margin-right: 1rem;
    font-size: calc(0.8em + 0.3vw);
`;

const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
`;

const Link = styled(NavLink)`
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    text-decoration: none;
    padding: 0.5rem calc(2rem + 2vw);
    border-radius: 0 0 0 50px;
    font-size: calc(1rem + 0.5vw);

    ${CardWrapper}:hover &{
        background-color: ${props => props.theme.text};
        color: ${props => props.theme.body};
    }
`;

const Git = styled(NavLink)`
    /* color: inherit; */
    color: ${props => props.click ? props.theme.body : props.theme.text};
    text-decoration: none;
    ${CardWrapper}:hover &{
        &>*{
            fill: ${props => props.theme.text};
        }
    }

`;

// framer motion config
const Item = {
    hidden: {
        scale: 0
    },
    show: {
        scale:1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}
export default function Card({data}) {
    const {id, name, description, tags, demo, github, ribbon} = data;
    return (
        <CardWrapper key={id} variants={Item}>      
            <Title>
                {name}
                <span>{ribbon}</span>
            </Title>
            <Description>{description}</Description>
            <Tags>
                {
                    tags.map((tag, id) => (
                        <Tag key={id}>#{tag}</Tag>
                    ))
                }
            </Tags>
            <Footer>
                <Link to={{pathname: `${demo}`}} target='_blank'>
                    Visit
                </Link>
                <Git to={{pathname: `${github}`}} target='_blank'>
                    <GithubSvg width={30} height={30} />
                </Git>
            </Footer>
        </CardWrapper>
    )
}
