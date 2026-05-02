import { Link } from "react-router-dom";
import backupImage from "../assets/images/backup.png";

const GENRE_MAP = {
  28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy",
  80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family",
  14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music",
  9648: "Mystery", 10749: "Romance", 878: "Sci-Fi", 10770: "TV Movie",
  53: "Thriller", 10752: "War", 37: "Western"
};

export const Card = ({ movie }) => {
  const {
    id,
    original_title,
    title,
    overview,
    poster_path,
    vote_average,
    release_date,
    genre_ids,
    genres,
  } = movie;

  const displayTitle = original_title || title;
  const year = release_date?.split("-")[0] || "";
  const rating = vote_average ? vote_average.toFixed(1) : null;

  // Genres can come as genre_ids (list) or genres (detail)
  const firstGenre =
    genres?.[0]?.name ||
    (genre_ids?.[0] ? GENRE_MAP[genre_ids[0]] : null);

  return (
    <Link to={`/movies/${id}`} className="cinema-card block">
      {/* Poster */}
      <div className="relative overflow-hidden bg-zinc-950" style={{ aspectRatio: "2/3" }}>
        <img
          src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : backupImage}
          alt={displayTitle}
          className="card-img w-full h-full object-cover"
        />

        {/* Hover overlay */}
        <div className="card-overlay absolute inset-0 bg-black/55 backdrop-blur-[1px] flex flex-col items-center justify-center gap-2">
          <div className="card-badge w-14 h-14 rounded-full border border-[#dc2626] flex items-center justify-center">
            <svg className="w-5 h-5 text-[#dc2626] fill-current ml-1" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-white">View Film</span>
        </div>

        {/* Rating badge */}
        {rating && (
          <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-sm px-2 py-1 flex items-center gap-1 border border-white/10">
            <svg className="w-3 h-3 text-amber-400 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <span className="text-xs text-white font-semibold">{rating}</span>
          </div>
        )}

        {/* Genre badge */}
        {firstGenre && (
          <div className="absolute bottom-3 left-3 bg-[#dc2626]/90 px-2.5 py-1">
            <span className="text-[9px] text-white uppercase tracking-[0.2em] font-semibold">{firstGenre}</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="pt-4 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="card-title font-serif text-lg text-white leading-tight line-clamp-2">{displayTitle}</h3>
          {year && <span className="text-[10px] text-zinc-600 tracking-wider shrink-0 mt-1">{year}</span>}
        </div>
        <div className="card-line h-[1px] w-full bg-zinc-800" />
        <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed">{overview}</p>
        <div className="pt-1">
          <span className="card-cta text-[10px] uppercase tracking-[0.2em] text-[#dc2626] flex items-center gap-2">
            Read More <span className="inline-block w-5 h-[1px] bg-[#dc2626]" />
          </span>
        </div>
      </div>
    </Link>
  );
};
