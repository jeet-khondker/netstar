import React, { useState, useEffect } from 'react'

import axios from "../api/axios"

import "../styles/Row.css"

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchURL, isLargeRow }) {

    const [movies, setMovies] = useState([])

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchURL)
            setMovies(request.data.results)
            return request
        }

        fetchData()
        
    }, [fetchURL])

    return (
        <div className="row">
            <h2>{ title }</h2>

            <div className="row__posters">
                { movies.filter(movie => movie.poster_path).map(movie => (
                    <img 
                        key={ movie.id } 
                        className={`row__poster ${ isLargeRow && "row__posterLarge" }`} 
                        src={ `${ BASE_IMAGE_URL }${ isLargeRow ? movie.poster_path : movie.backdrop_path }` } 
                        alt={ movie.name } 
                    />
                )) }
            </div>
        </div>
    )
}

export default Row
