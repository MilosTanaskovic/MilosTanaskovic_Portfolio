import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WorkLinkWrapper = styled(NavLink)`
    color: ${props => props.click ? props.theme.body : props.theme.text};
    text-decoration: none;
    z-index: 1;
`;