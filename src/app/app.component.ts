import { Component } from '@angular/core';
import { SourceDataObject } from '../types'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  private searchValue: string;
  private result:SourceDataObject[] = [];

  onClickEvent(){
    this.getData(this.searchValue)
  }

  getData(searchValue: string) {
    fetch(`https://api.stackexchange.com/2.2/tags/${searchValue}/faq?site=stackoverflow`)
    .then((res)=>res.json()).then((res)=>{
      this.result=res.items})
  }

  onChangeEvent(value: string) {
    this.searchValue = value;
  }

  onClickItemEvent(e){
  }
}
