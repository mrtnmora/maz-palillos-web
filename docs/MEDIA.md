# MAZ media handoff

Paths below are relative to the repository root. Do not commit placeholder files
with video or PDF extensions: unavailable assets are deliberately not linked.

| Asset | Destination |
| --- | --- |
| Industrial video, WebM | `public/video/maz-proceso.webm` |
| Industrial video, MP4 (H.264) | `public/video/maz-proceso.mp4` |
| Video poster | `public/images/maz-proceso-poster.webp` |
| Product originals | `src/assets/images/products/` |
| Official catalog | `public/documents/catalogo-maz.pdf` |
| Existing technical sheet (preserved) | `public/palo-elotero.pdf` |

## Activate the hero

1. Export a silent 15–30 second loop. Start at 1280×720, 24–30 fps, and compare
   quality with a 1920×1080 version only if needed. Aim for roughly 2–5 MB per
   format; verify on a real mobile connection. No 4K source files in public.
2. Place both formats at the paths above. Enable MP4 fast-start when exporting.
3. Export a representative landscape poster, ideally 1600 px wide and below
   200 KB. Keep important machinery in the central area for mobile cropping.
4. Set `site.media.posterEnabled` and `site.media.videoEnabled` to `true` in
   `src/data/site.ts`, then rebuild. If offering only one video format, remove
   the unavailable `<source>` in `HeroVideo.astro`.

The current fallback uses an existing MAZ product photograph; it does not pretend
to show the factory. The poster/fallback stays behind the video. Source URLs are
attached by the small client script only when reduced motion and data saver are
off. Playback is muted, looped, inline, and automatic. Browser-native controls
are hidden; an accessible pause button lets visitors stop the moving background.
Without JavaScript, or when playback fails, the static image and all content work.

## Products and catalog

All 12 original photos were copied into `src/assets/images/products/` so Astro can
generate appropriately sized WebP files. Edit `src/data/products.ts` to map new
images to their products (the current helper matches filename prefixes).
Dimensions, packaging and optional technical details must be confirmed by MAZ.
Keep descriptive alternative text when changing product names and images.

After adding the approved catalog, set `site.catalog.available = true`. The
download then appears automatically. The existing product technical sheet is
available independently; it is not represented as the complete catalog.

## Before public launch

Confirm the process sequence, marketing copy, product specifications and contact
channels. Replace the typographic MAZ+ treatment and provisional M favicon with
approved brand files if supplied. Add real process photography when available.
Set the production `SITE_URL` in the build environment to generate canonical and
Open Graph URLs. No production domain is assumed.
