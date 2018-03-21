import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items:any;
  constructor(public navCtrl: NavController,public dataService:DataServiceProvider) {

  }

  ionViewDidLoad(){
    this.items = this.dataService.getAll();
    console.log("dataService returned", this.items);
  }

}
