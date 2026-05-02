/**
 * Cinemate — Sitemap Generator
 * Run: node scripts/generate-sitemap.js
 * Runs automatically before `npm run build` via the "prebuild" script.
 *
 * Fetches popular, top-rated, and upcoming movie IDs from TMDB and writes
 * a complete sitemap.xml to public/sitemap.xml.
 */

const fs = require("fs");
const path = require("path");
const https = require("https");

// Load .env file if present (no external deps required)
const envPath = path.resolve(__dirname, "../.env");
if (fs.existsSync(envPath)) {
  const envLines = fs.readFileSync(envPath, "utf8").split("\n");
  for (const line of envLines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim().replace(/^['"]|['"]$/g, "");
    if (!process.env[key]) process.env[key] = val;
  }
}

const SITE_URL = "https://cinematelone.netlify.app";
const API_KEY = process.env.REACT_APP_API_KEY;
const OUTPUT = path.resolve(__dirname, "../public/sitemap.xml");

if (!API_KEY) {
  console.warn("⚠  REACT_APP_API_KEY not set — generating static-only sitemap.");
}

// Static pages
const STATIC_PAGES = [
  { url: "/",                 changefreq: "daily",   priority: "1.0" },
  { url: "/movies/popular",  changefreq: "daily",   priority: "0.9" },
  { url: "/movies/top",      changefreq: "weekly",  priority: "0.9" },
  { url: "/movies/upcoming", changefreq: "weekly",  priority: "0.9" },
];

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(e); }
      });
    }).on("error", reject);
  });
}

async function fetchMovieIds() {
  if (!API_KEY) return [];
  const endpoints = [
    `/movie/popular`,
    `/movie/top_rated`,
    `/movie/upcoming`,
    `/discover/movie`,
  ];
  const seen = new Set();
  const ids = [];
  await Promise.all(
    endpoints.map(async (ep) => {
      try {
        // Fetch pages 1 and 2 for each endpoint (~80 movies each)
        const [p1, p2] = await Promise.all([
          get(`https://api.themoviedb.org/3${ep}?page=1&language=en-US&api_key=${API_KEY}`),
          get(`https://api.themoviedb.org/3${ep}?page=2&language=en-US&api_key=${API_KEY}`),
        ]);
        for (const movie of [...(p1.results || []), ...(p2.results || [])]) {
          if (movie.id && !seen.has(movie.id)) {
            seen.add(movie.id);
            ids.push({ id: movie.id, date: movie.release_date || "" });
          }
        }
      } catch (e) {
        console.warn(`  Could not fetch ${ep}:`, e.message);
      }
    })
  );
  return ids;
}

function xmlEscape(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function urlEntry({ loc, lastmod, changefreq, priority }) {
  return [
    "  <url>",
    `    <loc>${xmlEscape(loc)}</loc>`,
    lastmod   ? `    <lastmod>${lastmod}</lastmod>` : null,
    changefreq ? `    <changefreq>${changefreq}</changefreq>` : null,
    priority   ? `    <priority>${priority}</priority>` : null,
    "  </url>",
  ].filter(Boolean).join("\n");
}

async function generate() {
  console.log("🎬  Cinemate sitemap generator starting…");

  const today = new Date().toISOString().split("T")[0];
  const movieIds = await fetchMovieIds();
  console.log(`  Found ${movieIds.length} unique movie pages from TMDB.`);

  const entries = [
    // Static pages
    ...STATIC_PAGES.map((p) =>
      urlEntry({ loc: `${SITE_URL}${p.url}`, lastmod: today, changefreq: p.changefreq, priority: p.priority })
    ),
    // Dynamic movie detail pages
    ...movieIds.map(({ id, date }) =>
      urlEntry({
        loc: `${SITE_URL}/movies/${id}`,
        lastmod: date || today,
        changefreq: "monthly",
        priority: "0.7",
      })
    ),
  ];

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"',
    '        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9',
    '          http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">',
    "",
    entries.join("\n\n"),
    "",
    "</urlset>",
  ].join("\n");

  fs.writeFileSync(OUTPUT, xml, "utf8");

  const total = STATIC_PAGES.length + movieIds.length;
  console.log(`✅  Sitemap written to public/sitemap.xml (${total} URLs)`);
}

generate().catch((err) => {
  console.error("❌  Sitemap generation failed:", err);
  process.exit(1);
});
