"use client"

import { Select, Input, Button , Modal } from 'antd';
import { CloseOutlined, GoogleOutlined, AppleOutlined, MailOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import { useLoginCardOpen } from '@/context/useLoginCard';



export default function LoginCard() {
 
    const {isOpen , setIsOpen} = useLoginCardOpen();
  return (
    <Modal
    centered
    open={isOpen}
    closable={false}
    footer={null}
    onOk={() => setIsOpen(false)}
    onCancel={() => setIsOpen(false)}
    className='!p-8'
  >
    <div className="">
      <div className="mb-5 mt-3">
        <h2 className="text-3xl text-center font-medium text-green">Log in or sign up</h2>
      </div>

      <h3 className="text-xl text-center font-bold mb-6 text-black font-Switzer">Welcome to Under The Roof stays</h3>

      <div className="w-full">
       <LoginForm />
      </div>

      <div className="flex items-center my-4">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="flex-shrink mx-4 text-gray-600">or</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <div className="space-y-3">
        <Button icon={<GoogleOutlined />} className="w-full h-12 flex items-center justify-center border border-gray-300 hover:border-gray-400">
          <span className="ml-2">Continue with Google</span>
        </Button>
        <Button icon={<AppleOutlined />} className="w-full h-12 flex items-center justify-center border border-gray-300 hover:border-gray-400">
          <span className="ml-2">Continue with Apple</span>
        </Button>
        <Button icon={<MailOutlined />} className="w-full h-12 flex items-center justify-center border border-gray-300 hover:border-gray-400">
          <span className="ml-2">Continue with email</span>
        </Button>
      </div>
    </div>
  </Modal>
  );
}