import { Title, Logo, Wrapper, StyledLink } from "./styled";
import logo from "./logo.svg"

export const Header = ({ onLogoClick }) => {
    return (
        <>
            <Wrapper>
                <StyledLink to="/" onClick={onLogoClick}>
                    <Title>Weather App</Title>
                    <Logo src={logo} alt="logo"></Logo>
                </StyledLink>
            </Wrapper>
        </>
    )
};