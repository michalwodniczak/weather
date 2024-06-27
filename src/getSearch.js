import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather?"
const apiKey = "fdc13a97817ad7d39b8a876be7b0a7c7";

export const getSearch = async (query) => {
    console.log(`query z getSearch ${query}`);
    try {
        const fetchURL = `${URL}q=${query}&appid=${apiKey}&units=metric`;
        const response = await axios.get(fetchURL);
        return response.data
    }
    catch {
        throw new Error("Failed to search");
    }
}

