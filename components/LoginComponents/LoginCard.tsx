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
    className='!w-[450px] !p-0 !border'
  >
    <div className="">
      <div className="mb-5 mt-3">
        <h2 className="text-3xl text-center font-medium text-orange">Log in or Register</h2>
      </div>     
      <div className="w-full">
       <LoginForm />
      </div>

      <div className="flex items-center mt-8 mb-4">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="flex-shrink mx-4 text-gray">or</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <div className="space-y-3">
        <Button icon={<GoogleOutlined />} className="w-full !h-14 flex items-center justify-center border border-gray-300 hover:border-gray-400">
          <span className="ml-2">Continue with Google</span>
        </Button>
        <Button icon={<MailOutlined />} className="w-full !h-14 flex items-center justify-center border border-gray-300 hover:border-gray-400">
          <span className="ml-2">Continue with email</span>
        </Button>
      </div>
      <span className='text-[10px] text-gray'>Having trouble logging in? <u className='text-black'> Contact Us. </u></span>
    </div>
  </Modal>
  );
}