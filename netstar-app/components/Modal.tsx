import { useState, useEffect } from "react";

import MuiModal from "@mui/material/modal";

import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";

import ReactPlayer from "react-player/lazy";
import Image from "next/image";
import type { Genre, Element } from "../types/movie";

import { BASE_URL, IMAGE_BASE_URL } from "../constants/movie-constants";
import { API_KEY } from "../constants/api-constants";
import { LANGUAGE, APPEND_TO_RESPONSE } from "../constants/fetch-constants";
import { YOUTUBE_VIDEO_WATCH_BASE_URL } from "../constants/youtube-constants";

const Modal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movie, setMovie] = useRecoilState(movieState);
  const [trailer, setTrailer] = useState("");
  const [genres, setGenres] = useState<Genre[]>([]);
  const [muted, setMuted] = useState(false);
  const [addedToList, setAddedToList] = useState(false);

  useEffect(() => {
    if (!movie) return;

    async function fetchMovie() {
      const data = await fetch(
        `${BASE_URL}${movie?.media_type === "tv" ? "tv" : "movie"}/${
          movie?.id
        }?api_key=${API_KEY}&language=${LANGUAGE}&append_to_response=${APPEND_TO_RESPONSE}`
      ).then((response) => response.json());

      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (element: Element) =>
            element.type === "Trailer" ||
            "Bloopers" ||
            "Featurette" ||
            "Behind the Scenes" ||
            "Clip" ||
            "Teaser"
        );

        setTrailer(data.videos?.results[index]?.key);
      }
      if (data?.genres) {
        setGenres(data.genres);
      }
    }

    fetchMovie();
  }, [movie]);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
    >
      <section>
        <button
          onClick={handleClose}
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#ff0000] hover:bg-[#ff0000]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <section className="relative pt-[56.25%]">
          {trailer ? (
            <ReactPlayer
              url={`${YOUTUBE_VIDEO_WATCH_BASE_URL}${trailer}`}
              width="100%"
              height="100%"
              style={{ position: "absolute", top: "0", left: "0" }}
              playing
              muted={muted}
            />
          ) : (
            <Image
              layout="fill"
              src={`${IMAGE_BASE_URL}${
                movie?.backdrop_path || movie?.poster_path
              }`}
              objectFit="cover"
              alt={movie?.title || movie?.name || movie?.original_name}
            />
          )}

          <section className="absolute bottom-10 flex w-full items-center justify-between px-10">
            <button className="modalButton" onClick={() => setMuted(!muted)}>
              {muted ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                  />
                </svg>
              )}
            </button>
          </section>
        </section>
        <section className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8">
          <section className="space-y-6 text-lg">
            <section className="flex items-center space-x-2 text-sm">
              <p
                className={`font-semibold ${
                  movie!.vote_average * 10 > 50
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {movie!.vote_average * 10}% マッチ
              </p>
              <p className="font-light">
                {movie?.release_date?.slice(0, 4) ||
                  movie?.first_air_date?.slice(0, 4)}
                年
                {movie?.release_date?.slice(5, 7) ||
                  movie?.first_air_date?.slice(5, 7)}
                月
                {movie?.release_date?.slice(8) ||
                  movie?.first_air_date?.slice(8)}
                日
              </p>
              <section className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs bg-[#DE9435] text-black">
                HD
              </section>
              <section className="inline-flex items-center absolute right-10 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#DE9435"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>{movie?.vote_count}</p>
              </section>
            </section>
            <section className="inline-flex gap-1 space-x-2 text-xs">
              {genres.map((genre) => (
                <p
                  className="border border-white rounded-xl px-1.5 flex items-center bg-black text-white uppercase"
                  key={genre.id}
                >
                  {genre.name}
                </p>
              ))}
            </section>
            <section className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
              <h1 className="text-xl md:text-2xl lg:text-5xl font-bold">
                {movie?.title || movie?.name || movie?.original_name}
              </h1>
            </section>
            <section className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
              <p>{movie?.overview}</p>
            </section>
          </section>
        </section>
      </section>
    </MuiModal>
  );
};

export default Modal;
