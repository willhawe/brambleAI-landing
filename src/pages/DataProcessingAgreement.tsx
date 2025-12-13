import { Link } from "react-router-dom";
import BrambleLogo from "@/components/BrambleLogo";
import dpaPdf from "@/assets/Data Processing Agreement (DPA).pdf";

const DataProcessingAgreement = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="inline-block mb-8" aria-label="BrambleAI home">
          <BrambleLogo variant="dark" className="h-10 w-auto sm:h-12" />
        </Link>

        <h1 className="text-4xl font-bold text-slate-950 mb-4">Data Processing Agreement</h1>
        <p className="text-slate-600 mb-8">View or download our standard DPA below.</p>

        <div className="space-y-4 text-slate-950">
          <div className="rounded-xl border border-slate-200 shadow-sm overflow-hidden bg-slate-50">
            <iframe
              src={dpaPdf}
              title="BrambleAI Data Processing Agreement PDF"
              className="w-full h-[80vh]"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-slate-600">
            <p>If the PDF does not load, you can open it directly.</p>
            <a
              href={dpaPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Open PDF in new tab
            </a>
          </div>
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

export default DataProcessingAgreement;
