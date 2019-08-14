import React, { Component } from 'react';
import axios from 'axios';
import flame from './assets/gradient-flame.png';

import './styles/setup.css';
import './styles/App.css';

/*
  🔥Temperaturnt App🔥
  There are 5 steps in this weather app exercise.
  We are going to practice fetching data, as well as conditional rendering.

  Each step has additional comments below to help guide you through building out the app!
  To begin, please make an account at:
    - https://home.openweathermap.org/users/sign_up
    - grab an api key and keep the docs open: https://openweathermap.org/current

  ➡ STEP 1 - as user types in the input field save the input text in state, in the city property.
  ➡ STEP 2 - handle the submit of the form, prevent the default refresh behaviour.
  ➡ STEP 3 - make an API call when the form is submitted, call the function that makes the API call in the handle submit.
  ➡ STEP 4 - set the state once we have the data from the API call, grab just the useful information off of the results we get back.
  ➡ STEP 5 - add conditional rendering logic to the render JSX, so it renders either the results (if a user has submitted something and we got results back) or the placeholder ("search for the weather in a city")

  📝HINTS:📝
    * console.log every single thing that is passed into to each function, to take a look at what the actual data structure you're working with each time.
    * make sure you call a function to see it take affect!
    * review axios API calls, async await functions, and ternary statements
    * when passing in functions to the onChange and onSubmit handlers in the JSX make sure we're not calling those functions we pass in right away! Google/check the notes for reference!

*/

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: '',
    }
  }

  // STEP 1 handle user input text change
  // ➡ Call this function each time the input value changes (scroll down to render)
  // ➡ Grab the user input from e (the event), and update the state's city property with the changing user input.
  handleChange = (e) => {

  }

  // STEP 2 handle submit of form
  // ➡ Call this function each time the form is submitted (scroll down to render)
  // ➡ Prevent the default behaviour of a form submit
  handleSubmit = (e) => {

    // STEP 3
    // ➡ call fetchWeather() when the form has been submitted and pass in the appropriate search term (is this stored in state?)
  }

  // STEP 3 fetch weather using async await and axios
  // how to use apiKey: https://openweathermap.org/appid
  // how to get current weather in a city https://openweathermap.org/current
  // ➡ might need to add the 'units' param to the call to get proper temperature back, check the documentation!
  async fetchWeather(q) {
    const apiData = await axios.get();

    // STEP 4 set the state: temperature, weather, iconCode
    // ➡ set temperature, weather, and iconCode as new properties in the state with the appropriate data from the api call.
    // 🏆 Challenge 🏆 wrap the code in this functoin in a try catch block for error handling purposes!
  }

  render() {
    // STEP 5 NOTE
    // temperature, weather, and iconCode has been destructured and pulled off from state for simple usage in the conditional rendering in JSX. If we didn't do this temperature → this.state.temperature . They are holding the same values, but one is a little cleaner!
    const { temperature, weather, iconCode }  = this.state;
    return (
      <>
        <main className="wrapper">
          <h1>
            <img src={flame} className="flame" alt="Orange flame icon."/>
            <span>temperaturnt</span>
          </h1>

          {/* STEP 2 add an onSubmit handler to the form, and pass in the function we want to call upon submitting the form.*/}
          <form action="#">
            <label htmlFor="city">enter a city: </label>
            {/* STEP 1 add an onChange handler to the input and pass in the function we want to call upon input change.*/}
            <input type="text" id="city" placeholder="toronto"/>

            <input type="submit" value="submit"/>
          </form>

          {/* STEP 5 conditionally render results or placeholder based on if we have any of the data below to render. Maybe check if temperature, or weather, or iconCode exists in state using a ternary statement. */}
          <div className="results">
            <p className="temp">{temperature} °C</p>
            <p className="weather">{weather}</p>
            <div className="icon">
              <img src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`} alt=""/>
            </div>
          </div>

          <p className="placeholder">search for the weather in a city</p>

      </main>
        <p className="credit">Graphics Designed By LovePik User(ID:23428404) From <a href="https://lovepik.com/image-401502076/gradient-color-block-flame.html">LovePik.com</a>, Data from <a href="https://openweathermap.org/api">Open Weather API</a></p>
      </>
    );
  }
}

export default App;

