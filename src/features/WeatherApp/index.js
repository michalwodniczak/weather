import { Container } from "../../Container";
import { Header, } from "../../Header";
import { Section } from "../../common/Section";
import { Search } from "../../Search";

export const WeatherApp = () => {
    return (
        <Container>
            <Header />
            <Search />
            <Section />
        </Container>
    )
}