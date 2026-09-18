import mk1 from "@/assets/mk1.png";
import mk2 from "@/assets/mk2.png";
import mk3 from "@/assets/mk3.png";
import mk4 from "@/assets/mk4.png";
import mk5 from "@/assets/mk5.png";
import mk6 from "@/assets/mk6.png";
import mk7 from "@/assets/mk7.png";
import mk8 from "@/assets/mk8.png";

const BOOKS = [
  { id: 1, title: "Romance", img: mk1 },
  { id: 2, title: "Thriller", img: mk2 },
  { id: 3, title: "Fantasy", img: mk3 },
  { id: 4, title: "Sci-Fi", img: mk4 },
  { id: 5, title: "Horror", img: mk5 },
  { id: 6, title: "Mystery", img: mk6 },
  { id: 7, title: "Historical Fiction", img: mk7 },
  { id: 8, title: "Self-Help", img: mk8 },
];

export function BookCarousel() {
  // Duplicate array for seamless infinite looping
  const scrollItems = [...BOOKS, ...BOOKS, ...BOOKS];

  return (
    <div className="w-full">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-33.3333%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      <div className="text-center mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
          Who we work with
        </p>
        <h2 className="text-3xl md:text-5xl font-serif text-navy-deep">
          Across fiction and non-fiction.
        </h2>
      </div>

      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_100px,_black_calc(100%-100px),transparent_100%)]">
        <div className="flex w-max animate-marquee space-x-4 md:space-x-6 pb-6 pt-4">
          {scrollItems.map((book, idx) => (
            <div key={`${book.id}-${idx}`} className="w-[180px] sm:w-[210px] md:w-[240px] lg:w-[260px] shrink-0">
              <div className="group relative overflow-hidden rounded-xl border border-border/60 shadow-md aspect-[4/5] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-gold/50 cursor-pointer">
                <img
                  src={book.img}
                  alt={book.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/15 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <h3 className="text-sm md:text-base font-semibold text-white tracking-wider">
                    {book.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
