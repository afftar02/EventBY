import { useState } from 'react';

import Tag from 'components/Tag';

import { TabsContainer } from './styled';
import { Tab } from './types';

const TABS: Tab[] = [
  {
    value: 'Все',
  },
  {
    value: 'Мои',
  },
];

function TabsBlock() {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);

  return (
    <TabsContainer>
      {TABS.map(({ value }, index) => (
        <Tag
          value={value}
          key={index}
          selected={index === selectedTabIndex}
          onClick={() => setSelectedTabIndex(index)}
        />
      ))}
    </TabsContainer>
  );
}

export default TabsBlock;
