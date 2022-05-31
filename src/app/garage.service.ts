import { Injectable } from '@angular/core';
import { Car } from 'src/classes/car';

@Injectable({
  providedIn: 'root'
})
export class GarageService {

  private garageList: Car[] = [];

  constructor() { }

  getGarageList() : Car[]{
    return this.garageList;
  }

  addCar(car : Car){
    this.garageList.push(car);
  }
}
