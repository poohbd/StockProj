import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
})
export class SelectPage implements OnInit {
  title=[]

  constructor() {
    this.title = ["ADVANC","AOT","BEM","BTS","CPN","KBANK","PTT","PTTEP","SCB","SCC"]
  }


  ngOnInit() {
  }

}
