import { Component, OnInit } from '@angular/core';
import { increment, decrement, reset } from '../counter.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent  {
  count$: Observable<{value:number}>;

  constructor(private store: Store<{ count: {value:number} }>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
