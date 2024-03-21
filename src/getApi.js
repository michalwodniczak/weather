import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather?"
const apiKey = "fdc13a97817ad7d39b8a876be7b0a7c7";

export const getApi = async () => {
    try {
        const response = await axios.get(`${URL}units=metric&q=gdansk&APPID=${apiKey}`);
        // console.log(response.data)
        // console.log(response.data.name)
        // console.log(response.data.main)
        return response.data
    }
    catch {
        throw new Error("Failed to search");
    };
};

// http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=fdc13a97817ad7d39b8a876be7b0a7c7