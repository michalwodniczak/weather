import styled from "styled-components";

export const Wrapper = styled.section`
    max-width: 600px;
    margin: 40px auto;
    padding: 10px;
    font-size: 20px;
    border: 1px solid ${({theme}) => theme.color.black};
    border-radius: 5px;
    text-align: center;

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}px){
        max-width: 500px;
    };
    
    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px){
        max-width: 300px;
    };
`

export const ErrorText = styled.p`
    line-height: 150%;
    letter-spacing: 4px;
    padding: 10px;
`

export const Query = styled.strong`
    color: ${({theme}) => theme.color.red};
`