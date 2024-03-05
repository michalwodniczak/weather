import { Title, Logo, Wrapper } from "./styled";
import logo from "./logo.svg"
export const Header = () => {
    return (
        <>
            <Wrapper>
                <Title>Weatcher App</Title>
                <Logo src={logo} alt="logo"></Logo>
            </Wrapper>
        </>
    )
};