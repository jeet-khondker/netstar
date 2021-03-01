import React, { useState, useEffect } from 'react'

import axios from "../api/axios"

import requests from "../api/requests"

import "../styles/Banner.css"

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original/"

function Banner() {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchOriginals)
            setMovie(
                request.data.results[
                    Math.floor(
                        Math.random() * request.data.results.length - 1
                    )
                ]
            )
        }

        fetchData()
    }, [])

    // Function : Truncate Long Text
    function truncateText(text, number) {
        return text?.length > number ? text.substr(0, number - 1) + "..." : text
    }

    return (
        <header 
            className="banner" 
            style={
                {
                    backgroundSize: "cover",
                    backgroundImage: `url("${ BASE_IMAGE_URL }${ movie?.backdrop_path }")`,
                    backgroundPosition: "center center",
                }
            }
        >
            <div className="banner__content">
                <h1 className="banner__title">
                    { movie?.title || movie?.name || movie?.original_name }
                </h1>

                <h1 className="banner__description">
                    { truncateText(movie?.overview, 150) }
                </h1>
            </div>

            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner
