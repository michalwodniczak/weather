import { useDispatch } from "react-redux";
import { Container } from "../../Container";
import { Header, } from "../../Header";
import { Search } from "../../Search";
import { WeatherPage } from "./WeatherPage";
import { SearchResult } from "./SearchResult";
import { resetSearch } from "../../Search/searchSlice";

export const WeatherApp = () => {
    const dispatch = useDispatch();

    const handleLogoClick = () => {
        dispatch(resetSearch());
    };

    return (
        <Container>
            <Header onLogoClick={handleLogoClick} />
            <Search />
            <WeatherPage />
            <SearchResult />
        </Container>
    )
}