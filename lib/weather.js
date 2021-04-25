import axios from 'axios';

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';
const apiKey = 'b5228c4c0bee00a931110d03ad712490';

export const getWeatherData = async (cityname) => {
    try{
        const {data} = await axios.get(baseUrl + 'q=Munich&appid=b5228c4c0bee00a931110d03ad712490');
        return data;
    }catch(error) {
        throw error;
    }
}