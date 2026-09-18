import { Link } from "@tanstack/react-router";
import logo from "@/assets/Penova Publishers-03.png";
import logoOnNavy from "@/assets/Penova Publishers-04.png";
import { cn } from "@/lib/utils";

export function BrandLogo({
  onNavy = false,
  className,
  compact = false,
}: {
  onNavy?: boolean;
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link
      to="/"
      className={cn(
        "group flex shrink-0 items-center overflow-hidden leading-none",
        compact ? "h-16 w-48 sm:h-20 sm:w-56" : "h-20 w-60 sm:h-24 sm:w-64",
        className,
      )}
      aria-label="Penova Publishers home"
    >
      <img
        src={onNavy ? logoOnNavy : logo}
        alt="Penova Publishers logo"
        width={900}
        height={420}
        className={cn(
          "block w-full max-w-none shrink-0 object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]",
        )}
      />
    </Link>
  );
}
