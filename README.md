# Dad's Birthday Letter

A small static webpage — a letter to Dad with a message and photo from Calvin, Serena, Jasper, and Oliver.

## Files

```
dads-birthday/
├── index.html        # the page: intro + 4 messages
├── style.css         # colors, fonts, layout
├── images/           # one placeholder per person
│   ├── calvin.svg
│   ├── serena.svg
│   ├── jasper.svg
│   └── oliver.svg
└── README.md
```

## Preview it locally

Just double-click `index.html` to open it in your browser. No build step, no install.

## Edit the text

Open `index.html` and look for the `<!-- EDIT: ... -->` comments. Replace the
lorem ipsum inside each `<p class="message__text">` with the real message.
The opening line is near the top in `<p class="letter__intro">`.

## Add real photos

1. Drop each photo into the `images/` folder (e.g. `calvin.jpg`).
2. Tip: resize to ~1600px wide and save as JPG so the page loads fast.
3. In `index.html`, update the matching `src`, e.g.:
   `<img class="message__photo" src="images/calvin.svg" ...>`
   becomes
   `<img class="message__photo" src="images/calvin.jpg" ...>`

Photos are shown as circular avatars — square-ish photos crop best.

## Deploy to Netlify (free, ~30 seconds)

1. Go to https://app.netlify.com/drop
2. Drag the whole `dads-birthday` folder onto the page.
3. You'll get a live URL (like `something.netlify.app`) to share. Done!

To update later: make your edits, then drag the folder onto Netlify Drop again
(or, if you make a free account, connect it once and it redeploys automatically).
