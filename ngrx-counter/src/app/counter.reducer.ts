import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export const initialState = {value:0};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({value:state.value+1}) ),
  on(decrement, (state) => ({value:state.value-1})),
  on(reset, (state) => ({value:0}))
);
