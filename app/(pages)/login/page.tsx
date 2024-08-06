import LoginForm from '@/components/LoginComponents/LoginForm'
import React from 'react'

const LoginPage = () => {
  return (
    <main className='gird place-content-center h-screen w-screen'>
    <section className="container w-fit space-y-5">
        <h1 className='text-3xl'>Login page</h1>
        <LoginForm />
    </section>
        
        </main>
  )
}

export default LoginPage