import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchData, selectData, setStatus } from "./weatherSlice";
import { Wrapper, Title } from "./styled";
import { Item } from "../../../Item";
import { Loading } from "../Loading";
import { ErrorPage } from "../ErrorPage";

export const WeatherPage = () => {
    const dispatch = useDispatch();
    const status = useSelector(setStatus);

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])
    const weatherData = useSelector(selectData);

    if (status === "loading") {
        return <Loading />
    }

    if (status === "error") {
        return <ErrorPage />
    }

    return (
        <>
            <Title>Weather in Europe</Title>
            <Wrapper>
                {weatherData && weatherData.map(city => (
                    <Item
                        key={city?.weather.name}
                        title={city?.weather.name}
                        temp={city?.weather.main.temp}
                        tempFeel={city?.weather.main.feels_like}
                        wind={city?.weather.wind.speed}
                        pressure={city?.weather.main.pressure}
                        icon={city?.weather.weather[0]?.icon}
                        description={city?.weather.weather[0]?.description}
                    />
                ))}
            </Wrapper>
        </>
    );
};