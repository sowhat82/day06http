import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {WeatherService} from './WeatherService.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day06http';
  result = {main:{
            "temp": 0,
            "feels_like": 0,
            "temp_min": 0,
            "temp_max": 0,
            "pressure": 0,
            "humidity": 0
          }
  }
  constructor(private weatherSvc: WeatherService) {
   }
  
  async ngOnInit(): Promise<void> {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   this.result = await(this.weatherSvc.getWeather('singapore', 'ce91e6dcab66e9f3cf80954560fa61cf'));
   console.info(typeof(this.result));
   console.info(this.result);
  }


}
