// Component : Banner

import Image from "next/image";
import { useState, useEffect } from "react";

import { useRecoilState } from "recoil";

import type { Movie } from "../types/movie";

import { modalState, movieState } from "../atoms/modalAtom";

import { IMAGE_BASE_URL } from "../constants/movie-constants";

interface originalsType {
  originals: Movie[];
}

const Banner = ({ originals }: originalsType) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  const [showModal, setShowModal] = useRecoilState(modalState);

  useEffect(() => {
    setMovie(originals[Math.floor(Math.random() * originals.length)]);
  }, [originals]);

  return (
    <section className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <section className="absolute top-0 left-0 h-[95vh] -z-10 w-screen">
        <Image
          layout="fill"
          src={`${IMAGE_BASE_URL}${movie?.backdrop_path || movie?.poster_path}`}
          objectFit="cover"
          alt={movie?.title || movie?.name || movie?.original_name}
        />
      </section>
      <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>
      <section className="flex space-x-3">
        <button
          className="bannerButton bg-[gray]/70"
          onClick={() => {
            setCurrentMovie(movie);
            setShowModal(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 md:h-8 md:w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
          詳しく情報
        </button>
      </section>
    </section>
  );
};

export default Banner;
