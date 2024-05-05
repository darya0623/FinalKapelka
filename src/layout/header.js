import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../img/logo.svg'
import HeaderStyle from "./../layout/Layout.css"


export default function Header() {
    return (
        <header>

            <div className='navbar'>
                <img className='' src={logo} alt="error" />
                <Link to={""}>Табаки</Link>
                <Link to={""}>Миксы</Link>
                <Link to={""}>Лаунжи</Link>
                <Link to={""}>Магазины</Link>
                <Link to={""}>Карта</Link>
            </div>
        </header>
    )
}