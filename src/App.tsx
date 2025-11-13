import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import EarlyAccess from "./pages/EarlyAccess";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SubProcessors from "./pages/SubProcessors";
import SecurityMeasures from "./pages/SecurityMeasures";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const getBasename = () => {
  if (typeof window === "undefined") {
    return "/";
  }

  const baseHref = new URL(import.meta.env.BASE_URL, window.location.href).pathname;
  if (baseHref === "/") {
    return "/";
  }

  return baseHref.endsWith("/") ? baseHref.slice(0, -1) : baseHref;
};

const App = () => {
  const basename = getBasename();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={basename === "/" ? undefined : basename}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/early-access" element={<EarlyAccess />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/subprocessors" element={<SubProcessors />} />
            <Route path="/security-measures" element={<SecurityMeasures />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
