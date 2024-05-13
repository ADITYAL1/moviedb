import React from "react";
import MovieCard from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./Pagination";
import { addSeCurPage, addSePrevPage } from "../utils/moviesSlice";

const Search = () => {
  const movies = useSelector((store) => store.movies.search);

  return (
    <div className=" h-screen sm:h-auto md:h-auto md:mt-2  md:ml-28 md:mr-6">
      <div className=" flex  flex-wrap">
        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            posterPath={movie.poster_path}
            title={movie.title}
            rating={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
