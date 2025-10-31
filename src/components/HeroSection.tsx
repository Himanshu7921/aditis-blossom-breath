import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-sakura-bg.jpg";

interface HeroSectionProps {
  onEnter: () => void;
}

const HeroSection = ({ onEnter }: HeroSectionProps) => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/40" />
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 space-y-8 max-w-4xl">
        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-2xl font-cinzel tracking-wide animate-in fade-in slide-in-from-bottom-4 duration-1000">
          🎂 Happy Birthday
          <br />
          <span className="text-transparent bg-gradient-to-r from-pink-300 via-pink-200 to-white bg-clip-text">
            Aditi!
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/90 font-anime drop-shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          Wishing you strength, courage, and smiles
          <br />
          <span className="text-pink-200">just like a true Hashira of happiness! ✨</span>
        </p>

        {/* CTA Button */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <Button 
            onClick={onEnter}
            size="lg"
            className="text-xl px-12 py-8 rounded-full font-anime breathing-glow bg-gradient-to-r from-primary to-primary-glow hover:scale-110 transition-all duration-300 shadow-2xl border-2 border-white/30 text-white"
          >
            Enter the Surprise 🌸
          </Button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
