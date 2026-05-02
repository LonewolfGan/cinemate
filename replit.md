# Cinemate

A premium React movie browsing app powered by the TMDB API, redesigned with a Dark Luxury cinema aesthetic.

## Stack
- **Frontend**: React (Create React App), Tailwind CSS, React Router v7
- **API**: TMDB (The Movie Database) — `REACT_APP_API_KEY` env var required
- **Fonts**: Playfair Display (serif headings) + Inter (body)
- **Port**: 5000 (configured via `HOST=0.0.0.0`, `PORT=5000`, `DANGEROUSLY_DISABLE_HOST_CHECK=true`)

## Design System
- **Background**: `#080808` (near-black)
- **Accent**: `#dc2626` (red)
- **Typography**: Playfair Display for display headings, Inter for UI
- **Style**: Dark Luxury — prestige cinema magazine aesthetic with letterbox bars, film grain overlay, animated red ticker, hover card overlays

## Architecture

### Key Files
| File | Purpose |
|---|---|
| `src/App.js` | Root — grain overlay wrapper + Header/Routes/Footer |
| `src/index.css` | Global styles, fonts, Tailwind, card animations, ticker |
| `src/components/Header.js` | Sticky dark nav with red ticker strip, logo, search |
| `src/components/Footer.js` | Dark footer with brand, nav links, social |
| `src/components/Card.js` | Movie card — poster, rating badge, genre pill, hover overlay |
| `src/hooks/useFetch.js` | TMDB data fetcher (movies list + single movie) |
| `src/pages/MovieList.js` | Hero (first film) + card grid for all list pages |
| `src/pages/MovieDetails.js` | Cinematic detail page with backdrop hero + stats |
| `src/pages/Search.js` | Search results grid |
| `src/pages/PageNotFound.js` | Styled 404 with "scene missing" copy |

### Routes
| Path | Component |
|---|---|
| `/` | MovieList — `/discover/movie` |
| `/movies/popular` | MovieList — `/movie/popular` |
| `/movies/top` | MovieList — `/movie/top_rated` |
| `/movies/upcoming` | MovieList — `/movie/upcoming` |
| `/movies/:id` | MovieDetails |
| `/search?q=...` | Search |

## Canvas Mockups
Three design variants were explored on Canvas before graduation:
- `artifacts/mockup-sandbox/src/components/mockups/cinemate/DarkLuxury.tsx` ← **graduated to main app**
- `artifacts/mockup-sandbox/src/components/mockups/cinemate/Editorial.tsx`
- `artifacts/mockup-sandbox/src/components/mockups/cinemate/Noir.tsx`

## Environment Variables
- `REACT_APP_API_KEY` — TMDB API key (required)
