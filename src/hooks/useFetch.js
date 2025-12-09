import { useCallback, useEffect, useState } from "react";

export const useFetch = ({ url, apiPath }) => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  if (url) {
  } else {
    url = `https://api.themoviedb.org/3${apiPath}?api_key=${process.env.REACT_APP_API_KEY}`;
  }

  const fetchMovies = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setMovie(data || []);
      setMovies(data.results || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return { movies, movie, loading };
};
