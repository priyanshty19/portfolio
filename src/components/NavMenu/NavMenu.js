import React from 'react'
import '../NavMenu/navmenu.css'
import {NavLink} from 'react-router-dom'

export default function NavMenu() {
    return (
        <div>
            <ul className="nav">
                <li >
                    <NavLink to="/" className="navlink">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="navlink">About</NavLink>
                </li>
                <li>
                    <NavLink to="/projects" className="navlink">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="navlink">Contact</NavLink>
                </li>

            </ul>
        </div>
    )
}
