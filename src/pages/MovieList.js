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

export const MovieList = ({ title, apiPath }) => {
  const { movies, loading } = useFetch({ apiPath });
  useTitle({ title });

  const label = SECTION_LABELS[title] || title;
  const [hero, ...rest] = movies;

  if (loading) {
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

  return (
    <main style={{ minHeight: "90vh" }}>
      {/* Hero — featured film with backdrop */}
      {hero && (
        <header className="relative w-full overflow-hidden" style={{ height: "85vh" }}>
          {/* Letterbox */}
          <div className="absolute top-0 left-0 right-0 h-5 bg-black z-20" />
          <div className="absolute bottom-0 left-0 right-0 h-5 bg-black z-20" />

          {/* Backdrop */}
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

          {/* Hero content */}
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
            </div>

            <p className="text-zinc-400 text-base max-w-xl leading-relaxed mb-10 font-light line-clamp-3">
              {hero.overview}
            </p>

            <div className="flex items-center gap-6">
              <Link
                to={`/movies/${hero.id}`}
                className="flex items-center gap-3 px-7 py-3.5 text-white text-[11px] tracking-[0.2em] uppercase font-semibold transition-colors"
                style={{ backgroundColor: "#dc2626" }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "#b91c1c"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "#dc2626"}
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
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

      {/* Grid section */}
      <section className="px-6 lg:px-14 py-20">
        <div className="flex items-center justify-between mb-14">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <div className="w-5 h-[1px] bg-[#dc2626]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">Cinemate</span>
            </div>
            <h2 className="font-serif text-4xl text-white">{label}</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-12">
          {(hero ? rest : movies).map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
