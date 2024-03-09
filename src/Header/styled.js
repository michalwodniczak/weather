import styled from "styled-components";
import {Link} from "react-router-dom";
 
export const Wrapper = styled.div`
    max-width:1800px;
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.funBlue};
`
export const StyledLink = styled(Link)`
    text-decoration: none;
    display: flex;
`

export const Title = styled.h1`
    color: ${({ theme }) => theme.color.white};
    padding: 10px;
    font-size: 38px;

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        font-size: 30px;
    };
`

export const Logo = styled.img`
    width: 120px;
    
    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        width: 70px;
    };
`