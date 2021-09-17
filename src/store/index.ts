import { combineReducers, createStore } from 'redux';
import todoReducer from './todo/todo.reducer';

const rootReducer = combineReducers({
  todo: todoReducer
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
