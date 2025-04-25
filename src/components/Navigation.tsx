
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CloudMoon } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dreamIndigo/90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <CloudMoon className="h-8 w-8 text-neonHighlight animate-dream-glow" />
            <span className="font-raleway text-2xl font-bold text-mistyLavender">
              Lucid AI
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Button variant="ghost" className="text-mistyLavender hover:text-etherealPurple" asChild>
              <Link to="/analyze">Analyze</Link>
            </Button>
            <Button variant="ghost" className="text-mistyLavender hover:text-etherealPurple" asChild>
              <Link to="/visualize">Visualize</Link>
            </Button>
            <Button variant="ghost" className="text-mistyLavender hover:text-etherealPurple" asChild>
              <Link to="/journal">Journal</Link>
            </Button>
            <Button variant="ghost" className="text-mistyLavender hover:text-etherealPurple" asChild>
              <Link to="/about">About</Link>
            </Button>
            <Button variant="ghost" className="text-mistyLavender hover:text-etherealPurple" asChild>
              <Link to="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
