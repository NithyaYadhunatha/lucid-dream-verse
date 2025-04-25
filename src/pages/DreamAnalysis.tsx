
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CloudMoon } from "lucide-react";

const DreamAnalysis = () => {
  return (
    <div className="min-h-screen bg-dreamIndigo bg-gradient-to-br from-dreamIndigo via-softViolet to-midnightSky pt-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <CloudMoon className="mx-auto h-16 w-16 text-neonHighlight animate-dream-glow mb-8" />
          <h1 className="font-raleway font-bold text-4xl md:text-5xl text-mistyLavender mb-6">
            Dream Analysis
          </h1>
          <p className="text-lg text-mistyLavender/80 mb-12">
            Share your dream and receive AI-powered insights into its meaning,
            symbolism, and emotional patterns.
          </p>
          
          <div className="bg-gradient-to-r from-softViolet/20 to-midnightSky/20 backdrop-blur-lg border border-etherealPurple/20 rounded-2xl p-6">
            <Textarea
              placeholder="Describe your dream in detail..."
              className="min-h-[200px] mb-4 bg-dreamIndigo/50 border-etherealPurple/30 text-mistyLavender placeholder:text-mistyLavender/50 focus:border-neonHighlight"
            />
            <Button className="w-full bg-etherealPurple hover:bg-neonHighlight text-white transition-all duration-300 shadow-lg hover:shadow-neonHighlight/50">
              Analyze Dream
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamAnalysis;
