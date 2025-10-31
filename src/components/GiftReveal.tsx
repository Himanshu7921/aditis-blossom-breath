import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sword, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GiftReveal = () => {
  const [revealed, setRevealed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { toast } = useToast();

  const handleReveal = () => {
    setRevealed(true);
    setShowConfetti(true);
    
    toast({
      title: "🎉 Gift Revealed!",
      description: "The best gift is the bond we share!",
      duration: 5000,
    });

    // Hide confetti after animation
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-background via-secondary/20 to-background overflow-hidden japanese-pattern">
      {/* Confetti */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti-fall"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10%',
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${2 + Math.random()}s`,
              }}
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: [
                    'hsl(var(--nezuko-pink))',
                    'hsl(var(--accent))',
                    'hsl(var(--primary))',
                    'hsl(var(--sakura-medium))',
                  ][Math.floor(Math.random() * 4)],
                }}
              />
            </div>
          ))}
        </div>
      )}

      <div className="max-w-4xl w-full text-center space-y-12">
        {/* Title */}
        <div className="space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-primary font-cinzel drop-shadow-lg">
            Your Special Gift
          </h2>
          <p className="text-xl text-muted-foreground font-anime">
            A surprise crafted with friendship and joy ✨
          </p>
        </div>

        {/* Katana Button */}
        {!revealed && (
          <div className="animate-in zoom-in duration-700">
            <Button
              onClick={handleReveal}
              size="lg"
              className="group relative text-2xl px-16 py-10 rounded-full font-anime breathing-glow bg-gradient-to-r from-primary via-primary-glow to-primary hover:scale-110 transition-all duration-500 shadow-2xl border-2 border-white/30"
            >
              <Sword className="w-8 h-8 mr-4 group-hover:rotate-12 transition-transform duration-300" />
              Reveal Your Gift
              <Sparkles className="w-8 h-8 ml-4 group-hover:-rotate-12 transition-transform duration-300" />
            </Button>
          </div>
        )}

        {/* Revealed Gift */}
        {revealed && (
          <div className="animate-in fade-in zoom-in duration-1000 space-y-8">
            {/* Gift Box Illustration */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-40 h-40 bg-gradient-to-br from-accent to-flame rounded-3xl shadow-2xl animate-breathing-glow flex items-center justify-center border-4 border-white/30">
                  <Sparkles className="w-20 h-20 text-white" />
                </div>
                {/* Decorative ribbons */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-2 bg-white/90 rotate-45" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-2 bg-white/90 -rotate-45" />
              </div>
            </div>

            {/* Gift Message */}
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-4 border-primary/30 shadow-2xl">
              <div className="space-y-6">
                <p className="text-3xl md:text-4xl font-bold text-gradient-flame font-cinzel">
                  ⚔️ Activate: Total Concentration — Birthday Breathing!
                </p>
                
                <p className="text-xl md:text-2xl text-foreground font-anime leading-relaxed">
                  May every day power up your dreams
                  <br />
                  and every challenge fall before your determination.
                </p>

                <p className="text-2xl text-primary font-bold font-anime">
                  Have an epic year ahead, Aditi! 🌟
                </p>

                <div className="pt-6 border-t-2 border-primary/20">
                  <p className="text-lg text-muted-foreground italic">
                    "The bond between us will not be severed!"
                    <br />
                    <span className="text-sm">— Tanjiro Kamado</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GiftReveal;
