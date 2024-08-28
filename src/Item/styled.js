import styled from "styled-components";

export const StyledItem = styled.div`
    width: 100%;
    max-width: 390px;
    margin: 10px auto;
    border: 1px solid black;
    border-radius: 5px;
    padding: 20px;

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}px){
        width: 90%;
        margin: 10px auto;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px){
        width: 300px;
        padding: 10px;
    }
`
export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Title = styled.h3`
    font-size: 24px;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px){
        font-size: 20px;
    }
`

export const Paragraph = styled.p`
    font-size: 16px;
    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px){
        font-size: 14px;
    }
`
export const Icon = styled.span`
    position: relative;
    top: 3px;
`