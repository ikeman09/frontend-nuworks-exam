import { FC } from 'react';
import Greeting from '@components/Greeting';
import Search from '@components/Search';
import Tab from '@components/Tab';
import Tasks from '@components/Tasks';
import CalendarIcon from '@assets/images/CalendarIcon.svg';

import * as Tabs from '@radix-ui/react-tabs';
const LeftTab: FC = () => {
  return (
    <Tabs.Root defaultValue="tasks" className="h-full">
      <div className="h-full flex flex-row">
        <div className="bg-side h-screen w-1/3 max-w-[345px] ">
          <div className="mt-20 ml-8">
            <Greeting />
            <Search />
            <Tabs.List className="flex flex-col ml-4 mt-5">
              <Tabs.Trigger value="tasks">
                <Tab icon={CalendarIcon} alt="Calendar Icon">
                  Tasks
                </Tab>
              </Tabs.Trigger>
              {/*<Tabs.Trigger value="trash">*/}
              {/*  <Tab icon={TrashIcon} alt="Trash Icon">*/}
              {/*    Trash*/}
              {/*  </Tab>*/}
              {/*</Tabs.Trigger>*/}
            </Tabs.List>
          </div>
        </div>
        <Tabs.Content className="h-full w-full" value="tasks">
          <Tasks />
        </Tabs.Content>
        {/*<Tabs.Content className="h-full w-full" value="trash">*/}
        {/*  <p>This is the trash content</p>*/}
        {/*</Tabs.Content>*/}
      </div>
    </Tabs.Root>
  );
};

export default LeftTab;
