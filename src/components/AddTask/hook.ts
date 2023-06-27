import { useState } from 'react';
import { useCreateTask } from '@hooks/useMutation.ts';

const useAddTask = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [title, setTitle] = useState('');
  const mutation = useCreateTask();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setTitle('');
  };

  const handleAddTask = () => {
    mutation.mutate({ title });
    setTitle('');
  };

  return {
    title,
    handleTitleChange,
    handleAddTask,
    isFocused,
    handleFocus,
    handleBlur,
  };
};

export default useAddTask;
