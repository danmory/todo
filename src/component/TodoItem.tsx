import React, { FC, useState } from 'react';
import { List, Typography, Button, Input, Checkbox } from 'antd';
import { Todo } from '../store/todo/todo.reducer';
import localizations from '../settings/localizations';

export interface TodoItemProps {
  item: Todo;
  onDelete: (id: number) => void;
  onRename: (id: number, newTitle: string) => void;
  onCheck: (id: number) => void;
}

export const TodoItem: FC<TodoItemProps> = ({
  item,
  onDelete,
  onRename,
  onCheck
}) => {
  const [isRenaming, setIsRenaming] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>(item.title);
  const handleInputChange = (event) => setNewTitle(event.target.value);
  const handleRename = () => {
    if (isRenaming) {
      onRename(item.id, newTitle);
    }
    setIsRenaming(!isRenaming);
  };

  return (
    <List.Item
      actions={[
        <Button onClick={() => onDelete(item.id)} danger>
          {localizations.todo.item.buttonText.delete}
        </Button>,
        <Button onClick={handleRename} disabled={item.done}>
          {isRenaming
            ? localizations.todo.item.buttonText.apply
            : localizations.todo.item.buttonText.rename}
        </Button>
      ]}
    >
      {isRenaming ? (
        <Input
          autoFocus
          value={newTitle}
          bordered={false}
          onChange={handleInputChange}
          onPressEnter={handleRename}
        />
      ) : (
        <Checkbox checked={item.done} onChange={() => onCheck(item.id)}>
          <Typography.Text delete={item.done}>
            [
            {item.done
              ? localizations.todo.item.status.done
              : localizations.todo.item.status.todo}
            ] {item.title}
          </Typography.Text>
        </Checkbox>
      )}
    </List.Item>
  );
};
