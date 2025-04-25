
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CloudMoon, Loader } from "lucide-react";

const DreamAnalysis = () => {
  const [dreamDescription, setDreamDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [analysis, setAnalysis] = useState<null | {
    themes: string[];
    emotions: string[];
    symbols: string[];
    interpretation: string;
  }>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dreamDescription.trim()) return;

    setIsSubmitting(true);
    
    // Simulated API call for dream analysis
    setTimeout(() => {
      // Mock response data
      const mockAnalysis = {
        themes: ["Transformation", "Journey", "Fear of unknown"],
        emotions: ["Anxiety", "Wonder", "Confusion", "Relief"],
        symbols: ["Water", "Flying", "Doors", "Darkness"],
        interpretation: "Your dream suggests a period of personal transformation in your life. The presence of water symbolizes your emotions flowing freely, while flying indicates your desire for freedom from current constraints. The doors represent new opportunities, though the darkness suggests some uncertainty about what lies ahead. Overall, this dream reflects your journey through change and your mixed emotions about embracing the unknown."
      };
      
      setAnalysis(mockAnalysis);
      setIsSubmitting(false);
    }, 2000);
  };

  const handleSaveToJournal = () => {
    // TODO: Implement saving to journal
    navigate("/journal");
  };

  const handleViewVisualization = () => {
    navigate("/visualize");
  };

  return (
    <div className="min-h-screen bg-dreamIndigo bg-gradient-to-br from-dreamIndigo via-softViolet to-midnightSky pt-32">
      <div className="container mx-auto px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <CloudMoon className="mx-auto h-16 w-16 text-neonHighlight animate-dream-glow mb-8" />
            <h1 className="font-raleway font-bold text-4xl md:text-5xl text-mistyLavender mb-6">
              Dream Analysis
            </h1>
            <p className="text-lg text-mistyLavender/80 mb-12">
              Share your dream and receive AI-powered insights into its meaning,
              symbolism, and emotional patterns.
            </p>
          </div>
          
          {!analysis ? (
            <div className="bg-gradient-to-r from-softViolet/20 to-midnightSky/20 backdrop-blur-lg border border-etherealPurple/20 rounded-2xl p-6">
              <form onSubmit={handleSubmit}>
                <Textarea
                  placeholder="Describe your dream in detail..."
                  className="min-h-[200px] mb-4 bg-dreamIndigo/50 border-etherealPurple/30 text-mistyLavender placeholder:text-mistyLavender/50 focus:border-neonHighlight"
                  value={dreamDescription}
                  onChange={(e) => setDreamDescription(e.target.value)}
                  required
                />
                <Button 
                  className="w-full bg-etherealPurple hover:bg-neonHighlight text-white transition-all duration-300 shadow-lg hover:shadow-neonHighlight/50"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="animate-spin mr-2" size={18} />
                      Analyzing Dream...
                    </>
                  ) : (
                    "Analyze Dream"
                  )}
                </Button>
              </form>
            </div>
          ) : (
            <div className="bg-gradient-to-r from-softViolet/20 to-midnightSky/20 backdrop-blur-lg border border-etherealPurple/20 rounded-2xl p-6">
              <div className="mb-6">
                <h3 className="text-mistyLavender font-raleway font-semibold text-xl mb-2">
                  Your Dream
                </h3>
                <p className="text-mistyLavender/80 italic">
                  "{dreamDescription}"
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-mistyLavender font-raleway font-semibold text-xl mb-2">
                  Analysis
                </h3>
                <p className="text-mistyLavender/80 mb-4">
                  {analysis.interpretation}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-dreamIndigo/40 border border-etherealPurple/20 p-4 rounded-lg">
                    <h4 className="text-neonHighlight font-semibold mb-2">Key Themes</h4>
                    <ul className="list-disc list-inside text-mistyLavender/70">
                      {analysis.themes.map((theme, index) => (
                        <li key={index}>{theme}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-dreamIndigo/40 border border-etherealPurple/20 p-4 rounded-lg">
                    <h4 className="text-neonHighlight font-semibold mb-2">Emotions</h4>
                    <ul className="list-disc list-inside text-mistyLavender/70">
                      {analysis.emotions.map((emotion, index) => (
                        <li key={index}>{emotion}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-dreamIndigo/40 border border-etherealPurple/20 p-4 rounded-lg">
                    <h4 className="text-neonHighlight font-semibold mb-2">Symbols</h4>
                    <ul className="list-disc list-inside text-mistyLavender/70">
                      {analysis.symbols.map((symbol, index) => (
                        <li key={index}>{symbol}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button 
                  className="bg-etherealPurple hover:bg-neonHighlight text-white transition-all duration-300 shadow-lg hover:shadow-neonHighlight/50"
                  onClick={handleViewVisualization}
                >
                  View Dream Visualization
                </Button>
                <Button 
                  variant="outline"
                  className="border-etherealPurple/50 text-mistyLavender hover:bg-etherealPurple/20"
                  onClick={handleSaveToJournal}
                >
                  Save to Dream Journal
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DreamAnalysis;
