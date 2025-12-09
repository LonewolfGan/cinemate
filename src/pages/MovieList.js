import { useFetch } from "../hooks/useFetch";
import { Card } from "../components/index";
import { useTitle } from "../hooks/useTitle";

export const MovieList = ({ title, apiPath }) => {
  const { movies } = useFetch({ apiPath });
  useTitle({ title });

  return (
    <main className="dark:bg-gray-800">
      {!movies ? (
        <div className="text-3xl text-gray-700 dark:text-white text-center pt-10 font-bold leading-10">
          Loading...
        </div>
      ) : (
        <section className="max-w-7xl mx-auto py-7">
          <div className="flex justify-center flex-wrap">
            {movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
};
