import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-aqi-card',
  templateUrl: './aqi-card.component.html',
  styleUrls: ['./aqi-card.component.scss'],
  standalone: false,
})
export class AqiCardComponent {
  @Input() aqiData: any;

  getAqiLevel(aqi: number): string {
    if (aqi <= 50) return 'Good';
    if (aqi <= 100) return 'Moderate';
    if (aqi <= 150) return 'Unhealthy for Sensitive Groups';
    if (aqi <= 200) return 'Unhealthy';
    if (aqi <= 300) return 'Very Unhealthy';
    return 'Hazardous';
  }
}
