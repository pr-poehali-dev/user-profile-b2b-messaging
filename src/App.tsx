
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Messenger from "./pages/Messenger";
import NotFound from "./pages/NotFound";
import PhoneShell from "./components/PhoneShell";
import MessengerMobile from "./components/MessengerMobile";

const queryClient = new QueryClient();

function MobilePreview() {
  return (
    <div className="min-h-screen bg-[#DDDBD4] flex items-center justify-center py-12">
      <div className="flex flex-col items-center gap-4">
        <span className="text-[12px] font-medium text-[#8B8B8B] tracking-wide uppercase font-golos">Мобильный мессенджер</span>
        <PhoneShell>
          <MessengerMobile />
        </PhoneShell>
      </div>
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Messenger />} />
          <Route path="/mobile" element={<MobilePreview />} />
          <Route path="/profile" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;