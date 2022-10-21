import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/core/models/todo';
import { Observable,merge } from 'rxjs';
import { switchMap,filter } from 'rxjs/operators';
import { TodoService } from 'src/app/core/todo.service';
import { MessageBusService } from 'src/app/core/message-bus.service';
import { ActionTypes } from 'src/app/core/action-types';
import { Action } from 'src/app/core/action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit,AfterViewInit {

  displayedColumns = ['id','title','completed','action']
  todos$!:Observable<Todo[]>;

  constructor(private todoService:TodoService,private messageBus:MessageBusService) { }


  ngOnInit(): void {

    const newTodo$ = this.messageBus.bus$.pipe(
      filter((action:Action) => action.type === ActionTypes.NEW_TODO),
      switchMap((action:Action) => this.todoService.save(action.payload))
    )

    const initTodo$ = this.messageBus.bus$.pipe(
      filter((action:Action) => action.type === ActionTypes.INIT_TODOS),
    )
    const deleteTodo$ = this.messageBus.bus$.pipe(
      filter((action:Action) => action.type === ActionTypes.DELETE_TODO),
      switchMap((action:Action) => this.todoService.delete(action.payload))
    )

    this.todos$ = merge(newTodo$,deleteTodo$,initTodo$).pipe(
      switchMap(() => this.todoService.getAll())
    )

  }

  ngAfterViewInit(){
    this.messageBus.dispatch({type:ActionTypes.INIT_TODOS})
  }



  deleteTodo(todo:Todo):void{

    this.messageBus.dispatch({type:ActionTypes.DELETE_TODO,payload:todo})
    // this.todos$ = this.todoService.delete(todo).pipe(
    //   switchMap( data =>
    //     this.todoService.getAll()
    //   )
    // )
  }

}
