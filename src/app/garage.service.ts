import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Car } from 'src/classes/car';

@Injectable({
  providedIn: 'root'
})
export class GarageService {

  private garageList: Car[] = [];

  constructor(private readonly http : HttpClient) { }

  getGarageList() : Observable<Car[]>{
    return this.http.get<Car[]>(`http://localhost:3000/cars`).pipe(
      map(cars =>
          cars.map(car => {
          let instance = new Car(car.license, car.model, car.brand)
          instance.id = car.id;
          return instance;
        })
      ),
    )
  }

  getCarById(id : number) : Observable<Car>{
    return this.http.get<Car>(`http://localhost:3000/cars/` + id).pipe(
      map(car => {
        let instance = new Car(car.license, car.model, car.brand)
          instance.id = car.id;
          return instance;
      })
    )
  }

  addCar(car : Car) : Observable<Car>{
    return this.http.post<Car>(`http://localhost:3000/cars`, car);
  }
}
