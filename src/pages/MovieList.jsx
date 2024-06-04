import { useTitle } from "../hooks/useTitle";
import { useFetch } from "../hooks/useFetch";
import { MovieCard } from "../components";
import { ScrollToTopButton } from "../components";

export const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);

  useTitle(title);

  return (
    <main className="min-h-screen m-auto p-2 py-20 max-w-7xl">
      <section className="mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <ScrollToTopButton />
      </section>
    </main>
  );
};
