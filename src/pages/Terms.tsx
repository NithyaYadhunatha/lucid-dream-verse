
import { CloudMoon } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-dreamIndigo bg-gradient-to-br from-dreamIndigo via-softViolet to-midnightSky pt-32">
      <div className="container mx-auto px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <CloudMoon className="mx-auto h-16 w-16 text-neonHighlight animate-dream-glow mb-8" />
            <h1 className="font-raleway font-bold text-4xl md:text-5xl text-mistyLavender mb-6">
              Terms of Service
            </h1>
          </div>
          
          <div className="bg-gradient-to-r from-softViolet/20 to-midnightSky/20 backdrop-blur-lg border border-etherealPurple/20 rounded-2xl p-6">
            <div className="prose prose-invert max-w-none">
              <p className="text-mistyLavender/80">
                Last Updated: April 15, 2025
              </p>
              
              <h2 className="text-xl font-semibold text-mistyLavender mt-6 mb-4">1. Acceptance of Terms</h2>
              <p className="text-mistyLavender/80 mb-4">
                By accessing and using Lucid AI, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
              
              <h2 className="text-xl font-semibold text-mistyLavender mt-6 mb-4">2. Description of Service</h2>
              <p className="text-mistyLavender/80 mb-4">
                Lucid AI provides dream analysis and visualization services using artificial intelligence. The service includes dream interpretation, image generation, and personal dream journaling features.
              </p>
              
              <h2 className="text-xl font-semibold text-mistyLavender mt-6 mb-4">3. User Accounts</h2>
              <p className="text-mistyLavender/80 mb-4">
                To access certain features of Lucid AI, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and password.
              </p>
              
              <h2 className="text-xl font-semibold text-mistyLavender mt-6 mb-4">4. User Content</h2>
              <p className="text-mistyLavender/80 mb-4">
                By submitting dream descriptions or other content to Lucid AI, you grant us a non-exclusive license to use, reproduce, modify, and display such content for the purpose of providing our services.
              </p>
              
              <h2 className="text-xl font-semibold text-mistyLavender mt-6 mb-4">5. Privacy</h2>
              <p className="text-mistyLavender/80 mb-4">
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and safeguard your information.
              </p>
              
              <h2 className="text-xl font-semibold text-mistyLavender mt-6 mb-4">6. Disclaimer of Warranties</h2>
              <p className="text-mistyLavender/80 mb-4">
                Lucid AI provides dream analysis for entertainment and self-reflection purposes only. Our interpretations should not be considered as professional psychological advice.
              </p>
              
              <h2 className="text-xl font-semibold text-mistyLavender mt-6 mb-4">7. Limitation of Liability</h2>
              <p className="text-mistyLavender/80 mb-4">
                Lucid AI and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
              </p>
              
              <h2 className="text-xl font-semibold text-mistyLavender mt-6 mb-4">8. Changes to Terms</h2>
              <p className="text-mistyLavender/80 mb-4">
                We reserve the right to modify these Terms of Service at any time. We will notify users of significant changes via email or through the service.
              </p>
              
              <h2 className="text-xl font-semibold text-mistyLavender mt-6 mb-4">9. Contact Information</h2>
              <p className="text-mistyLavender/80">
                If you have any questions about these Terms, please contact us at support@lucidai.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
