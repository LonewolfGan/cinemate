import { Helmet } from "react-helmet-async";

export const SITE_NAME = "Cinemate";
export const SITE_URL = "https://cinemate.replit.app";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;
export const DEFAULT_DESCRIPTION =
  "Discover, explore, and fall in love with cinema. Premium movie discovery powered by TMDB — browse popular films, top rated classics, and upcoming releases.";

/**
 * SEO component — drop anywhere in the page tree.
 *
 * Props:
 *  title       string   Page title (appended with "— Cinemate")
 *  description string   Meta description (≤ 155 chars ideal)
 *  image       string   Absolute URL for og:image / twitter:image
 *  url         string   Path (e.g. "/movies/278") for canonical + og:url
 *  type        string   og:type — "website" | "video.movie"
 *  noindex     bool     Add noindex,nofollow robots meta
 *  jsonLd      object   JSON-LD schema object (serialised automatically)
 */
export const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_OG_IMAGE,
  url = "/",
  type = "website",
  noindex = false,
  jsonLd,
}) => {
  const fullTitle = title
    ? `${title} — ${SITE_NAME}`
    : `${SITE_NAME} · Premium Cinema Discovery`;
  const canonicalUrl = `${SITE_URL}${url}`;
  const truncatedDesc =
    description?.length > 155 ? description.slice(0, 152) + "…" : description;

  return (
    <Helmet>
      {/* ── Primary ─────────────────────────────── */}
      <title>{fullTitle}</title>
      <meta name="description" content={truncatedDesc} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex ? (
        <meta name="robots" content="noindex,nofollow" />
      ) : (
        <meta name="robots" content="index,follow" />
      )}

      {/* ── Open Graph ──────────────────────────── */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={truncatedDesc} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="en_US" />

      {/* ── Twitter Card ────────────────────────── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@cinemate" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={truncatedDesc} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={fullTitle} />

      {/* ── JSON-LD ─────────────────────────────── */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};
