import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BackUp from "../assets/logo512.jpg";
import { useTitle } from "../hooks/useTitle";

export const MovieDetail = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : BackUp;

  useTitle(movie.title);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=ff1dd295f7f975f6f1766ede716ea8db`
      );
      const json = await response.json();
      setMovie(json);
    };
    fetchMovies();
  }, [params.id]);

  return (
    <main>
      <section className="flex justify-evenly flex-wrap py-20">
        <div className="max-w-60 py-7 sm:max-w-sm">
          <img className="rounded-lg" src={image} alt={movie.title} />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white mx-5 ml-10">
          <h1 className="text-2xl sm:text-4xl font-bold py-7 text-center lg:text-left">
            {movie.title}
          </h1>
          <p className="my-4 text-sm sm:text-lg">{movie.overview}</p>

          {movie.genres ? (
            <p className="flex gap-2 flex-wrap my-7">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="mr-2 border border-gray-200 rounded p-0.5 sm:p-2 dark:border-gray-600"
                >
                  {genre.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}

          <div className="flex items-center  text-gray-700">
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 font-medium sm:font-bold dark:text-white">
              {movie.vote_average}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <Link
              to="#"
              className=" font-light sm:font-medium    dark:text-white"
            >
              {movie.vote_count} review
            </Link>
          </div>
          <p className="my-4">
            <span className="mr-2 font-medium sm:font-bold">Runtime: </span>
            <span className="font-light sm:font-normal">{movie.runtime} min</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-medium sm:font-bold">Budget: </span>
            <span className="font-light sm:font-normal">{movie.budget}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-medium sm:font-bold">Revenue: </span>
            <span className="font-light sm:font-normal">{movie.revenue}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-medium sm:font-bold">Release Date: </span>
            <span className="font-light sm:font-normal">{movie.release_date}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-medium sm:font-bold">IMDB Code:</span>
            <a className="font-light sm:font-normal" href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noreferrer">{movie.imdb_id}</a>
          </p>
        </div>
      </section>
    </main>
  );
};
