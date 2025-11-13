import { Link } from "react-router-dom";
import brambleLogoBlack from "@/assets/brambleai-logo-black.svg";

const SecurityMeasures = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-block mb-8">
          <img src={brambleLogoBlack} alt="BrambleAI" className="h-12" />
        </Link>
        
        <h1 className="text-4xl font-bold text-slate-950 mb-4">Security Measures</h1>
        <p className="text-slate-600 mb-8">Last updated: 15 November 2025</p>
        
        <div className="space-y-6 text-slate-950">
          <p>
            BrambleAI's production environment is primarily hosted within the United Kingdom and the European Economic Area (EEA).
          </p>

          <section>
            <h2 className="text-2xl font-bold mb-3">Hosting Locations and Providers</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Frontend and serverless functions:</strong> Deployed on Vercel, with execution regions configured for London, United Kingdom (LHR1).</li>
              <li><strong>Core APIs:</strong> Hosted on Render, deployed in Frankfurt, Germany (EEA).</li>
              <li><strong>Database and storage:</strong> Hosted on Supabase, operating within the AWS region eu-west-2 (London, UK).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Use of Mapbox</h2>
            <p>
              In addition, BrambleAI uses Mapbox Inc. to provide mapping, routing, and geocoding services. Address and coordinate data (without names or other identifying information) are transmitted to Mapbox's APIs solely for these purposes. Mapbox processes such data in the United States under the UK-US Data Privacy Framework, which provides an adequate level of protection for cross-border data transfers under UK GDPR.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Data Residency</h2>
            <p>
              All other personal data are stored and processed exclusively within the UK or EEA.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Security Standards</h2>
            <p>
              The majority of BrambleAI's hosting providers rely on Amazon Web Services (AWS) or equivalent cloud infrastructure certified under ISO 27001, SOC 2 Type II, and other internationally recognised security standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Technical and Organisational Measures</h2>
            <p className="mb-2">
              BrambleAI implements appropriate technical and organisational measures to ensure a level of security proportionate to the risk, including:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Encryption of data in transit (TLS 1.2 or higher) and at rest (AES-256).</li>
              <li>Role-based access control and multi-factor authentication for administrative accounts.</li>
              <li>Application of the principle of least privilege for infrastructure and data access.</li>
              <li>Regular internal security reviews and prompt patching of dependencies and environments as required.</li>
              <li>Activity logging and monitoring of administrative access.</li>
              <li>Secure development and deployment practices, with clear separation of production and staging environments.</li>
              <li>Data minimisation and secure deletion of data upon termination or completion of services.</li>
              <li>Staff confidentiality agreements and data-protection awareness training.</li>
            </ul>
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

export default SecurityMeasures;
