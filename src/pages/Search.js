import { useFetch } from "../hooks/useFetch";
import { Card } from "../components/Card";
import { useSearchParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${process.env.REACT_APP_API_KEY}`;
  const { movies, loading } = useFetch({ url });
  const title = `results for ${query}`;
  useTitle({ title });

  return (
    <main className="dark:bg-gray-800">
      {loading ? (
        <p className="text-3xl text-gray-700 dark:text-white text-center pt-10 font-bold leading-10">
          Loading...
        </p>
      ) : (
        <>
          <section>
            <p className="text-3xl text-gray-700 dark:text-white text-center pt-10 font-bold leading-10">
              {movies.length > 0
                ? `Results for ${query}`
                : `No Results for ${query}`}
            </p>
          </section>

          <section className="max-w-7xl mx-auto py-7">
            <div className="flex justify-center flex-wrap">
              {movies.map((movie) => (
                <Card key={movie.id} movie={movie} />
              ))}
            </div>
          </section>
        </>
      )}
    </main>
  );
};
