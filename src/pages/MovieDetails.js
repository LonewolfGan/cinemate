import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const MovieDetails = () => {
  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${process.env.REACT_APP_API_KEY}`;
  const { movie } = useFetch({ url });
  const title = movie.title;
  useTitle({ title });

  return (
    <main className="dark:bg-gray-800">
      {!movie.poster_path ? (
        <div className="text-3xl text-gray-700 dark:text-white text-center pt-10 font-bold leading-10">
          Loading...
        </div>
      ) : (
        <section className="max-w-7xl mx-auto py-7">
          <div className="flex justify-between flex-col md:flex-row m-5 w-full gap-20">
            <div className="mx-auto">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt=""
                className=" w-80 ml-0 sm:w-[500px] h-auto object-cover rounded-lg"
              />
            </div>

            <div className=" w-[80%] lg:w-[50%] dark:text-white">
              <h1 className="text-6xl font-bold  ">{movie.original_title}</h1>
              <p
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: "5",
                  WebkitBoxOrient: "vertical",
                }}
                className=" my-10 mr-10"
              >
                {movie.overview}
              </p>
              <div className="py-10">
                {movie.genres?.map((element) => (
                  <span
                    className="rounded-xl bg-gray-700 text-white p-3 mr-5 "
                    key={element.id}
                  >
                    {element.name}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-5">
                <p>
                  {movie.vote_average} - {movie.vote_count} Reviews
                </p>
                <p>
                  <span className="font-bold">Runtime: </span>
                  {movie.runtime} min
                </p>
                <p>
                  <span className="font-bold">Budget: </span>
                  {movie.budget}
                </p>
                <p>
                  <span className="font-bold">Revenue: </span>
                  {movie.revenue}
                </p>
                <p>
                  <span className="font-bold">Release Date: </span>
                  {movie.release_date}
                </p>
                <p>
                  <span className="font-bold">IMDB Code: </span>
                  {movie.imdb_id}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};
