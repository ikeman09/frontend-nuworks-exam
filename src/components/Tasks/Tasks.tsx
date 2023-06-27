import { FC } from 'react';
import AddTask from '@components/AddTask';
import TasksFeed from '@components/TasksFeed';
import { useTasksQuery } from '@hooks/useQuery.ts';

const Tasks: FC = () => {
  const { data, isLoading } = useTasksQuery();
  return (
    <div className="ml-[142px] mt-[78px]">
      <h1 className="text-5xl font-bold">Tasks</h1>
      <div className="flex flex-col">
        <AddTask />
        <TasksFeed data={data} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Tasks;
