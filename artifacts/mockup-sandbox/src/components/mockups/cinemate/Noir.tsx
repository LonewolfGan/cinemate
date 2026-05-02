import React from "react";
import { Search, Bell, Play, Plus, Star, ChevronRight, Menu } from "lucide-react";
import "./_noir.css";

const MOVIES = [
  {
    id: 1,
    title: "Alien: Romulus",
    description: "While scavenging the deep ends of a derelict space station, a group of young space colonizers come face to face with the most terrifying life form in the universe.",
    image: "https://picsum.photos/seed/alien/400/600",
    rating: "7.4",
    year: "2024",
    duration: "1h 59m",
    tags: ["Horror", "Sci-Fi"]
  },
  {
    id: 2,
    title: "Deadpool & Wolverine",
    description: "A listless Wade Wilson toils away in civilian life. His days as the morally flexible mercenary, Deadpool, behind him.",
    image: "https://picsum.photos/seed/deadpool/400/600",
    rating: "8.0",
    year: "2024",
    duration: "2h 7m",
    tags: ["Action", "Comedy"]
  },
  {
    id: 3,
    title: "Longlegs",
    description: "FBI Agent Lee Harker is assigned to an unsolved serial killer case that takes unexpected turns, revealing a personal connection.",
    image: "https://picsum.photos/seed/longlegs/400/600",
    rating: "7.1",
    year: "2024",
    duration: "1h 41m",
    tags: ["Horror", "Thriller"]
  },
  {
    id: 4,
    title: "MaXXXine",
    description: "In 1980s Hollywood, adult film star and aspiring actress Maxine Minx finally gets her big break. But a mysterious killer stalks the starlets of Los Angeles.",
    image: "https://picsum.photos/seed/maxxxine/400/600",
    rating: "6.8",
    year: "2024",
    duration: "1h 44m",
    tags: ["Horror", "Crime"]
  },
  {
    id: 5,
    title: "Speak No Evil",
    description: "A family is invited to spend a whole weekend in a lonely home in the countryside, but as the weekend progresses, they realize that a dark side lies within.",
    image: "https://picsum.photos/seed/speaknoevil/400/600",
    rating: "7.0",
    year: "2024",
    duration: "1h 50m",
    tags: ["Horror", "Drama"]
  },
  {
    id: 6,
    title: "Strange Darling",
    description: "Nothing is what it seems when a twisted one-night stand spirals into a serial killer's vicious murder spree.",
    image: "https://picsum.photos/seed/strangedarling/400/600",
    rating: "7.6",
    year: "2024",
    duration: "1h 36m",
    tags: ["Thriller", "Horror"]
  }
];

