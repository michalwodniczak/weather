import axios from "axios";
import { europeanCityCapitals } from "./europeanCityCapitals";

const URL = "https://api.openweathermap.org/data/2.5/weather?"
const apiKey = "fdc13a97817ad7d39b8a876be7b0a7c7";

export const getApi = async () => {
    try {
        const randomCities = europeanCityCapitals.sort(() => 0.5 - Math.random()).slice(0, 3);
        const citiesData = await Promise.all(randomCities.map(async (city) => {
            const apiUrl = `${URL}q=${city}&appid=${apiKey}&units=metric`
            const response = await axios.get(apiUrl);
            return {
                city: city,
                weather: response.data,
            };
        }));
        return citiesData;
    }
    catch {
        throw new Error("Failed to search");
    };
};

// http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=fdc13a97817ad7d39b8a876be7b0a7c7