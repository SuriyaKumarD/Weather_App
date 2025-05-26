import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
  standalone: false,
})
export class WeatherCardComponent implements OnInit {
  @Input() weatherData: any;

  ngOnInit() {
    console.log('Weather Data:', this.weatherData);
  }
}
