import { FC } from 'react';
import * as Label from '@radix-ui/react-label';
import SearchIcon from '@assets/images/SearchIcon.svg';

const Search: FC = () => {
  return (
    <form className="hidden sm:mt-[50px] sm:h-[32px] sm:w-11/12 sm:flex sm:flex-row sm:items-center sm:bg-search sm:rounded-lg">
      <Label.Root className="pl-[16px]" htmlFor="searchInput">
        <img className="max-w-non" src={SearchIcon} alt="Search Icon" />
      </Label.Root>
      <input
        className="w-11/12 pl-2 bg-search caret-white outline-none"
        type="text"
        id="searchInput"
        placeholder="Search"
        autoComplete="off"
      />
    </form>
  );
};

export default Search;
