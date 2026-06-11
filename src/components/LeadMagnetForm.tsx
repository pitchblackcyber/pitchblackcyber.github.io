"use client";

import { useForm, ValidationError } from "@formspree/react";

const FORM_ID = "mykadjqk";
const PDF_URL = "/The_2026_Ransomware_Protection_Checklist-v3.pdf";

export default function LeadMagnetForm() {
  const [state, handleSubmit] = useForm(FORM_ID);

  if (state.succeeded) {
    return (
      <div className="glass p-8 rounded-2xl border border-brand-cyan/30 flex flex-col items-center text-center gap-6 animate-fade-in">
        {/* Success icon */}
        <div className="w-16 h-16 rounded-full bg-brand-cyan/20 flex items-center justify-center border-2 border-brand-cyan shadow-glow-cyan">
          <svg
            className="w-8 h-8 text-brand-cyan"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div>
          <h4 className="text-2xl font-bold text-white mb-2">You&apos;re all set!</h4>
          <p className="text-text-muted text-sm leading-relaxed">
            Your guide is ready to download. We&apos;ll also keep you updated on the latest
            cybersecurity threats affecting small businesses.
          </p>
        </div>

        <a
          href={PDF_URL}
          download="2026-SMB-Ransomware-Protection-Checklist.pdf"
          id="lead-magnet-download"
          className="w-full font-bold px-6 py-4 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-purple text-deep-space shadow-glow-cyan hover:scale-105 transition-transform flex items-center justify-center gap-3 text-lg"
        >
          <svg
            className="w-5 h-5 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download Your Free Guide
        </a>

        <p className="text-xs text-text-muted">
          PDF opens directly — no account needed.
        </p>
      </div>
    );
  }

  return (
    <div className="glass p-8 rounded-2xl border border-brand-cyan/30">
      <h4 className="text-xl font-bold text-white mb-6">Send Me The Free Guide</h4>

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
            className="w-full bg-[#0e1018] border border-border-glass rounded-xl px-4 py-3 text-white placeholder:text-text-muted/60 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors disabled:opacity-50"
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
            className="w-full bg-[#0e1018] border border-border-glass rounded-xl px-4 py-3 text-white placeholder:text-text-muted/60 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors disabled:opacity-50"
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
          className="w-full font-bold px-6 py-4 rounded-xl bg-brand-cyan text-deep-space hover:bg-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
