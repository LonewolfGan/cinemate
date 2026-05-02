import React from "react";
import "./_editorial.css";
import { Search, Play } from "lucide-react";

export function Editorial() {
  const movies = [
    {
      title: "Anora",
      year: "2024",
      director: "Sean Baker",
      description: "A young sex worker from Brooklyn gets her chance at a Cinderella story when she meets and impulsively marries the son of an oligarch.",
      image: "https://picsum.photos/seed/anora/800/1200",
      rating: "98%",
      genre: "Comedy / Drama"
    },
    {
      title: "The Brutalist",
      year: "2024",
      director: "Brady Corbet",
      description: "Escaping post-war Europe, visionary architect László Tóth arrives in America to rebuild his life, his work, and his marriage.",
      image: "https://picsum.photos/seed/brutalist/800/1200",
      rating: "96%",
      genre: "Drama / History"
    },
    {
      title: "Nickel Boys",
      year: "2024",
      director: "RaMell Ross",
      description: "Based on the Pulitzer Prize-winning novel, chronicles the powerful friendship between two young Black teenagers navigating the harrowing trials of a reform school in Florida.",
      image: "https://picsum.photos/seed/nickelboys/800/1200",
      rating: "94%",
      genre: "Drama"
    },
    {
      title: "A Complete Unknown",
      year: "2024",
      director: "James Mangold",
      description: "At the Newport Folk Festival in 1965, a young Bob Dylan shakes up his act on the folk music scene by going electric.",
      image: "https://picsum.photos/seed/unknown/800/1200",
      rating: "89%",
      genre: "Biography / Music"
    },
    {
      title: "Conclave",
      year: "2024",
      director: "Edward Berger",
      description: "Cardinal Lawrence is tasked with running this covert process after the unexpected death of the beloved Pope.",
      image: "https://picsum.photos/seed/conclave/800/1200",
      rating: "92%",
      genre: "Thriller"
    },
    {
      title: "September 5",
      year: "2024",
      director: "Tim Fehlbaum",
      description: "During the 1972 Munich Olympics, an American sports broadcasting crew finds itself abruptly pivoting to cover a hostage crisis.",
      image: "https://picsum.photos/seed/september/800/1200",
      rating: "90%",
      genre: "Thriller / History"
    }
  ];

  return (
    <div className="editorial-root min-h-screen flex flex-col selection:bg-accent selection:text-white pb-20">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-8 border-b border-white/10 uppercase tracking-widest text-sm">
        <div className="flex items-center gap-12">
          <a href="#" className="font-display font-black text-3xl tracking-tighter text-white hover:text-accent transition-colors italic">CINEMATE</a>
          <div className="hidden md:flex gap-8 items-center text-white/70">
            <a href="#" className="hover:text-white transition-colors border-b-2 border-accent pb-1 text-white">Home</a>
            <a href="#" className="hover:text-white transition-colors">Popular</a>
            <a href="#" className="hover:text-white transition-colors">Top Rated</a>
            <a href="#" className="hover:text-white transition-colors">Upcoming</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-white/70 hover:text-white transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="bg-white text-black px-6 py-2 font-bold hover:bg-accent hover:text-white transition-colors">
            SUBSCRIBE
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="px-6 py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-white/10">
        <div className="md:col-span-8 flex flex-col justify-center">
          <p className="text-accent font-bold tracking-widest mb-4 uppercase">The New Standard</p>
          <h1 className="font-display text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter uppercase">
            Cinema <br/>
            <span className="italic font-light text-white/50">Unbound</span>
          </h1>
        </div>
        <div className="md:col-span-4 flex flex-col justify-end text-white/70 space-y-6">
          <p className="text-lg leading-relaxed">
            Exploring the bleeding edge of modern filmmaking. Reviews, retrospectives, and unapologetic critiques of the most essential cinema of our time.
          </p>
          <a href="#latest" className="inline-flex items-center gap-3 text-white uppercase tracking-widest text-sm font-bold hover:text-accent transition-colors w-fit border-b border-white/30 pb-1">
            Read the Issue
            <Search className="w-4 h-4 rotate-90" />
          </a>
        </div>
      </header>

      {/* Grid Section */}
      <main className="px-6 py-20" id="latest">
        <div className="flex items-end justify-between mb-16">
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter">In Focus</h2>
          <p className="text-white/50 uppercase tracking-widest text-sm hidden md:block">06 Selections</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-16">
          {movies.map((movie, i) => (
            <article 
              key={movie.title} 
              className={`group flex flex-col cursor-pointer ${i === 0 ? 'md:col-span-2 md:flex-row gap-8' : 'gap-6'}`}
            >
              <div className={`overflow-hidden relative ${i === 0 ? 'w-full md:w-1/2 aspect-[3/4]' : 'aspect-[2/3]'}`}>
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-color" />
                <img 
                  src={movie.image} 
                  alt={movie.title} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-20 bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-widest border border-white/20">
                  {movie.rating}
                </div>
              </div>
              
              <div className={`flex flex-col ${i === 0 ? 'md:w-1/2 justify-center' : ''}`}>
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/50 mb-4">
                  <span>{movie.year}</span>
                  <span className="w-1 h-1 bg-accent rounded-full" />
                  <span>{movie.director}</span>
                </div>
                
                <h3 className={`font-display font-bold uppercase tracking-tighter mb-4 ${i === 0 ? 'text-6xl md:text-8xl' : 'text-4xl'}`}>
                  {movie.title}
                </h3>
                
                <div className="text-accent text-sm uppercase tracking-widest font-bold mb-6">
                  {movie.genre}
                </div>
                
                <p className="text-white/70 leading-relaxed mb-8 flex-grow">
                  {movie.description}
                </p>
                
                <div className="mt-auto flex items-center gap-4 text-white uppercase tracking-widest text-sm font-bold group-hover:text-accent transition-colors w-fit border-b border-white/30 pb-1">
                  Read Review
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-white/10 px-6 py-20 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="space-y-6 max-w-sm">
          <div className="font-display font-black text-4xl tracking-tighter italic">CINEMATE</div>
          <p className="text-white/50 text-sm leading-relaxed">
            An unapologetic exploration of modern cinema. Published quarterly in print, updated daily online.
          </p>
        </div>
        <div className="flex gap-16 text-sm uppercase tracking-widest">
          <div className="space-y-4 flex flex-col">
            <span className="text-white/30 font-bold mb-2">Sections</span>
            <a href="#" className="hover:text-accent transition-colors">Reviews</a>
            <a href="#" className="hover:text-accent transition-colors">Features</a>
            <a href="#" className="hover:text-accent transition-colors">Interviews</a>
            <a href="#" className="hover:text-accent transition-colors">Essays</a>
          </div>
          <div className="space-y-4 flex flex-col">
            <span className="text-white/30 font-bold mb-2">Company</span>
            <a href="#" className="hover:text-accent transition-colors">About</a>
            <a href="#" className="hover:text-accent transition-colors">Masthead</a>
            <a href="#" className="hover:text-accent transition-colors">Subscribe</a>
            <a href="#" className="hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
