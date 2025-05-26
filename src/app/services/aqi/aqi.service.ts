import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AqiService {
  private token = 'b2117d20d149dd28f6d7e22db3dadddfe1cc2f96'; // Replace with your token
  private baseUrl = 'https://api.waqi.info/feed';

  constructor(private http: HttpClient) {}

  getAqi(lat: number, lon: number): Observable<any> {
    const url = `${this.baseUrl}/geo:${lat};${lon}/?token=${this.token}`;
    return this.http.get(url);
  }
}
