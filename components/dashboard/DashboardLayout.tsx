"use client"

import React, { useEffect, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, MenuProps, theme } from 'antd';
import { CalendarCheck , User2Icon , SettingsIcon , HelpCircle , LogOutIcon  } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import path from 'path';
import {motion} from 'framer-motion';


const { Header, Sider, Content } = Layout;

type DashboardLayoutProps = {
  children: React.ReactNode;
};


const DashboardLayout = ({children } : DashboardLayoutProps) => {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false);
  const {token: { colorBgContainer, borderRadiusLG },} = theme.useToken();
  const [current, setCurrent] = useState<string>('1');
 

  useEffect(() => {
    if (pathname === '/dashboard') {
      setCurrent('1');
    }
    if (pathname === '/dashboard/bookings') {
      setCurrent('2');
    }
    if (pathname === '/dashboard/support') {
      setCurrent('3');
    }
    if (pathname === '/dashboard/settings') {
      setCurrent('4');

   }
    if (pathname === '/dashboard/logout') {
      setCurrent('5');
    }
  }, [pathname]);


  return (
    <Layout className='w-full h-full'>
      <Sider trigger={null} collapsible collapsed={collapsed} >
        <div className="demo-logo-vertical" />
  <div className='flex flex-col h-full justify-between py-8'>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys = {['1']}
          selectedKeys={[current]}
          items={[
            {
              key: '1',
              icon: <User2Icon />,
              label: <Link href="/dashboard">Dashborad</Link>,
            },
            {
              type: 'divider',
            },
            {
              key: '2',
              icon: <CalendarCheck />,
              label: <Link href="/dashboard//bookings">My Bookings</Link>,
            },
            {
              key: '3',
              icon: <HelpCircle />,
              label: <Link href="/dashboard/support">Support</Link>,
            },
            {
              key: '4',
              icon: <SettingsIcon />,
              label: <Link href="/dashboard//settings">Settings</Link>,
            },
          ]}
        />
        <Menu
          theme="dark"
          mode="inline"
          items={[
            {
              key: '5',
              icon: <LogOutIcon />,
              label: <Link href="#">Logout</Link>,
            }
          ]}
        />

  </div>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
         {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;