import { Title, Logo, Wrapper, StyledLink } from "./styled";
import logo from "./logo.svg"
export const Header = () => {
    return (
        <>
            <Wrapper>
                <StyledLink to="/">
                    <Title>Weather App</Title>
                    <Logo src={logo} alt="logo"></Logo>
                </StyledLink>
            </Wrapper>
        </>
    )
};