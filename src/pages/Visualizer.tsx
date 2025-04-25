
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CloudMoon, Plus, Minus, Save } from "lucide-react";

const Visualizer = () => {
  const [scale, setScale] = useState(1);
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();
  
  // Placeholder dream image URL - in production this would come from your AI generation service
  const dreamImageUrl = "https://images.unsplash.com/photo-1559762705-2123aa9b467f?q=80&w=1000&auto=format&fit=crop";
  
  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.1, 2));
  };
  
  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.1, 0.5));
  };
  
  const handleSaveToJournal = () => {
    // TODO: Implement saving to journal logic
    navigate("/journal");
  };

  return (
    <div className="min-h-screen bg-dreamIndigo bg-gradient-to-br from-dreamIndigo via-softViolet to-midnightSky pt-32">
      <div className="container mx-auto px-6 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          <CloudMoon className="mx-auto h-16 w-16 text-neonHighlight animate-dream-glow mb-8" />
          <h1 className="font-raleway font-bold text-4xl md:text-5xl text-mistyLavender mb-6">
            Dream Visualizer
          </h1>
          <p className="text-lg text-mistyLavender/80 mb-12">
            Experience your dreams transformed into stunning visual art through AI.
          </p>

          <Card className="bg-gradient-to-r from-softViolet/20 to-midnightSky/20 backdrop-blur-lg border-etherealPurple/20 mb-8">
            <CardContent className="p-6">
              <div className="relative">
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src={dreamImageUrl} 
                    alt="Dream Visualization" 
                    className="w-full transition-transform duration-300 ease-in-out"
                    style={{ transform: `scale(${scale})` }}
                  />
                </div>
                
                <div className="absolute bottom-4 right-4 flex space-x-2 bg-dreamIndigo/70 backdrop-blur-sm p-2 rounded-lg">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="text-mistyLavender border-etherealPurple/30 hover:bg-etherealPurple/20"
                    onClick={handleZoomOut}
                  >
                    <Minus size={18} />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="text-mistyLavender border-etherealPurple/30 hover:bg-etherealPurple/20"
                    onClick={handleZoomIn}
                  >
                    <Plus size={18} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="bg-gradient-to-r from-softViolet/20 to-midnightSky/20 backdrop-blur-lg border border-etherealPurple/20 rounded-2xl p-6 mb-8">
            <h3 className="text-mistyLavender font-raleway font-semibold text-xl mb-4 text-left">
              Your Notes & Reflections
            </h3>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add your thoughts and reflections about this dream visualization..."
              className="w-full min-h-[120px] bg-dreamIndigo/50 border-etherealPurple/30 rounded-lg p-3 text-mistyLavender placeholder:text-mistyLavender/50 focus:border-neonHighlight resize-none"
            />
          </div>
          
          <Button 
            className="bg-etherealPurple hover:bg-neonHighlight text-white transition-all duration-300 shadow-lg hover:shadow-neonHighlight/50 mt-4"
            onClick={handleSaveToJournal}
          >
            <Save className="mr-2" size={18} />
            Save to Dream Journal
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Visualizer;
