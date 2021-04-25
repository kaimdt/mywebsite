import React, { useState } from 'react';
import useSWR from 'swr';
import weathercard from '../styles/weather.module.css';


import fetcher from '../lib/fetcher';

const api = {
  key: "b5228c4c0bee00a931110d03ad712490",
  base: "https://api.openweathermap.org/data/2.5/"
}

function WeatherCard() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const { data } = useSWR(
    `${api.base}weather?q=Munich&units=metric&APPID=${api.key}`,
    url =>
      fetch(url)
        .then(_ => _.json())
        .then(result => {
            setWeather(result);
            setQuery('Munich');
            console.log(result);
          })
        .then(sleep)
  );
  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`
  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className={weathercard.weather_box}>
            <div className="temp">
              <h2 className={weathercard.temp}>{Math.round(weather.main.temp)}°C / {Math.round(weather.main.temp * 9/5 + 32)}°F</h2>
              <div className={weathercard.location_box}>
                <div className="location">{weather.name}, {weather.sys.country}</div>
                <div className="date">{dateBuilder(new Date())}</div>
              </div>
            </div>
            <div className={weathercard.weather}><img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} /><p>{weather.weather[0].main}</p></div>
          </div>
        </div>
        ) : ('loading ...')}
      </main>
    </div>
  );
}

export default WeatherCard;