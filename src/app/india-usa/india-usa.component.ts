import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-india-usa',
  templateUrl: './india-usa.component.html',
  styleUrls: ['./india-usa.component.css']
})

export class IndiaUsaComponent {
  constructor(private router: ActivatedRoute,
              private route: Router) {
  }

// Creating Meal Arrays

  AtlanticMenu: object[] = [
  {id:1, item: 'Kosher Meal'},
  {id:2, item: 'Moslem Meal'},
  {id:3, item: 'Vegetarian Meal'},
  {id:4, item: 'Asian Meal'}
];

  PacificMenu: object[] = [
    {id:1, item: 'SeaFood Meal'},
    {id:2, item: 'Lacto Ovo Veg Meal'},
    {id:3, item: 'Bland Meal'},
    {id:4, item: 'Fruit Meal'}
  ];

// Function to navigate to the atlantic meal according to id
  atlanticMenu(id) {
    this.route.navigate(['atlantic', id], { relativeTo: this.router});
  }

  // Function to navigate to the pacific meal according to id

  pacificMenu(id){
    this.route.navigate(['pacific', id], { relativeTo: this.router});
  }

  // Function to navigate to Atlantic Route
  viaAtlantic() {
    this.route.navigate(['atlantic'], { relativeTo: this.router});
  }

  // Function to navigate to Pacific Route
  viaPacific() {
    this.route.navigate(['pacific'], { relativeTo: this.router});
  }

}
