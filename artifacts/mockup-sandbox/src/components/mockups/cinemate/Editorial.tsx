import React from "react";
import "./_editorial.css";
import { Search, ArrowRight, Play, Film } from "lucide-react";

const FILMS = [
  {
    title: "Anora",
    year: "2024",
    director: "Sean Baker",
    description: "A young sex worker from Brooklyn gets her chance at a Cinderella story when she meets and impulsively marries the son of an oligarch.",
    image: "https://image.tmdb.org/t/p/w780/n5HEQPp3cYrpLNXxWfuUCjCBVvM.jpg",
    rating: "98",
    genre: "Comedy / Drama",
    runtime: "2h 19m",
    verdict: "Masterpiece"
  },
  {
    title: "The Brutalist",
    year: "2024",
    director: "Brady Corbet",
    description: "Escaping post-war Europe, visionary architect László Tóth arrives in America to rebuild his life, his work, and his marriage.",
    image: "https://image.tmdb.org/t/p/w780/czIHMJrgVv4FkQ0OBjr6rXTRBvF.jpg",
    rating: "96",
    genre: "Drama / History",
    runtime: "3h 35m",
    verdict: "Essential"
  },
  {
    title: "Nickel Boys",
    year: "2024",
    director: "RaMell Ross",
    description: "Based on the Pulitzer Prize-winning novel, chronicles the powerful friendship between two young Black teenagers navigating the harrowing trials of a reform school.",
    image: "https://picsum.photos/seed/nickelboys/800/1200",
    rating: "94",
    genre: "Drama",
    runtime: "2h 0m",
    verdict: "Exceptional"
  },
  {
    title: "A Complete Unknown",
    year: "2024",
    director: "James Mangold",
    description: "At the Newport Folk Festival in 1965, a young Bob Dylan shakes up his act on the folk music scene by going electric.",
    image: "https://picsum.photos/seed/unknown2/800/1200",
    rating: "89",
    genre: "Biography / Music",
    runtime: "2h 20m",
    verdict: "Recommended"
  },
  {
    title: "Conclave",
    year: "2024",
    director: "Edward Berger",
    description: "Cardinal Lawrence is tasked with running this covert process after the unexpected death of the beloved Pope. Secrets emerge.",
    image: "https://picsum.photos/seed/conclave99/800/1200",
    rating: "92",
    genre: "Thriller",
    runtime: "2h 0m",
    verdict: "See It Now"
  },
  {
    title: "September 5",
    year: "2024",
    director: "Tim Fehlbaum",
    description: "During the 1972 Munich Olympics, an American sports broadcasting crew finds itself abruptly pivoting to cover a hostage crisis.",
    image: "https://picsum.photos/seed/september72/800/1200",
    rating: "90",
    genre: "Thriller / History",
    runtime: "1h 34m",
    verdict: "Compelling"
  }
];

const TICKER = ["ANORA", "THE BRUTALIST", "NICKEL BOYS", "A COMPLETE UNKNOWN", "CONCLAVE", "SEPTEMBER 5", "EMILIA PÉREZ", "WICKED", "NOSFERATU", "GLADIATOR II"];

