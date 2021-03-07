export interface IWeatherModelCombine {
    current: ICurrentWeatherModel|null,
    longTerm:ILongWeatherModel|null
}

export interface ICurrentWeatherModel {
    name:string,
    weather:weatherArray[],
    main:mainObject,
    wind:wind,
}
export interface ILongWeatherModel {
    city:city,
    list:weatherList[]
}
export interface city {
    name: string,
}
export interface weatherList {
    dt:number,
    dt_txt: string,
    main:mainObject
    wind:wind,
    weather: weatherArray[]

}
interface weatherArray{
    description:string,
    icon:string
}
interface mainObject{
   temp:number,
   pressure:number,
   humidity:number,
   feels_like:number
}
interface wind{
    deq:number,
    speed:number
}
