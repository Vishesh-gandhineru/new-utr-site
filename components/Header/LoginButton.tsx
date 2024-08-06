"use client"

import { Button } from 'antd'
import React, { useEffect } from 'react'
import useAuthStore from '@/context/useAuthStore' // Import the AuthStore type

const LoginButton = () => {
    const {checkAuth , loading , userAuth} = useAuthStore();

    useEffect(() => {
        checkAuth();
      }, [checkAuth]);

    return (
        <div>
            {userAuth ? <Button type="primary" className=' uppercase' href='/dashboard'>dashboard</Button> : "signup" }
        </div>
    )
}

export default LoginButton