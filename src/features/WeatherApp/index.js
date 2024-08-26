import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../Container";
import { Header, } from "../../Header";
import { Search } from "../../Search";
import { WeatherPage } from "./WeatherPage";
import { SearchResult } from "./SearchResult";
import { resetSearch, selectStatus } from "../../Search/searchSlice";

export const WeatherApp = () => {
    const dispatch = useDispatch();
    const searchStatus = useSelector(selectStatus);

    const handleLogoClick = () => {
        dispatch(resetSearch());
    };

    return (
        <Container>
            <Header onLogoClick={handleLogoClick} />
            <Search />
            {searchStatus !== "success" && <WeatherPage />}
            <SearchResult />
        </Container>
    )
}