import { Component, OnInit, ViewChild } from '@angular/core';
import { DrinkService } from '../../services/drink.service';
import { Drink } from '../../../../../backend/models/drink.model';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {
  
  drinks: Drink[] = [];
  errorMessage: string = '';
  currentDrink: Drink = {};
  currentIndex = -1;
  name = '';
  showAlert: boolean = false;

  constructor(private drinkService: DrinkService) { }

  ngOnInit(): void {
    this.retrieveDrinks();
  }

  receiver(receivedFromChild: boolean) {
    console.log(receivedFromChild);
    this.showAlert = receivedFromChild;
  }

  retrieveDrinks(): void {
    this.drinkService.getAll().subscribe({
      next: data => {
        this.drinks = data;
        console.log(data);
      },
      error : err => this.errorMessage = err
      });
  }

  refreshList(): void {
    this.retrieveDrinks();
    this.currentDrink = {};
    this.currentIndex = -1;
  }

  setActiveDrink(drink: Drink, index: number): void {
    this.currentDrink = drink;
    this.currentIndex = index;
  }

  searchName(): void {
    this.currentDrink = {};
    this.currentIndex = -1;

    this.drinkService.findByName(this.name).subscribe({
      next: data => {
        this.drinks = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  closeAlert() {
    this.showAlert = false;
  }
}

