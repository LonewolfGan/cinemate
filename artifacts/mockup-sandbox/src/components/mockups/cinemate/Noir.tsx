import React from "react";
import { Search, Bell, Play, Plus, Star, ChevronRight, ThumbsUp, Clock, TrendingUp } from "lucide-react";
import "./_noir.css";

const HERO = {
  title: "Dune: Part Two",
  tagline: "Long live the fighters.",
  description: "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.",
  image: "https://image.tmdb.org/t/p/original/1pdfLvkbY9ohJlCjQH2TDpiO9JC.jpg",
  rating: "8.8",
  year: "2024",
  duration: "2h 46m",
  genre: "Sci-Fi",
  director: "Denis Villeneuve",
  cast: "Timothée Chalamet · Zendaya · Rebecca Ferguson",
  match: "98",
};

const CONTINUE = [
  { title: "Oppenheimer", remaining: "1h 24m left", progress: 53, image: "https://image.tmdb.org/t/p/w780/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg" },
  { title: "The Batman", remaining: "45m left", progress: 72, image: "https://picsum.photos/seed/batman2022/600/338" },
  { title: "Blade Runner 2049", remaining: "2h 10m left", progress: 22, image: "https://picsum.photos/seed/bladerunner49/600/338" },
];

const TRENDING = [
  { rank: 1, title: "Alien: Romulus", image: "https://image.tmdb.org/t/p/w780/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg", rating: "7.4", year: "2024", duration: "1h 59m", tags: ["Horror", "Sci-Fi"], description: "While scavenging a derelict space station, young colonizers come face to face with the most terrifying life form in the universe." },
  { rank: 2, title: "Deadpool & Wolverine", image: "https://image.tmdb.org/t/p/w780/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg", rating: "8.0", year: "2024", duration: "2h 7m", tags: ["Action", "Comedy"], description: "A listless Wade Wilson finds purpose when Wolverine is thrust into his world, forcing them to team up against a common threat." },
  { rank: 3, title: "Longlegs", image: "https://picsum.photos/seed/longlegs22/400/600", rating: "7.1", year: "2024", duration: "1h 41m", tags: ["Horror", "Thriller"], description: "FBI Agent Lee Harker is assigned to an unsolved serial killer case that takes unexpected turns, revealing a personal connection." },
  { rank: 4, title: "MaXXXine", image: "https://picsum.photos/seed/maxxxine22/400/600", rating: "6.8", year: "2024", duration: "1h 44m", tags: ["Horror", "Crime"], description: "In 1980s Hollywood, adult film star and aspiring actress Maxine Minx finally gets her big break — but a mysterious killer lurks." },
  { rank: 5, title: "Speak No Evil", image: "https://picsum.photos/seed/speakevil22/400/600", rating: "7.0", year: "2024", duration: "1h 50m", tags: ["Horror", "Drama"], description: "A family is invited to spend a weekend in the countryside, but as days pass, a dark side lies beneath their hosts' hospitality." },
  { rank: 6, title: "Strange Darling", image: "https://picsum.photos/seed/strangedarling22/400/600", rating: "7.6", year: "2024", duration: "1h 36m", tags: ["Thriller", "Crime"], description: "Nothing is what it seems when a twisted one-night stand spirals into a serial killer's vicious murder spree across state lines." },
];

const STAFF_PICKS = [
  { title: "Past Lives", year: "2023", image: "https://image.tmdb.org/t/p/w780/k3waq4V738A5x2nFOPg7U02909C.jpg", note: "A quiet devastation." },
  { title: "The Zone of Interest", year: "2023", image: "https://image.tmdb.org/t/p/w780/xO5Q31yTjY85iHOSV156U72XQ6G.jpg", note: "Haunts and lingers." },
  { title: "Poor Things", year: "2023", image: "https://image.tmdb.org/t/p/w780/kCGlIMHnOm8PhcbTiQOte25G7G3.jpg", note: "Wildly inventive." },
  { title: "The Holdovers", year: "2023", image: "https://image.tmdb.org/t/p/w780/kh3N7hD1412ZgO15eU3XjBqA2wF.jpg", note: "Warm and perfect." },
];

