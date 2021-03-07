import axios, { AxiosResponse } from 'axios'
import { ICurrentWeatherModel,ILongWeatherModel } from '../models/weatherModel';
const WEATHER_KEY='5ff3a99ad2bd92efd4460292c1ac4fa5'
axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5';

const responseBody = (response: AxiosResponse) => response.data;
const requests = {
    get:(url:string) => axios.get(url).then(responseBody)
}
const weather = {
    currentPositionWeather: (latitude:number,longitude:number):Promise<ICurrentWeatherModel> => requests.get(`/weather?lat=${latitude}&lang=pl&lon=${longitude}&units=metric&appid=${WEATHER_KEY}`),
    currentCityWeather:(cityName:string):Promise<ICurrentWeatherModel> => requests.get(`/weather?q=${cityName}&units=metric&lang=pl&appid=${WEATHER_KEY}`),
    longTerminWeather:(cityName:string):Promise<ILongWeatherModel> => requests.get(`/forecast?q=${cityName}&units=metric&lang=pl&appid=${WEATHER_KEY}`)
    
}
const object = {
    weather:weather,
};
export default object