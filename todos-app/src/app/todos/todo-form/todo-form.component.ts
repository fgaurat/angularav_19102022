import { Component, OnInit } from '@angular/core';
import { ActionTypes } from 'src/app/core/action-types';
import { MessageBusService } from 'src/app/core/message-bus.service';
import { Todo } from 'src/app/core/models/todo';
import { TodoService } from 'src/app/core/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

readonly todo:Todo={
  title:"Toto",
  completed:true
}

  constructor(private todoService:TodoService,private messageBus:MessageBusService) { }

  ngOnInit(): void {
  }
  submit(): void {
    console.log("submit")
    this.messageBus.dispatch({type:ActionTypes.NEW_TODO,payload:this.todo})
    // this.todoService.save(this.todo).subscribe(
    //   () => this.messageBus.dispatch({type:ActionTypes.NEW_TODO})
    //   )
  }

}
