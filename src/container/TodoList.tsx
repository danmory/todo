import React, { FC } from 'react';
import useTypedSelector from '../hooks/useTypedSelector';
import useTypedDispatch from '../hooks/useTypedDispatch';
import { List } from 'antd';
import { selectTodos } from '../store/todo/todo.selectors';
import {
  checkTodo,
  createTodo,
  deleteTodo,
  renameTodo
} from '../store/todo/todo.actionCreators';
import { TodoItem } from '../component/TodoItem';
import { TodoAdd } from '../component/TodoAdd';

export const TodoList: FC = () => {
  const todos = useTypedSelector(selectTodos);
  const dispatch = useTypedDispatch();

  const deleteItem = (id: number) => dispatch(deleteTodo(id));
  const renameItem = (id: number, newTitle: string) =>
    dispatch(renameTodo(id, newTitle));
  const checkItem = (id: number) => dispatch(checkTodo(id));
  const createItem = (id: number, title: string) =>
    dispatch(createTodo(id, title));
  return (
    <>
      <List
        style={{ minHeight: '200px' }}
        itemLayout="vertical"
        size="large"
        dataSource={todos}
        renderItem={(item) => (
          <TodoItem
            key={item.id}
            item={item}
            onDelete={deleteItem}
            onRename={renameItem}
            onCheck={checkItem}
          />
        )}
      />
      <TodoAdd onCreate={createItem} />
    </>
  );
};
