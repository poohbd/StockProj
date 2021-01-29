import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class DataProvider {
  private dataURL = "http://1becd1beed38.ngrok.io/"
  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }
  // getData(itemList,name:string,id:number,event){
  //   console.log("I'll get the data")
  //   this.http.get('http://d52413a2248b.ngrok.io/'+name+'?page='+id).subscribe(data => {
  //     for (let i=0;i<data['data'].length;i++)
  //       itemList.push(data['data'][i]);

  //   });
  //   if(id != 0)
  //     event.complete();
  // }
  getStock(name:string,date:string){
    console.log(this.dataURL+name+"?date="+date)
    return this.http.get(this.dataURL+name+"?date="+date);
  }

}
