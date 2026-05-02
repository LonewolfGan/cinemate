import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const PageNotFound = () => {
  useTitle({ title: "Page Not Found" });

  return (
    <main style={{ minHeight: "90vh" }}>
      <div className="flex flex-col items-center justify-center text-center px-6 py-32 space-y-10">
        {/* Decorative element */}
        <div className="relative">
          <span
            className="font-serif text-[clamp(120px,25vw,240px)] font-bold leading-none pointer-events-none select-none"
            style={{ color: "transparent", WebkitTextStroke: "1px rgba(220,38,38,0.2)" }}
          >
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="space-y-3">
              <div className="w-6 h-[1px] bg-[#dc2626] mx-auto" />
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#dc2626]">Scene Missing</p>
              <div className="w-6 h-[1px] bg-[#dc2626] mx-auto" />
            </div>
          </div>
        </div>

        <div className="space-y-3 max-w-sm">
          <h1 className="font-serif text-3xl text-white italic">This page cut to black.</h1>
          <p className="text-xs text-zinc-600 leading-relaxed uppercase tracking-widest">
            The page you're looking for doesn't exist or has been removed from the reel.
          </p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-3 px-8 py-3.5 text-white text-[11px] tracking-[0.2em] uppercase font-semibold transition-colors"
          style={{ backgroundColor: "#dc2626" }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = "#b91c1c"}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = "#dc2626"}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Cinemate
        </Link>
      </div>
    </main>
  );
};
