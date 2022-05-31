import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Car } from 'src/classes/car';
import { GarageService } from '../garage.service';

@Component({
  selector: 'app-car-details-page',
  templateUrl: './car-details-page.component.html',
  styleUrls: ['./car-details-page.component.css']
})
export class CarDetailsPageComponent implements OnInit {
  idCar: string | null = null;

  car : Observable<Car> | null = null;

  constructor(
    private readonly route : ActivatedRoute,
    private readonly service : GarageService
    ) {
    this.route.paramMap.subscribe(
      (paramMap) => {
        this.idCar = paramMap.get('idCar')
        if(this.idCar != null) {
          this.car = service.getCarById(parseInt(this.idCar))
        }
      }
    )
  }



  ngOnInit(): void {
  }

}
