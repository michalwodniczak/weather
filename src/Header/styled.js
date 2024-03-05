import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1200px;
    display: flex;
    justify-content: center;
`

export const Title = styled.h1`
    color: black;
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