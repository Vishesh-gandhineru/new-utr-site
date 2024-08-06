"use client";

import React, { useState } from "react";
import { Alert, Flex, Input, Typography } from "antd";
import type { GetProps } from "antd";
import { VerifyOTP, VerifyOTPForRegister } from "@/serverAction/authAPI";

type OTPProps = GetProps<typeof Input.OTP>;

const { Title } = Typography;

type OtpInputProps = {
  phoneNumber: string | undefined,
  countryCode: string | undefined,
  loginOTP: boolean,
  registerOTP: boolean,
  userInfo?: object
};

const  OtpInput = ({phoneNumber , countryCode, loginOTP , registerOTP,userInfo } : OtpInputProps) => {

  const [OTPChecking , setOTPChecking] = useState<boolean>(false);
  const [LoginSuccess , setLoginSuccess] = useState<boolean>(false);
  const [ErrorMessage , setErrorMessage] = useState<string | undefined>('');
  const onChange: OTPProps["onChange"] = async (text) => {
    setErrorMessage("")
    setOTPChecking(true);
    if (loginOTP === true) {
      const verifyOTP = await VerifyOTP(
        {
          "phone": phoneNumber,
          "countryCode": countryCode,
          "otp": text,
          "role": "user"
      })
      if(verifyOTP.statusCode === 200){
        console.log(verifyOTP , "verifyOTPFromLoginOTP")
        setLoginSuccess(true)
        setOTPChecking(false);  
      }
      if (verifyOTP.statusCode === 400){
        setOTPChecking(false);
        setErrorMessage(verifyOTP.errors)
      }
    
    }

    if (registerOTP === true) {
          const verifyRegisterOTP = await VerifyOTPForRegister({
            "phone": phoneNumber,
            "countryCode": countryCode,
            "otp": text,
            "email" : (userInfo as { email: string }).email,
            "firstName" : (userInfo as {firstName: string}).firstName,
            "lastName" :(userInfo as {lastName: string}).lastName,

        })
        if(verifyRegisterOTP.statusCode === 200){
          console.log(verifyRegisterOTP , "verifyOTPFromRegisterOTP")
          setLoginSuccess(true)
          setOTPChecking(false);
          
        }
      
        if(verifyRegisterOTP.statusCode === 400){
          setOTPChecking(false);
          setErrorMessage(verifyRegisterOTP.errors)
        }

      }
      


  };

  const sharedProps: OTPProps = {
    onChange,
  };

  return (
    <Flex gap="middle" align="flex-start" vertical>
      <Title level={5}>Please Enter OTP</Title>
      <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps} disabled={OTPChecking} />
      {ErrorMessage && <Alert message={ErrorMessage} type="error" showIcon />}
       {LoginSuccess && <p>OTP verified successfully, Redirecting to dashboard</p>}
    </Flex>
  );
};

export default OtpInput;
