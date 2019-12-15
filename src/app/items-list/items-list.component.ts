import { Component, OnInit, Input } from '@angular/core';
import { ExchangeDataService } from '../services';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.less']
})
export class ItemsListComponent implements OnInit {
  @Input() itemsList: []
  content: any;
  constructor(private data: ExchangeDataService) { 
  }

  ngOnInit() {
    // this.data.getMessage.subscribe(content => this.content = content)
  }

  onClickListElement(item) {
    this.data.sendContent(item)
  }

  getStringValueOf(str: string){
    return str.replace(/(&quot\;)/g,"\"")
  }
}
