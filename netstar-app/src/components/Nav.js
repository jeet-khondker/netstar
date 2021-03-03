import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

import Search from "./Search"

import "../styles/Nav.css"

function Nav() {

    const [show, handleShow] = useState(false)

    var scroll_function = () => {}

    // Window Scrolling Effect
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        })
        return () => {
            window.removeEventListener("scroll", scroll_function)
        }
    }, [])

    return (
        <div className={`nav ${ show && "nav__black" }`}>
            <Link to="/">
                <img className="nav__logo" src={ process.env.PUBLIC_URL + '/netstar.png' } alt="NetStar"/>
            </Link>

            <Link to="/searchMovie">
                <Search />
            </Link>
        </div>
    )
}

export default Nav
