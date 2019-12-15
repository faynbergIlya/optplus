import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ExchangeDataService {
content:any
exchangeSource: BehaviorSubject<any>

constructor() { 
  this.exchangeSource  = new BehaviorSubject(this.content);
}
sendContent(content: any){
  this.exchangeSource.next(content)
}

// getContent(): Observable<any> {
//   return this.exchangeSource.asObservable();
// }
}
