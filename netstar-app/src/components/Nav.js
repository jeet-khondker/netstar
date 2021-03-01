import React, { useState, useEffect } from 'react'

import "../styles/Nav.css"

import SearchMovie from './SearchMovie'

function Nav() {

    const [show, handleShow] = useState(false)

    // Window Scrolling Effect
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])

    return (
        <div className={`nav ${ show && "nav__black" }`}>
            <img className="nav__logo" src={ process.env.PUBLIC_URL + '/netstar.png' } alt="NetStar" />

            <SearchMovie />
        </div>
        
    )
}

export default Nav
