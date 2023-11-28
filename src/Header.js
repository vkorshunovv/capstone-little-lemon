import React from 'react'
import logo from './icons_assets/Logo .svg'

export default function Header() {
    return (
         <header style={{backgroundColor: 'lightgreen'}} id='header'>
                <img src={logo} width="200px" alt='Little Lemon logo'/>
         </header>
    )
}