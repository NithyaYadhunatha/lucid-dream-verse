
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CloudMoon } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-dreamIndigo bg-gradient-to-br from-dreamIndigo via-softViolet to-midnightSky flex items-center justify-center px-6">
      <div className="text-center">
        <CloudMoon className="mx-auto h-20 w-20 text-neonHighlight animate-dream-glow mb-6" />
        <h1 className="font-raleway font-bold text-4xl md:text-6xl text-mistyLavender mb-4">
          404
        </h1>
        <h2 className="font-raleway text-2xl md:text-3xl text-mistyLavender/80 mb-8">
          This dream doesn't exist
        </h2>
        <p className="text-mistyLavender/60 max-w-md mx-auto mb-8">
          It seems you've wandered into the void between dreams. Let's guide you back to reality.
        </p>
        <Button 
          className="bg-etherealPurple hover:bg-neonHighlight text-white transition-all duration-300 shadow-lg hover:shadow-neonHighlight/50"
          asChild
        >
          <Link to="/">Return to Homepage</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
