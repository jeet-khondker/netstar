import React from 'react'

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/"

function SearchResult({ movie }) {

    // Function : Truncate Long Text
    function truncateText(text, number) {
        return text?.length > number ? text.substr(0, number - 1) + "..." : text
    }

    return (
        
        <div className="result">
            <img className="result__image" src={`${ BASE_IMAGE_URL }${ movie.poster_path }`} alt={ movie.name } />
            <div className="result__content">
                <h3 className="result__title">
                    { movie.title }
                </h3>
                <p><small>Released Date : { movie.release_date }</small></p>
                <p><small>Rating : { movie.vote_average }</small></p>
                <p className="result__description">{ truncateText(movie?.overview, 150) }</p>
            </div>
            
        </div>
        
    )
}

export default SearchResult
