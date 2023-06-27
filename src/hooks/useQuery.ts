import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getTasks } from '@api/todos.ts';
import { ITodo } from '@interfaces/types.ts';
import { QueryKeys } from '@constants/enums.ts';

export const useTasksQuery = () => {
  const { data, isLoading }: UseQueryResult<ITodo[]> = useQuery({
    queryKey: [QueryKeys.GET_TODOS],
    queryFn: getTasks,
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 5, // 5 minutes
  });

  return { data, isLoading };
};
