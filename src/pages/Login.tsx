
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CloudMoon } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // TODO: Implement actual login logic
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to analyze page after login
      window.location.href = "/analyze";
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-dreamIndigo bg-gradient-to-br from-dreamIndigo via-softViolet to-midnightSky pt-32">
      <div className="container mx-auto px-6">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <CloudMoon className="mx-auto h-16 w-16 text-neonHighlight animate-dream-glow mb-6" />
            <h1 className="font-raleway font-bold text-3xl text-mistyLavender mb-2">
              Welcome Back
            </h1>
            <p className="text-mistyLavender/80">
              Sign in to continue your dream journey
            </p>
          </div>

          <div className="bg-gradient-to-r from-softViolet/20 to-midnightSky/20 backdrop-blur-lg border border-etherealPurple/20 rounded-2xl p-6">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-mistyLavender">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="bg-dreamIndigo/50 border-etherealPurple/30 text-mistyLavender placeholder:text-mistyLavender/50"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="password" className="text-mistyLavender">
                    Password
                  </Label>
                  <Link
                    to="/forgot-password"
                    className="text-etherealPurple hover:text-neonHighlight text-sm"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="bg-dreamIndigo/50 border-etherealPurple/30 text-mistyLavender placeholder:text-mistyLavender/50"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-etherealPurple hover:bg-neonHighlight text-white transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>

              <div className="text-center mt-4">
                <p className="text-mistyLavender/80 text-sm">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="text-etherealPurple hover:text-neonHighlight"
                  >
                    Create an Account
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
