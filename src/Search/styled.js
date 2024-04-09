import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
`
export const Form = styled.form`
    padding: 20px;
    display: flex;
    flex-direction: column;
`
export const Input = styled.input`
    margin: 10px auto;
    width: 100%;
    max-width: 600px;
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid black;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px){
       width: calc(100vw - 20px);
    }
`
export const Button = styled.button`
    margin: 0 auto;
    width: 100%;
    max-width: 600px;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px){
        width: calc(100vw - 20px);
    }
`