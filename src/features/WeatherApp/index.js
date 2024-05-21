import { Container } from "../../Container";
import { Header, } from "../../Header";
import { Search } from "../../Search";
import { WeatherPage } from "./WeatherPage";
import {SearchResult} from "./SearchResult";

export const WeatherApp = () => {
    return (
        <Container>
            <Header />
            <Search />
            <WeatherPage />
            <SearchResult />
        </Container>
    )
}