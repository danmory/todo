import { RootState } from '..';
import { createSelector } from 'reselect';

export const selectTodoState = (state: RootState) => state.todo;

export const selectTodos = createSelector(
  selectTodoState,
  (state) => state.todos
);
