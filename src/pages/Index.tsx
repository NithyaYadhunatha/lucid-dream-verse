
import Navigation from "@/components/Navigation";
import DreamInput from "@/components/DreamInput";
import { CloudMoon, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-dreamIndigo bg-gradient-to-br from-dreamIndigo via-softViolet to-midnightSky">
      <Navigation />
      
      {/* Background Stars */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <Star className="absolute top-1/4 left-1/4 h-4 w-4 text-neonHighlight/30 animate-dream-glow" />
        <Star className="absolute top-1/3 right-1/3 h-3 w-3 text-neonHighlight/20 animate-dream-glow" />
        <Star className="absolute bottom-1/4 right-1/4 h-5 w-5 text-neonHighlight/40 animate-dream-glow" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="container mx-auto text-center">
          <CloudMoon className="mx-auto h-16 w-16 text-neonHighlight animate-dream-float mb-8" />
          <h1 className="font-raleway font-bold text-4xl md:text-6xl text-mistyLavender mb-6 animate-dream-float">
            Explore Your Dreams with AI
          </h1>
          <p className="text-lg md:text-xl text-mistyLavender/80 max-w-2xl mx-auto mb-12">
            Unlock the mysteries of your subconscious mind through advanced AI analysis
            and breathtaking visual interpretations of your dreams.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <DreamInput />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
