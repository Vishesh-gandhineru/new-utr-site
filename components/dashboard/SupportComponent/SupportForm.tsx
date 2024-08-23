"use client"
import React from 'react';
import { Form, Input, Select, Button, message } from 'antd';
import type { FormInstance } from 'antd/es/form';

const { Option } = Select;
const { TextArea } = Input;

interface SupportFormValues {
  name: string;
  email: string;
  bookingId?: string;
  category: string;
  message: string;
}

const SupportForm: React.FC = () => {
  const [form] = Form.useForm<SupportFormValues>();

  const onFinish = (values: SupportFormValues) => {
    console.log('Form values:', values);
    message.success('Support request submitted successfully!');
    form.resetFields();
  };

  return (
    <div className="w-full  bg-white rounded-lg">
      <Form<SupportFormValues>
        form={form}
        name="supportForm"
        onFinish={onFinish}
        layout="vertical"
        className="space-y-4"
      >
        <Form.Item
          name="name"
          label="Full Name"
          rules={[{ required: true, message: 'Please enter your full name' }]}
        >
          <Input className="w-full" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' }
          ]}
        >
          <Input className="w-full" />
        </Form.Item>

        <Form.Item
          name="bookingId"
          label="Booking ID (if applicable)"
        >
          <Input className="w-full" />
        </Form.Item>

        <Form.Item
          name="category"
          label="Issue Category"
          rules={[{ required: true, message: 'Please select an issue category' }]}
        >
          <Select className="w-full">
            <Option value="booking">Booking Issues</Option>
            <Option value="payment">Payment Problems</Option>
            <Option value="account">Account Management</Option>
            <Option value="property">Property Concerns</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="message"
          label="Description"
          rules={[{ required: true, message: 'Please describe your issue' }]}
        >
          <TextArea rows={4} className="w-full" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="bg-blue-500 hover:bg-blue-600 w-full">
            Submit Support Request
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SupportForm;