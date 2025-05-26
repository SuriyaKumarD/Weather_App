import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  private apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
  private geoUrl = 'https://api.openweathermap.org/geo/1.0/direct';

  constructor(private http: HttpClient) {}

  getCoordinates(city: string): Observable<any> {
    const url = `${this.geoUrl}?q=${city}&limit=1&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}
