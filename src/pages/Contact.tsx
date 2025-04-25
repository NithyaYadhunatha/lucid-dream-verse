
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CloudMoon, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulated form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you soon.",
      });
      
      // Reset form
      setName("");
      setEmail("");
      setMessage("");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-dreamIndigo bg-gradient-to-br from-dreamIndigo via-softViolet to-midnightSky pt-32">
      <div className="container mx-auto px-6 pb-16">
        <div className="max-w-lg mx-auto text-center">
          <CloudMoon className="mx-auto h-16 w-16 text-neonHighlight animate-dream-glow mb-8" />
          <h1 className="font-raleway font-bold text-4xl md:text-5xl text-mistyLavender mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-mistyLavender/80 mb-12">
            Have questions or feedback? We'd love to hear from you.
          </p>

          <div className="bg-gradient-to-r from-softViolet/20 to-midnightSky/20 backdrop-blur-lg border border-etherealPurple/20 rounded-2xl p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your name"
                  className="bg-dreamIndigo/50 border-etherealPurple/30 text-mistyLavender placeholder:text-mistyLavender/50"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-dreamIndigo/50 border-etherealPurple/30 text-mistyLavender placeholder:text-mistyLavender/50"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your message"
                  className="min-h-[150px] bg-dreamIndigo/50 border-etherealPurple/30 text-mistyLavender placeholder:text-mistyLavender/50"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <Button 
                className="w-full bg-etherealPurple hover:bg-neonHighlight text-white transition-all duration-300 shadow-lg hover:shadow-neonHighlight/50"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2" size={18} />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
