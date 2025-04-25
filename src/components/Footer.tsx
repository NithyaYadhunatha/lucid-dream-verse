
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dreamIndigo/80 backdrop-blur-md border-t border-etherealPurple/20 py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-mistyLavender font-raleway font-bold text-lg mb-4">
              Lucid AI
            </h3>
            <p className="text-mistyLavender/70 text-sm">
              Explore the mysteries of your subconscious mind with AI dream analysis and visualization.
            </p>
          </div>

          <div>
            <h3 className="text-mistyLavender font-raleway font-bold text-lg mb-4">
              Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-mistyLavender/70 hover:text-neonHighlight transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-mistyLavender/70 hover:text-neonHighlight transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-mistyLavender/70 hover:text-neonHighlight transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-mistyLavender/70 hover:text-neonHighlight transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-mistyLavender font-raleway font-bold text-lg mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mistyLavender/70 hover:text-neonHighlight transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mistyLavender/70 hover:text-neonHighlight transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mistyLavender/70 hover:text-neonHighlight transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-etherealPurple/20 mt-8 pt-6 text-center">
          <p className="text-mistyLavender/60 text-sm">
            © 2025 Lucid AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
