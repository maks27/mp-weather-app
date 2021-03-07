import { makeAutoObservable, runInAction } from "mobx";
import {
  ICurrentWeatherModel,
  ILongWeatherModel,
  IWeatherModelCombine,
} from "../models/weatherModel";
import * as Location from "expo-location";
import agent from "../api/agnet";
import { showErrorView } from "../util";
const longTermInit:IWeatherModelCombine = {
  longTerm:null,
  current:null
}
export default class WeatherStore {

  currentWeather: ICurrentWeatherModel | null = null;
  longTermWeather: IWeatherModelCombine = longTermInit;
  errorMessage = "";
  icon = "";
  loading = false;
  isOpen = false;
  isLoaded = false;

  constructor() {
    makeAutoObservable(this);
  }

  getCurrentPosition = async () => {
    this.setError("");
    this.setLoadingInitial(true);
    try {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        this.setError("Aby czerpać jak najwięcej z aplikacji pozwól jej na korzystanie z lokalizacji");
        return
      }
      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;
      this.loadCurrentWeather(latitude,longitude);
    } catch (error) {
      this.setLoadingInitial(false);
      this.setError("Sprawdź czy urządenie pozwala na użycie nawigacji");
    }
  };

  loadCurrentWeather = async (latitude:number,longitude:number) => {
      try {
        const response = await agent.weather.currentPositionWeather(
          latitude,longitude
        );
        runInAction(() => {
          this.currentWeather = response;
          this.icon = `https://openweathermap.org/img/wn/${response.weather[0].icon}@4x.png`;
          this.isLoaded = false;
        });
        this.setLoadingInitial(false);
      } catch (error) {
        this.setLoadingInitial(false);
        this.setError("Bład sprawdź połączenie");
      }
    
  };
  loadTypedWeather = async (cityName: string) => {
    this.setError("");
    this.setLoadingInitial(true);
    try {
      await agent.weather
        .currentCityWeather(cityName)
        .then((result: ICurrentWeatherModel) => {
          runInAction(()=>{
            this.currentWeather = result;
            this.icon = `https://openweathermap.org/img/wn/${result.weather[0].icon}@4x.png`;
            this.setLoadingInitial(false);
          })
            
        });

    } catch (error) {
      this.setLoadingInitial(false);
      showErrorView("Błąd w wyszukiwaniu spróbuj jeszcze raz");
    }
  };
  loadLongTermWeather = async () => {
    if (!this.isLoaded) {
      this.setError("");
      this.setLoadingInitial(true);
      try {
        await agent.weather
          .longTerminWeather(this.currentWeather!.name)
          .then((result: ILongWeatherModel) => {
            this.longTermWeather.longTerm = result
            this.longTermWeather.current = this.currentWeather;
            this.setLoadingInitial(false);
          });
        this.isLoaded = true;
      } catch (error) {
        this.setLoadingInitial(false);
        this.setError("Błąd spróbuj jeszcze raz");
      }
    } else {
      if (this.longTermWeather.longTerm!.city.name !== this.currentWeather!.name) {
        this.isLoaded = false;
        this.loadLongTermWeather();
      }
    }
  };
  
  loadChoosedWeather = (weather: ICurrentWeatherModel) => {
    this.currentWeather = weather;
    this.icon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`;
  };
  openModal = () => {
    this.isOpen = !this.isOpen;
  };

  setLoadingInitial = (state: boolean) => {
    this.loading = state;
  };
  setError = (state: string) => {
    this.errorMessage = state;
  };
}
