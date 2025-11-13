import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BrambleLogo from "@/components/BrambleLogo";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-4 py-4 sm:px-6 sm:py-6 transition-all duration-300 ease-out",
        "bg-background/70 backdrop-blur-md border-b border-white/5",
        isAtTop ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-full pointer-events-none",
      )}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <Link to="/" className="flex items-center shrink-0" aria-label="BrambleAI home">
          <BrambleLogo className="h-9 w-auto sm:h-10 md:h-12" />
        </Link>
        
        <div className="flex items-center gap-3 sm:gap-4">
          <a 
            href="https://bramble-care.vercel.app/" 
            className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap shrink-0"
          >
            Sign in
          </a>
          <Link 
            to="/early-access" 
            className="text-xs sm:text-sm font-semibold px-4 py-2 sm:px-6 sm:py-2.5 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 text-foreground hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 hover:shadow-lg whitespace-nowrap shrink-0"
          >
            Get Early Access
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
