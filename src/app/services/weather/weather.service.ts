import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = 'https://weatherbit-v1-mashape.p.rapidapi.com/current?';
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': 'a62d2e29d8mshf52cf2ed1d747e8p12ec16jsn2bc142027f08',
    'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
  });

  constructor(private http: HttpClient) {}

  getWeather(lat: number, lon: number): Observable<any> {
    return this.http.get(
      `${this.apiUrl}lon=${lon}&lat=${lat}&units=imperial&lang=en`,
      {
        headers: this.headers,
      }
    );
  }
}
