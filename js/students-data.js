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
    id: "1621130073",
    name: "Syed Abdul Kuddus",
    status: "alumni",
    role: "MS Research Student",
    project:
      "Preparation and evaluation of Metformin hydrochloride sustained release tablets using Methocel K15 M and Kollidon SR as release modifying agents",
    start: "2017-06",
    end: "2018-07",
    outcome: "Laboratory Officer, North South University, Department of Pharmaceutical Sciences",
    summary:
      "This study explored the use of a Methocel K15 M and Kollidon SR polymer blend as a release-modifying agent for Metformin hydrochloride sustained-release tablets. These polymers were chosen for being nontoxic, inexpensive, and widely available, with minimal known adverse health or environmental impact — supporting better patient tolerance with a lower risk of side effects.",
    achievements: [
      'Antioxidant-rich Tamarindus indica L. leaf extract reduced high-fat diet-induced obesity in rat through modulation of gene expression — Clinical Phytoscience, Springer Nature. <a href="https://link.springer.com/article/10.1186/s40816-020-00213-9" target="_blank" rel="noopener">View paper</a>',
      'Dillenia indica fruit extract suppressed diet-induced obesity — Current Nutrition & Food Science. <a href="https://www.ingentaconnect.com/content/ben/cnf/2021/00000017/00000004/art00011" target="_blank" rel="noopener">View paper</a>',
      'Cinnamic acid ameliorates diet-induced hyperlipidemia in Wistar rats through antioxidant and gene expression modulatory effects — Advancements in Life Sciences. <a href="https://www.submission.als-journal.com/index.php/ALS/article/view/3958" target="_blank" rel="noopener">View paper</a>',
      'The constituents of Phyllanthus emblica fruit ameliorate hyperlipidemia through the modulation of SREBPs, HMG-CoA reductase, and LDL receptor pathway — Scientifica, Wiley, 2025. <a href="https://onlinelibrary.wiley.com/doi/full/10.1155/sci5/7941857" target="_blank" rel="noopener">View paper</a>',
      'Additional journal publication with the lab. <a href="https://www.journalbep.com/hubfs/Articles%20File%20-%20vol1%20issue%201/Article%205.pdf" target="_blank" rel="noopener">View paper</a>',
      "Champion, Poster Exhibition — 2nd International Conference on Genomics, Nanotechnology and Bioengineering (ICGNB), North South University, 2022",
      "Conference poster: Rice bran extract ameliorates dyslipidemia through the modulation of LDL-receptor, ApoA1, and ApoB100 proteins — ICDD, 2022",
      "Conference poster: Extract of Syzygium cumini seeds can prevent high-fat diet-induced hyperglycemia by controlling GLUT4 gene expression — ICDD, 2022",
      "Conference poster: Diet-induced adipogenesis in rat can be inhibited by Phyllanthus emblica fruit extract — ICGNB, 2022",
      "Conference poster: Ethanolic extract of Citrus sinensis peel can ameliorate carbamazepine-induced dyslipidemia in Wistar rats by modulating low-density lipoprotein receptor — ICGNB, 2022"
    ]
  },
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
