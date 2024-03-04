import { Title, Logo, Wrapper } from "./styled";
import logo from "./logo.png"
export const Header = () => {
    return (
        <>
            <Wrapper>
                <Title>WeatcherApp</Title>
                <Logo src={logo} alt="logo"></Logo>
            </Wrapper>
        </>
    )
};