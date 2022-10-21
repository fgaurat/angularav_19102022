import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/core/models/todo';
import { initTodos,deleteTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  displayedColumns=['id','title','completed','action']
  todos$:Observable<Todo[]>

  constructor(private store:Store<{todos:Todo[]}>) {
    this.todos$ = store.select(store => store.todos)
  }

  ngOnInit(): void {
    this.store.dispatch(initTodos())
  }
  deleteTodo(todo:Todo){
    this.store.dispatch(deleteTodo({todo}))
  }

}
