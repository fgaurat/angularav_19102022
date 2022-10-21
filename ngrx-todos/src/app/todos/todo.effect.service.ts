import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoService } from '../core/todo.service';
import { deleteLocalTodo, deleteTodo, initTodos, initTodosSuccess } from './todo.actions';
import { catchError,switchMap,map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Todo } from '../core/models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoEffectService {

  constructor(private actions$:Actions,private todoService:TodoService) { }

  initTodos$ = createEffect(
    ()=>this.actions$.pipe(
      ofType(initTodos),
      switchMap(() => this.todoService.getAll()),
      map((todos:Todo[]) => initTodosSuccess({todos})),
    )
  )
  deleteTodos$ = createEffect(
    ()=>this.actions$.pipe(
      ofType(deleteTodo),
      switchMap((action:{todo:Todo}) =>{
      this.todoService.delete(action.todo).subscribe()
      return of(action.todo)
    }),
      map((todo:Todo) => deleteLocalTodo({todo})),
    )
  )




}
