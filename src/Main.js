import React from 'react'
import Specials from './Specials'
import Hero from './Hero'
import CustomersSay from './CustomersSay'
import Chicago from './Chicago'

export default function Main() {
    return (
    <main id='main'>
        <Hero />
        <Specials />
        <CustomersSay />
        <Chicago />
    </main>
    )
}