import { FC } from 'react';
import { ITodo } from '@interfaces/types.ts';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import TrashIconLight from '@assets/images/TrashIconLight.svg';
import EditIcon from '@assets/images/EditIcon.svg';
import useTasksFeed from './hook';

interface ITasksFeedProps {
  data: ITodo[] | undefined;
  isLoading: boolean;
}
const TasksFeed: FC<ITasksFeedProps> = ({ data, isLoading }) => {
  const {
    todos,
    title,
    currentId,
    handleEdit,
    handleDelete,
    handleComplete,
    handleTitleChange,
    handleBlur,
    handleIsEditing,
    isEditing,
  } = useTasksFeed(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {todos &&
        todos?.map((task: ITodo) => (
          <form
            onSubmit={e => {
              e.preventDefault();
              handleEdit(task._id, title);
            }}
            key={task._id}
            className="flex flex-row items-center justify-between mt-4 bg-todos h-16 w-11/12 rounded-2xl">
            <div className="flex flex-row items-center">
              <Checkbox.Root
                checked={task.completed}
                className="ml-4 flex items-center justify-center h-8 w-8 rounded-2xl border-2 border-yellow"
                id={task._id}
                onClick={() => handleComplete(task._id)}>
                <Checkbox.Indicator className="flex justify-center items-center h-8 w-8 bg-yellow rounded-2xl">
                  <CheckIcon className="h-6 w-6 text-midnight" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              {isEditing && task._id == currentId ? (
                <>
                  <input
                    className="pl-[10px] caret-white bg-todos outline-none"
                    type="text"
                    id={'editTask' + task._id}
                    placeholder={task.title}
                    autoComplete="off"
                    onBlur={() => handleBlur(task._id)}
                    onChange={handleTitleChange}
                  />
                </>
              ) : (
                <label className="pl-[10px]" htmlFor={task._id}>
                  {task.title}
                </label>
              )}
            </div>
            <div className="flex flex-row items-center pr-4">
              <label
                className="pr-2 hover:cursor-pointer"
                htmlFor={'editTask' + task._id}
                onClick={() => handleIsEditing(task._id)}>
                <img src={EditIcon} alt="Edit Icon" />
              </label>
              <label
                className="hover:cursor-pointer"
                onClick={() => {
                  handleDelete(task._id);
                }}>
                <img src={TrashIconLight} alt="Trash Icon" />
              </label>
            </div>
          </form>
        ))}
    </>
  );
};

export default TasksFeed;
