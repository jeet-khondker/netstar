import Image from "next/image";
import { MovieDetailType } from "../types/movie";

import { THUMBNAIL_IMAGE_BASE_URL } from "../constants/movie-constants";

const Thumbnail = ({ movie }: MovieDetailType) => {
  return (
    <section className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
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
