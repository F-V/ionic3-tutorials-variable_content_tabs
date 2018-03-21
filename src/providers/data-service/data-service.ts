import { Injectable } from '@angular/core';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {
  selectedCategorie="frisdrank";

  data = {
      frisdrank:[
        {
          naam:"coca cola",
          prijs:1.80
        },
        {
          naam:"ice tea",
          prijs:2.80
        }
      ],
      alcohol:[
        {
          naam:"bier",
          prijs:1
        },
        {
          naam:"vodka wit",
          prijs:4
        }
      ]
    }
  constructor() {
    console.log('Hello DataServiceProvider Provider');
  }

  getAll(){
    switch(this.selectedCategorie) { 
      case "alcohol": { 
        return this.data.alcohol;
      } 
      default: { 
         return this.data.frisdrank;
      } 
   } 
  }
}
