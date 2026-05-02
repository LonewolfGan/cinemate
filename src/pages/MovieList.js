import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Card } from "../components/index";
import { useTitle } from "../hooks/useTitle";

const SECTION_LABELS = {
  Home: "Discover",
  Popular: "Most Popular",
  Top: "Top Rated",
  Upcoming: "Coming Soon",
};

const Loader = () => (
  <div className="flex items-center justify-center" style={{ minHeight: "70vh" }}>
    <div className="text-center space-y-4">
      <div className="relative w-14 h-14 mx-auto">
        <div className="absolute inset-0 rounded-full border border-[#dc2626] animate-ping opacity-30" />
        <div className="absolute inset-0 rounded-full border border-[#dc2626] opacity-60" />
        <div className="absolute inset-[14px] rounded-full bg-[#dc2626]" />
      </div>
      <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">Loading…</p>
    </div>
  </div>
);

export const MovieList = ({ title, apiPath }) => {
  const { movies, loading } = useFetch({ apiPath });
  useTitle({ title });

  const [genres, setGenres] = useState([]);
  const [activeGenre, setActiveGenre] = useState(null); // null = "All"

  // Fetch genre list from TMDB once
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((r) => r.json())
      .then((data) => setGenres(data.genres || []))
      .catch(() => {});
  }, []);

  // Reset filter when navigating between list pages
  useEffect(() => {
    setActiveGenre(null);
  }, [apiPath]);

  const label = SECTION_LABELS[title] || title;

  // The hero is always the first movie of the full list (ignores genre filter)
  const [hero, ...rest] = movies;

  // Filter the grid (rest) by selected genre
  const gridMovies = activeGenre
    ? rest.filter((m) => m.genre_ids?.includes(activeGenre))
    : rest;

  // Only show genres that actually appear in this list's results
  const presentGenreIds = new Set(rest.flatMap((m) => m.genre_ids || []));
  const filteredGenres = genres.filter((g) => presentGenreIds.has(g.id));

  if (loading) {
    return (
      <main style={{ minHeight: "90vh" }}>
        <Loader />
      </main>
    );
  }

  return (
    <main style={{ minHeight: "90vh" }}>
      {/* ── Hero ─────────────────────────────────────────── */}
      {hero && (
        <header className="relative w-full overflow-hidden" style={{ height: "85vh" }}>
          <div className="absolute top-0 left-0 right-0 h-5 bg-black z-20" />
          <div className="absolute bottom-0 left-0 right-0 h-5 bg-black z-20" />

          <div className="absolute inset-0">
            <img
              src={
                hero.backdrop_path
                  ? `https://image.tmdb.org/t/p/original${hero.backdrop_path}`
                  : `https://image.tmdb.org/t/p/original${hero.poster_path}`
              }
              alt={hero.original_title}
              className="w-full h-full object-cover opacity-50"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, #080808 0%, rgba(8,8,8,0.55) 50%, rgba(8,8,8,0.15) 100%)" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, #080808 0%, rgba(8,8,8,0.7) 45%, transparent 100%)" }}
            />
          </div>

          <div className="relative z-10 h-full flex flex-col justify-end px-6 lg:px-14 pb-16 max-w-3xl">
            <div className="flex items-center gap-4 mb-5 text-[10px] uppercase tracking-[0.35em] text-[#dc2626]">
              <div className="w-5 h-[1px] bg-[#dc2626]" />
              <span>{label}</span>
              <div className="w-5 h-[1px] bg-[#dc2626]" />
            </div>

            <h1 className="font-serif text-5xl md:text-7xl text-white leading-[0.9] tracking-tight mb-5">
              {hero.original_title || hero.title}
            </h1>

            <div className="flex items-center gap-4 mb-6 text-xs text-zinc-400">
              {hero.vote_average > 0 && (
                <>
                  <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    {hero.vote_average.toFixed(1)}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-zinc-700" />
                </>
              )}
              {hero.release_date && <span>{hero.release_date.split("-")[0]}</span>}
              {hero.genre_ids?.slice(0, 2).map((gid) => {
                const g = genres.find((x) => x.id === gid);
                return g ? (
                  <span key={gid} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-zinc-700" />
                    <span className="border border-zinc-700 px-2 py-0.5 text-[10px] uppercase tracking-wider">
                      {g.name}
                    </span>
                  </span>
                ) : null;
              })}
            </div>

            <p className="text-zinc-400 text-base max-w-xl leading-relaxed mb-10 font-light line-clamp-3">
              {hero.overview}
            </p>

            <div className="flex items-center gap-6">
              <Link
                to={`/movies/${hero.id}`}
                className="flex items-center gap-3 px-7 py-3.5 text-white text-[11px] tracking-[0.2em] uppercase font-semibold transition-colors"
                style={{ backgroundColor: "#dc2626" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b91c1c")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#dc2626")}
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                View Film
              </Link>
              <Link
                to={`/movies/${hero.id}`}
                className="text-[11px] tracking-[0.2em] uppercase text-zinc-400 hover:text-white transition-colors border-b border-zinc-700 hover:border-white pb-0.5"
              >
                More Info
              </Link>
            </div>
          </div>
        </header>
      )}

      {/* ── Grid section ─────────────────────────────────── */}
      <section className="px-6 lg:px-14 py-16">

        {/* Section header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <div className="w-5 h-[1px] bg-[#dc2626]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">Cinemate</span>
            </div>
            <h2 className="font-serif text-4xl text-white">{label}</h2>
          </div>
          {activeGenre && (
            <button
              onClick={() => setActiveGenre(null)}
              className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 hover:text-white flex items-center gap-2 transition-colors"
            >
              Clear filter
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Genre filter pills */}
        {filteredGenres.length > 0 && (
          <div className="mb-12 -mx-6 px-6 overflow-x-auto hide-scrollbar">
            <div className="flex items-center gap-2 w-max pb-1">
              {/* "All" pill */}
              <button
                onClick={() => setActiveGenre(null)}
                className="shrink-0 text-[10px] uppercase tracking-[0.18em] px-4 py-2 border transition-all duration-200 whitespace-nowrap"
                style={
                  activeGenre === null
                    ? { backgroundColor: "#dc2626", borderColor: "#dc2626", color: "#fff" }
                    : { backgroundColor: "transparent", borderColor: "#27272a", color: "#71717a" }
                }
                onMouseEnter={(e) => {
                  if (activeGenre !== null) e.currentTarget.style.borderColor = "#52525b";
                }}
                onMouseLeave={(e) => {
                  if (activeGenre !== null) e.currentTarget.style.borderColor = "#27272a";
                }}
              >
                All
              </button>

              {filteredGenres.map((genre) => {
                const isActive = activeGenre === genre.id;
                return (
                  <button
                    key={genre.id}
                    onClick={() => setActiveGenre(isActive ? null : genre.id)}
                    className="shrink-0 text-[10px] uppercase tracking-[0.18em] px-4 py-2 border transition-all duration-200 whitespace-nowrap"
                    style={
                      isActive
                        ? { backgroundColor: "#dc2626", borderColor: "#dc2626", color: "#fff" }
                        : { backgroundColor: "transparent", borderColor: "#27272a", color: "#71717a" }
                    }
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.borderColor = "#52525b";
                      if (!isActive) e.currentTarget.style.color = "#e4e4e7";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.borderColor = "#27272a";
                      if (!isActive) e.currentTarget.style.color = "#71717a";
                    }}
                  >
                    {genre.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Result count when filtered */}
        {activeGenre && (
          <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-8">
            {gridMovies.length} film{gridMovies.length !== 1 ? "s" : ""} in{" "}
            {genres.find((g) => g.id === activeGenre)?.name}
          </p>
        )}

        {/* Cards grid */}
        {gridMovies.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-12">
            {gridMovies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center space-y-5">
            <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center">
              <svg className="w-5 h-5 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
            </div>
            <p className="font-serif text-xl text-zinc-600 italic">
              No {genres.find((g) => g.id === activeGenre)?.name} films in this list.
            </p>
            <button
              onClick={() => setActiveGenre(null)}
              className="text-[10px] uppercase tracking-[0.25em] text-[#dc2626] hover:text-white transition-colors"
            >
              Clear filter
            </button>
          </div>
        )}
      </section>
    </main>
  );
};
