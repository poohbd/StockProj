import { Component, OnInit } from '@angular/core';
import { DataProvider } from '/Users/poohbd/Desktop/StockProj/src/app/data-provider.service';
import { NavController } from '@ionic/angular';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-scc',
  templateUrl: './scc.page.html',
  styleUrls: ['./scc.page.scss'],
})
export class SCCPage{
  public stock$: Observable<any>
  constructor(public dataProvider: DataProvider,public navCtrl: NavController) {
    console.log('Start')
  }
  showStock(date:string){
    console.log(date);
    this.stock$ = this.dataProvider.getStock("scc",date);

  }

}
