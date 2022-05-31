import { Component, OnInit, Output } from '@angular/core';
import { Car } from 'src/classes/car';
import { GarageService } from '../garage.service';

@Component({
  selector: 'app-garage-displayer',
  templateUrl: './garage-displayer.component.html',
  styleUrls: ['./garage-displayer.component.css']
})
export class GarageDisplayerComponent{

  constructor(
    private readonly service: GarageService
  ){

  }

  getList(): Car[]{
    return this.service.getGarageList()
  }
}
