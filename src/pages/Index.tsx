
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import DreamInput from "@/components/DreamInput";
import { CloudMoon, Star, Brain, Image, Book } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-dreamIndigo bg-gradient-to-br from-dreamIndigo via-softViolet to-midnightSky">
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

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="font-raleway font-bold text-3xl text-mistyLavender mb-12 text-center">
            Discover the Magic of Lucid AI
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-softViolet/20 to-midnightSky/20 backdrop-blur-lg border border-etherealPurple/20 rounded-2xl p-6 flex flex-col items-center text-center">
              <Brain className="h-12 w-12 text-neonHighlight mb-4" />
              <h3 className="text-xl font-semibold text-mistyLavender mb-2">Dream Analysis</h3>
              <p className="text-mistyLavender/80 mb-4">
                Our AI interprets your dreams, identifying key themes, emotions, and symbols.
              </p>
              <Button 
                variant="outline" 
                className="border-etherealPurple/50 text-mistyLavender hover:bg-etherealPurple/20 mt-auto"
                asChild
              >
                <Link to="/analyze">Analyze Now</Link>
              </Button>
            </div>
            
            <div className="bg-gradient-to-r from-softViolet/20 to-midnightSky/20 backdrop-blur-lg border border-etherealPurple/20 rounded-2xl p-6 flex flex-col items-center text-center">
              <Image className="h-12 w-12 text-neonHighlight mb-4" />
              <h3 className="text-xl font-semibold text-mistyLavender mb-2">Dream Visualization</h3>
              <p className="text-mistyLavender/80 mb-4">
                See your dreams come to life with stunning AI-generated artwork.
              </p>
              <Button 
                variant="outline" 
                className="border-etherealPurple/50 text-mistyLavender hover:bg-etherealPurple/20 mt-auto"
                asChild
              >
                <Link to="/visualize">View Examples</Link>
              </Button>
            </div>
            
            <div className="bg-gradient-to-r from-softViolet/20 to-midnightSky/20 backdrop-blur-lg border border-etherealPurple/20 rounded-2xl p-6 flex flex-col items-center text-center">
              <Book className="h-12 w-12 text-neonHighlight mb-4" />
              <h3 className="text-xl font-semibold text-mistyLavender mb-2">Dream Journal</h3>
              <p className="text-mistyLavender/80 mb-4">
                Keep track of your dreams, analyses, and visualizations in your personal journal.
              </p>
              <Button 
                variant="outline" 
                className="border-etherealPurple/50 text-mistyLavender hover:bg-etherealPurple/20 mt-auto"
                asChild
              >
                <Link to="/journal">Start Journaling</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-softViolet/30 to-midnightSky/30 backdrop-blur-lg border border-etherealPurple/30 rounded-2xl p-8">
            <h2 className="font-raleway font-bold text-2xl md:text-3xl text-mistyLavender mb-4">
              Begin Your Dream Journey
            </h2>
            <p className="text-mistyLavender/80 mb-6">
              Sign up now to start analyzing and visualizing your dreams with Lucid AI.
            </p>
            <Button 
              className="bg-etherealPurple hover:bg-neonHighlight text-white transition-all duration-300 shadow-lg hover:shadow-neonHighlight/50"
              asChild
            >
              <Link to="/register">Create an Account</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
