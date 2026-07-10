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
                 if it's not tied to a specific student. Can include
                 more than one id if multiple lab students worked on it.
  - venue:       Journal, conference, or award name.
  - year:        Four-digit year as a string, e.g. "2023".
  - type:        "journal", "conference", or "award" — controls the
                 small label shown next to the entry.
  - link:        URL to the paper/DOI/abstract, or "" if none.
*/

const PUBLICATIONS = [
  {
    title: "The Constituents of Phyllanthus emblica Fruit Ameliorate Hyperlipidemia Through the Modulation of SREBPs, HMG-CoA Reductase, and LDL Receptor Pathway",
    authors: "Kuddus, S.A., et al., Khan, F.",
    studentIds: ["1621130073"],
    venue: "Scientifica (Wiley)",
    year: "2025",
    type: "journal",
    link: "https://onlinelibrary.wiley.com/doi/full/10.1155/sci5/7941857"
  },
  {
    title: "Champion, Poster Exhibition",
    authors: "Kuddus, S.A.",
    studentIds: ["1621130073"],
    venue: "2nd International Conference on Genomics, Nanotechnology and Bioengineering (ICGNB), North South University",
    year: "2022",
    type: "award",
    link: ""
  },
  {
    title: "Rice bran extract ameliorates dyslipidemia through the modulation of LDL-receptor, ApoA1, and ApoB100 proteins",
    authors: "Kuddus, S.A., et al.",
    studentIds: ["1621130073"],
    venue: "ICDD 2022",
    year: "2022",
    type: "conference",
    link: ""
  },
  {
    title: "Extract of Syzygium cumini seeds can prevent high-fat diet-induced hyperglycemia by controlling GLUT4 gene expression",
    authors: "Kuddus, S.A., et al.",
    studentIds: ["1621130073"],
    venue: "ICDD 2022",
    year: "2022",
    type: "conference",
    link: ""
  },
  {
    title: "Diet-induced adipogenesis in rat can be inhibited by Phyllanthus emblica fruit extract",
    authors: "Kuddus, S.A., et al.",
    studentIds: ["1621130073"],
    venue: "ICGNB 2022",
    year: "2022",
    type: "conference",
    link: ""
  },
  {
    title: "Ethanolic extract of Citrus sinensis peel can ameliorate carbamazepine-induced dyslipidemia in Wistar rats by modulating low-density lipoprotein receptor",
    authors: "Kuddus, S.A., et al.",
    studentIds: ["1621130073"],
    venue: "ICGNB 2022",
    year: "2022",
    type: "conference",
    link: ""
  },
  {
    title: "Dillenia indica Fruit Extract Suppressed Diet-induced Obesity",
    authors: "Kuddus, S.A., et al.",
    studentIds: ["1621130073"],
    venue: "Current Nutrition & Food Science",
    year: "2021",
    type: "journal",
    link: "https://www.ingentaconnect.com/content/ben/cnf/2021/00000017/00000004/art00011"
  },
  {
    title: "Antioxidant-rich Tamarindus indica L. leaf extract reduced high-fat diet-induced obesity in rat through modulation of gene expression",
    authors: "Kuddus, S.A., et al., Khan, F.",
    studentIds: ["1621130073"],
    venue: "Clinical Phytoscience (Springer Nature)",
    year: "2020",
    type: "journal",
    link: "https://link.springer.com/article/10.1186/s40816-020-00213-9"
  },
  {
    title: "Cinnamic acid ameliorates diet-induced hyperlipidemia in Wistar rats through antioxidant and gene expression modulatory effects",
    authors: "Kuddus, S.A., Enan, I.P., et al.",
    studentIds: ["1621130073", "1912668049"],
    venue: "Advancements in Life Sciences",
    year: "2026",
    type: "journal",
    link: "https://www.submission.als-journal.com/index.php/ALS/article/view/3958"
  },
  {
    title: "Effect of polymer concentration on the release of naproxen from enteric coated sustained release tablets",
    authors: "Kuddus, S.A., et al.",
    studentIds: ["1621130073"],
    venue: "J. Bio. Exp. Pharm",
    year: "2023",
    type: "journal",
    link: "https://www.journalbep.com/hubfs/Articles%20File%20-%20vol1%20issue%201/Article%205.pdf"
  }
];
