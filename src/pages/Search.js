import { useFetch } from "../hooks/useFetch";
import { Card } from "../components/Card";
import { SEO } from "../components/SEO";
import { useSearchParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${process.env.REACT_APP_API_KEY}`;
  const { movies, loading } = useFetch({ url });
  useTitle({ title: `Search: ${query}` });

  return (
    <main style={{ minHeight: "90vh" }}>
      {/* Search pages: noindex to avoid thin-content indexing */}
      <SEO
        title={`Search results for "${query}"`}
        description={`Find movies matching "${query}" on Cinemate. Browse posters, ratings, genres and more.`}
        url={`/search?q=${encodeURIComponent(query)}`}
        noindex
      />

      <div className="px-6 lg:px-14 pt-16 pb-12 border-b border-zinc-900">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-5 h-[1px] bg-[#dc2626]" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">Search Results</span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl text-white">
          {query}
        </h1>
        {!loading && (
          <p className="text-xs text-zinc-600 mt-3 uppercase tracking-widest">
            {movies.length > 0
              ? `${movies.length} film${movies.length !== 1 ? "s" : ""} found`
              : "No films found"}
          </p>
        )}
      </div>

      {loading ? (
        <div className="flex items-center justify-center" style={{ minHeight: "50vh" }}>
          <div className="text-center space-y-4">
            <div className="relative w-14 h-14 mx-auto">
              <div className="absolute inset-0 rounded-full border border-[#dc2626] animate-ping opacity-30" />
              <div className="absolute inset-0 rounded-full border border-[#dc2626] opacity-60" />
              <div className="absolute inset-[14px] rounded-full bg-[#dc2626]" />
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">Searching…</p>
          </div>
        </div>
      ) : movies.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center px-6 py-32 space-y-6">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border border-zinc-800" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-6 h-6 text-zinc-700" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
          </div>
          <p className="font-serif text-2xl text-zinc-600 italic">No results for "{query}"</p>
          <p className="text-xs text-zinc-700 uppercase tracking-widest">Try a different title or keyword</p>
        </div>
      ) : (
        <section className="px-6 lg:px-14 py-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-12">
            {movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
};
