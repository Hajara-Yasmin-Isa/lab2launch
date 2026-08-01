# lab2launch.illinois.edu

Static site for Lab2Launch, the graduate deep-tech entrepreneurship community at
Illinois CS. Served by GitHub Pages from this repository; `CNAME` maps the custom domain.

## Layout

```
index.html            home
events.html           upcoming + past events
team.html             core team + faculty advisor
assets/css/site.css   the whole stylesheet, design tokens at the top
assets/js/site.js     reveal-on-scroll, nothing else
assets/favicon.svg
images/team/          headshots, 640px JPEG
```

No build step, no dependencies. Edit the HTML and push.

## Preview locally

```
python3 -m http.server 8777
```

Then open http://localhost:8777. Hard-reload (Cmd+Shift+R) after CSS edits — browsers
cache `site.css` aggressively.

## Design system

**Colour** — Illini Orange `#FF5F05` and Illini Blue `#13294B` are the official university
primaries and carry the page. The neutrals (`--paper`, `--slate`, `--rule`, `--navy-deep`)
are blue-tinted greys chosen to sit with them. All of it is one `:root` block at the top
of `site.css`.

**Type** — Archivo for display, Newsreader for body, IBM Plex Mono for labels and dates,
loaded from Google Fonts. To self-host, put the families in `assets/fonts/` and replace
the `<link>` in each page's `<head>`.

**Motion** — `.rise` elements fade up when scrolled into view, honouring
`prefers-reduced-motion`. Add the class to any block that should animate in.

## Editing notes

- **New event** — copy an `<li>` inside `<ul class="events">` in `events.html`. The orange
  chip on the right is the speaker's venture; keep it to a couple of words.
- **New team member** — copy an `<article class="person">` in `team.html`. Resize the photo
  first: `sips -s format jpeg -Z 640 -s formatOptions 80 in.png --out out.jpg`.
- **New event format** — copy an `<article>` inside `<div class="offer">` in `index.html`.
  The grid is `auto-fit`, so it reflows on its own.
- Every page needs an `<h1>`. Use `class="sr-only"` if it shouldn't be visible.

## Known gaps

- **Laude Institute** is a text lockup, not their logo. With permission to use the mark,
  drop the file in `images/` and swap the `.sponsor__mark` anchor in `index.html`.
- **Upcoming events** is an empty state. Replace the `.notice` block in `events.html` when
  something is scheduled.
- **"The route off campus"** — a fourth event-format card, commented out in `index.html`
  because introductions to mentors and funders are an outcome, not a format. Re-home it if
  you do make those introductions.
- The site says **"Illinois CS"** everywhere except the hero paragraph, which spells out
  "the University of Illinois Urbana-Champaign".

## Contact

hisa2@illinois.edu · janveja2@illinois.edu · tonyhong@illinois.edu
