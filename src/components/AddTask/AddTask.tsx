import { FC } from 'react';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import useAddTask from './hook';

const AddTask: FC = () => {
  const {
    title,
    handleTitleChange,
    handleAddTask,
    isFocused,
    handleFocus,
    handleBlur,
  } = useAddTask();

  return (
    <form
      className="flex flex-row items-center mt-14 ml-[14px]"
      onSubmit={e => {
        e.preventDefault();
        handleAddTask();
      }}>
      <PlusCircledIcon
        className="h-9 w-9 text-yellow"
        onClick={e => {
          e.preventDefault();
          handleAddTask();
        }}
      />
      <input
        className="w-11/12 pl-2 caret-white outline-none bg-midnight"
        type="text"
        placeholder={isFocused ? '' : 'Add a To-do'}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleTitleChange}
        value={title}
      />
    </form>
  );
};

export default AddTask;
