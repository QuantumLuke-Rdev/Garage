import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Car } from 'src/classes/car';

@Injectable({
  providedIn: 'root'
})
export class GarageService {

  private garageList: Car[] = [];

  constructor(private readonly http : HttpClient) { }

  getGarageList() : Observable<Car[]>{
    return this.http.get<Car[]>(`http://localhost:3000/cars`)
  }

  addCar(car : Car) : Observable<Car>{
    return this.http.post<Car>(`http://localhost:3000/cars`, car);
  }
}
