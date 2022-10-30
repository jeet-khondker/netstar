import Image from "next/image";
import { MovieDetailType } from "../types/movie";

import { THUMBNAIL_IMAGE_BASE_URL } from "../constants/movie-constants";

import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";

const Thumbnail = ({ movie }: MovieDetailType) => {
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  const [showModal, setShowModal] = useRecoilState(modalState);

  return (
    <section
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
      onClick={() => {
        setCurrentMovie(movie);
        setShowModal(true);
      }}
    >
      <Image
        src={`${THUMBNAIL_IMAGE_BASE_URL}${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
        alt="{movie.name}"
      />
    </section>
  );
};

export default Thumbnail;
