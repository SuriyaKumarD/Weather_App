import { Component } from '@angular/core';
import { GeolocationService } from '../../services/geolocation/geolocation.service';
import { WeatherService } from '../../services/weather/weather.service';
import { AqiService } from '../../services/aqi/aqi.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: false,
})
export class DashboardComponent {
  weatherData: any;
  aqiData: any;

  loading: boolean = false;

  constructor(
    private geoService: GeolocationService,
    private weatherService: WeatherService,
    private aqiService: AqiService
  ) {}

  handleCitySearch(city: string) {
    this.loading = true;
    // this.geoService.getCoordinates(city).subscribe((res) => {
    //   if (res.length > 0) {
    //     //const { lat, lon } = res[0];
    //     const lat = 12.97194;
    //     const lon = 77.59369;
    //     console.log(`Coordinates for ${city}:`, lat, lon);
    //     // Next: Call weather and AQI services with lat/lon
    //     this.weatherService.getWeather(lat, lon).subscribe((weather) => {
    //       this.weatherData = weather;
    //     });
    //   } else {
    //     const lat = 12.97194;
    //     const lon = 77.59369;
    //     this.weatherService.getWeather(lat, lon).subscribe((weather) => {
    //       this.weatherData = weather;
    //     });
    //   }
    // });

    const lat = 12.97194;
    const lon = 77.59369;
    this.weatherService.getWeather(lat, lon).subscribe((weather) => {
      this.loading = true;
      if (weather.length > 0) {
        this.weatherData = weather.data;
      } else {
        this.loading = false;
        console.error('No weather data found for the given coordinates.');
      }
    });

    this.aqiService.getAqi(lat, lon).subscribe((aqiRes) => {
      this.loading = true;
      if (aqiRes.status === 'ok') {
        this.aqiData = aqiRes.data;
        this.loading = false;
        console.log('AQI Data:', this.aqiData);
      }
    });
  }
}
