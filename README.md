# F. Khan Lab — Website

A free, static website for Dr. Ferdous Khan's research lab: profile, research
focus, and a searchable roster of current and former students — each with a
shareable verification link for recommendation letters and CVs.

## Files

```
lab-site/
├── index.html            Home page — profile & research focus (edit text directly)
├── students.html         Roster page (auto-generated from students-data.js)
├── publications.html     Publications & awards page (auto-generated)
├── verify.html           Verification certificate page (auto-generated)
├── css/style.css         All styling
├── js/
│   ├── students-data.js      ← EDIT to add/update students
│   ├── publications-data.js  ← EDIT to add papers, talks, awards
│   ├── roster.js             Rendering logic (no need to touch)
│   └── publications.js       Rendering logic (no need to touch)
└── README.md
```

## Adding a publication or award

Open `js/publications-data.js`, copy an existing entry, fill in the fields
(see the comments at the top of that file). If it involves a student, add
their `id` from `students-data.js` to the `studentIds` array — their name
will automatically link to their verification page.

## Adding or updating a student

Open `js/students-data.js`. Copy one of the existing entries, paste it into
the `STUDENTS` array, and fill in the fields. Full instructions are in the
comments at the top of that file. Save, then redeploy (see below).

Every student's `id` becomes their verification link:

```
yoursite.com/verify.html?id=afsana-rahman-2023
```

Dr. Khan (or you) can paste that link directly into a recommendation letter,
CV, or email footer.

## Editing the home page

`index.html` has `<!-- EDIT ME -->` comments marking the placeholder text
(bio, research focus areas, contact email). Everything else in that file is
layout/structure — safe to leave alone.

## Deploying for free (GitHub Pages)

1. Create a new GitHub repository (e.g. `khan-lab-site`), public.
2. Upload all the files in this folder to that repository, keeping the
   same folder structure (`css/`, `js/`, etc.).
3. In the repo, go to **Settings → Pages**.
4. Under "Source," choose the `main` branch and `/ (root)` folder, then Save.
5. GitHub will give you a live URL, typically:
   `https://<your-username>.github.io/khan-lab-site/`
6. To update the site later: edit the file (e.g. `js/students-data.js`),
   commit the change (GitHub's web editor works fine — click the file,
   click the pencil icon, edit, commit). The live site updates automatically
   within a minute or two.

No hosting cost, no server to maintain, no database.

## Optional: custom domain

If you'd like something like `khanlab.com` instead of the default GitHub
URL, you can buy a domain (~$10–15/year) and point it at GitHub Pages via
a CNAME file — GitHub's docs walk through this step by step. Entirely
optional; the default `github.io` URL works perfectly well for
verification links.
