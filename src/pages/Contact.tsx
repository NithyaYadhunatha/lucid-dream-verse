
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CloudMoon } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-dreamIndigo bg-gradient-to-br from-dreamIndigo via-softViolet to-midnightSky pt-32">
      <div className="container mx-auto px-6">
        <div className="max-w-lg mx-auto text-center">
          <CloudMoon className="mx-auto h-16 w-16 text-neonHighlight animate-dream-glow mb-8" />
          <h1 className="font-raleway font-bold text-4xl md:text-5xl text-mistyLavender mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-mistyLavender/80 mb-12">
            Have questions or feedback? We'd love to hear from you.
          </p>

          <div className="bg-gradient-to-r from-softViolet/20 to-midnightSky/20 backdrop-blur-lg border border-etherealPurple/20 rounded-2xl p-6">
            <div className="space-y-4">
              <Input
                placeholder="Your name"
                className="bg-dreamIndigo/50 border-etherealPurple/30 text-mistyLavender placeholder:text-mistyLavender/50"
              />
              <Input
                type="email"
                placeholder="Your email"
                className="bg-dreamIndigo/50 border-etherealPurple/30 text-mistyLavender placeholder:text-mistyLavender/50"
              />
              <Textarea
                placeholder="Your message"
                className="min-h-[150px] bg-dreamIndigo/50 border-etherealPurple/30 text-mistyLavender placeholder:text-mistyLavender/50"
              />
              <Button className="w-full bg-etherealPurple hover:bg-neonHighlight text-white transition-all duration-300 shadow-lg hover:shadow-neonHighlight/50">
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
