
import { CloudMoon } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-dreamIndigo bg-gradient-to-br from-dreamIndigo via-softViolet to-midnightSky pt-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <CloudMoon className="mx-auto h-16 w-16 text-neonHighlight animate-dream-glow mb-8" />
          <h1 className="font-raleway font-bold text-4xl md:text-5xl text-mistyLavender mb-6">
            About Lucid AI
          </h1>
          
          <div className="prose prose-invert mx-auto">
            <p className="text-lg text-mistyLavender/80">
              Lucid AI is an innovative platform that combines artificial intelligence
              with dream analysis to help you understand and visualize your dreams.
            </p>
            
            <div className="mt-12 grid gap-8">
              <section>
                <h2 className="text-2xl font-raleway font-bold text-mistyLavender mb-4">
                  Our Mission
                </h2>
                <p className="text-mistyLavender/80">
                  We believe that dreams are windows into our subconscious mind,
                  offering valuable insights into our thoughts, emotions, and desires.
                  Our mission is to make dream interpretation accessible and meaningful
                  through the power of AI.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-raleway font-bold text-mistyLavender mb-4">
                  How It Works
                </h2>
                <p className="text-mistyLavender/80">
                  Using advanced natural language processing and image generation
                  technologies, Lucid AI analyzes your dream descriptions to uncover
                  patterns, symbols, and emotional themes, while creating stunning
                  visual representations of your dreams.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
