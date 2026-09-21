import videoInterview from "@/assets/video-interview.jpg";
import openBook from "@/assets/open-book.jpg";
import childrens from "@/assets/childrens-spread.jpg";
import spines from "@/assets/book-spines.jpg";
import editingDesk from "@/assets/editing-desk.jpg";
import blogManuscript from "@/assets/blog-manuscript.jpg";
import blogBookshop from "@/assets/blog-bookshop.jpg";

export type FilmSlide = {
  title: string;
  author: string;
  kicker: string;
  runtime: string;
  poster: string;
  alt: string;
};

/** Placeholder author films. Replace `poster` with real video sources later. */
export const FILMS: FilmSlide[] = [
  {
    title: "Eleven years of notes, one spine",
    author: "Marisol Vega · Saltwater Inheritance",
    kicker: "Author film",
    runtime: "2:41",
    poster: videoInterview,
    alt: "An author being filmed during an interview in a warm library",
  },
  {
    title: "Inside the editing room",
    author: "With senior editor Ruth Ahearn",
    kicker: "Craft series",
    runtime: "3:12",
    poster: editingDesk,
    alt: "An editor's desk with manuscript pages and a lamp",
  },
  {
    title: "Drawing the Lantern Whale",
    author: "Tomás Berger · Marla and the Lantern Whale",
    kicker: "Illustration diary",
    runtime: "1:58",
    poster: childrens,
    alt: "A children's book spread showing a child and a whale",
  },
  {
    title: "Launch week, hour by hour",
    author: "Priya Raman · Founder's Weather",
    kicker: "Marketing film",
    runtime: "4:05",
    poster: spines,
    alt: "Hardcover books with gold foil spines on a shelf",
  },
];

export const VALUES = [
  {
    title: "You keep everything",
    body: "Rights, ISBN, royalties and files are all yours. Penova is a services partner, not a rights-acquiring publisher, and the contract says so in plain English.",
  },
  {
    title: "One team per book",
    body: "A single editor, designer and strategist stay with your title from first read to launch week. No handovers, no ticket queues.",
  },
  {
    title: "Fixed price, written scope",
    body: "You approve a schedule and a number before a word is touched. No hourly creep, no invoices that arrive as a surprise.",
  },
  {
    title: "Read first, advise second",
    body: "Every engagement opens with a senior editor reading your pages and telling you honestly what the book needs, even if that is less than you expected.",
  },
];

export const POSTS = [
  {
    title: "What a developmental edit actually changes",
    excerpt:
      "Structure, pacing, point of view: the three things a good developmental editor fixes before a single sentence is polished.",
    category: "Editorial",
    date: "12 August 2026",
    read: "6 min read",
    img: blogManuscript,
    alt: "Manuscript pages with editing marks beside a fountain pen",
  },
  {
    title: "Designing a cover that survives a thumbnail",
    excerpt:
      "Most readers meet your book at two centimetres wide. Here is how we test covers at the size that actually sells them.",
    category: "Design",
    date: "29 July 2026",
    read: "5 min read",
    img: spines,
    alt: "Hardcover books with gold foil spines on a shelf",
  },
  {
    title: "The launch that keeps selling in month seven",
    excerpt:
      "Bestseller week is the easy part. The campaign structure that keeps a title moving long after the confetti settles.",
    category: "Marketing",
    date: "03 July 2026",
    read: "8 min read",
    img: blogBookshop,
    alt: "A bookshop window display of hardcover books at dusk",
  },
];

export { openBook };
