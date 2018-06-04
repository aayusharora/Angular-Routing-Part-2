import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndiaUsaComponent } from './india-usa/india-usa.component';
import { PacificComponent } from './pacific/pacific.component';
import { AtlanticComponent } from './atlantic/atlantic.component';
import {Routes, RouterModule} from '@angular/router';
import { MealComponent } from './meal/meal.component';

// Creating Child Routes with id to get the meal using /:id
const routes: Routes = [
  {path: '', redirectTo: 'india-usa', pathMatch: 'full'},
  {path: 'india-usa', component: IndiaUsaComponent, children: [
    {path: 'atlantic', component: AtlanticComponent},
      {path: 'atlantic/:id', component: MealComponent},
    {path: 'pacific', component: PacificComponent},
    {path: 'pacific/:id', component: MealComponent}
  ]}
];

@NgModule({
  declarations: [
    AppComponent,
    IndiaUsaComponent,
    PacificComponent,
    AtlanticComponent,
    MealComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
