import { Card } from "@/components/ui/card";
import chibiNezuko from "@/assets/chibi-nezuko.png";

const SurpriseCard = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 japanese-pattern">
      <Card className="max-w-4xl w-full p-8 md:p-12 bg-card/95 backdrop-blur-sm shadow-2xl border-4 border-primary/20 unfold-scroll transform-gpu">
        {/* Decorative Border */}
        <div className="border-4 border-double border-primary/30 rounded-lg p-8 md:p-12 relative">
          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-accent rounded-tl-lg" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-accent rounded-tr-lg" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-accent rounded-bl-lg" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-accent rounded-br-lg" />

          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Chibi Nezuko Image */}
            <div className="flex-shrink-0 animate-in zoom-in duration-700 delay-300">
              <img 
                src={chibiNezuko} 
                alt="Chibi Nezuko" 
                className="w-48 h-48 object-contain drop-shadow-2xl animate-breathing-glow"
              />
            </div>

            {/* Message Content */}
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-primary font-cinzel animate-in fade-in slide-in-from-right-4 duration-700">
                Dear Aditi,
              </h2>
              
              <div className="space-y-4 text-lg md:text-xl text-foreground/90 font-noto animate-in fade-in slide-in-from-right-4 duration-700 delay-200">
                <p className="leading-relaxed">
                  On your special day, may your spirit shine{" "}
                  <span className="text-gradient-flame font-bold">brighter than Tanjiro's blade</span>
                  {" "}and your smile be as{" "}
                  <span className="text-transparent bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text font-bold">
                    pure as Nezuko's heart
                  </span>
                  !
                </p>

                <p className="leading-relaxed italic text-muted-foreground">
                  May this year bring you endless adventures, strength to overcome any challenge, 
                  and the courage to chase every dream with the determination of a true demon slayer! 💫
                </p>

                <p className="text-2xl font-anime text-accent mt-6">
                  Stay fierce, stay kind! 🌸⚔️
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default SurpriseCard;
