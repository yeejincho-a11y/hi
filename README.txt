TIER 1 TUTORING SCHOOL - EXAMPLE WEBSITE
==========================================

This is a teaching example for an HTML / CSS / JavaScript class.
It is a small, multi-page business website for a fictional math
tutoring school called "Tier 1".

HOW TO OPEN IT
---------------
1. Unzip this folder anywhere on your computer.
2. Open the folder and double-click "index.html".
   It will open in your default web browser (e.g. Google Chrome).
3. To edit the code, right-click any .html, .css, or .js file and
   choose "Open with" > Notepad (or your text editor). Save your
   changes, then refresh the page in Chrome to see them.

FOLDER STRUCTURE
-----------------
index.html      - Home page
about.html      - About page (mission + teacher profiles)
courses.html    - Courses page (UK Math, US Math, IGCSE, A-Level, SAT)
articles.html   - Articles / blog listing page
career.html     - Career / job openings page
contact.html    - Contact page with a working form validation demo

css/style.css   - All styling for every page (one shared file)
js/script.js    - All JavaScript for every page (one shared file):
                    1. Mobile menu toggle button
                    2. Auto-updating copyright year in the footer
                    3. Contact form validation (contact.html)

images/         - All illustrations and icons, as .svg files
                  (SVG opens like any image in the browser, but the
                  file itself is readable text - a nice bonus example
                  of "code that draws a picture" for students who are
                  curious.)

TEACHING NOTES
---------------
- Every page shares the exact same <header> and <footer> markup and
  the same style.css / script.js files. This is a good moment to
  explain why real websites reuse one stylesheet/script across pages
  instead of copy-pasting styles into every file.
- style.css uses CSS variables (--navy, --blue, --gold, etc.) defined
  once in :root - a simple way to show students how to re-theme an
  entire site by changing a few lines.
- script.js is intentionally small and commented so students can read
  every line: menu toggle, dynamic footer year, and simple form
  validation with a regular expression are three classic beginner-
  friendly JS demos.
- The site is fully responsive (try resizing the Chrome window, or
  open Chrome DevTools device toolbar) thanks to CSS Grid, Flexbox,
  and one @media query for the mobile navigation menu.

All content (school name, courses, contact details, teacher names,
articles) is fictional and created for this classroom example.
