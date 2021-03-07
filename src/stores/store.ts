import { createContext, useContext } from "react";
import WeatherStore from "./weatherStore";

interface Store {
    weatherStore:WeatherStore
}
export const store:Store = {
    weatherStore: new WeatherStore()
}
export const StoreContext = createContext(store)

export const useStore = () =>{
    return useContext(StoreContext)
}
