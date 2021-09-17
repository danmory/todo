import React, { FC } from 'react';
import { TodoList } from './container/TodoList';

export const App: FC = () => (
  <div className="App">
    <TodoList />
  </div>
);

export default App;
