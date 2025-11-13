import { Link } from "react-router-dom";
import brambleLogoBlack from "@/assets/brambleai-logo-black.svg";

const SubProcessors = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-block mb-8">
          <img src={brambleLogoBlack} alt="BrambleAI" className="h-12" />
        </Link>
        
        <h1 className="text-4xl font-bold text-slate-950 mb-4">Subprocessors</h1>
        <p className="text-slate-600 mb-8">Last updated: 08 November 2025</p>
        
        <div className="space-y-6 text-slate-950">
          <section>
            <h2 className="text-2xl font-bold mb-4">Current subprocessors</h2>
            <p className="mb-6">
              The following organisations are engaged as of the update date above:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold">Supabase Inc.</h3>
                <p>Managed PostgreSQL database and storage services.</p>
              </div>

              <div>
                <h3 className="font-bold">Vercel Inc.</h3>
                <p>Hosting and execution of frontend assets and serverless (Edge) functions.</p>
              </div>

              <div>
                <h3 className="font-bold">Render Inc.</h3>
                <p>Hosting of API services.</p>
              </div>

              <div>
                <h3 className="font-bold">Mapbox</h3>
                <p>Mapping, geocoding, and routing services.</p>
              </div>

              <div>
                <h3 className="font-bold">Google Workspace</h3>
                <p>Business email, file storage, and internal collaboration.</p>
              </div>

              <div>
                <h3 className="font-bold">Notion Labs Inc.</h3>
                <p>Internal project management and requirements tracking.</p>
              </div>
            </div>
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

export default SubProcessors;
