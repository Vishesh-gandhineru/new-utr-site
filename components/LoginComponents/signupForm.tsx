"use client"

import React, { useEffect } from 'react';
import { Alert, Button, Form, Input } from 'antd';
import PhoneInput from '../PhoneInput';
import { LoaderIcon } from 'lucide-react';
import OtpInput from '../ui/OtpInput';
import { GenerateOTPForRegister, VerifyOTPForRegister } from '@/serverAction/authAPI';

const Signupform: React.FC = () => {
    
    const [phoneNumber, setPhoneNumber] = React.useState<string | undefined>('');
    const [countryCode, setCountryCode] = React.useState<string | undefined>('+91');
    const [isFormSubmitted, setIsFormSubmitted] = React.useState<boolean>(false);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [ShowRegisterbutton, setShowRegisterbutton] = React.useState<boolean>(true);
    const [ErrorMessage, setErrorMessage] = React.useState<string | undefined>('');
    
    const handleRegisterUser = async (values: any) => {
      setErrorMessage("")
        const RegistertionData = {...values, phone: phoneNumber, countryCode: countryCode};
        setIsLoading(true);
        console.log(RegistertionData);
        const gentrateOTP = await GenerateOTPForRegister({"phone": phoneNumber, "countryCode": countryCode});
        console.log(gentrateOTP);
        if (gentrateOTP.statusCode === 200) {
            setIsFormSubmitted(true);
        }
        if(gentrateOTP.statusCode === 400){
            setErrorMessage(gentrateOTP.errors)
        }

        setIsLoading(false); 
    };
    

useEffect(() => {
    if (phoneNumber?.length === 10) {
        setShowRegisterbutton(false);
    } else {
        setShowRegisterbutton(true);
    }
}, [phoneNumber]);

    return(
    
  <Form name="trigger" layout="vertical" autoComplete="off" onFinish={handleRegisterUser}>
    
    <Form.Item
      hasFeedback
      label="First name"
      name="firstName"
      validateDebounce={1000}
      rules={[{ min: 3, message:"First name Must be least 3 characters" }, {
        required: true,
        message: 'Please input your First Name!',
      },]}>
      <Input placeholder="First Name" />
    </Form.Item>
    <Form.Item
      hasFeedback
      label="last name"
      name="lastName"
      validateDebounce={1000}
      rules={[{ min: 1 } , {
        required: true,
        message: 'Please input your Last Name',
      },]}>
      <Input placeholder="Last Name" />
    </Form.Item>
    <Form.Item
      hasFeedback
      label="Email"
      name="email"
      validateDebounce={1000}
      rules={[
        {
          type: 'email',
          message: 'The input is not valid E-mail!',
        },
        {
          required: true,
          message: 'Please input your E-mail!',
        },
      ]}>
      <Input  placeholder="Email" />
    </Form.Item>
    <div className='space-y-2 mb-5'>
        <h3>* Phone</h3>
    <PhoneInput setPhoneNumber={setPhoneNumber} setCountryCode={setCountryCode} isDisable={isFormSubmitted}/>

    <div className=''>
      {isLoading && <LoaderIcon className='animate-spin' />} 
      {ErrorMessage && <Alert message={ErrorMessage} type="error" showIcon />}
        {isFormSubmitted && <OtpInput phoneNumber={phoneNumber} countryCode={countryCode} registerOTP={true} loginOTP={false} />}
      </div>
    </div>
    <Form.Item>
        <Button type="primary" htmlType="submit" disabled={ShowRegisterbutton}>
          Register
        </Button>
      </Form.Item>
    
  </Form>
)};

export default Signupform;