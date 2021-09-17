import {
  TodoActionTypes,
  CreateTodoAction,
  CheckTodoAction,
  DeleteTodoAction,
  RenameTodoAction
} from './todo.actions';

export const deleteTodo = (id: number) =>
  ({ type: TodoActionTypes.DELETE_TODO, payload: { id } } as DeleteTodoAction);

export const renameTodo = (id: number, newTitle: string) =>
  ({
    type: TodoActionTypes.RENAME_TODO,
    payload: { id, newTitle }
  } as RenameTodoAction);

export const checkTodo = (id: number) =>
  ({ type: TodoActionTypes.CHECK_TODO, payload: { id } } as CheckTodoAction);

export const createTodo = (id: number, title: string) =>
  ({
    type: TodoActionTypes.CREATE_TODO,
    payload: { id, title }
  } as CreateTodoAction);
