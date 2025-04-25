
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";

const DreamInput = () => {
  const [dream, setDream] = useState("");

  return (
    <div className="relative w-full max-w-2xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-softViolet/20 to-midnightSky/20 backdrop-blur-lg border border-etherealPurple/20">
      <div className="absolute -top-3 -left-3">
        <Star className="h-6 w-6 text-neonHighlight animate-dream-glow" />
      </div>
      <h2 className="text-2xl font-raleway font-bold text-mistyLavender mb-4">
        Share Your Dream
      </h2>
      <Textarea
        placeholder="Describe your dream in detail..."
        className="min-h-[200px] bg-dreamIndigo/50 border-etherealPurple/30 text-mistyLavender placeholder:text-mistyLavender/50 focus:border-neonHighlight transition-all duration-300"
        value={dream}
        onChange={(e) => setDream(e.target.value)}
      />
      <Button 
        className="mt-4 w-full bg-etherealPurple hover:bg-neonHighlight text-white transition-all duration-300 shadow-lg hover:shadow-neonHighlight/50"
      >
        Analyze Dream
      </Button>
    </div>
  );
};

export default DreamInput;