export function Editorial() {
  return (
    <div className="editorial-root min-h-screen flex flex-col selection:bg-accent selection:text-white overflow-x-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        .ed-ticker-track { animation: ed-tick 30s linear infinite; display: inline-block; }
        @keyframes ed-tick { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .ed-card-img { transition: transform 0.8s cubic-bezier(.25,.1,.25,1), filter 0.8s ease; filter: grayscale(1); }
        .ed-card:hover .ed-card-img { transform: scale(1.06); filter: grayscale(0); }
        .ed-card-tint { opacity: 0; transition: opacity 0.5s ease; }
        .ed-card:hover .ed-card-tint { opacity: 1; }
        .ed-underline { display: inline-block; position: relative; }
        .ed-underline::after { content: ''; position: absolute; bottom: -3px; left: 0; width: 100%; height: 2px; background: var(--accent); transform: scaleX(0); transform-origin: left; transition: transform 0.3s ease; }
        .ed-underline:hover::after { transform: scaleX(1); }
        .ed-verdict { display: inline-block; }
        .ed-number { font-family: var(--font-display); font-weight: 900; font-size: clamp(120px, 20vw, 200px); line-height: 0.85; color: rgba(255,255,255,0.04); pointer-events: none; user-select: none; position: absolute; right: -10px; bottom: -20px; }
      `}} />

      {/* Top bar */}
      <div className="border-b border-white/10 px-6 py-2 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-white/30 font-display">
        <span>Vol. XII · Issue 06 · Spring 2025</span>
        <span>Cinema in Print Since 2013</span>
      </div>

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-6 border-b border-white/10 uppercase tracking-widest text-xs">
        <div className="flex items-center gap-10">
          <a href="#" className="font-display font-black text-4xl tracking-tighter text-white hover:text-accent transition-colors italic leading-none">CINEMATE</a>
          <div className="hidden md:flex gap-8 items-center text-white/60">
            <a href="#" className="hover:text-white transition-colors ed-underline text-white font-bold">Home</a>
            <a href="#" className="hover:text-white transition-colors ed-underline">Popular</a>
            <a href="#" className="hover:text-white transition-colors ed-underline">Top Rated</a>
            <a href="#" className="hover:text-white transition-colors ed-underline">Upcoming</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-white/60 hover:text-white transition-colors">
            <Search className="w-4 h-4" />
          </button>
          <button className="bg-accent text-white px-5 py-2 text-xs font-bold hover:bg-red-700 transition-colors tracking-widest">
            SUBSCRIBE
          </button>
        </div>
      </nav>

      {/* Ticker strip */}
      <div className="border-b border-white/10 bg-accent/5 overflow-hidden py-2.5">
        <div className="ed-ticker-track whitespace-nowrap">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="text-[10px] uppercase tracking-[0.28em] text-white/50 mx-8 font-display font-bold">
              {t} <span className="text-accent mx-4">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <header className="px-6 pt-20 pb-20 md:pt-24 md:pb-24 border-b border-white/10 relative overflow-hidden">
        <div className="ed-number">24</div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 relative z-10">
          <div className="md:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[2px] bg-accent" />
              <span className="text-accent font-display font-black tracking-widest text-xs uppercase">The New Standard</span>
            </div>
            <h1 className="font-display text-[clamp(72px,12vw,160px)] font-black leading-[0.82] tracking-tighter uppercase mb-0">
              Cinema<br/>
              <span className="italic font-light text-white/40">Unbound</span>
            </h1>
          </div>
          <div className="md:col-span-5 flex flex-col justify-end space-y-6 md:pt-16">
            <div className="w-full h-[1px] bg-white/10 mb-2" />
            <p className="text-white/60 text-base leading-relaxed">
              Exploring the bleeding edge of modern filmmaking. Reviews, retrospectives, and unapologetic critiques of the most essential cinema of our time.
            </p>
            <a href="#latest" className="inline-flex items-center gap-3 text-white uppercase tracking-widest text-xs font-bold hover:text-accent transition-colors w-fit group">
              Read the Issue
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-8 pt-4 border-t border-white/10 text-[10px] uppercase tracking-widest text-white/30">
              <span>06 Films</span>
              <span>4 Exclusives</span>
              <span>2 Interviews</span>
            </div>
          </div>
        </div>
      </header>

      {/* Critics' Quote strip */}
      <div className="px-6 py-10 border-b border-white/10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
        {[
          { quote: "The best year for cinema since 2007.", attr: "Pauline Kael Foundation" },
          { quote: "Audacity, craft, and soul — everywhere you look.", attr: "Village Voice" },
          { quote: "A vintage that will be talked about for decades.", attr: "Sight & Sound" },
        ].map(({ quote, attr }) => (
          <div key={attr} className="px-8 py-4 first:pl-0 last:pr-0">
            <Film className="w-4 h-4 text-accent mb-3" />
            <p className="font-display italic text-white/70 text-sm leading-relaxed mb-2">"{quote}"</p>
            <p className="text-[10px] uppercase tracking-widest text-white/30">{attr}</p>
          </div>
        ))}
      </div>

      {/* Films grid */}
      <main className="px-6 py-20" id="latest">
        <div className="flex items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-3">Spring 2025</p>
            <h2 className="font-display text-[clamp(48px,8vw,96px)] font-bold uppercase tracking-tighter leading-none">In Focus</h2>
          </div>
          <p className="text-white/30 uppercase tracking-widest text-xs hidden md:block font-bold">06 Selections</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 gap-y-20">
          {FILMS.map((film, i) => (
            <article
              key={film.title}
              className={`group ed-card flex flex-col cursor-pointer ${i === 0 ? 'md:col-span-3 md:flex-row gap-12' : 'gap-5'}`}
            >
              <div className={`overflow-hidden relative ${i === 0 ? 'w-full md:w-[45%] aspect-[4/3]' : 'aspect-[2/3]'}`}>
                <div className="ed-card-tint absolute inset-0 bg-accent/25 z-10 mix-blend-color" />
                <img
                  src={film.image}
                  alt={film.title}
                  className="ed-card-img w-full h-full object-cover"
                />
                {/* Rating badge */}
                <div className="absolute top-4 left-4 z-20 bg-black text-white px-3 py-1.5 border-l-2 border-accent">
                  <span className="font-display font-black text-lg leading-none">{film.rating}</span>
                  <span className="text-[9px] text-white/50 ml-0.5">%</span>
                </div>
                {/* Verdict */}
                <div className="absolute bottom-4 right-4 z-20 bg-accent text-white px-3 py-1 text-[9px] font-bold uppercase tracking-widest">
                  {film.verdict}
                </div>
                {/* Play overlay */}
                <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/30">
                  <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center">
                    <Play className="w-5 h-5 text-white fill-current ml-1" />
                  </div>
                </div>
              </div>

              <div className={`flex flex-col ${i === 0 ? 'md:w-[55%] justify-center py-4' : ''}`}>
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/40 mb-4">
                  <span>{film.year}</span>
                  <span className="w-1 h-1 bg-accent rounded-full" />
                  <span>{film.director}</span>
                  <span className="w-1 h-1 bg-white/20 rounded-full" />
                  <span>{film.runtime}</span>
                </div>

                <h3 className={`font-display font-black uppercase tracking-tighter leading-none mb-3 ${i === 0 ? 'text-[clamp(48px,6vw,80px)]' : 'text-4xl'}`}>
                  {film.title}
                </h3>

                <div className="flex items-center gap-3 mb-5">
                  <span className="text-accent text-[10px] uppercase tracking-widest font-bold">{film.genre}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-white/30 text-[10px] uppercase tracking-widest">Full Review</span>
                </div>

                <div className="w-12 h-[2px] bg-accent mb-5" />

                <p className="text-white/60 leading-relaxed text-sm mb-8 max-w-lg flex-grow">
                  {film.description}
                </p>

                <a href="#" className="inline-flex items-center gap-3 text-white uppercase tracking-widest text-xs font-bold hover:text-accent transition-colors w-fit group/link">
                  Read Review
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Subscribe strip */}
      <div className="mx-6 mb-20 border border-white/10 p-12 flex flex-col md:flex-row items-center justify-between gap-8 bg-accent/5">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-accent font-bold mb-2">Never miss a film</p>
          <h3 className="font-display text-3xl font-black uppercase tracking-tighter">The Weekly Dispatch</h3>
        </div>
        <div className="flex items-stretch gap-0">
          <input
            type="email"
            placeholder="your@email.com"
            className="bg-black/50 border border-white/20 px-5 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-accent transition-colors min-w-[260px]"
          />
          <button className="bg-accent text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition-colors whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-16 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="space-y-4 max-w-xs">
          <div className="font-display font-black text-5xl tracking-tighter italic text-white">CINEMATE</div>
          <p className="text-white/40 text-xs leading-relaxed">
            An unapologetic exploration of modern cinema. Published quarterly in print, updated daily online.
          </p>
          <p className="text-[9px] uppercase tracking-widest text-white/20">© {new Date().getFullYear()} Cinemate Magazine</p>
        </div>
        <div className="flex gap-16 text-xs uppercase tracking-widest">
          <div className="space-y-3 flex flex-col">
            <span className="text-white/20 font-bold mb-1 text-[9px]">Sections</span>
            {["Reviews", "Features", "Interviews", "Essays", "Watch Lists"].map(l => (
              <a key={l} href="#" className="hover:text-accent transition-colors text-white/50">{l}</a>
            ))}
          </div>
          <div className="space-y-3 flex flex-col">
            <span className="text-white/20 font-bold mb-1 text-[9px]">Company</span>
            {["About", "Masthead", "Subscribe", "Contact"].map(l => (
              <a key={l} href="#" className="hover:text-accent transition-colors text-white/50">{l}</a>
            ))}
          </div>
          <div className="space-y-3 flex flex-col">
            <span className="text-white/20 font-bold mb-1 text-[9px]">Social</span>
            {["Twitter", "Instagram", "Letterboxd"].map(l => (
              <a key={l} href="#" className="hover:text-accent transition-colors text-white/50">{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
