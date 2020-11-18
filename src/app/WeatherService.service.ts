import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherService {
    constructor(private http: HttpClient) { }
        
    getWeather(city: string, key: string): Promise<any> {
        const params = new HttpParams()
        .set('q', city)
        .set('appid', key);
        return(
            this.http.get('http://api.openweathermap.org/data/2.5/weather', { params: params }).toPromise()
        )
    }
}
