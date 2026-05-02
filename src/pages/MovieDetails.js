import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

const fmt = (n) =>
  n > 0
    ? new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n)
    : "N/A";

const fmtRuntime = (mins) => {
  if (!mins) return "N/A";
  return `${Math.floor(mins / 60)}h ${mins % 60}m`;
};

const StarRating = ({ score }) => {
  const filled = Math.round((score / 10) * 5);
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          className={`w-4 h-4 ${s <= filled ? "text-amber-400 fill-current" : "text-zinc-700"}`}
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
      <span className="text-zinc-500 text-xs ml-2">{score?.toFixed(1)} / 10</span>
    </div>
  );
};

export const MovieDetails = () => {
  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${process.env.REACT_APP_API_KEY}`;
  const { movie } = useFetch({ url });
  const title = movie.title || movie.original_title;
  useTitle({ title });

  if (!movie.poster_path && !movie.backdrop_path) {
    return (
      <main style={{ minHeight: "90vh" }}>
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
      </main>
    );
  }

  const year = movie.release_date?.split("-")[0];

  return (
    <main style={{ minHeight: "90vh" }}>
      {/* Cinematic backdrop hero */}
      <div className="relative w-full overflow-hidden" style={{ height: "70vh" }}>
        {/* Letterbox bars */}
        <div className="absolute top-0 left-0 right-0 h-5 bg-black z-20" />
        <div className="absolute bottom-0 left-0 right-0 h-5 bg-black z-20" />

        {(movie.backdrop_path || movie.poster_path) && (
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`}
            alt={title}
            className="w-full h-full object-cover opacity-45"
          />
        )}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #080808 0%, rgba(8,8,8,0.5) 55%, rgba(8,8,8,0.1) 100%)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #080808 0%, rgba(8,8,8,0.4) 50%, transparent 100%)" }}
        />

        {/* Hero text */}
        <div className="absolute inset-0 z-10 flex items-end px-6 lg:px-14 pb-14 max-w-4xl">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-[#dc2626]">
              <div className="w-5 h-[1px] bg-[#dc2626]" />
              <span>Film Details</span>
              <div className="w-5 h-[1px] bg-[#dc2626]" />
            </div>
            <h1 className="font-serif text-5xl md:text-7xl text-white leading-[0.9] tracking-tight">
              {movie.original_title}
            </h1>
            {movie.tagline && (
              <p className="text-zinc-500 italic text-lg font-light">"{movie.tagline}"</p>
            )}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-zinc-400">
              {year && <span>{year}</span>}
              {movie.runtime > 0 && (
                <>
                  <span className="w-1 h-1 rounded-full bg-zinc-700" />
                  <span>{fmtRuntime(movie.runtime)}</span>
                </>
              )}
              {movie.genres?.slice(0, 2).map((g, i) => (
                <span key={g.id} className="flex items-center gap-2">
                  {i === 0 && <span className="w-1 h-1 rounded-full bg-zinc-700" />}
                  <span
                    className="border border-zinc-700 px-2 py-0.5 rounded-sm text-[10px] uppercase tracking-wider text-zinc-400"
                  >
                    {g.name}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content section */}
      <section className="px-6 lg:px-14 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
        {/* Poster */}
        <div className="lg:col-span-1">
          <div className="relative overflow-hidden rounded-sm" style={{ aspectRatio: "2/3", maxWidth: 380 }}>
            <img
              src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }}
            />
          </div>

          {/* Genre pills */}
          {movie.genres?.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {movie.genres.map((g) => (
                <span
                  key={g.id}
                  className="text-[10px] uppercase tracking-widest px-3 py-1.5 border border-zinc-800 text-zinc-500"
                >
                  {g.name}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="lg:col-span-2 space-y-10">
          {/* Rating */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-3">Audience Score</p>
            <StarRating score={movie.vote_average} />
            <p className="text-xs text-zinc-600 mt-1.5">{movie.vote_count?.toLocaleString()} reviews</p>
          </div>

          {/* Divider */}
          <div
            className="h-[1px] w-full"
            style={{ background: "linear-gradient(to right, #dc2626, transparent)" }}
          />

          {/* Overview */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-4">Synopsis</p>
            <p className="text-zinc-400 leading-relaxed text-sm md:text-base">{movie.overview}</p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-7">
            {[
              { label: "Director", value: "—" },
              { label: "Runtime", value: fmtRuntime(movie.runtime) },
              { label: "Release Date", value: movie.release_date || "—" },
              { label: "IMDB", value: movie.imdb_id || "—" },
              { label: "Budget", value: fmt(movie.budget) },
              { label: "Revenue", value: fmt(movie.revenue) },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600 mb-1.5">{label}</p>
                <p className="text-sm text-zinc-300 font-light">{value}</p>
              </div>
            ))}
          </div>

          {/* Back link */}
          <div className="pt-6">
            <Link
              to="/"
              className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-zinc-500 hover:text-[#dc2626] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Discover
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
