
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CloudMoon } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // TODO: Replace with actual auth state

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dreamIndigo/90 backdrop-blur-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <CloudMoon className="h-8 w-8 text-neonHighlight animate-dream-glow" />
            <span className="font-raleway text-2xl font-bold text-mistyLavender">
              Lucid AI
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-mistyLavender/80 hover:text-mistyLavender transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-mistyLavender/80 hover:text-mistyLavender transition-colors"
            >
              About Us
            </Link>
            {isLoggedIn && (
              <>
                <Link
                  to="/journal"
                  className="text-mistyLavender/80 hover:text-mistyLavender transition-colors"
                >
                  Dream Journal
                </Link>
                <Link
                  to="/analyze"
                  className="text-mistyLavender/80 hover:text-mistyLavender transition-colors"
                >
                  Analyze Dream
                </Link>
              </>
            )}
            <Link
              to="/contact"
              className="text-mistyLavender/80 hover:text-mistyLavender transition-colors"
            >
              Contact
            </Link>
            {isLoggedIn ? (
              <Button 
                className="bg-etherealPurple hover:bg-neonHighlight text-white"
                asChild
              >
                <Link to="/profile">My Account</Link>
              </Button>
            ) : (
              <Button 
                className="bg-etherealPurple hover:bg-neonHighlight text-white"
                asChild
              >
                <Link to="/login">Start Dreaming</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
