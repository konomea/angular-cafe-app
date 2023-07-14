import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Drink } from '../../../models/drink.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit { 
  @Input() 
  data!: Drink;
  hover: boolean = false;

  constructor() {}
  ngOnInit(): void {
  }
}
