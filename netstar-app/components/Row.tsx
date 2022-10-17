import { useRef, useState } from "react";
import { MovieCategoryType } from "../types/movie";
import Thumbnail from "./Thumbnail";

const Row = ({ title, movies }: MovieCategoryType) => {
  const rowReference = useRef<HTMLDivElement>(null);
  const [isHorizontallyScrolled, setIsHorizontallyScrolled] = useState(false);

  const handleClick = (direction: string) => {
    setIsHorizontallyScrolled(true);

    if (rowReference.current) {
      const { scrollLeft, clientWidth } = rowReference.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowReference.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };
  return (
    <section className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl tracking-[.2rem]">
        {title}
      </h2>
      <section className="group relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`movieLeftRightScrollIcon left-2 ${
            !isHorizontallyScrolled && "hidden"
          }`}
          onClick={() => handleClick("left")}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <section
          ref={rowReference}
          className="flex scrollbar-hide items-center space-x-0.5 overflow-x-scroll md:space-x-2.5"
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </section>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="movieLeftRightScrollIcon right-2"
          onClick={() => handleClick("right")}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </section>
    </section>
  );
};

export default Row;
