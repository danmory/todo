import React, { FC, useState } from 'react';
import { Modal, Button, Input } from 'antd';
import localizations from '../settings/localizations';

export interface TodoAppProps {
  onCreate: (id: number, title: string) => void;
}

export const TodoAdd: FC<TodoAppProps> = ({ onCreate }) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [newTodoTitle, setNewTodoTitle] = useState<string>('');

  const handleTitleChange = (event) => setNewTodoTitle(event.target.value);

  const showModal = () => setIsModalVisible(true);

  const closeModal = () => {
    setNewTodoTitle('');
    setIsModalVisible(false);
  };

  const handleOk = () => {
    onCreate(Date.now(), newTodoTitle.trim());
    closeModal();
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        {localizations.todo.addItem.addBtnText}
      </Button>
      <Modal
        title={localizations.todo.addItem.modal.title}
        okText={localizations.todo.addItem.modal.okText}
        visible={isModalVisible}
        onOk={handleOk}
        okButtonProps={{ disabled: !newTodoTitle }}
        onCancel={closeModal}
      >
        <Input
          placeholder={localizations.todo.addItem.modal.inputPlaceholder}
          minLength={1}
          value={newTodoTitle}
          onChange={handleTitleChange}
        />
      </Modal>
    </>
  );
};
