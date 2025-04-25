
import { CloudMoon } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-dreamIndigo bg-gradient-to-br from-dreamIndigo via-softViolet to-midnightSky pt-32">
      <div className="container mx-auto px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <CloudMoon className="mx-auto h-16 w-16 text-neonHighlight animate-dream-glow mb-8" />
            <h1 className="font-raleway font-bold text-4xl md:text-5xl text-mistyLavender mb-6">
              Privacy Policy
            </h1>
          </div>
          
          <div className="bg-gradient-to-r from-softViolet/20 to-midnightSky/20 backdrop-blur-lg border border-etherealPurple/20 rounded-2xl p-6">
            <div className="prose prose-invert max-w-none">
              <p className="text-mistyLavender/80">
                Last Updated: April 15, 2025
              </p>
              
              <h2 className="text-xl font-semibold text-mistyLavender mt-6 mb-4">1. Information We Collect</h2>
              <p className="text-mistyLavender/80 mb-4">
                We collect information you provide directly to us, including your name, email address, and the content of your dreams. We also collect usage data and device information when you access our services.
              </p>
              
              <h2 className="text-xl font-semibold text-mistyLavender mt-6 mb-4">2. How We Use Your Information</h2>
              <p className="text-mistyLavender/80 mb-4">
                We use your information to provide, maintain, and improve our services, including dream analysis and visualization. Your dream content is used to generate interpretations and visual representations.
              </p>
              
              <h2 className="text-xl font-semibold text-mistyLavender mt-6 mb-4">3. Data Security</h2>
              <p className="text-mistyLavender/80 mb-4">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of data transmission is completely secure.
              </p>
              
              <h2 className="text-xl font-semibold text-mistyLavender mt-6 mb-4">4. Sharing of Information</h2>
              <p className="text-mistyLavender/80 mb-4">
                We do not sell your personal information. We may share anonymized data with third parties for research or analytical purposes. Your dream content is kept private and confidential.
              </p>
              
              <h2 className="text-xl font-semibold text-mistyLavender mt-6 mb-4">5. Data Retention</h2>
              <p className="text-mistyLavender/80 mb-4">
                We retain your personal information as long as your account is active or as needed to provide you with our services. You may request deletion of your data at any time.
              </p>
              
              <h2 className="text-xl font-semibold text-mistyLavender mt-6 mb-4">6. Your Rights</h2>
              <p className="text-mistyLavender/80 mb-4">
                You have the right to access, correct, or delete your personal information. You may also opt out of certain data collection or processing activities.
              </p>
              
              <h2 className="text-xl font-semibold text-mistyLavender mt-6 mb-4">7. Children's Privacy</h2>
              <p className="text-mistyLavender/80 mb-4">
                Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13.
              </p>
              
              <h2 className="text-xl font-semibold text-mistyLavender mt-6 mb-4">8. Changes to Privacy Policy</h2>
              <p className="text-mistyLavender/80 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of significant changes via email or through our service.
              </p>
              
              <h2 className="text-xl font-semibold text-mistyLavender mt-6 mb-4">9. Contact Information</h2>
              <p className="text-mistyLavender/80">
                If you have any questions about this Privacy Policy, please contact us at privacy@lucidai.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
