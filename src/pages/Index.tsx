import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import GeometricBackground from "@/components/GeometricBackground";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  const location = useLocation();
  const [showExitTransition, setShowExitTransition] = useState(false);

  useEffect(() => {
    if (location.state?.showExitTransition) {
      setShowExitTransition(true);
      // Clear the state to prevent transition on page refresh
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <PageTransition isActive={showExitTransition} direction="exit" onComplete={() => setShowExitTransition(false)} />
      <GeometricBackground />
      <Header />
      <Hero />
      <footer className="relative z-10 pb-4 px-4">
        <p className="text-sm text-muted-foreground text-center">
          © Copyright 2025 BrambleAI Ltd. All rights reserved. Registered in England No. 16622787
        </p>
      </footer>
    </div>
  );
};

export default Index;
