import { Component, OnInit } from '@angular/core';
import { DataProvider } from '/Users/poohbd/Desktop/StockProj/src/app/data-provider.service';
import { NavController } from '@ionic/angular';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cpn',
  templateUrl: './cpn.page.html',
  styleUrls: ['./cpn.page.scss'],
})
export class CPNPage {
  public stock$: Observable<any>
  constructor(public dataProvider: DataProvider,public navCtrl: NavController) {
    console.log('Start')
  }
  showStock(date:string){
    console.log(date);
    this.stock$ = this.dataProvider.getStock("cpn",date);

  }

}
