import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
            <div className='navbar-brand'>
                GitHub Search
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink exact className="nav-link" to="/">Главная</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">Информация</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar