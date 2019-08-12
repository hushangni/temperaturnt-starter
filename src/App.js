import React, { Component } from 'react';
import axios from 'axios';
import flame from './assets/gradient-flame.png';

import './styles/setup.css';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: '',
    }
  }

  handleChange = (e) => {
    const userInput = e.target.value;
    this.setState({
      city: userInput
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchWeather(this.state.city);
  }

  async fetchWeather(q) {
    try {

      const apiData = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
          appid: 'aab53c547c655e0fb456f3d6f933d4b0',
          q: q,
          units: 'metric'
        }
      });
      console.log(apiData);

      this.setState({
        temperature: apiData.data.main.temp,
        weather: apiData.data.weather[0].main,
        iconCode: apiData.data.weather[0].icon
      })

    } catch(err) {

      this.setState({
        error: err
      })

    }
  }

  render() {
    const { temperature, weather, iconCode }  = this.state;
    return (
      <>
        <main className="wrapper">
          <h1>
            <img src={flame} className="flame" alt="Orange flame icon."/>
            <span>temperaturnt</span>
          </h1>

          <form action="#" onSubmit={this.handleSubmit}>
            <label htmlFor="city">enter a city: </label>
            <input type="text" id="city" placeholder="toronto" onChange={this.handleChange}/>

            <input type="submit" value="submit"/>
          </form>

          {
            temperature ?
              <div className="results">
                <p className="temp">{temperature} °C</p>
                <p className="weather">{weather}</p>
                <div className="icon">
                  <img src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`} alt=""/>
                </div>
              </div>

              :

              <div className="results">
                <p className="placeholder">search for the weather in a city</p>
              </div>
          }
      </main>
        <p className="credit">Graphics Designed By LovePik User(ID:23428404) From <a href="https://lovepik.com/image-401502076/gradient-color-block-flame.html">LovePik.com</a>, Data from <a href="https://openweathermap.org/api">Open Weather API</a></p>
      </>
    );
  }
}

export default App;

