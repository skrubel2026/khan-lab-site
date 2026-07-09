/*
  ============================================================
  STUDENT ROSTER — edit this file to add or update students.
  ============================================================

  HOW TO ADD A NEW STUDENT:
  1. Copy one of the objects below (the { ... } block).
  2. Paste it inside the STUDENTS array (anywhere between the [ and ]).
  3. Fill in the fields. Leave "end" as null if the student is still
     currently working in the lab.
  4. The "id" field becomes the verification link, e.g.:
       id: "afsana-rahman-2023"
     produces the link:
       verify.html?id=afsana-rahman-2023
     Use lowercase, hyphens instead of spaces, no special characters.
     Make sure every id is unique.
  5. Save the file and push it to GitHub (or re-upload it) — no other
     file needs to change.

  FIELD GUIDE:
  - status:      "current" or "alumni"
  - role:        e.g. "MS Research Student", "Undergraduate Thesis
                 Student", "PhD Candidate", "Research Assistant"
  - start / end: "YYYY-MM" format, e.g. "2022-01". Use null for "end"
                 if the student is still active.
  - outcome:     Where they went after (only for alumni) — grad school,
                 job, etc. Leave as "" if not applicable / not yet known.
  - summary:     2-3 sentences on what they actually worked on.
  - achievements: array of short strings — publications, awards,
                 presentations. Use an empty array [] if none yet.
*/

const STUDENTS = [
  {
    id: "1912668049",
    name: "Iftekhar Parvez Enan",
    status: "alumni",
    role: "Undergraduate Thesis Student",
    project: "Screening of spondias mombin for lipid lowering activity",
    start: "2024-09",
    end: "2026-03",
    outcome: "MS Student",
    summary:
      "Worked on characterizing bioactive compounds from local plant extracts, with a focus on lipid lowering screening against resistant bacterial strains. Contributed to method development for the lab's extraction protocol.",
    achievements: [
      "Co-authored paper in [Advancements in Life Sciences] (2026)",
      "Poster Award, [Conference Name] 2026"
    ]
  },
  {
    id: "example-current-2024",
    name: "Example Student Two (replace me)",
    status: "current",
    role: "Undergraduate Thesis Student",
    project: "Formulation and stability testing of a novel topical delivery system",
    start: "2024-02",
    end: null,
    outcome: "",
    summary:
      "Currently investigating formulation stability under varying temperature and humidity conditions, working toward an undergraduate thesis on topical drug delivery systems.",
    achievements: []
  }
];
