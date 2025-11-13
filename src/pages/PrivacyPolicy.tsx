import { Link } from "react-router-dom";
import brambleLogoBlack from "@/assets/brambleai-logo-black.svg";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-block mb-8">
          <img src={brambleLogoBlack} alt="BrambleAI" className="h-12" />
        </Link>
        
        <h1 className="text-4xl font-bold text-slate-950 mb-4">Privacy Policy</h1>
        <p className="text-slate-600 mb-8">Last updated: 11 September 2025</p>
        
        <div className="space-y-6 text-slate-950">
          <p>
            We respect your privacy and are committed to protecting your personal data.
          </p>

          <section>
            <h2 className="text-2xl font-bold mb-3">What we collect</h2>
            <p>
              When you sign up to our waiting list, we collect your name, email address, and company name.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Why we collect it</h2>
            <p className="mb-2">We use this information to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Contact you with updates about our product and company.</li>
              <li>Invite you to take part in research, pilots, or early access opportunities.</li>
            </ul>
            <p className="mt-2">
              Our legal basis for processing this data is your consent (Article 6(1)(a) UK GDPR).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">How long we keep it</h2>
            <p>
              We will keep your data until you unsubscribe or ask us to delete it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Who has access</h2>
            <p>
              Your data is stored securely and only accessible to our team. We use trusted third-party services (such as Google Workspace) to store and manage your data. These providers may transfer data outside the UK/EU, but only where appropriate safeguards (such as standard contractual clauses) are in place. We will never sell or share your data with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Your rights</h2>
            <p className="mb-2">You can:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Unsubscribe from our emails at any time (every message includes an unsubscribe link).</li>
              <li>Request access to, correction of, or deletion of your personal data.</li>
            </ul>
            <p className="mt-2">
              To exercise your rights, please contact us at hello@bramble.care.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Who we are</h2>
            <p>
              This Privacy Policy is issued by BrambleAI Ltd, registered in England and Wales (Company No. 16622787), with its registered office at 11 Ham Island, Old Windsor, Windsor, England, SL4 2JY.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link to="/" className="text-primary hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
