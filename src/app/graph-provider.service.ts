import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraphProvider{
  public graphURL:string = "http://24acbc7fc4ca.ngrok.io/graph"

  constructor() { }
}
