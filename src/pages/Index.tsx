import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import SurpriseCard from "@/components/SurpriseCard";
import MemoryWall from "@/components/MemoryWall";
import GiftReveal from "@/components/GiftReveal";
import SakuraPetals from "@/components/SakuraPetals";

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  const handleEnter = () => {
    setShowContent(true);
    // Smooth scroll to next section
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <div className="relative">
      {/* Floating Sakura Petals */}
      <SakuraPetals />

      {/* Hero Landing */}
      <HeroSection onEnter={handleEnter} />

      {/* Content Sections - Only show after entering */}
      {showContent && (
        <div className="animate-in fade-in duration-1000">
          <SurpriseCard />
          <MemoryWall />
          <GiftReveal />
          
          {/* Footer */}
          <footer className="relative py-12 px-4 text-center bg-gradient-to-t from-primary/10 to-transparent border-t-2 border-primary/20">
            <div className="space-y-4">
              <p className="text-xl md:text-2xl font-anime text-transparent bg-gradient-to-r from-primary via-nezuko-pink to-accent bg-clip-text font-bold">
                Made with kindness, courage, and friendship 💫
              </p>
              <p className="text-sm md:text-base text-muted-foreground">
                Happy Birthday, Aditi!
              </p>
              <p className="text-xs text-muted-foreground/70 italic">
                Website crafted by your friend — inspired by Demon Slayer ⚔️🌸
              </p>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Index;
