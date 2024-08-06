"use client"

import React, { ReactNode, useState } from 'react';
import { Button, Layout, Menu, MenuProps } from 'antd';
import {
  HomeOutlined,
  CalendarOutlined,
  MessageOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import Link from 'next/link';


const { Content, Sider } = Layout;
import MainMenu from '../Header/Header';

const DashboardLayout = ({ children } : {children : ReactNode}) => {

  const menuItems = [
    { key: '/dashboard', icon: <HomeOutlined />, label: (
        <Link href="/dashboard">
          Dashboard
        </Link>
      ), },
    { key: '/dashboard/bookings', icon: <CalendarOutlined />, label: (
      <Link href="/dashboard/bookings">
      Bookings
    </Link>
      ), },
    { key: '/dashboard/support', icon: <MessageOutlined />, label: (
      <Link href="/dashboard/support">
      Support
    </Link>
      ), },
    { key: '/dashboard/settings', icon: <SettingOutlined />, label: (
      <Link href="/dashboard/settings">
      Setting
    </Link>
      ), },
      { key: 'logout', label: (
        <Button className='w-full' href="/dashboard/settings">
        Logout
      </Button>
        ), },
  ];

  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return (
    <main className='container'>
    <Layout style={{ minHeight: '100vh' }}>
      <Sider className="site-layout-background">
        <div className="logo" />
        <Menu
          mode="inline"
          selectedKeys={[current]}
          style={{ height: '100%', borderRight: 0, padding:0 }}
          onClick={onClick}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: '0px 30px', minHeight: 360 }}>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>

    </main>
  );
};

export default DashboardLayout;