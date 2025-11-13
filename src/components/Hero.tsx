import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import cardPreview from "@/assets/card-preview.svg";
const Hero = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("bramble-visited");
    if (!hasVisited) {
      // First visit - fade in during reveal
      setTimeout(() => {
        setIsVisible(true);
      }, 1500);
    } else {
      // Already visited - show immediately
      setIsVisible(true);
    }
  }, []);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/early-access?email=${encodeURIComponent(email)}`);
  };
  return <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-opacity duration-1000" style={{
      opacity: isVisible ? 1 : 0
    }}>
        <div className="space-y-8 text-left">
          <h1 className="text-5xl leading-tight font-bold text-slate-950 md:text-7xl">
            AI Rostering Built for Home Care
          </h1>
          
          <p className="text-xl text-slate-950 md:text-2xl">Generate optimised rotas that cut travel and idle time while negotiating real-world constraints, so you spend less time on admin and more time caring for people.</p>

          <form onSubmit={handleSubmit} className="relative max-w-sm">
            <Input type="email" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} required className="w-full h-14 pr-40 pl-6 bg-background border-border text-foreground placeholder:text-muted-foreground rounded-full text-base" />
            <Button type="submit" className="absolute right-1 top-1 h-12 bg-primary/30 backdrop-blur-md border border-primary/30 text-foreground hover:bg-primary/40 hover:border-primary/40 font-semibold px-8 rounded-full transition-all duration-300">
              Start now
            </Button>
          </form>
        </div>

        <div className="flex items-center justify-center lg:justify-end">
          <img src={cardPreview} alt="BrambleAI Roster Preview" className="w-full max-w-md animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }} />
        </div>
      </div>
    </div>;
};
export default Hero;