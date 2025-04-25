
import { CloudMoon, Brain, Image, Book, Moon } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-dreamIndigo bg-gradient-to-br from-dreamIndigo via-softViolet to-midnightSky pt-32">
      <div className="container mx-auto px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <CloudMoon className="mx-auto h-16 w-16 text-neonHighlight animate-dream-glow mb-8" />
            <h1 className="font-raleway font-bold text-4xl md:text-5xl text-mistyLavender mb-6">
              About Lucid AI
            </h1>
            
            <p className="text-lg text-mistyLavender/80">
              Lucid AI is an innovative platform that combines artificial intelligence
              with dream analysis to help you understand and visualize your dreams.
            </p>
          </div>
          
          <div className="space-y-16">
            <section>
              <h2 className="text-2xl font-raleway font-bold text-mistyLavender mb-6 text-center">
                Our Mission
              </h2>
              <div className="bg-gradient-to-r from-softViolet/20 to-midnightSky/20 backdrop-blur-lg border border-etherealPurple/20 rounded-2xl p-6">
                <p className="text-mistyLavender/80 text-center">
                  We believe that dreams are windows into our subconscious mind,
                  offering valuable insights into our thoughts, emotions, and desires.
                  Our mission is to make dream interpretation accessible and meaningful
                  through the power of AI.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-raleway font-bold text-mistyLavender mb-6 text-center">
                How It Works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-r from-softViolet/20 to-midnightSky/20 backdrop-blur-lg border border-etherealPurple/20 rounded-2xl p-6 flex flex-col items-center text-center">
                  <Brain className="h-12 w-12 text-neonHighlight mb-4" />
                  <h3 className="text-xl font-semibold text-mistyLavender mb-2">Dream Analysis</h3>
                  <p className="text-mistyLavender/80">
                    Our AI analyzes your dream descriptions to identify patterns,
                    symbols, and emotional themes.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-softViolet/20 to-midnightSky/20 backdrop-blur-lg border border-etherealPurple/20 rounded-2xl p-6 flex flex-col items-center text-center">
                  <Image className="h-12 w-12 text-neonHighlight mb-4" />
                  <h3 className="text-xl font-semibold text-mistyLavender mb-2">Visual Generation</h3>
                  <p className="text-mistyLavender/80">
                    Transform your dreams into stunning visual art through
                    advanced AI image generation.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-softViolet/20 to-midnightSky/20 backdrop-blur-lg border border-etherealPurple/20 rounded-2xl p-6 flex flex-col items-center text-center">
                  <Book className="h-12 w-12 text-neonHighlight mb-4" />
                  <h3 className="text-xl font-semibold text-mistyLavender mb-2">Dream Journaling</h3>
                  <p className="text-mistyLavender/80">
                    Keep track of your dreams and their interpretations in your
                    personal dream journal.
                  </p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-raleway font-bold text-mistyLavender mb-6 text-center">
                The Science Behind Dream Analysis
              </h2>
              <div className="bg-gradient-to-r from-softViolet/20 to-midnightSky/20 backdrop-blur-lg border border-etherealPurple/20 rounded-2xl p-6">
                <p className="text-mistyLavender/80 mb-4">
                  Our dream analysis algorithms are trained on decades of dream research,
                  incorporating insights from psychology, neuroscience, and cultural symbol analysis.
                  The AI identifies patterns in your dreams that might be difficult to recognize on your own.
                </p>
                <p className="text-mistyLavender/80">
                  While dream interpretation is not an exact science, our approach combines
                  traditional psychological frameworks with modern AI capabilities to provide
                  insights that can help you better understand yourself and your subconscious mind.
                </p>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-raleway font-bold text-mistyLavender mb-6 text-center">
                Our Team
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-softViolet/20 to-midnightSky/20 backdrop-blur-lg border border-etherealPurple/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-mistyLavender mb-2">Dr. Elena Morgan</h3>
                  <p className="text-etherealPurple mb-3">Founder & Dream Researcher</p>
                  <p className="text-mistyLavender/80">
                    With a PhD in Cognitive Psychology and 15 years of research in dream analysis,
                    Elena founded Lucid AI to make dream interpretation accessible to everyone.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-softViolet/20 to-midnightSky/20 backdrop-blur-lg border border-etherealPurple/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-mistyLavender mb-2">Marcus Chen</h3>
                  <p className="text-etherealPurple mb-3">AI Development Lead</p>
                  <p className="text-mistyLavender/80">
                    An expert in machine learning and natural language processing,
                    Marcus oversees the development of our AI algorithms and ensures
                    the accuracy of our dream analysis.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
