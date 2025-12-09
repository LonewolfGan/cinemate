import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetails, Search, PageNotFound } from "../pages/index";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<MovieList title="Home" apiPath="/discover/movie" />}
        />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route
          path="/movies/popular"
          element={<MovieList title="Popular" apiPath="/movie/popular" />}
        />
        <Route
          path="/movies/top"
          element={<MovieList title="Top" apiPath="/movie/top_rated" />}
        />
        <Route
          path="/movies/upcoming"
          element={<MovieList title="Upcoming" apiPath="/movie/upcoming" />}
        />
        <Route path="/search" element={<Search apiPath="/search" />} />
        <Route path="*" element={<PageNotFound title="Page Not Found" />} />
      </Routes>
    </>
  );
};
