'use client';
import React, { ReactNode, useEffect, useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu, Dropdown } from 'antd';
import Image from 'next/image';
import { signIn, signOut, useSession, getProviders, ClientSafeProvider, LiteralUnion } from 'next-auth/react';
import { FontAwesomeIcon } from '@node_modules/@fortawesome/react-fontawesome';
import '../lib/fontawesome';
import Link from '@node_modules/next/link';
import { BuiltInProviderType } from '@node_modules/next-auth/providers';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

type CustomMenuItem = {
  label: string | React.ReactElement;
  key?: string;
  icon?: ReactNode;
  permission?: string;
  children?: MenuItem[];
  title?: string;
  visible?: string | boolean;
  path?: string;
  id?: number;
  type?: string;
};
type UserProfile = {
  name: string;
  email: string;
  phone: string;
  avatar?: string;
};

type MenuItem = Required<MenuProps>['items'][number] & CustomMenuItem;
{
  /* <Image src="/zxca" /> */
}
const items: MenuItem[] = [
  {
    label: (
      <Link href="/">
        <Image
          src="/assets/images/logo.svg"
          alt="Trang dang tinh bat dong san"
          width={160}
          height={48}></Image>{' '}
      </Link>
    ),
    key: 'logo',
    visible: 'true',
    className: 'logo-home-page border-0',
  },
  {
    label: <Link href="/home">Navigation One</Link>,
    key: 'mail',
    visible: 'true',
    className: 'border-0',
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    children: [
      {
        type: 'group',
        label: 'Item 1',
        key: 'group1',
        children: [
          { label: <Link href="/setting/1">Option 1</Link>, key: 'setting:1', visible: 'true' },
          { label: <Link href="/setting/2">Option 2</Link>, key: 'setting:2', visible: 'true' },
        ],
        visible: 'true',
      },
      {
        type: 'group',
        label: 'Item 2',
        key: 'group2',
        children: [
          { label: <Link href="/setting/3">Option 3</Link>, key: 'setting:3', visible: 'true' },
          { label: <Link href="/setting/4">Option 4</Link>, key: 'setting:4', visible: 'true' },
        ],
        visible: 'true',
      },
    ],
    visible: 'true',
    className: 'border-0',
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
    visible: 'true',
    className: 'border-0',
  },
];

// const userDropdownMenu: MenuItem[] = [
//   {
//     label: 'User',
//     key: 'user',
//     icon: <FontAwesomeIcon icon={['fas', 'user']} />,
//     visible: 'true',
//     children: [
//       {
//         label: 'Profile',
//         key: 'profile',
//         icon: <FontAwesomeIcon icon={['fas', 'user']} />,
//         visible: 'true',
//       },
//     ],
//   },
// ];

const renderMenuItems = (
  items: MenuItem[],
  session: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null = null
): MenuItem[] => {
  return items
    .filter((item) => item.visible === 'true') // chỉ render những item có visible === true
    .map((item) => {
      if (item.children && item.children.length > 0) {
        return {
          ...item,
          children: renderMenuItems(item.children, session),
        };
      }
      return item;
    });
};

const NavbarComponent = () => {
  const isUserLogin = false;
  const userDropdownMenu: MenuItem[] = [];
  const [current, setCurrent] = useState('mail');
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);
  useEffect(() => {
    const checkLoginProvider = async () => {
      const res = await getProviders();
      setProviders(res);
      if (res) {
        setUserProfile({
          name: 'vudepzai',
          email: 'depzai@gmail.com',
          phone: '0123456789',
        });
      }
    };
    checkLoginProvider();
  }, []);

  useEffect(() => {
    if (userProfile) {
      const children = [
        {
          label: 'Profile',
          key: 'profile',
          icon: <FontAwesomeIcon icon={['fas', 'user']} />,
          visible: 'true',
        },
        {
          label: 'Setting',
          key: 'setting',
          icon: <FontAwesomeIcon icon={['fas', 'user']} />,
          visible: 'true',
        },
        {
          label: 'Logout',
          key: 'logout',
          icon: <FontAwesomeIcon icon={['fas', 'user']} />,
          visible: 'true',
        },
      ];

      const userMenuItem = {
        label: userProfile.name,
        key: 'user-info',
        icon: <FontAwesomeIcon icon={['fas', 'user']} />,
        children,
      };
      userDropdownMenu.push(userMenuItem);
    }
  }, [userProfile]);
  if (!items || (items.length === 0 && typeof window === 'undefined')) {
    return <></>;
  }
  return (
    <div className="menu-client">
      <Menu
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        className="main-menu flex-grow-1 border-0"
      />
      {providers ? (
        <Dropdown overlay={<Menu items={userDropdownMenu} />}>
          <a
            onClick={(e) => e.preventDefault()}
            className="ant-dropdown-link"
            style={{ marginLeft: 'auto' }}>
            {userProfile?.name || 'Login'}
          </a>
        </Dropdown>
      ) : (
        <Link
          href="/api/auth/signin"
          className="ant-dropdown-link">
          Login
        </Link>
      )}
    </div>
  );
};

export default NavbarComponent;
