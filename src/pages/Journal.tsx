
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CloudMoon, Search } from "lucide-react";

const Journal = () => {
  return (
    <div className="min-h-screen bg-dreamIndigo bg-gradient-to-br from-dreamIndigo via-softViolet to-midnightSky pt-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <CloudMoon className="mx-auto h-16 w-16 text-neonHighlight animate-dream-glow mb-8" />
            <h1 className="font-raleway font-bold text-4xl md:text-5xl text-mistyLavender mb-6">
              Dream Journal
            </h1>
            <p className="text-lg text-mistyLavender/80 mb-8">
              Your personal collection of dreams, insights, and visualizations.
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-mistyLavender/50" />
              <Input
                placeholder="Search your dreams..."
                className="pl-10 bg-dreamIndigo/50 border-etherealPurple/30 text-mistyLavender placeholder:text-mistyLavender/50"
              />
            </div>
          </div>

          <div className="grid gap-6">
            <Card className="bg-gradient-to-r from-softViolet/20 to-midnightSky/20 backdrop-blur-lg border-etherealPurple/20">
              <CardContent className="p-6">
                <p className="text-mistyLavender/50 text-center">
                  Your dream entries will appear here
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal;
