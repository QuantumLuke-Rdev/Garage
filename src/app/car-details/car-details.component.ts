import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/classes/car';
import { GarageService } from '../garage.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  @Input() car : Car | null = null;
  constructor(private readonly service : GarageService) { }

  ngOnInit(): void {
  }

}
