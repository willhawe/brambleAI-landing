import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import GeometricBackground from "@/components/GeometricBackground";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
const EarlyAccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  useEffect(() => {
    const emailParam = searchParams.get("email");
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [searchParams]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = {
        email,
        fullName,
        company
      };

      console.log('Submitting to Google Apps Script:', formData);

      const response = await fetch('https://script.google.com/macros/s/AKfycbwfMAUNeCKwQABa2vfW9ISqL2wDRWmTV7zbr3hdGZyf4I6LvdpOkxycjz-1VqLPlWxU/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      console.log('Response received:', response);

      toast.success("Thank you! We'll be in touch soon with early access details.");
      setFullName("");
      setCompany("");
      setLoading(false);

      // Start transition animation after 1 second
      setTimeout(() => {
        setIsTransitioning(true);
      }, 1000);

      // Navigate when shape covers screen (1s delay + 0.6s enter animation)
      setTimeout(() => {
        navigate("/", { state: { showExitTransition: true } });
      }, 1600);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Something went wrong. Please try again.");
      setLoading(false);
    }
  };
  return <div className="relative min-h-screen bg-background overflow-hidden">
      <PageTransition isActive={isTransitioning} direction="enter" onComplete={() => {}} />
      <GeometricBackground animate={false} />
      <Header />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Placeholder text */}
          <div className="space-y-6 text-left">
            <h2 className="text-4xl font-bold md:text-5xl text-slate-950">
              Join the Future of Home Care Rostering
            </h2>
            <p className="text-lg md:text-xl text-slate-950">
              Be among the first to experience AI-powered rostering that understands the unique challenges of home care.
            </p>
            <ul className="space-y-4 text-slate-950">
              <li className="flex items-start gap-3">
                <span className="text-2xl text-slate-950">✓</span>
                <span className="text-lg text-slate-950">Reduce travel time and costs with intelligent route optimisation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span className="text-lg">Balance complex constraints while maintaining quality care</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span className="text-lg">Save hours on administration        </span>
              </li>
            </ul>
          </div>

          {/* Right side - Form */}
          <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <div className="bg-background/50 backdrop-blur-md border border-border/50 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get Early Access</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email address</Label>
                  <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required className="h-12 bg-background border-border text-foreground" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-foreground">Full name</Label>
                  <Input id="fullName" type="text" value={fullName} onChange={e => setFullName(e.target.value)} required className="h-12 bg-background border-border text-foreground" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground">Company</Label>
                  <Input id="company" type="text" value={company} onChange={e => setCompany(e.target.value)} required className="h-12 bg-background border-border text-foreground" />
                </div>

                <Button type="submit" disabled={loading} className="w-full h-12 bg-primary/30 backdrop-blur-md border border-primary/30 text-foreground hover:bg-primary/40 hover:border-primary/40 font-semibold rounded-full transition-all duration-300">
                  {loading ? "Submitting..." : "Get Early Access"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer className="relative z-10 pb-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-4 text-sm text-muted-foreground">
          <span>© BrambleAI</span>
          <a href="/privacy-policy" className="hover:text-foreground transition-colors">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>;
};
export default EarlyAccess;