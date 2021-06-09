import React, { useState } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import './Weather.css';
import lang from '../languages/Languages';

export default function Weather() {
  const [input, setInput] = useState('');
  const [base, setBase] = useState({});
  const URL = `https://api.openweathermap.org/data/2.5/`;
  const KEY = 'e1064eb0869d96015896f2221271df7a';
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (input !== '') {
      fetch(`${URL}weather?q=${input}&appid=${KEY}`)
        .then((res) => {
          return res.json();
        })
        .then(displayData)
        .catch((err) => console.log(err));
    } else {
      alert('please enter valid location');
    }
  };
  function displayData(_data) {
    setBase(_data);
    console.log(_data);
  }
  const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'April',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];

  const displayDate = (d) => {
    var date = new Date(d * 1000);
    var day = date.getDate();
    var month = months[date.getMonth()];
    var year = date.getFullYear();

    return day + '' + month + '' + year;
  };

  return (
    <div className="weather">
      <div className="weather-container">
        <div className="weather-search">
          <form onSubmit={handleOnSubmit}>
            <input
              placeholder="Enter a location"
              value={input.toLowerCase()}
              onChange={(e) => setInput(e.target.value)}
            />
            <select>
              {lang.map(({ code, name }) => (
                <option value={code} key={code}>
                  {' '}
                  {name}
                </option>
              ))}
            </select>
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="weather-current">
          <h4>
            {base.name}, {base.sys.country}
          </h4>
          <small>{displayDate(base.dt)}</small>
          <div className="weather-info">
            <div className="weather-icon">
              {/* <img
                src={
                  base?.weather &&
                  `https://openweathermap
              .org/img/wn/${base?.weather[0]?.icon}
              @2x.png`
                }
                alt=""
              /> */}
            </div>
            <div className="weather-temp">
              <p>
                <sup>{base.main.temp}°c</sup>
              </p>
              <small>
                Real feel <span></span>
              </small>
            </div>
            <div className="weather-min-max">
              <div className="weather-max">
                <ArrowDropUpIcon />
                <p>
                  <sup>°c</sup>
                </p>
              </div>
              <div className="weather-max">
                <ArrowDropDownIcon />
                <p>
                  <sup>°c</sup>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="weather-hourly-content">
          <div className="weather-hourly-data">
            <p>See hourly weather report</p>
            <div className="drop">
              <ArrowDropDownIcon />
            </div>
          </div>
          <div className="weather-hourly-container"></div>
        </div>
        <div className="weather-daily-content">
          <div className="weather-hourly-data">
            <p>See daily weather report</p>
            <div className="drop">
              <ArrowDropDownIcon />
            </div>
          </div>
          <div className="weather-daily-container">
            {/* {showDaily &&
              daily?.map((_daily) => (
                <>
                  <div className="weather-daily-info">
                    <img
                      src={`http://openweathermap.org/img/wn/${_daily.weather[0].icon}@2x.png
                    `}
                      alt=""
                    />
                    <div className="weather-min-max">
                      <div className="weather-max">
                        <ArrowDropUpIcon />
                        <p>
                          <sup>°c</sup>
                        </p>
                      </div>
                      <div className="weather-max">
                        <ArrowDropDownIcon />
                        <p>
                          <sup>°c</sup>
                        </p>
                      </div>
                    </div>
                    <p className="day"></p>
                    <p></p>
                  </div>
                </>
              ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}
