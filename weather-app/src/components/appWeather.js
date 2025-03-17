import React from "react";
import WeatherForm from './weahterForm'
import WeatherInfo from './weahterInfo'

export default function AppWeather() {
    return(
        <React.Fragment>
            <WeatherForm />
            <WeatherInfo />
        </React.Fragment>
    )
}