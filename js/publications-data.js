/*
  ============================================================
  PUBLICATIONS & LAB OUTPUT — edit this file to add entries.
  ============================================================

  HOW TO ADD A NEW PUBLICATION:
  1. Copy one of the objects below.
  2. Paste it into the PUBLICATIONS array.
  3. Fill in the fields — see guide below.
  4. Newest entries should go at the TOP of the array (the page
     shows them in the order you list them).

  FIELD GUIDE:
  - title:       Full paper/poster/award title.
  - authors:     Author list as a plain string, e.g.
                 "Rahman, A., Khan, F." — put the lab student's name
                 first if they were first author, which is the usual
                 convention.
  - studentIds:  Array of student "id" values (from students-data.js)
                 who worked on this — this links the publication to
                 their verification record automatically. Leave as []
                 if it's not tied to a specific student.
  - venue:       Journal, conference, or award name.
  - year:        Four-digit year as a string, e.g. "2023".
  - type:        "journal", "conference", or "award" — controls the
                 small label shown next to the entry.
  - link:        URL to the paper/DOI/abstract, or "" if none.
*/

const PUBLICATIONS = [
  {
    title: "Cinnamic acid ameliorates diet-induced hyperlipidemia in Wistar rats through antioxidant and gene expression modulatory effects",
    authors: "Kuddus SA, Fatema R, Sifat AM, Tamanna T, Islam F, Kamal NM, Karim R, Enan IP, Alam MA, Khan F.",
    studentIds: ["22120261856"],
    venue: "[Advancements in Life Sciences]",
    year: "2026",
    type: "journal",
    link: "https://submission.als-journal.com/index.php/ALS/article/view/3958"
  },
  {
    title: "Example: Best Poster Award — [Conference Name] 2022",
    authors: "Rahman, A.",
    studentIds: ["example-alumni-2023"],
    venue: "[Conference Name]",
    year: "2022",
    type: "award",
    link: ""
  }
];
