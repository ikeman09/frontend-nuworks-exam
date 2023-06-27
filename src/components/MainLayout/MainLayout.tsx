import { FC } from 'react';
import LeftTab from '@components/LeftTab';

const MainLayout: FC = () => {
  console.log('MainLayout is rendering');
  return (
    <div className="bg-midnight w-full h-full text-text">
      <LeftTab />
    </div>
  );
};

export default MainLayout;
