import { Component, OnInit } from '@angular/core';
import { GraphProvider } from '/Users/poohbd/Desktop/StockProj/src/app/graph-provider.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})
export class GraphPage implements OnInit {

  constructor(private graphProvider:GraphProvider) { }

  ngOnInit() {
  }

}
