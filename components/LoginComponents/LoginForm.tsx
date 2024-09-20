"use client"
import React, { useEffect, useState } from 'react'
import PhoneInput from '../PhoneInput'
import { Alert, Button, Spin  } from 'antd'
import OtpInput from '../ui/OtpInput'
import { LoginWithOTP } from '@/serverAction/authAPI'
import { LoaderIcon } from 'lucide-react'


const LoginForm = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isLoading , setIsLoading] = useState(false);
    const [phoneNumber , setPhoneNumber] = useState<string | undefined>('')
    const [countryCode, setCountryCode] = useState<string | undefined>("+91");
    const [showLogin, setShowLogin] = useState<boolean>(true);
    const  [ErrorMessage , setErrorMessage] = useState<string | undefined>('');
 
    const handleLogin = async () => {      
      setIsLoading(true)      
      
        const response = await LoginWithOTP({
          "phone": phoneNumber,
          "countryCode": countryCode,
          "role": "user"
      })
      if (response.statusCode === 200) {
        setIsFormSubmitted(true)
        setIsLoading(false)
      } if (response.statusCode === 400) {
        setIsLoading(false)
        setErrorMessage(response.errors)
      }
    }

    useEffect(() => {
      if (phoneNumber?.length === 10) {
        setShowLogin(false)
      } else {
        setShowLogin(true)
        setErrorMessage("")
      }
    }, [phoneNumber])
  

  return (
    <div>
      <div className=''>        
        <PhoneInput setPhoneNumber={setPhoneNumber} setCountryCode={setCountryCode} isDisable={isFormSubmitted}/>
        <span className='text-[10px] text-gray block mt-2'>By signing up, you agree to our <u className='text-black'>Terms & Conditions</u> and <u className='text-black'>Privacy Policy</u> </span>
      
        <Button className='!w-full !bg-green !text-white !h-[60px] !text-lg mt-5 !rounded-[10px] disabled:opacity-70 ' onClick={handleLogin} disabled={showLogin}>Send OTP</Button>
      </div>
      <div className='mt-5'>
      {isLoading && <LoaderIcon className='animate-spin' />} 
      {ErrorMessage && <Alert message={ErrorMessage} type="error" showIcon /> }
        {isFormSubmitted && <OtpInput phoneNumber={phoneNumber} countryCode={countryCode} registerOTP={false} loginOTP={true} />}
      </div>
    </div>
  )
}

export default LoginForm