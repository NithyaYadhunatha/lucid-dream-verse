
import { Card, CardContent } from "@/components/ui/card";
import { CloudMoon } from "lucide-react";

const Visualizer = () => {
  return (
    <div className="min-h-screen bg-dreamIndigo bg-gradient-to-br from-dreamIndigo via-softViolet to-midnightSky pt-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <CloudMoon className="mx-auto h-16 w-16 text-neonHighlight animate-dream-glow mb-8" />
          <h1 className="font-raleway font-bold text-4xl md:text-5xl text-mistyLavender mb-6">
            Dream Visualizer
          </h1>
          <p className="text-lg text-mistyLavender/80 mb-12">
            Experience your dreams transformed into stunning visual art through AI.
          </p>

          <Card className="bg-gradient-to-r from-softViolet/20 to-midnightSky/20 backdrop-blur-lg border-etherealPurple/20">
            <CardContent className="p-6">
              <div className="aspect-video rounded-lg bg-dreamIndigo/50 border border-etherealPurple/30 flex items-center justify-center">
                <p className="text-mistyLavender/50">Dream visualization will appear here</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Visualizer;
