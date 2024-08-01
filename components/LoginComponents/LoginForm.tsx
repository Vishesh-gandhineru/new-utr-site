"use client"
import React, { useEffect, useState } from 'react'
import PhoneInput from '../PhoneInput'
import { Button  } from 'antd'
import OtpInput from '../ui/OtpInput'
import { LoginWithOTP } from '@/serverAction/authAPI'
import useSWR from 'swr'


const LoginForm = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isLoading , setIsLoading] = useState(false);
    const [phoneNumber , setPhoneNumber] = useState<string | undefined>('')
    const [countryCode, setCountryCode] = useState<string | undefined>("+91");
    const [showLogin, setShowLogin] = useState<boolean>(true);

    const handleLogin = async () => {      
      setIsFormSubmitted(true)
      setIsLoading(true)      
        const response = await LoginWithOTP({
          "phone": phoneNumber,
          "countryCode": countryCode,
          "role": "user"
      })
      if (response.status === 200) {
        setIsLoading(false)
      }
    }

    useEffect(() => {
      if (phoneNumber?.length === 10) {
        setShowLogin(false)
      } else {
        setShowLogin(true)
      }
    }, [phoneNumber])
  

  return (
    <div>
      <div className='flex flex-row gap-8'>
        <PhoneInput setPhoneNumber={setPhoneNumber} setCountryCode={setCountryCode} isDisable={isFormSubmitted}/>
        <Button onClick={handleLogin} disabled={showLogin}>Login</Button>
      </div>
      <div className='mt-5'>
        {isFormSubmitted && <OtpInput phoneNumber={phoneNumber} countryCode={countryCode} />}
      </div>
    </div>
  )
}

export default LoginForm