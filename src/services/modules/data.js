const appKey = 'APPID=6557810176c36fac5f0db536711a6c52';
import { weatherService, forecastService } from '../http';
export default {
  getWeatherByCity(city) {
    return weatherService.get(`${city}&${appKey}`);
  },
  getForecastByCity(city) {
    return forecastService.get(`?q=${city}&${appKey}`);
  }
};
