import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Action } from './action';

@Injectable({
  providedIn: 'root'
})
export class MessageBusService {


  private bus:Subject<Action> = new Subject<Action>()
  bus$ = this.bus.asObservable()

  constructor() { }


  dispatch(action:Action){
    console.log(action)
    this.bus.next(action)
  }
}
