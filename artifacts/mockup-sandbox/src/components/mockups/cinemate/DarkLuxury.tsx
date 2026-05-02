import React from "react";
import { Search, Play, ChevronRight, Star, Clock, Film } from "lucide-react";

const MOVIES = [
  {
    id: 1,
    title: "Dune: Part Two",
    description: "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.",
    image: "https://image.tmdb.org/t/p/w780/1pdfLvkbY9ohJlCjQH2TDpiO9JC.jpg",
    year: "2024",
    director: "Denis Villeneuve",
    genre: "Sci-Fi / Epic",
    runtime: "2h 46m",
    rating: 8.8,
  },
  {
    id: 2,
    title: "Oppenheimer",
    description: "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
    image: "https://image.tmdb.org/t/p/w780/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    year: "2023",
    director: "Christopher Nolan",
    genre: "Historical Drama",
    runtime: "3h 0m",
    rating: 8.9,
  },
  {
    id: 3,
    title: "Poor Things",
    description: "The incredible tale about the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter.",
    image: "https://image.tmdb.org/t/p/w780/kCGlIMHnOm8PhcbTiQOte25G7G3.jpg",
    year: "2023",
    director: "Yorgos Lanthimos",
    genre: "Dark Comedy",
    runtime: "2h 21m",
    rating: 8.0,
  },
  {
    id: 4,
    title: "The Holdovers",
    description: "A curmudgeonly instructor at a New England prep school is forced to remain on campus during Christmas break to babysit the handful of students with nowhere to go.",
    image: "https://image.tmdb.org/t/p/w780/kh3N7hD1412ZgO15eU3XjBqA2wF.jpg",
    year: "2023",
    director: "Alexander Payne",
    genre: "Drama / Comedy",
    runtime: "2h 13m",
    rating: 7.9,
  },
  {
    id: 5,
    title: "Past Lives",
    description: "Nora and Hae Sung, two deeply connected childhood friends, are wrested apart after Nora's family emigrates from South Korea.",
    image: "https://image.tmdb.org/t/p/w780/k3waq4V738A5x2nFOPg7U02909C.jpg",
    year: "2023",
    director: "Celine Song",
    genre: "Romance / Drama",
    runtime: "1h 46m",
    rating: 7.8,
  },
  {
    id: 6,
    title: "The Zone of Interest",
    description: "The commandant of Auschwitz, Rudolf Höss, and his wife Hedwig, strive to build a dream life for their family in a house and garden next to the camp.",
    image: "https://image.tmdb.org/t/p/w780/xO5Q31yTjY85iHOSV156U72XQ6G.jpg",
    year: "2023",
    director: "Jonathan Glazer",
    genre: "Historical Drama",
    runtime: "1h 45m",
    rating: 7.4,
  }
];

const TICKER_ITEMS = ["DUNE: PART TWO", "OPPENHEIMER", "POOR THINGS", "THE HOLDOVERS", "PAST LIVES", "THE ZONE OF INTEREST", "KILLERS OF THE FLOWER MOON", "MAESTRO", "SOCIETY OF THE SNOW", "AMERICAN FICTION"];

