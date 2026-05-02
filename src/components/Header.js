import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const TICKER_ITEMS = [
  "NOW PLAYING", "TOP RATED", "UPCOMING", "POPULAR", "DISCOVER",
  "CINEMATE", "NOW PLAYING", "TOP RATED", "UPCOMING", "POPULAR", "DISCOVER", "CINEMATE",
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.search.value.trim();
    if (!query) return;
    e.target.reset();
    setMobileOpen(false);
    navigate(`/search?q=${query}`);
  };

  const linkBase = "text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 pb-0.5";
  const activeLink = `${linkBase} text-white border-b border-[#dc2626]`;
  const inactiveLink = `${linkBase} text-zinc-500 hover:text-white`;

  return (
    <header className="relative z-50">
      {/* Ticker strip */}
      <div className="ticker-wrap py-2">
        <div className="ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="text-[10px] font-semibold tracking-[0.28em] uppercase text-white mx-8">
              {item} <span className="opacity-40 mx-4">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-[#080808]/95 backdrop-blur-md border-b border-zinc-900 px-6 lg:px-14">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="relative w-7 h-7">
              <div className="absolute inset-0 rounded-full border border-[#dc2626]" />
              <div className="absolute inset-[7px] bg-[#dc2626] rounded-full" />
            </div>
            <span className="font-serif text-2xl font-bold tracking-wider text-white">CINEMATE</span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-9">
            <NavLink to="/" end className={({ isActive }) => isActive ? activeLink : inactiveLink}>Home</NavLink>
            <NavLink to="/movies/popular" className={({ isActive }) => isActive ? activeLink : inactiveLink}>Popular</NavLink>
            <NavLink to="/movies/top" className={({ isActive }) => isActive ? activeLink : inactiveLink}>Top Rated</NavLink>
            <NavLink to="/movies/upcoming" className={({ isActive }) => isActive ? activeLink : inactiveLink}>Upcoming</NavLink>
          </div>

          {/* Desktop search */}
          <form onSubmit={handleSubmit} className="hidden md:flex search-wrap items-center gap-2 cursor-text">
            <svg className="w-4 h-4 text-zinc-500 shrink-0" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <input
              type="text"
              name="search"
              placeholder="Search titles…"
              autoComplete="off"
            />
          </form>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-zinc-400 hover:text-white transition-colors p-1"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-zinc-900 py-5 space-y-5">
            <form onSubmit={handleSubmit} className="search-mobile relative">
              <svg className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
              <input type="text" name="search" placeholder="Search titles…" autoComplete="off" />
            </form>
            <div className="flex flex-col gap-4">
              {[
                { to: "/", label: "Home", end: true },
                { to: "/movies/popular", label: "Popular" },
                { to: "/movies/top", label: "Top Rated" },
                { to: "/movies/upcoming", label: "Upcoming" },
              ].map(({ to, label, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) => isActive ? activeLink : inactiveLink}
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
