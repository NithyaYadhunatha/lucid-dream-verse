
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CloudMoon, Search, Eye, Bookmark } from "lucide-react";

const Journal = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Mock dream entries for demonstration
  const dreamEntries = [
    {
      id: 1,
      date: "April 10, 2025",
      title: "Flying Over Mountains",
      description: "I was flying over snow-capped mountains, feeling free and weightless...",
      themes: ["Freedom", "Exploration", "Escape"],
      imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      date: "April 8, 2025",
      title: "Underwater City",
      description: "I discovered an entire city deep underwater, with buildings made of coral...",
      themes: ["Discovery", "Mystery", "Hidden worlds"],
      imageUrl: "https://images.unsplash.com/photo-1504472478235-9bc48ba4d60f?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 3,
      date: "April 5, 2025",
      title: "Lost in the Forest",
      description: "I was wandering through a dense forest at night, but strangely I wasn't afraid...",
      themes: ["Journey", "Inner peace", "Nature"],
      imageUrl: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1000&auto=format&fit=crop"
    }
  ];
  
  const filteredDreams = dreamEntries.filter(dream => 
    dream.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    dream.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-dreamIndigo bg-gradient-to-br from-dreamIndigo via-softViolet to-midnightSky pt-32">
      <div className="container mx-auto px-6 pb-16">
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-6">
            {filteredDreams.length > 0 ? (
              filteredDreams.map(dream => (
                <Card key={dream.id} className="bg-gradient-to-r from-softViolet/20 to-midnightSky/20 backdrop-blur-lg border-etherealPurple/20 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 h-48 md:h-auto">
                        <img 
                          src={dream.imageUrl} 
                          alt={dream.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 md:w-2/3">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-etherealPurple/80 text-sm mb-1">{dream.date}</p>
                            <h3 className="text-mistyLavender font-raleway font-bold text-xl mb-2">{dream.title}</h3>
                          </div>
                          <div className="flex space-x-2">
                            <button className="text-etherealPurple hover:text-neonHighlight transition-colors">
                              <Eye size={18} />
                            </button>
                            <button className="text-etherealPurple hover:text-neonHighlight transition-colors">
                              <Bookmark size={18} />
                            </button>
                          </div>
                        </div>
                        <p className="text-mistyLavender/80 line-clamp-2 mb-4">
                          {dream.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {dream.themes.map((theme, index) => (
                            <span 
                              key={index} 
                              className="bg-etherealPurple/20 text-etherealPurple text-xs px-2 py-1 rounded-full"
                            >
                              {theme}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card className="bg-gradient-to-r from-softViolet/20 to-midnightSky/20 backdrop-blur-lg border-etherealPurple/20">
                <CardContent className="p-12 text-center">
                  <p className="text-mistyLavender/50">
                    {searchTerm ? "No dreams match your search" : "Your dream entries will appear here"}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal;
