import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/classes/car';
import { GarageService } from '../garage.service';

@Component({
  selector: 'app-garage-displayer',
  templateUrl: './garage-displayer.component.html',
  styleUrls: ['./garage-displayer.component.css']
})
export class GarageDisplayerComponent{

  cars : Observable<Car[]>;

  constructor(
    private readonly service: GarageService
  ){
    this.cars = service.getGarageList();
  }
}