export function Noir() {
  return (
    <div className="cinemate-noir min-h-screen w-full flex flex-col relative overflow-x-hidden">
      {/* Navigation */}
      <nav className="noir-glass-nav fixed top-0 w-full z-50 px-6 py-4 flex items-center justify-between transition-all duration-300">
        <div className="flex items-center gap-12">
          <a href="#" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <span className="text-white">Cine</span>
            <span className="text-[#0d9488]">mate</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#" className="text-white hover:text-[#0d9488] transition-colors relative after:content-[''] after:absolute after:-bottom-5 after:left-0 after:w-full after:h-[2px] after:bg-[#0d9488]">Home</a>
            <a href="#" className="hover:text-white transition-colors">Popular</a>
            <a href="#" className="hover:text-white transition-colors">Top Rated</a>
            <a href="#" className="hover:text-white transition-colors">Upcoming</a>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex relative group">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0d9488] transition-colors" />
            <input 
              type="text" 
              placeholder="Search movies..." 
              className="bg-black/40 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm w-64 focus:outline-none focus:border-[#0d9488]/50 focus:bg-black/60 transition-all placeholder:text-slate-500"
            />
          </div>
          <button className="text-slate-300 hover:text-white transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-[#fbbf24] rounded-full border border-[#030014]"></span>
          </button>
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#0d9488] to-purple-600 p-[2px] cursor-pointer">
            <img src="https://picsum.photos/seed/avatar/100/100" alt="Profile" className="w-full h-full rounded-full object-cover border border-black" />
          </div>
          <button className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] w-full flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/dunehero/1920/1080" 
            alt="Hero Background" 
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 noir-hero-gradient-side z-10"></div>
          <div className="absolute inset-0 noir-hero-gradient z-10"></div>
        </div>

        <div className="container relative z-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-3 text-sm font-semibold tracking-wider text-[#fbbf24] uppercase">
              <span className="px-2 py-1 bg-[#fbbf24]/10 rounded border border-[#fbbf24]/20">Featured</span>
              <span>New Release</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white drop-shadow-lg">
              Dune: Part Two
            </h1>
            
            <div className="flex items-center gap-4 text-sm text-slate-300 font-medium">
              <span className="flex items-center gap-1 text-[#fbbf24]"><Star className="w-4 h-4 fill-current" /> 8.8</span>
              <span>•</span>
              <span>2024</span>
              <span>•</span>
              <span>2h 46m</span>
              <span>•</span>
              <span className="px-2 py-0.5 border border-white/20 rounded text-xs">Sci-Fi</span>
            </div>
            
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl drop-shadow">
              Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.
            </p>
            
            <div className="flex items-center gap-4 pt-4">
              <button className="bg-white text-black px-8 py-3.5 rounded-full font-bold flex items-center gap-2 hover:bg-slate-200 transition-colors">
                <Play className="w-5 h-5 fill-current" />
                Play Now
              </button>
              <button className="noir-glass text-white px-8 py-3.5 rounded-full font-bold flex items-center gap-2 hover:bg-white/10 transition-colors">
                <Plus className="w-5 h-5" />
                My List
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative z-20 px-6 md:px-12 lg:px-24 pb-24 -mt-20 space-y-16">
        
        {/* Continue Watching */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              Continue Watching
            </h2>
          </div>
          <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 -mx-6 px-6 md:mx-0 md:px-0">
            {[1, 2, 3].map((item) => (
              <div key={`cw-${item}`} className="flex-none w-72 md:w-80 group cursor-pointer">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-3">
                  <img src={`https://picsum.photos/seed/cw${item}/600/338`} alt="Movie scene" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <Play className="w-6 h-6 text-white fill-current ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
                    <div className="h-full bg-[#0d9488]" style={{ width: `${Math.random() * 60 + 20}%` }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-white truncate w-56">
                      {item === 1 ? "Oppenheimer" : item === 2 ? "The Batman" : "Blade Runner 2049"}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      {item === 1 ? "1h 24m remaining" : item === 2 ? "45m remaining" : "2h 10m remaining"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* New Releases Grid */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white relative inline-block">
              New Releases
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#0d9488] rounded-full"></span>
            </h2>
            <button className="text-slate-400 hover:text-white flex items-center gap-1 text-sm font-medium transition-colors">
              Explore All <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {MOVIES.map((movie) => (
              <div key={movie.id} className="noir-card noir-glass rounded-xl overflow-hidden group flex flex-col relative h-[380px]">
                <div className="relative h-64 overflow-hidden shrink-0">
                  <img 
                    src={movie.image} 
                    alt={movie.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs font-bold text-[#fbbf24] border border-white/10 flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" /> {movie.rating}
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <button className="w-12 h-12 rounded-full bg-[#0d9488] flex items-center justify-center shadow-[0_0_20px_rgba(13,148,136,0.6)] transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <Play className="w-5 h-5 text-white fill-current ml-1" />
                    </button>
                  </div>
                </div>
                
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-bold text-white text-base leading-tight mb-1 line-clamp-1 group-hover:text-[#0d9488] transition-colors">{movie.title}</h3>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2">
                    <span>{movie.year}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                    <span>{movie.duration}</span>
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2 mb-3 flex-grow">{movie.description}</p>
                  <button className="text-xs font-semibold text-white uppercase tracking-wider hover:text-[#0d9488] transition-colors w-full text-left mt-auto">
                    Read more →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-white/10 bg-[#02000a] py-12 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-2xl font-bold tracking-tighter flex items-center gap-2 mb-4">
              <span className="text-white">Cine</span>
              <span className="text-[#0d9488]">mate</span>
            </a>
            <p className="text-slate-400 text-sm max-w-sm mb-6">
              Your premium destination for immersive cinematic experiences. Discover, track, and dive into the world of film.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-[#0d9488] transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-[#0d9488] transition-colors">Top Rated</a></li>
              <li><a href="#" className="hover:text-[#0d9488] transition-colors">New Releases</a></li>
              <li><a href="#" className="hover:text-[#0d9488] transition-colors">Coming Soon</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-[#0d9488] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#0d9488] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#0d9488] transition-colors">Cookie Preferences</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>© 2024 Cinemate. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#0d9488] transition-colors">Discord</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
