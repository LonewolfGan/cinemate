import React from "react";
import { Search, Play, ChevronRight, Menu } from "lucide-react";

const MOVIES = [
  {
    id: 1,
    title: "Dune: Part Two",
    description: "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.",
    image: "https://image.tmdb.org/t/p/w780/1pdfLvkbY9ohJlCjQH2TDpiO9JC.jpg",
    year: "2024",
    director: "Denis Villeneuve",
  },
  {
    id: 2,
    title: "Oppenheimer",
    description: "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
    image: "https://image.tmdb.org/t/p/w780/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    year: "2023",
    director: "Christopher Nolan",
  },
  {
    id: 3,
    title: "Poor Things",
    description: "The incredible tale about the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter.",
    image: "https://image.tmdb.org/t/p/w780/kCGlIMHnOm8PhcbTiQOte25G7G3.jpg",
    year: "2023",
    director: "Yorgos Lanthimos",
  },
  {
    id: 4,
    title: "The Holdovers",
    description: "A curmudgeonly instructor at a New England prep school is forced to remain on campus during Christmas break to babysit the handful of students with nowhere to go.",
    image: "https://image.tmdb.org/t/p/w780/kh3N7hD1412ZgO15eU3XjBqA2wF.jpg",
    year: "2023",
    director: "Alexander Payne",
  },
  {
    id: 5,
    title: "Past Lives",
    description: "Nora and Hae Sung, two deeply connected childhood friends, are wrested apart after Nora's family emigrates from South Korea.",
    image: "https://image.tmdb.org/t/p/w780/k3waq4V738A5x2nFOPg7U02909C.jpg",
    year: "2023",
    director: "Celine Song",
  },
  {
    id: 6,
    title: "The Zone of Interest",
    description: "The commandant of Auschwitz, Rudolf Höss, and his wife Hedwig, strive to build a dream life for their family in a house and garden next to the camp.",
    image: "https://image.tmdb.org/t/p/w780/xO5Q31yTjY85iHOSV156U72XQ6G.jpg",
    year: "2023",
    director: "Jonathan Glazer",
  }
];

export function DarkLuxury() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans selection:bg-[#dc2626] selection:text-white pb-24">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
        .gold-gradient { background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .text-gold { color: #dc2626; }
        .border-gold { border-color: rgba(220, 38, 38, 0.3); }
        .bg-gold { background-color: #dc2626; }
        .hover-gold:hover { color: #dc2626; }
      `}} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-[#0a0a0a] to-transparent pt-6 pb-12 px-8 lg:px-16 flex justify-between items-center transition-all duration-300">
        <div className="flex items-center gap-12">
          <div className="font-serif text-3xl font-bold tracking-wider text-white flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-[#dc2626] flex items-center justify-center">
              <div className="w-3 h-3 bg-[#dc2626] rounded-full" />
            </div>
            CINEMATE
          </div>
          <div className="hidden md:flex gap-8 text-sm tracking-widest uppercase">
            <a href="#" className="text-white border-b border-[#dc2626] pb-1">Home</a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors pb-1">Popular</a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors pb-1">Top Rated</a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors pb-1">Upcoming</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-zinc-400 hover:text-white transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="md:hidden text-zinc-400 hover:text-white transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative w-full h-[85vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://image.tmdb.org/t/p/original/1pdfLvkbY9ohJlCjQH2TDpiO9JC.jpg" 
            alt="Dune Part Two" 
            className="w-full h-full object-cover object-top opacity-50 transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
        </div>
        
        <div className="relative h-full flex flex-col justify-end px-8 lg:px-16 pb-24 max-w-4xl">
          <div className="flex items-center gap-4 mb-6 text-xs uppercase tracking-[0.3em] text-[#dc2626]">
            <span>Now Showing</span>
            <div className="w-12 h-[1px] bg-[#dc2626]" />
            <span>2024</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6">
            Dune: <br/><span className="italic font-light text-zinc-400">Part Two</span>
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 font-light">
            Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.
          </p>
          
          <div className="flex items-center gap-6">
            <button className="group flex items-center justify-center w-16 h-16 rounded-full border border-white/20 hover:border-[#dc2626] bg-white/5 backdrop-blur-sm transition-all duration-500">
              <Play className="w-6 h-6 text-white group-hover:text-[#dc2626] ml-1 transition-colors" />
            </button>
            <span className="text-sm tracking-widest uppercase text-zinc-300 hover:text-white cursor-pointer transition-colors border-b border-transparent hover:border-white pb-1">
              Watch Trailer
            </span>
          </div>
        </div>
      </header>

      {/* Curated Selection */}
      <section className="px-8 lg:px-16 mt-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-serif text-4xl text-white mb-4">Curated Selection</h2>
            <p className="text-zinc-500 font-light tracking-wide text-sm uppercase">Cinema as an art form</p>
          </div>
          <button className="flex items-center gap-2 text-sm tracking-widest uppercase text-[#dc2626] hover:text-white transition-colors group">
            Explore All <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {MOVIES.map((movie) => (
            <div key={movie.id} className="group cursor-pointer">
              <div className="relative aspect-[2/3] overflow-hidden mb-6 bg-zinc-900">
                <img 
                  src={movie.image} 
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="w-16 h-16 rounded-full border-2 border-[#dc2626] flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <span className="text-[#dc2626] text-xs uppercase tracking-widest">View</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="font-serif text-2xl text-white group-hover:text-[#dc2626] transition-colors">
                    {movie.title}
                  </h3>
                  <span className="text-xs tracking-widest text-zinc-500">{movie.year}</span>
                </div>
                <p className="text-sm text-zinc-400 font-light">{movie.director}</p>
                <div className="h-[1px] w-full bg-zinc-800 my-4 transform origin-left group-hover:scale-x-100 transition-transform duration-700" />
                <p className="text-sm text-zinc-500 line-clamp-2 leading-relaxed">
                  {movie.description}
                </p>
                <div className="pt-2">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#dc2626] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-2">
                    Read More <div className="w-8 h-[1px] bg-[#dc2626]" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Footer */}
      <footer className="mt-32 px-8 lg:px-16 pt-16 border-t border-zinc-900 flex flex-col items-center justify-center text-center">
        <div className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center mb-8">
          <div className="w-3 h-3 bg-zinc-700 rounded-full" />
        </div>
        <p className="font-serif text-xl text-zinc-500 italic mb-4">"Cinema is a matter of what's in the frame and what's out."</p>
        <div className="text-xs uppercase tracking-widest text-zinc-600">
          © {new Date().getFullYear()} Cinemate Prestige
        </div>
      </footer>
    </div>
  );
}
