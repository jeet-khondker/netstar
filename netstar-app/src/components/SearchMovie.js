import React, { useState } from 'react'

import axios from "../api/axios"

import requests from "../api/requests"

import "../styles/SearchMovie.css"

import SearchResult from "./SearchResult"

function Search() {

    const [query, setQuery] = useState('')

    const [movies, setMovies] = useState([])

    const handleChange = event => {
        setQuery(event.target.value)
    }

    const handleKeyPress = event => {
        // Triggers after pressing the ENTER Key
        if (event.keyCode === 13) {
            searchMovie()
        }
    }

    const searchMovie = async (event) => {
        event.preventDefault()

        try {
            const request = await axios.get(`${ requests.searchMovie }${ query }`)
            setMovies(request.data.results)
            setQuery('')

        } catch(error) {
            console.error(error)
        }
    }

     

    return (
        <div>
            
            <div className="header">

                <div className="header__content">
                    <div className="header__title">
                        <h1>Search Movie</h1>
                    </div>

                    <form className="searchMovie__container" onSubmit={ searchMovie }>
                        <input className="movie__name" type="text" name="movie_name" placeholder="Movie Name" onChange={ handleChange } onKeyPress={ handleKeyPress } value={ query.name }></input>
                        <button className="searchBtn" type="submit">Search</button>
                    </form>
                </div>
                
                
            </div>

            

            <div className="search__results">
                
                { movies.filter(movie => movie.poster_path).map(movie => (
                    <SearchResult movie={ movie } key={ movie.id } />
                )) }
                
            </div>
            
        </div>
    )
}

export default Search
