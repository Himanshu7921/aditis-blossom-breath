import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  alternate: boolean;
}

const SakuraPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const petalArray: Petal[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 10,
      alternate: Math.random() > 0.5,
    }));
    setPetals(petalArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className={`absolute w-3 h-3 ${
            petal.alternate ? "animate-float-sakura-alt" : "animate-float-sakura"
          }`}
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
          }}
        >
          <svg viewBox="0 0 24 24" fill="hsl(var(--sakura-medium))" className="drop-shadow-sm">
            <path d="M12 3c-1.5 3.5-3 4.5-5.5 5C3.5 8.5 2 10 2 12s1.5 3.5 4.5 4c2.5.5 4 1.5 5.5 5 1.5-3.5 3-4.5 5.5-5 3-.5 4.5-2 4.5-4s-1.5-3.5-4.5-4c-2.5-.5-4-1.5-5.5-5z"/>
          </svg>
        </div>
      ))}
    </div>
  );
};

export default SakuraPetals;
