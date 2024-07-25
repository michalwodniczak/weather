import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px){
        flex-direction: column;
        align-items: center;
    };
`
export const Title = styled.h2`
    padding: 10px;
    text-align: center;
    font-size: 30px;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px){
        font-size: 20px;
    }
`