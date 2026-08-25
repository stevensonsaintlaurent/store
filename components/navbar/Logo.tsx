import Link from "next/link";
import { VscCode } from "react-icons/vsc";

const Logo = () => {
  return (
    <Link
      href="/"
      className="inline-flex size-9 shrink-0 items-center justify-center rounded-4xl border border-transparent text-sm font-medium transition-all outline-none hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
      aria-label="Go to homepage"
    >
      <VscCode className="h-6 w-6" />
    </Link>
  );
};

export default Logo;
