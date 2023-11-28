import React from 'react'

export default function Nav() {
    return (
    <nav style={{backgroundColor: 'lightblue' }}>
        <ul>
            <li>
                <a href="#header">HOME</a>
            </li>
            <li>
                <a href="">ABOUT</a>
            </li>
            <li>
                <a href="#footer">MENU</a>
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
    )
}