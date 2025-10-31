import { useState } from "react";
import bambooBackground from "@/assets/bamboo-forest-bg.jpg";
import { Sparkles } from "lucide-react";

interface Wish {
  id: number;
  text: string;
  color: string;
}

const wishes: Wish[] = [
  { id: 1, text: "Stay fierce and kind, Aditi!", color: "from-pink-400 to-pink-600" },
  { id: 2, text: "Your vibe can slay any demon of dullness!", color: "from-purple-400 to-purple-600" },
  { id: 3, text: "Keep shining like the Flame Hashira's heart!", color: "from-orange-400 to-red-600" },
  { id: 4, text: "May your courage never waver!", color: "from-teal-400 to-teal-600" },
  { id: 5, text: "Wishing you adventures as epic as the anime!", color: "from-blue-400 to-blue-600" },
  { id: 6, text: "May your year be filled with beautiful moments!", color: "from-pink-300 to-rose-500" },
];

const MemoryWall = () => {
  const [selectedWish, setSelectedWish] = useState<number | null>(null);

  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${bambooBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Section Title */}
      <div className="relative z-10 text-center mb-12 space-y-4">
        <h2 className="text-5xl md:text-6xl font-bold text-white font-cinzel drop-shadow-2xl">
          Wishes from the Heart
        </h2>
        <p className="text-xl text-pink-200 font-anime drop-shadow-lg">
          Click on the lanterns to reveal special birthday wishes ✨
        </p>
      </div>

      {/* Floating Lanterns Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {wishes.map((wish, index) => (
          <div
            key={wish.id}
            className="relative group cursor-pointer"
            style={{
              animationDelay: `${index * 0.5}s`,
            }}
            onClick={() => setSelectedWish(selectedWish === wish.id ? null : wish.id)}
          >
            {/* Lantern Container */}
            <div className="lantern-float">
              <div className={`
                relative p-8 rounded-2xl backdrop-blur-md border-2 border-white/30
                transition-all duration-500 transform
                ${selectedWish === wish.id 
                  ? 'scale-110 shadow-2xl bg-gradient-to-br ' + wish.color 
                  : 'bg-white/10 hover:bg-white/20 hover:scale-105'
                }
              `}>
                {/* Lantern Icon */}
                <div className="flex justify-center mb-4">
                  <div className={`
                    w-16 h-16 rounded-full flex items-center justify-center
                    bg-gradient-to-br ${wish.color}
                    shadow-lg transition-all duration-300
                    ${selectedWish === wish.id ? 'animate-spin' : ''}
                  `}>
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Wish Text */}
                <div className={`
                  text-center transition-all duration-500
                  ${selectedWish === wish.id ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}
                `}>
                  <p className="text-white text-lg font-anime font-bold drop-shadow-lg">
                    {wish.text}
                  </p>
                </div>

                {/* Placeholder when not selected */}
                {selectedWish !== wish.id && (
                  <p className="text-white/80 text-center font-anime text-sm">
                    Click to reveal wish
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Decoration */}
      <div className="relative z-10 mt-12 text-white/60 text-center font-anime">
        <p className="text-lg">Each wish carries the warmth of true friendship 💝</p>
      </div>
    </section>
  );
};

export default MemoryWall;
