import SearchBox from "./SearchBox";
import Displayinfo from "./Displayinfo";
import { useState } from "react";
export default function WeatherApp(){
    const[weatherinfo,setweatherinfo]=useState({
        city:"Delhi",
        condition: "haze",
        feelslike: 23.71,
        humidity: 46,
        temp: 24.05,
        tempmin: 24.05,
        tempmax: 24.05
    })
    let updateinfo=(result)=>{
        setweatherinfo(result);
    }
    return<>
    <h2>This Platform  designed to forecast Weather 🌤️</h2>
    <SearchBox updateinfo={updateinfo}/>
       <Displayinfo info={weatherinfo}/>
    </>
}