export function Noir() {
  return (
    <div className="cinemate-noir min-h-screen w-full flex flex-col relative overflow-x-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        .nr-tag { background: rgba(220,38,38,0.12); border: 1px solid rgba(220,38,38,0.25); color: #fca5a5; font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; padding: 2px 8px; border-radius: 3px; font-weight: 600; }
        .nr-card { position: relative; background: rgba(15,10,30,0.6); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; overflow: hidden; transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease; }
        .nr-card:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.5); border-color: rgba(220,38,38,0.25); }
        .nr-play-btn { opacity: 0; transform: translateY(8px) scale(0.95); transition: all 0.3s ease; }
        .nr-card:hover .nr-play-btn { opacity: 1; transform: translateY(0) scale(1); }
        .nr-rank { font-size: clamp(64px,10vw,96px); font-weight: 900; line-height: 1; color: transparent; -webkit-text-stroke: 1px rgba(255,255,255,0.12); pointer-events: none; user-select: none; }
        .nr-progress-bar { height: 3px; background: rgba(255,255,255,0.1); border-radius: 2px; overflow: hidden; }
        .nr-progress-fill { height: 100%; background: linear-gradient(90deg, #dc2626, #ef4444); border-radius: 2px; }
        .nr-staff-card { position: relative; overflow: hidden; border-radius: 10px; aspect-ratio: 2/3; cursor: pointer; }
        .nr-staff-card img { transition: transform 0.6s ease, filter 0.5s ease; filter: brightness(0.7); }
        .nr-staff-card:hover img { transform: scale(1.08); filter: brightness(0.9); }
        .nr-staff-overlay { background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%); }
      `}} />

      {/* Navigation */}
      <nav className="noir-glass-nav fixed top-0 w-full z-50 px-6 lg:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <a href="#" className="text-2xl font-black tracking-tighter flex items-center gap-0.5">
            <span className="text-white">CINE</span>
            <span className="text-[#dc2626]">MATE</span>
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-400">
            <a href="#" className="text-white relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#dc2626] after:rounded">Home</a>
            <a href="#" className="hover:text-white transition-colors">Popular</a>
            <a href="#" className="hover:text-white transition-colors">Top Rated</a>
            <a href="#" className="hover:text-white transition-colors">Upcoming</a>
            <a href="#" className="hover:text-white transition-colors">My List</a>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="hidden md:flex relative group">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#dc2626] transition-colors" />
            <input type="text" placeholder="Search titles, people…" className="bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-5 text-sm w-56 focus:outline-none focus:border-[#dc2626]/50 focus:w-72 transition-all placeholder:text-slate-600" />
          </div>
          <button className="text-slate-400 hover:text-white transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#dc2626] rounded-full" />
          </button>
          <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-[#dc2626]/50 cursor-pointer hover:ring-[#dc2626] transition-all">
            <img src="https://picsum.photos/seed/avatar99/100/100" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[90vh] min-h-[640px] w-full flex items-end pt-20">
        <div className="absolute inset-0 z-0">
          <img src={HERO.image} alt="Hero" className="w-full h-full object-cover object-center opacity-50" />
          <div className="absolute inset-0 noir-hero-gradient-side z-10" />
          <div className="absolute inset-0 noir-hero-gradient z-10" />
        </div>

        <div className="relative z-20 px-6 md:px-12 lg:px-24 pb-16 w-full">
          <div className="max-w-2xl space-y-5">
            <div className="flex items-center gap-3">
              <span className="bg-[#dc2626] text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1.5">
                ▶ Featured Tonight
              </span>
              <span className="text-[#fbbf24] text-xs font-bold flex items-center gap-1">
                <ThumbsUp className="w-3 h-3 fill-current" /> {HERO.match}% Match
              </span>
            </div>

            <h1 className="text-5xl md:text-[72px] font-black leading-[0.9] tracking-tight text-white">
              {HERO.title}
            </h1>

            <p className="text-lg text-slate-300/70 italic tracking-wide">{HERO.tagline}</p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-300">
              <span className="flex items-center gap-1.5 text-amber-400 font-bold">
                <Star className="w-4 h-4 fill-current" /> {HERO.rating}
              </span>
              <span className="text-slate-600">•</span>
              <span>{HERO.year}</span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {HERO.duration}</span>
              <span className="text-slate-600">•</span>
              <span className="nr-tag">{HERO.genre}</span>
            </div>

            <p className="text-slate-400 text-base leading-relaxed max-w-lg">{HERO.description}</p>

            <div className="text-xs text-slate-500">
              <span className="text-slate-400 font-semibold">Director:</span> {HERO.director} &nbsp;·&nbsp;
              <span className="text-slate-400 font-semibold">Cast:</span> {HERO.cast}
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button className="bg-white text-black px-8 py-3.5 rounded-full font-black flex items-center gap-2.5 hover:bg-slate-100 transition-colors text-sm">
                <Play className="w-4 h-4 fill-current" /> Play Now
              </button>
              <button className="noir-glass text-white px-8 py-3.5 rounded-full font-bold flex items-center gap-2.5 hover:bg-white/15 transition-colors text-sm">
                <Plus className="w-4 h-4" /> My List
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative z-20 px-6 md:px-12 lg:px-24 pb-24 space-y-20 -mt-4">

        {/* Continue Watching */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
              <span className="w-1 h-5 bg-[#dc2626] rounded-full inline-block" />
              Continue Watching
            </h2>
          </div>
          <div className="flex gap-5 overflow-x-auto hide-scrollbar pb-3 -mx-6 px-6 md:mx-0 md:px-0">
            {CONTINUE.map((item) => (
              <div key={item.title} className="flex-none w-72 md:w-80 group cursor-pointer">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-3 nr-card" style={{ borderRadius: 12 }}>
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/30 nr-play-btn">
                      <Play className="w-5 h-5 text-white fill-current ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 pt-6 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="nr-progress-bar mb-1.5">
                      <div className="nr-progress-fill" style={{ width: `${item.progress}%` }} />
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-400">
                      <span>{item.progress}% watched</span>
                      <span>{item.remaining}</span>
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold text-white text-sm group-hover:text-[#dc2626] transition-colors">{item.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Trending Now — with rank numbers */}
        <section>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-black text-white flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-[#dc2626]" />
              Trending Now
            </h2>
            <button className="text-slate-400 hover:text-white flex items-center gap-1.5 text-sm font-medium transition-colors">
              See All <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5">
            {TRENDING.map((movie) => (
              <div key={movie.rank} className="nr-card group cursor-pointer flex flex-col">
                <div className="relative overflow-hidden" style={{ aspectRatio: '2/3' }}>
                  <img src={movie.image} alt={movie.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                  {/* Rank */}
                  <div className="absolute bottom-0 left-1 pointer-events-none">
                    <span className="nr-rank">{movie.rank}</span>
                  </div>
                  {/* Rating */}
                  <div className="absolute top-2.5 right-2.5 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-[11px] font-bold text-amber-400 flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" /> {movie.rating}
                  </div>
                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center nr-play-btn">
                    <button className="w-11 h-11 rounded-full bg-[#dc2626] flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.6)]">
                      <Play className="w-4 h-4 text-white fill-current ml-0.5" />
                    </button>
                  </div>
                </div>
                <div className="p-3.5 flex flex-col gap-1.5 flex-grow">
                  <h3 className="font-bold text-white text-sm leading-tight group-hover:text-[#dc2626] transition-colors line-clamp-1">{movie.title}</h3>
                  <div className="flex items-center gap-2 text-[10px] text-slate-500">
                    <span>{movie.year}</span>
                    <span>·</span>
                    <span>{movie.duration}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-0.5">
                    {movie.tags.map(tag => <span key={tag} className="nr-tag">{tag}</span>)}
                  </div>
                  <p className="text-[11px] text-slate-500 line-clamp-2 mt-1 leading-relaxed flex-grow">{movie.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Staff Picks */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-[1px] bg-white/5" />
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <Star className="w-4 h-4 text-[#dc2626] fill-current" />
              Staff Picks · 2023
              <Star className="w-4 h-4 text-[#dc2626] fill-current" />
            </h2>
            <div className="flex-1 h-[1px] bg-white/5" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {STAFF_PICKS.map((film) => (
              <div key={film.title} className="nr-staff-card group">
                <img src={film.image} alt={film.title} className="w-full h-full object-cover absolute inset-0" />
                <div className="nr-staff-overlay absolute inset-0" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-[10px] text-[#dc2626] uppercase tracking-wider font-bold mb-1">{film.year}</p>
                  <h3 className="text-white font-bold text-base leading-tight mb-1">{film.title}</h3>
                  <p className="text-slate-400 text-xs italic">{film.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.07] bg-[#02000a]/80 py-14 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <a href="#" className="text-2xl font-black tracking-tighter flex items-center gap-0.5 mb-4">
              <span className="text-white">CINE</span>
              <span className="text-[#dc2626]">MATE</span>
            </a>
            <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
              Your premium destination for immersive cinematic experiences. Discover, track, and dive deep into the world of film.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Explore</h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              {["Home", "Top Rated", "New Releases", "Coming Soon", "Collections"].map(l => (
                <li key={l}><a href="#" className="hover:text-[#dc2626] transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Account</h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              {["My List", "Settings", "Help Center", "Privacy", "Terms"].map(l => (
                <li key={l}><a href="#" className="hover:text-[#dc2626] transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/[0.07] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Cinemate Inc. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {["Twitter", "Instagram", "Letterboxd", "Discord"].map(s => (
              <a key={s} href="#" className="hover:text-white transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
