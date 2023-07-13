/* eslint-disable no-undef */
import axios from 'axios';
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};
const foreCastBaseURL = process.env.REACT_APP_FORECAST_BASE_URL;
const weatherBaseUrl = process.env.REACT_APP_WEATHER_BASE_URL;
const weatherService = axios.create({
  baseURL: weatherBaseUrl,
  headers: {
    ...headers
  }
});
const forecastService = axios.create({
  baseURL: foreCastBaseURL,
  headers: {
    ...headers
  }
});

export { weatherService, forecastService };
