import React, { useState, useEffect } from 'react'

import axios from "../api/axios"

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchURL }) {

    const [movies, setMovies] = useState([])

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchURL)
            setMovies(request.data.results)
            return request
        }

        fetchData()
        
    }, [fetchURL])

    console.table(movies)

    return (
        <div className="row">
            <h2>{ title }</h2>

            <div className="row__posters">
                { movies.map(movie => (
                    <img className="row__poster" src={ `${ BASE_IMAGE_URL }${ movie.poster_path }` } alt={ movie.name } />
                )) }
            </div>
        </div>
    )
}

export default Row
