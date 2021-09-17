export enum TodoActionTypes {
  CREATE_TODO = 'CREATE_TODO',
  DELETE_TODO = 'DELETE_TODO',
  CHECK_TODO = 'CHECK_TODO',
  RENAME_TODO = 'RENAME_TODO'
}

export interface CreateTodoAction {
  type: TodoActionTypes.CREATE_TODO;
  payload: { title: string; id: number };
}

export interface DeleteTodoAction {
  type: TodoActionTypes.DELETE_TODO;
  payload: { id: number };
}

export interface CheckTodoAction {
  type: TodoActionTypes.CHECK_TODO;
  payload: { id: number };
}

export interface RenameTodoAction {
  type: TodoActionTypes.RENAME_TODO;
  payload: { id: number; newTitle: string };
}

export type TodoAction =
  | CreateTodoAction
  | DeleteTodoAction
  | CheckTodoAction
  | RenameTodoAction;
