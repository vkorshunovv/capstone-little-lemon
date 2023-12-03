import React from 'react'
import logo from './icons_assets/Logo.svg'


export default function Footer() {
    return (
    <footer id='footer'>
        <img  src={logo} width='200px' alt='Little Lemon logo' />

        <nav>
        <ul>
            <li>
                <a href="">HOME</a>
            </li>
            <li>
                <a href="">ABOUT</a>
            </li>
            <li>
                <a href="">MENU</a>
            </li>
            <li>
                <a href="">RESERVATIONS</a>
            </li>
            <li>
                <a href="">ORDER ONLINE</a>
            </li>
            <li>
                <a href="">LOGIN</a>
            </li>
        </ul>
    </nav>

    <div className='contact'>
        <h3>Contact Us</h3>
        <h6>Adress: <i>Chicago, 1st street, 16</i></h6>
        <h6>Phone number: <i>773-697-4961</i> </h6>
        <h6>Email: <i>llrestaurant@gmail.com</i></h6>
    </div>

    <div className='socialMedia'>
        <h3>Social Media Links</h3>
        <ul>
            <li>
        <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>Facebook</a>
        </li>
        <li>
        <a href='https://www.x.com' target='_blank' rel='noopener noreferrer'>Twitter (X)</a>
        </li>
        <li>
        <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>Instagram</a>
        </li>
        </ul>
    </div>
    </footer>
    )
}