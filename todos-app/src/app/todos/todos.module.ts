import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { TodoFormComponent } from './todo-form/todo-form.component';



@NgModule({
  declarations: [
    TodoListComponent,
    TodoFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  exports:[
    TodoListComponent,
    TodoFormComponent
  ]
})
export class TodosModule { }
