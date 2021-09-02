
import { Component, Input, OnInit } from '@angular/core';

import {ApiService } from "./../../sevices/api.service"


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  drinks:any
  categories: any
  constructor(private api:ApiService,) { }

  ngOnInit(): void {
 this.api.getData().subscribe(
      (data: any)=> {
        this.drinks = data.drinks  
        this.categories = [];
        data.drinks.forEach((drink: any) => {
            this.categories.push(drink.strCategory)   
        });            
        this.categories= [...new Set(this.categories)]
      }) 
     
    
      
  }
}
