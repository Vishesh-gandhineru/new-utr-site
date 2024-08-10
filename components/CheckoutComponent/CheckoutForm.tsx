"use client"

import React from 'react';
import { Form, Input, Button, Select, DatePicker } from 'antd';


const { Option } = Select;

const CheckoutForm: React.FC = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log('Form values:', values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      initialValues={{
        surName: 'Jhadi',
        titleCode: 'male',
        firstName: 'Vishesh Jhadi',
        countryCode: 'us',
        language: 'en',
        zipCode: '638316',
        houseNumber: '12',
        street: 'test',
        place: 'test',
        stateProv: 'test',
        phoneNumber: '6281510860',
        email: 'visheshjhadi@gmail.com',
        dateOfBirth: '',
      }}
    >
      <Form.Item
        label="Surname"
        name="surName"
        rules={[{ required: true, message: 'Please enter your surname' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Title"
        name="titleCode"
        rules={[{ required: true, message: 'Please select your title' }]}
      >
        <Select>
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="family">Family</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="First Name"
        name="firstName"
        rules={[{ required: true, message: 'Please enter your first name' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Country Code"
        name="countryCode"
        rules={[{ required: true, message: 'Please select your country code' }]}
      >
        <Select>
          <Option value="us">US</Option>
          <Option value="in">IN</Option>
          <Option value="uk">UK</Option>
          {/* Add more options as needed */}
        </Select>
      </Form.Item>

      <Form.Item
        label="Language"
        name="language"
        rules={[{ required: true, message: 'Please enter your language' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Zip Code"
        name="zipCode"
        rules={[{ required: true, message: 'Please enter your zip code' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="House Number"
        name="houseNumber"
        rules={[{ required: true, message: 'Please enter your house number' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Street"
        name="street"
        rules={[{ required: true, message: 'Please enter your street' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Place"
        name="place"
        rules={[{ required: true, message: 'Please enter your place' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="State/Province"
        name="stateProv"
        rules={[{ required: true, message: 'Please enter your state or province' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone Number"
        name="phoneNumber"
        rules={[{ required: true, message: 'Please enter your phone number' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Date of Birth"
        name="dateOfBirth"
      >
        <DatePicker format="YYYY-MM-DD" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CheckoutForm;
