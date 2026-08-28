CUSTOM FONTS — what to put here
================================

The letters use two custom fonts:

  • Calvin & Serena  ->  JMH Typewriter (Thin)
  • Jasper & Oliver  ->  SimpleHandmade

These are NOT system fonts and are NOT on Google Fonts, so the actual font
files must live in this folder for the page to display them for everyone.
Until you add them, the page falls back to a monospace font (Calvin/Serena)
and a handwriting font (Jasper/Oliver).

------------------------------------------------------------
STEP 1 — download the fonts
------------------------------------------------------------
  • JMH Typewriter:  https://www.dafont.com/jmh-typewriter.font
  • SimpleHandmade:  search dafont.com for "Simple Handmade"
  (Both are free for personal use — a birthday page qualifies.)

------------------------------------------------------------
STEP 2 — rename the files EXACTLY as below and drop them in this folder
------------------------------------------------------------
The CSS looks for these names (any one format works; .ttf or .otf is fine):

  JMHTypewriter-Thin.ttf     (or .otf / .woff2 / .woff)
  SimpleHandmade.ttf         (or .otf / .woff2 / .woff)

So this folder should end up looking like:

  fonts/
    JMHTypewriter-Thin.ttf
    SimpleHandmade.ttf
    README.txt

------------------------------------------------------------
STEP 3 — refresh the page
------------------------------------------------------------
That's it. No code changes needed — the @font-face rules in style.css
already point at these filenames.

TIP: .ttf/.otf work everywhere, but converting to .woff2 (e.g. at
https://cloudconvert.com/ttf-to-woff2) makes the page load faster. If you
add a .woff2, keep the same base name (JMHTypewriter-Thin.woff2).
