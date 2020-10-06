import React from 'react'
import './Menu.css'
import {Link} from 'react-router-dom'

function Menu() {
    return (
        <div>
            <nav className = "nav-area">
                <h3>Menu</h3>
                <ul className = "nav-links">
                    <Link to = "/">
                        <li className = "trending">Trending</li>
                    </Link>
                    <Link to = "/search">
                        <li className = "search">Search</li>
                    </Link>
                    <Link to = "/upload">
                        <li className = "upload">Upload</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Menu
