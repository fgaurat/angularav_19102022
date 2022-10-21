import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MaterialModule } from '../material.module';
import { TodoReactiveFormComponent } from './todo-reactive-form/todo-reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TodoListComponent,
    TodoReactiveFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    TodoListComponent,
    TodoReactiveFormComponent
  ]
})
export class TodosModule { }
