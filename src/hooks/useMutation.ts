import { useMutation, useQueryClient } from '@tanstack/react-query';
import { editTask, createTask, deleteTask, completeTask } from '@api/todos.ts';
import { QueryKeys } from '@constants/enums.ts';

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient
        .invalidateQueries({ queryKey: [QueryKeys.GET_TODOS] })
        .then(() => {
          console.log('queries invalidated');
        });
    },
  });
};

export const useEditTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editTask,
    onSuccess: () => {
      queryClient
        .invalidateQueries({ queryKey: [QueryKeys.GET_TODOS] })
        .then(() => {
          console.log('queries invalidated');
        });
    },
  });
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient
        .invalidateQueries({ queryKey: [QueryKeys.GET_TODOS] })
        .then(() => {
          console.log('queries invalidated');
        });
    },
  });
};

export const useCompleteTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: completeTask,
    onSuccess: () => {
      queryClient
        .invalidateQueries({ queryKey: [QueryKeys.GET_TODOS] })
        .then(() => {
          console.log('queries invalidated');
        });
    },
  });
};
