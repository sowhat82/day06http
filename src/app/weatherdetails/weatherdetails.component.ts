import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {WeatherService} from '../WeatherService.service'
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-weatherdetails',
  templateUrl: './weatherdetails.component.html',
  styleUrls: ['./weatherdetails.component.css']
})
export class weatherdetailsComponent {
  cityForm: FormGroup
  city = ""
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
  constructor(private weatherSvc: WeatherService, private fb: FormBuilder) {
   }
  
  async ngOnInit(): Promise<void> {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  //  this.result = await(this.weatherSvc.getWeather('singapore', 'ce91e6dcab66e9f3cf80954560fa61cf'));
  //  console.info(typeof(this.result));
  //  console.info(this.result);
    this.cityForm = this.fb.group({
    city: this.fb.control(''),
    })

  }

  async getWeather(){
    this.result = await(this.weatherSvc.getWeather(this.cityForm.value.city, 'ce91e6dcab66e9f3cf80954560fa61cf'));
    console.info(typeof(this.result));
    console.info(this.result);
  }
}