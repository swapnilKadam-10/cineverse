import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { MovieCard, ScrollToTopButton } from "../components";


export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);

  useTitle(`Search Results for ${queryTerm}`);

  return (
    <main className="min-h-screen m-auto p-2 max-w-7xl">
      <section className="py-7 mt-20">
        <p className="text-4xl text-grey-700 dark:text-white">
          {movies.length === 0
            ? `No result found for "${queryTerm}"`
            : `Results for "${queryTerm}"`}
        </p>
      </section>
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
