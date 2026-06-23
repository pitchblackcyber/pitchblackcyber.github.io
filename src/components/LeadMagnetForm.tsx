"use client";

import { useForm, ValidationError } from "@formspree/react";
import { DownloadSimple } from "@phosphor-icons/react";

const FORM_ID = "mykadjqk";
const PDF_URL = "/The_2026_Ransomware_Protection_Checklist-v3.pdf";

export default function LeadMagnetForm() {
  const [state, handleSubmit] = useForm(FORM_ID);

  if (state.succeeded) {
    return (
      <div className="glass-panel p-8 rounded-[2rem] border-t-2 border-t-cyan flex flex-col items-center text-center gap-6 animate-fade-in relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(24,190,227,0.15),transparent_70%)] pointer-events-none"></div>
        
        {/* Success icon */}
        <div className="w-16 h-16 rounded-full bg-cyan/10 flex items-center justify-center border border-cyan/20 shadow-glow-cyan relative z-10">
          <svg
            className="w-8 h-8 text-cyan"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div className="relative z-10">
          <h4 className="text-2xl font-bold text-text-primary mb-2">You&apos;re all set!</h4>
          <p className="text-text-secondary text-sm leading-relaxed">
            Your guide is ready to download. We&apos;ll also keep you updated on the latest
            cybersecurity threats affecting small businesses.
          </p>
        </div>

        <a
          href={PDF_URL}
          download="2026-SMB-Ransomware-Protection-Checklist.pdf"
          id="lead-magnet-download"
          className="w-full font-bold px-6 py-4 rounded-full bg-cyan text-void shadow-glow-cyan active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 text-lg relative z-10"
        >
          <DownloadSimple size={24} weight="bold" />
          Download Your Free Guide
        </a>

        <p className="text-xs text-text-muted relative z-10">
          PDF opens directly — no account needed.
        </p>
      </div>
    );
  }

  return (
    <div className="glass-panel p-8 rounded-[2rem] border border-border">
      <h4 className="text-xl font-bold text-text-primary mb-6">Send Me The Free Guide</h4>

      <form onSubmit={handleSubmit} className="space-y-4" id="lead-magnet-form" noValidate>
        {/* Name field */}
        <div>
          <input
            id="lead-name"
            type="text"
            name="name"
            placeholder="Your Name"
            required
            disabled={state.submitting}
            className="w-full bg-panel border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors disabled:opacity-50"
          />
          <ValidationError
            field="name"
            prefix="Name"
            errors={state.errors}
            className="text-red-400 text-xs mt-1 ml-1"
          />
        </div>

        {/* Email field */}
        <div>
          <input
            id="lead-email"
            type="email"
            name="email"
            placeholder="Business Email"
            required
            disabled={state.submitting}
            className="w-full bg-panel border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors disabled:opacity-50"
          />
          <ValidationError
            field="email"
            prefix="Email"
            errors={state.errors}
            className="text-red-400 text-xs mt-1 ml-1"
          />
        </div>

        {/* Hidden metadata for your Formspree dashboard */}
        <input type="hidden" name="_subject" value="New Lead: 2026 Ransomware Checklist Download" />

        {/* Form-level errors */}
        {state.errors && (
          <div className="bg-red-900/30 border border-red-500/40 rounded-xl px-4 py-3 text-red-300 text-sm">
            Something went wrong — please try again or contact us directly.
          </div>
        )}

        <button
          id="lead-magnet-submit"
          type="submit"
          disabled={state.submitting}
          className="w-full font-bold px-6 py-4 rounded-full bg-cyan text-void hover:shadow-glow-cyan active:scale-[0.98] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {state.submitting ? (
            <>
              <svg
                className="w-4 h-4 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                />
              </svg>
              Sending…
            </>
          ) : (
            "Download Now — It's Free"
          )}
        </button>
      </form>

      <p className="text-xs text-text-muted mt-4 text-center">
        We respect your privacy. No spam, ever.
      </p>
    </div>
  );
}
