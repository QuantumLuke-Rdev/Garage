import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Car } from 'src/classes/car';
import { GarageDisplayerComponent } from '../garage-displayer/garage-displayer.component';
import { GarageService } from '../garage.service';

@Component({
  selector: 'app-create-car-form',
  templateUrl: './create-car-form.component.html',
  styleUrls: ['./create-car-form.component.css']
})
export class CreateCarFormComponent implements OnInit{

  form: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly service: GarageService,
  ){
    this.form = formBuilder.group({
      license: ['', Validators.required],
      model: ['', Validators.required],
      brand: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  submit() : void {
    let car = new Car(this.form.value.license, this.form.value.model, this.form.value.brand);
    this.service.addCar(car);
  }

  reset() : void {
    this.form.reset();
  }
}
