import React from 'react'
import { useHistory } from 'react-router-dom'

import "../styles/Search.css"

function Search() {

    const history = useHistory()

    function handleClick() {
        history.push("/searchMovie")
    }

    return (
        <div className="search__container">
            <button className="button" onClick={ handleClick }>Search</button>
        </div>
    )
}

export default Search
