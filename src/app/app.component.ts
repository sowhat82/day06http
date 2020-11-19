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
  
  constructor(private weatherSvc: WeatherService) {
   }
  
  async ngOnInit(): Promise<void> {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }


}
