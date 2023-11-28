import React from 'react'
import logo from './icons_assets/Logo.svg'


export default function Footer() {
    return (
    <footer style={{backgroundColor: 'lightyellow'}} id='footer'>
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

    <div>
        <h3>Contact</h3>
        <h6>Adress</h6>
        <h6>Phone number</h6>
        <h6>Email</h6>
    </div>

    <div>
        <h3>Social Media Links</h3>
        <ul>
            <li>
        <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>Facebook</a>
        </li>
        <li>
        <a href='https://www.x.com' target='_blank' rel='noopener noreferrer'>Twitter(X)</a>
        </li>
        <li>
        <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>Instagram</a>
        </li>
        </ul>
    </div>
    </footer>
    )
}