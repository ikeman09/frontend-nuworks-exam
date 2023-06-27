import { ITodo } from '@interfaces/types';
import { useEffect, useState } from 'react';
import {
  useCompleteTask,
  useDeleteTask,
  useEditTask,
} from '@hooks/useMutation';
// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { editTask } from '@api/todos.ts';
// import { QueryKeys } from '@constants/enums.ts';

const useTaskFeed = (data: ITodo[] | undefined) => {
  const [todos, setTodos] = useState<ITodo[] | undefined>(data);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('');
  const [currentId, setCurrentId] = useState('');
  const mutation = useEditTask();
  const deleteMutation = useDeleteTask();
  const completeMutation = useCompleteTask();

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

  const handleComplete = (id: string) => {
    const updatedTodos = todos?.map(todo => {
      if (todo._id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }

      return todo;
    });

    setTodos(updatedTodos);

    completeMutation.mutate({ id });
  };

  const handleIsEditing = (id: string) => {
    setIsEditing(true);
    setCurrentId(id);
  };

  const handleBlur = (id: string) => {
    setIsEditing(false);
    setCurrentId(id);
  };

  return {
    todos,
    currentId,
    handleDelete,
    handleComplete,
    handleBlur,
    handleIsEditing,
    handleEdit,
    isEditing,
    handleTitleChange,
    title,
  };
};

export default useTaskFeed;
