import { ITodo } from '@interfaces/types';
import { useEffect, useState } from 'react';
import { useDeleteTask, useEditTask } from '@hooks/useMutation';
// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { editTask } from '@api/todos.ts';
// import { QueryKeys } from '@constants/enums.ts';

const useTaskFeed = (data: ITodo[] | undefined) => {
  const [todos, setTodos] = useState<ITodo[] | undefined>(data);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('');
  const mutation = useEditTask();
  const deleteMutation = useDeleteTask();

  useEffect(() => {
    setTodos(data);
  }, [data]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleEdit = (id: string, todoTitle: string) => {
    setIsEditing(false);
    console.log(id, todoTitle);

    const updatedTodos = todos?.map(todo => {
      if (todo._id === id) {
        return {
          ...todo,
          title: todoTitle,
        };
      }

      return todo;
    });

    setTodos(updatedTodos);

    mutation.mutate({ id, title: todoTitle });
  };

  const handleDelete = (id: string) => {
    const updatedTodos = todos?.filter(todo => todo._id !== id);
    setTodos(updatedTodos);

    deleteMutation.mutate({ id });
  };

  const handleIsEditing = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  return {
    todos,
    handleDelete,
    handleBlur,
    handleIsEditing,
    handleEdit,
    isEditing,
    handleTitleChange,
    title,
  };
};

export default useTaskFeed;
