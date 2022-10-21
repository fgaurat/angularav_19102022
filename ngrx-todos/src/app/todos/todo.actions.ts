import { createAction,props } from '@ngrx/store';
import { Todo } from '../core/models/todo';

export const initTodos = createAction('[TodoList Component] initTodos');
export const initTodosSuccess = createAction('[TodoList Component] initTodosSuccess',props<{todos:Todo[]}>() );
export const deleteTodo = createAction('[TodoList Component] deleTodo',props<{todo:Todo}>() );
export const deleteLocalTodo = createAction('[TodoList Component] deleteLocalTodo',props<{todo:Todo}>() );
