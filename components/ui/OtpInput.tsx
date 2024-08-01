"use client";

import React, { useState } from "react";
import { Flex, Input, Typography } from "antd";
import type { GetProps } from "antd";
import { VerifyOTP } from "@/serverAction/authAPI";

type OTPProps = GetProps<typeof Input.OTP>;

const { Title } = Typography;

type OtpInputProps = {
  phoneNumber: string | undefined,
  countryCode: string | undefined
};

const OtpInput = ({phoneNumber , countryCode } : OtpInputProps) => {

  const [OTPChecking , setOTPChecking] = useState<boolean>(false);
  const onChange: OTPProps["onChange"] = async (text) => {
    console.log("onChange:", text);
    setOTPChecking(true);

    const verifyOTP = await VerifyOTP(
      {
        "phone": phoneNumber,
        "countryCode": countryCode,
        "otp": text,
        "role": "user"
    })
    if(verifyOTP.status === 200){
      console.log(verifyOTP)

    }
    setOTPChecking(false);


  };

  const sharedProps: OTPProps = {
    onChange,
  };

  return (
    <Flex gap="middle" align="flex-start" vertical>
      <Title level={5}>With formatter (Upcase)</Title>
      <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps} disabled={OTPChecking} />
    </Flex>
  );
};

export default OtpInput;
