import { useState } from 'react';

import Tag from 'components/Tag';

import AllEvents from './ui/AllEvents';
import MyEvents from './ui/MyEvents';
import { TabsContainer } from './styled';
import { Tab } from './types';

const TabTypes = {
  all: 'all',
  my: 'my',
};

const TABS: Tab[] = [
  {
    type: TabTypes.all,
    value: 'Все',
  },
  {
    type: TabTypes.my,
    value: 'Мои',
  },
];

function TabsBlock() {
  const [selectedTab, setSelectedTab] = useState<string>(TabTypes.all);

  return (
    <>
      <TabsContainer>
        {TABS.map(({ value, type }, index) => (
          <Tag
            value={value}
            key={index}
            selected={type === selectedTab}
            onClick={() => setSelectedTab(type)}
          />
        ))}
      </TabsContainer>
      {selectedTab === TabTypes.all && <AllEvents />}
      {selectedTab === TabTypes.my && <MyEvents />}
    </>
  );
}

export default TabsBlock;
