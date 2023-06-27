import { FC } from 'react';

const Greeting: FC = () => {
  return (
    <div className="flex flex-row">
      <div className="flex items-center justify-center h-[48px] w-[48px] bg-yellow border-inherit rounded-2xl">
        <p className="text-midnight text-2xl font-bold">NW</p>
      </div>
      <div className="hidden md:flex md:items-center md:justify-center">
        <p className="pl-5 font-medium text-2xl">Hello, Nuworks!</p>
      </div>
    </div>
  );
};

export default Greeting;
