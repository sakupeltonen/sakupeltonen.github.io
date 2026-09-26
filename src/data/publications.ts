export interface PublicationLink {
  label: string;
  href: string;
}

export interface PublicationImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Publication {
  slug: string;
  title: string;
  authors: string[];
  venue: string;
  venueShort: string;
  year: number;
  month?: string;
  note?: string;
  selected: boolean;
  selectedOrder?: number;
  summary?: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  rowImage?: PublicationImage;
  imageLayout?: "default" | "sat" | "sat-aug" | "grapharc" | "random-probing" | "lgsm" | "generating-trees" | "geometry-generation" | "power-graph";
  links: PublicationLink[];
}

export const publications: Publication[] = [
  {
    slug: "gradient-based-sat-solvers",
    title: "On the Fundamentals of Gradient-Based SAT Solvers",
    authors: ["Nikolaos Karalias", "Saku Peltonen", "Nikita Kostin", "Stefanie Jegelka"],
    venue: "40th Annual Conference on Neural Information Processing Systems",
    venueShort: "NeurIPS",
    year: 2026,
    month: "December",
    selected: false,
    image: "/images/gradient-based-sat-solvers.png",
    imageAlt: "Variable–clause graph for a resolution-based eight-cycle SAT instance",
    imageWidth: 761,
    imageHeight: 761,
    imageLayout: "sat-aug",
    links: [
      { label: "BibTeX", href: "https://disco.ethz.ch/publications/5297/bibtex" },
    ],
  },
  {
    slug: "linearized-graph-sequence-models",
    title: "From Message-Passing to Linearized Graph Sequence Models",
    authors: ["Joël Mathys", "Basil Rohner", "Saku Peltonen", "Roger Wattenhofer"],
    venue: "5th Learning on Graphs Conference",
    venueShort: "LoG",
    year: 2026,
    month: "November",
    selected: false,
    image: "/images/lgsm.png",
    imageAlt: "Six schematic blocks showing graph-sequence processing stages",
    imageWidth: 1184,
    imageHeight: 850,
    imageLayout: "lgsm",
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2605.12358" },
    ],
  },
  {
    slug: "random-probing",
    title: "Random Probing for Structural Self-Interactions in Graph Neural Networks",
    authors: ["Saku Peltonen", "H. Çağrı Bilgi", "Kubilay Atasu"],
    venue: "5th Learning on Graphs Conference",
    venueShort: "LoG",
    year: 2026,
    month: "November",
    note: "Oral",
    selected: true,
    selectedOrder: 3,
    summary: "We introduce DIAL, a message-passing layer that uses randomized probing to expose diagonal graph-operator information, efficiently representing cycle counts, subgraph centrality, and heat-kernel signatures.",
    image: "/images/random-probing.png",
    imageAlt: "Two graph diagrams comparing ordinary message passing with randomized probing",
    imageWidth: 721,
    imageHeight: 1074,
    rowImage: {
      src: "/images/random-probing-row.png",
      alt: "Graph diagram with highlighted cycles revealed by randomized probing",
      width: 721,
      height: 543,
    },
    imageLayout: "random-probing",
    links: [
      { label: "MLG workshop version", href: "https://mlg-europe.github.io/2026/submissions/350/Submission/MLG26-submission.pdf" },
      { label: "BibTeX", href: "https://disco.ethz.ch/publications/5284/bibtex" },
    ],
  },
  {
    slug: "grapharc",
    title: "GraphARC: A Comprehensive Benchmark for Graph-Based Abstract Reasoning",
    authors: ["Saku Peltonen", "August Bøgh Rønberg", "Andreas Plesner", "Roger Wattenhofer"],
    venue: "32nd ACM SIGKDD Conference on Knowledge Discovery and Data Mining",
    venueShort: "KDD",
    year: 2026,
    month: "August",
    selected: true,
    selectedOrder: 2,
    summary: "We introduce GraphARC, a scalable, ARC-inspired benchmark for few-shot reasoning on graphs. Its tasks span node classification, edge prediction, and graph generation. We evaluate how well LLMs infer and execute these tasks from examples.",
    image: "/images/grapharc.png",
    imageAlt: "A GraphARC transformation from one colored tree to another",
    imageWidth: 772,
    imageHeight: 1198,
    imageLayout: "grapharc",
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2605.31031" },
      { label: "Code", href: "https://github.com/sakupeltonen/graph-arc" },
      { label: "DOI", href: "https://doi.org/10.1145/3770855.3817591" },
      { label: "BibTeX", href: "https://disco.ethz.ch/publications/5237/bibtex" },
    ],
  },
  {
    slug: "geometric-inductive-biases",
    title: "Geometric Inductive Biases for Diffusion-Based Graph Generation",
    authors: ["Florian Grötschla", "Saku Peltonen", "Anisha Mohamed Sahabdeen", "Roger Wattenhofer"],
    venue: "2nd Workshop on Geometry-grounded Representation Learning and Generative Modeling at ICLR",
    venueShort: "GRaM @ ICLR",
    year: 2026,
    month: "April",
    selected: false,
    image: "/images/geometry-aware-generation.png",
    imageAlt: "A graph moving through a hyperbolic latent space during diffusion-based generation",
    imageWidth: 318,
    imageHeight: 326,
    imageLayout: "geometry-generation",
    links: [
      { label: "Paper", href: "https://openreview.net/pdf?id=XJ1RrCLjlV" },
    ],
  },
  {
    slug: "autoregressive-frontier-expansion",
    title: "Autoregressive Frontier Expansion: Growing Trees with Graph Machine Learning",
    authors: ["Umer Gupta", "Saku Peltonen", "Martin Ritzert"],
    venue: "2nd Workshop on Geometry-grounded Representation Learning and Generative Modeling at ICLR",
    venueShort: "GRaM @ ICLR",
    year: 2026,
    month: "April",
    selected: false,
    image: "/images/generating-trees.webp",
    imageAlt: "A stylized branching tree illustration",
    imageWidth: 660,
    imageHeight: 604,
    imageLayout: "generating-trees",
    links: [
      { label: "Paper", href: "https://openreview.net/pdf?id=IvyUooRkCR" },
    ],
  },
  {
    slug: "gnn-sat-expressivity",
    title: "On the Expressive Power of GNNs for Boolean Satisfiability",
    authors: ["Saku Peltonen", "Roger Wattenhofer"],
    venue: "14th International Conference on Learning Representations",
    venueShort: "ICLR",
    year: 2026,
    month: "April",
    selected: true,
    selectedOrder: 1,
    summary: "We show that even the full Weisfeiler–Leman hierarchy cannot always separate satisfiable from unsatisfiable formulas, connect this limit to sequential neural solvers, and contrast several important SAT families.",
    image: "/images/sat-expressivity.png",
    imageAlt: "Literal–clause graph for a Boolean satisfiability instance",
    imageWidth: 975,
    imageHeight: 523,
    imageLayout: "sat",
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2602.08745" },
      { label: "Code", href: "https://github.com/sakupeltonen/sat-expressivity" },
      { label: "OpenReview", href: "https://openreview.net/forum?id=Q01JX3CuDx" },
      { label: "BibTeX", href: "https://disco.ethz.ch/publications/5226/bibtex" },
    ],
  },
  {
    slug: "power-graph-symmetry-breaking",
    title: "Distributed Symmetry Breaking on Power Graphs via Sparsification",
    authors: ["Yannic Maus", "Saku Peltonen", "Jara Uitto"],
    venue: "42nd ACM Symposium on Principles of Distributed Computing",
    venueShort: "PODC",
    year: 2023,
    month: "June",
    selected: false,
    image: "/images/power-graph-symmetry-breaking.webp",
    imageAlt: "Graph with solid original edges and dashed power-graph connections, with two nodes highlighted in green",
    imageWidth: 1200,
    imageHeight: 563,
    imageLayout: "power-graph",
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2302.06878" },
    ],
  },
];

export const selectedPublications = publications
  .filter((publication) => publication.selected)
  .sort((a, b) => (a.selectedOrder ?? 99) - (b.selectedOrder ?? 99));

export const publicationPageOrderByYear: Record<number, string[]> = {
  2026: [
    "gradient-based-sat-solvers",
    "grapharc",
    "random-probing",
    "linearized-graph-sequence-models",
    "gnn-sat-expressivity",
    "autoregressive-frontier-expansion",
    "geometric-inductive-biases",
  ],
};
