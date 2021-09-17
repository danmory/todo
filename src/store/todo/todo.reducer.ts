import { TodoAction, TodoActionTypes } from './todo.actions';

export interface Todo {
  id: number;
  title: string;
  done: boolean;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: []
};

const todoReducer = (state = initialState, action: TodoAction) => {
  switch (action.type) {
    case TodoActionTypes.CREATE_TODO:
      return {
        ...state,
        todos: state.todos.concat({
          title: action.payload.title,
          done: false,
          id: action.payload.id
        })
      };
    case TodoActionTypes.CHECK_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
        )
      };
    case TodoActionTypes.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id)
      };
    case TodoActionTypes.RENAME_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, title: action.payload.newTitle }
            : todo
        )
      };
    default:
      return state;
  }
};

export default todoReducer;
