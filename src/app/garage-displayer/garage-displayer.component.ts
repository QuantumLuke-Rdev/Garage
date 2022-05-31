import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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
    private readonly service: GarageService,
    private readonly router: Router,
  ){
    this.cars = service.getGarageList();
  }

  details(id : number) : void {
    this.router.navigateByUrl('/' + id)
  }
}
