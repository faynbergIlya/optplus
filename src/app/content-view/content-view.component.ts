import { Component, OnInit } from '@angular/core';
import { ExchangeDataService } from '../services'

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.less']
})
export class ContentViewComponent implements OnInit{

  content$: any;
  constructor(private data: ExchangeDataService) {
    this.content$ = this.data.exchangeSource.subscribe(c=>{
      console.log(c)
      this.content$ = c
    })
  }
  ngOnChanges(){
  }
  ngOnInit() {
  }

}
