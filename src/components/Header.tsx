import { Link } from "react-router-dom";
import BrambleLogo from "@/assets/bramble-logo.svg";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={BrambleLogo} alt="BrambleAI" className="h-12 cursor-pointer" />
        </Link>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://bramble-care.vercel.app/" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Sign in
          </a>
          <Link 
            to="/early-access" 
            className="text-sm font-medium px-6 py-2.5 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 text-foreground hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
          >
            Get Early Access
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
