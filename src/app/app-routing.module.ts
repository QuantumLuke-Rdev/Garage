import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsPageComponent } from './car-details-page/car-details-page.component';
import { CreateCarFormComponent } from './create-car-form/create-car-form.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { GarageDisplayerComponent } from './garage-displayer/garage-displayer.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path : '', redirectTo : '/home',pathMatch : 'full'},
  {path : 'home', component : HomePageComponent},
  {path : 'newCar', component : CreateCarFormComponent},
  {path : 'garage', component : GarageDisplayerComponent},
  {path : ':idCar', component : CarDetailsPageComponent},
  {path : '**', component : ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
