import styled, { keyframes } from "styled-components";
import { ReactComponent as circle } from "./loading.svg";

export const Wrapper = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: center;
    justify-content: center;
`
export const rotate = keyframes`
    from {
        transform: rotate(0deg);
    };
    to {
        transform: rotate(360deg);
    };
`

export const Loader = styled(circle)`
    width: 160px;
    height: 160px;
    animation: ${rotate} infinite 800ms linear;

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}px){
        width: 80px;
    };
`