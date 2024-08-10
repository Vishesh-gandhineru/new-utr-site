import CheckoutForm from '@/components/CheckoutComponent/CheckoutForm'
import React from 'react'

const CheckoutPage = () => {
  return (
    <main>
        <section className="container">
            <h1 className="text-2xl">Checkout Page</h1>
        </section>
        <section className="container">
        <CheckoutForm />    
        </section>    
    </main>
  )
}

export default CheckoutPage