'use client';
import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { FontAwesomeIcon } from '@node_modules/@fortawesome/react-fontawesome';
import '../lib/fontawesome';
type MenuItem = Required<MenuProps>['items'][number] & { permission?: string };

const items: MenuItem[] = [
  {
    label: 'Navigation One',
    key: 'mail',
    icon: <FontAwesomeIcon icon={['fas', 'home']} />,
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <FontAwesomeIcon icon={['fas', 'home']} />,
    disabled: true,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <FontAwesomeIcon icon={['fas', 'home']} />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          { label: 'Option 1', key: 'setting:1' },
          { label: 'Option 2', key: 'setting:2' },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          { label: 'Option 3', key: 'setting:3' },
          { label: 'Option 4', key: 'setting:4' },
        ],
      },
    ],
  },
  {
    key: 'alipay',
    label: (
      <a
        href="https://ant.design"
        target="_blank"
        rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
  },
];

const NavbarComponent = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default NavbarComponent;