export function DarkLuxury() {
  return (
    <div className="min-h-screen bg-[#080808] text-zinc-300 selection:bg-[#dc2626] selection:text-white pb-24 overflow-x-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }
        .dl-serif { font-family: 'Playfair Display', serif; }
        .dl-sans { font-family: 'Inter', sans-serif; }
        .dl-red { color: #dc2626; }
        .dl-border-red { border-color: rgba(220, 38, 38, 0.4); }
        .dl-bg-red { background-color: #dc2626; }
        .dl-grain::after {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.03;
          pointer-events: none;
          z-index: 9999;
        }
        .dl-ticker-wrap { overflow: hidden; white-space: nowrap; }
        .dl-ticker { display: inline-block; animation: dl-ticker 28s linear infinite; }
        @keyframes dl-ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .dl-line-anim { transform-origin: left; transition: transform 0.7s ease; transform: scaleX(0.15); }
        .dl-card-group:hover .dl-line-anim { transform: scaleX(1); }
        .dl-card-overlay { opacity: 0; transition: opacity 0.5s ease; }
        .dl-card-group:hover .dl-card-overlay { opacity: 1; }
        .dl-card-badge { opacity: 0; transform: translateY(8px); transition: all 0.5s ease 0.1s; }
        .dl-card-group:hover .dl-card-badge { opacity: 1; transform: translateY(0); }
        .dl-card-cta { opacity: 0; transition: opacity 0.5s ease 0.15s; }
        .dl-card-group:hover .dl-card-cta { opacity: 1; }
        .dl-img { transition: transform 0.8s cubic-bezier(0.25,0.1,0.25,1), opacity 0.5s ease; opacity: 0.75; }
        .dl-card-group:hover .dl-img { transform: scale(1.06); opacity: 1; }
        .dl-feature-img { transition: transform 1s cubic-bezier(0.25,0.1,0.25,1); }
        .dl-feature-group:hover .dl-feature-img { transform: scale(1.04); }
        .dl-search-btn { position: relative; }
        .dl-search-input {
          width: 0; overflow: hidden; opacity: 0; padding: 0;
          transition: width 0.4s ease, opacity 0.3s ease, padding 0.4s ease;
          background: transparent; border: none; border-bottom: 1px solid rgba(220,38,38,0.5);
          color: #e4e4e7; outline: none; font-family: 'Inter', sans-serif; font-size: 13px;
        }
        .dl-search-wrap:focus-within .dl-search-input,
        .dl-search-wrap:hover .dl-search-input {
          width: 160px; opacity: 1; padding: 2px 6px;
        }
        .dl-rating-bar { height: 2px; background: linear-gradient(90deg, #dc2626, #991b1b); }
      `}} />

      <div className="dl-grain" />

      {/* Ticker */}
      <div className="bg-[#dc2626] py-2 dl-ticker-wrap">
        <div className="dl-ticker">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="dl-sans text-[10px] font-semibold tracking-[0.25em] uppercase text-white mx-8">
              {item} <span className="opacity-50 mx-4">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-[#080808]/95 backdrop-blur-md border-b border-zinc-900 px-8 lg:px-16 flex justify-between items-center h-16">
        <div className="flex items-center gap-10">
          <div className="dl-serif text-2xl font-bold tracking-wider text-white flex items-center gap-3">
            <div className="relative w-7 h-7">
              <div className="absolute inset-0 rounded-full border border-[#dc2626]" />
              <div className="absolute inset-[7px] bg-[#dc2626] rounded-full" />
            </div>
            CINEMATE
          </div>
          <div className="hidden md:flex gap-8 text-xs tracking-[0.18em] uppercase dl-sans">
            <a href="#" className="text-white border-b border-[#dc2626] pb-0.5">Home</a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">Popular</a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">Top Rated</a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">Upcoming</a>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="dl-search-wrap flex items-center gap-2 cursor-pointer">
            <Search className="w-4 h-4 text-zinc-400 hover:text-white transition-colors flex-shrink-0" />
            <input type="text" placeholder="Search titles…" className="dl-search-input" />
          </div>
          <div className="hidden md:block h-4 w-px bg-zinc-800" />
          <button className="hidden md:block text-[10px] uppercase tracking-[0.2em] text-zinc-400 hover:text-white border border-zinc-700 hover:border-white px-4 py-2 transition-all dl-sans">
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative w-full h-[88vh] overflow-hidden">
        {/* Letterbox bars */}
        <div className="absolute top-0 left-0 right-0 h-6 bg-black z-20" />
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-black z-20" />

        <div className="absolute inset-0">
          <img
            src="https://image.tmdb.org/t/p/original/1pdfLvkbY9ohJlCjQH2TDpiO9JC.jpg"
            alt="Dune Part Two"
            className="w-full h-full object-cover object-top opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/70 to-transparent" />
        </div>

        <div className="relative h-full flex flex-col justify-end px-8 lg:px-16 pb-16 max-w-3xl z-10">
          <div className="flex items-center gap-4 mb-5 text-[10px] uppercase tracking-[0.35em] text-[#dc2626] dl-sans">
            <div className="w-5 h-[1px] bg-[#dc2626]" />
            <span>Now Showing</span>
            <div className="w-5 h-[1px] bg-[#dc2626]" />
          </div>

          <h1 className="dl-serif text-6xl md:text-8xl text-white leading-[0.9] mb-5 tracking-tight">
            Dune: <br/><span className="italic font-light text-zinc-400">Part Two</span>
          </h1>

          {/* Meta row */}
          <div className="flex items-center gap-4 mb-6 text-xs dl-sans text-zinc-400">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <Star className="w-3.5 h-3.5 fill-current" /> 8.8
            </span>
            <span className="w-1 h-1 rounded-full bg-zinc-700" />
            <span>Denis Villeneuve</span>
            <span className="w-1 h-1 rounded-full bg-zinc-700" />
            <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> 2h 46m</span>
            <span className="w-1 h-1 rounded-full bg-zinc-700" />
            <span className="border border-zinc-600 px-2 py-0.5 rounded-sm">Sci-Fi / Epic</span>
          </div>

          <p className="text-zinc-400 text-base max-w-xl leading-relaxed mb-10 font-light dl-sans">
            Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.
          </p>

          <div className="flex items-center gap-6">
            <button className="group flex items-center gap-3 bg-[#dc2626] hover:bg-[#b91c1c] transition-colors px-7 py-3.5 text-white dl-sans text-xs tracking-[0.2em] uppercase font-semibold">
              <Play className="w-4 h-4 fill-current" />
              Watch Trailer
            </button>
            <button className="text-xs tracking-[0.2em] uppercase text-zinc-400 hover:text-white transition-colors border-b border-zinc-700 hover:border-white pb-0.5 dl-sans">
              More Info
            </button>
          </div>
        </div>
      </header>

      {/* Featured Showcase — Full-width single film */}
      <section className="px-8 lg:px-16 mt-20 mb-20">
        <div className="flex items-center gap-6 mb-10">
          <div className="w-6 h-[1px] bg-[#dc2626]" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#dc2626] dl-sans">Director's Selection</span>
          <div className="flex-1 h-[1px] bg-zinc-900" />
        </div>

        <div className="group dl-feature-group grid grid-cols-1 md:grid-cols-2 gap-0 cursor-pointer overflow-hidden border border-zinc-900 hover:border-zinc-700 transition-colors duration-700">
          <div className="relative aspect-[4/3] overflow-hidden bg-zinc-950">
            <img
              src="https://image.tmdb.org/t/p/w780/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"
              alt="Oppenheimer"
              className="dl-feature-img w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#080808]/50" />
            <div className="absolute top-5 left-5">
              <span className="bg-[#dc2626] text-white text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 dl-sans font-semibold">
                Editor's Pick
              </span>
            </div>
          </div>
          <div className="bg-zinc-950/50 p-10 md:p-14 flex flex-col justify-center border-l border-zinc-900">
            <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-4 dl-sans">2023 · Christopher Nolan · 3h 0m</div>
            <h3 className="dl-serif text-4xl md:text-5xl text-white mb-3">Oppenheimer</h3>
            <div className="flex items-center gap-1.5 mb-5">
              {[1,2,3,4,5].map(s => (
                <Star key={s} className={`w-3.5 h-3.5 ${s <= 4 ? 'text-amber-400 fill-current' : 'text-zinc-700'}`} />
              ))}
              <span className="text-zinc-500 text-xs ml-2 dl-sans">8.9 / 10</span>
            </div>
            <div className="dl-rating-bar w-24 mb-6 rounded-full" />
            <p className="text-zinc-500 text-sm leading-relaxed mb-8 dl-sans max-w-sm">
              "A staggering feat of cinema. Nolan distills the weight of the atomic age into three hours of breathless, morally complex drama that you feel long after the credits roll."
            </p>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#dc2626] dl-sans">
              Read Full Review <div className="w-8 h-[1px] bg-[#dc2626]" />
            </div>
          </div>
        </div>
      </section>

      {/* Curated Selection grid */}
      <section className="px-8 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-3 dl-sans">Handpicked</p>
            <h2 className="dl-serif text-4xl text-white">Curated Selection</h2>
          </div>
          <button className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-zinc-500 hover:text-[#dc2626] transition-colors group dl-sans">
            View All Films <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          {MOVIES.map((movie, i) => (
            <div key={movie.id} className="group dl-card-group cursor-pointer">
              <div className="relative overflow-hidden mb-6 bg-zinc-950" style={{ aspectRatio: '2/3' }}>
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="dl-img w-full h-full object-cover"
                />
                <div className="dl-card-overlay absolute inset-0 bg-black/50 backdrop-blur-[1px] flex flex-col items-center justify-center gap-3">
                  <div className="dl-card-badge w-14 h-14 rounded-full border border-[#dc2626] flex items-center justify-center">
                    <Play className="w-5 h-5 text-[#dc2626] fill-current ml-1" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white dl-sans">View Film</span>
                </div>
                {/* Rating chip */}
                <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 flex items-center gap-1 border border-white/10">
                  <Star className="w-3 h-3 text-amber-400 fill-current" />
                  <span className="text-xs text-white font-semibold dl-sans">{movie.rating}</span>
                </div>
                {/* Genre chip */}
                <div className="absolute bottom-3 left-3 bg-[#dc2626]/90 px-2.5 py-1">
                  <span className="text-[9px] text-white uppercase tracking-[0.2em] dl-sans font-semibold">{movie.genre}</span>
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="flex justify-between items-start">
                  <h3 className="dl-serif text-xl text-white group-hover:text-[#dc2626] transition-colors leading-tight">{movie.title}</h3>
                  <span className="text-[10px] tracking-wider text-zinc-600 dl-sans mt-1">{movie.year}</span>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-zinc-500 dl-sans">
                  <span>{movie.director}</span>
                  <span className="w-0.5 h-0.5 rounded-full bg-zinc-700" />
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {movie.runtime}</span>
                </div>
                <div className="dl-line-anim h-[1px] w-full bg-zinc-800 my-3" />
                <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed dl-sans">{movie.description}</p>
                <div className="pt-1">
                  <span className="dl-card-cta text-[10px] uppercase tracking-[0.2em] text-[#dc2626] flex items-center gap-2 dl-sans">
                    Read Review <div className="w-6 h-[1px] bg-[#dc2626]" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pull quote strip */}
      <section className="mt-28 mb-0 border-t border-b border-zinc-900 py-16 px-8 lg:px-16 text-center">
        <Film className="w-5 h-5 text-[#dc2626] mx-auto mb-6" />
        <blockquote className="dl-serif text-2xl md:text-3xl text-zinc-300 italic leading-relaxed max-w-3xl mx-auto">
          "Cinema is the ultimate pervert art. It gives you what you desire — but not in the form you expected."
        </blockquote>
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-600 mt-6 dl-sans">— Slavoj Žižek</p>
      </section>

      {/* Footer */}
      <footer className="px-8 lg:px-16 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          <div className="md:col-span-2">
            <div className="dl-serif text-3xl text-white flex items-center gap-3 mb-5">
              <div className="relative w-6 h-6">
                <div className="absolute inset-0 rounded-full border border-[#dc2626]" />
                <div className="absolute inset-[5px] bg-[#dc2626] rounded-full" />
              </div>
              CINEMATE
            </div>
            <p className="text-zinc-600 text-xs leading-relaxed dl-sans max-w-xs">
              A prestige platform for discerning cinephiles. Curated reviews, in-depth essays, and uncompromising criticism of the films that matter.
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 dl-sans mb-5">Sections</p>
            <ul className="space-y-3 text-xs dl-sans text-zinc-500">
              {["Reviews", "Features", "Interviews", "Essays", "Watch Lists"].map(l => (
                <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 dl-sans mb-5">Company</p>
            <ul className="space-y-3 text-xs dl-sans text-zinc-500">
              {["About", "Masthead", "Subscribe", "Contact", "Careers"].map(l => (
                <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-700 dl-sans">© {new Date().getFullYear()} Cinemate Prestige · All Rights Reserved</p>
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-zinc-600 dl-sans">
            {["Twitter", "Instagram", "Letterboxd"].map(s => (
              <a key={s} href="#" className="hover:text-white transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
