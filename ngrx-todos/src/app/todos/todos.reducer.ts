import { createReducer, on } from "@ngrx/store";
import { Todo } from "../core/models/todo";
import { initTodosSuccess,deleteLocalTodo } from "./todo.actions";


export const initialState:Todo[] = [];


export const todoReducer = createReducer(
  initialState,
  on(initTodosSuccess,(state,action)=>action.todos),
  on(deleteLocalTodo,(state,action)=>{
    const t =state.filter(todo=>todo.id!==action.todo.id)
    return t 
  })
);
