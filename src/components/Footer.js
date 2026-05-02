import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-zinc-900 bg-[#060606] px-6 lg:px-14 pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div className="md:col-span-2 space-y-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="relative w-6 h-6">
              <div className="absolute inset-0 rounded-full border border-[#dc2626]" />
              <div className="absolute inset-[5px] bg-[#dc2626] rounded-full" />
            </div>
            <span className="font-serif text-2xl font-bold tracking-wider text-white">CINEMATE</span>
          </Link>
          <p className="text-zinc-600 text-xs leading-relaxed max-w-xs">
            A prestige platform for discerning cinephiles. Curated discovery, in-depth details, and the world of film at your fingertips.
          </p>
          <p className="text-[10px] text-zinc-700 uppercase tracking-widest">
            Powered by TMDB
          </p>
        </div>

        {/* Explore */}
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-600 mb-5">Explore</p>
          <ul className="space-y-3 text-xs text-zinc-500">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/movies/popular" className="hover:text-white transition-colors">Popular</Link></li>
            <li><Link to="/movies/top" className="hover:text-white transition-colors">Top Rated</Link></li>
            <li><Link to="/movies/upcoming" className="hover:text-white transition-colors">Upcoming</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-600 mb-5">Legal</p>
          <ul className="space-y-3 text-xs text-zinc-500">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cookie Preferences</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-700">
          © {new Date().getFullYear()} Cinemate · All Rights Reserved
        </p>
        <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-zinc-600">
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
          <a href="https://letterboxd.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Letterboxd</a>
        </div>
      </div>
    </footer>
  );
};
