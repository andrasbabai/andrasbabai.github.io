import React, { useState } from "react";
import { profile } from "./data";

interface OverleafProps {
    onNavigateToContact: () => void;
    }
const ADMIN_EMAIL = "babai.andras@gmail.com"; 

export default function Overleaf({ onNavigateToContact }: OverleafProps) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="mx-auto w-full max-w-6xl px-6 pb-20 text-sand min-h-screen flex flex-col justify-between">
      {/* Top Page Header */}
      <header className="py-12 border-b border-white/10 mb-10">
        <h1 className="font-display text-4xl font-semibold tracking-tight">Overleaf Management</h1>
        <p className="mt-2 text-lg text-mist/80">Access, configuration, and request management for our private server.</p>
      </header>

      {/* SECTION 1: Split Top Row (Registration Step & Form) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start pb-12 border-b border-white/5">
        
        {/* Left Column (Span 2): Step 1 Registration */}
        <div className="lg:col-span-2 space-y-6 pr-0 lg:pr-6">
          <div>
            <h2 className="text-2xl font-semibold text-sand tracking-tight border-b border-white/5 pb-2 mb-4">
              Overleaf Server Tutorial
            </h2>
          </div>

          <section className="space-y-3">
            <h3 className="text-lg font-medium text-darkorange flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-darkorange/10 text-xs text-darkorange">1</span>
              Register to the Server
            </h3>
            <div className="pl-8 space-y-2 text-sm text-mist/80">
              <p>
                <strong className="text-sand">Mail Box Submission:</strong> Submit your institutional or professional email address using the form on the right.
              </p>
              <p>
                <strong className="text-sand">The Process:</strong> Once submitted, an administrator will process your request manually. You will receive an automated invitation email containing a secure generation link. Follow that link to establish your custom password and finalize your account setup.
              </p>
            </div>
          </section>
        </div>

        {/* Right Column (Span 1): Dynamic Registration Request Form */}
        <div className="card p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl shadow-2xl space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-sand">Request Server Access</h2>
            <p className="mt-2 text-xs text-mist/70 leading-relaxed">
              Enter your credential details below. An administrator will verify your profile parameters, create the environment context, and authorize your server identity.
            </p>
          </div>

          <form 
            action={`https://formsubmit.co/${ADMIN_EMAIL}`} 
            method="POST"
            className="space-y-5"
          >
            <input type="hidden" name="_subject" value="New Overleaf Registration Request!" />
            <input type="hidden" name="_captcha" value="true" />
            <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : '#'} />

            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-mist/60 mb-2">
                Email Address
              </label>
              <input 
                type="email" 
                id="email" 
                name="requested_email" 
                placeholder="you@example.com" 
                required 
                className="w-full px-4 py-3 text-sm bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-darkorange text-sand placeholder-mist/30 transition focus:ring-1 focus:ring-darkorange"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#47a142] hover:bg-[#3d8b39] text-white font-semibold text-sm py-3 px-4 rounded-full transition shadow-[0_0_20px_rgba(71,161,66,0.15)] hover:-translate-y-0.5"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>

      {/* SECTION 2: Full Width Bottom Row (Points 2 & 3) */}
      <div className="mt-12 space-y-12 max-w-4xl">
        
        {/* Subtitle: Connect to overleaf */}
        <section className="space-y-4">
          <h3 className="text-lg font-medium text-darkorange flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-overleaf text-xs text-darkorange">2</span>
            Connect to Overleaf
          </h3>
          <div className="pl-8 space-y-4 text-sm text-mist/80">
            <p>
              Once registered, you can log directly into the custom platform instance to build, compile, and manage your documents.
            </p>
            
            <div>
              <a 
                href="https://overleaf.andras.babai.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-5 py-2.5 text-xs font-semibold text-sand transition hover:bg-white/15 hover:-translate-y-0.5"
              >
                Go to Server Console →
              </a>
            </div>

            <ul className="list-disc pl-5 space-y-1 text-mist/70">
              <li>Securely login via your newly configured credentials.</li>
              <li>Create, edit, and share comprehensive LaTeX projects seamlessly with other registered instance users.</li>
            </ul>
          </div>
        </section>

        {/* Subtitle: Support */}
        <section className="space-y-3">
          <h3 className="text-lg font-medium text-darkorange flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-darkorange/10 text-xs text-darkorange">3</span>
            Instance Support
          </h3>
          <div className="pl-8 space-y-4 text-sm text-mist/80">
            <p>
              Need to modify system data, offboard profiles, or remove inactive accounts? Please coordinate directly with administration.
            </p>
            <div>
              {/* 3. UPDATED: Swapped from an <a> tag to a clickable button */}
              <button 
                onClick={onNavigateToContact}
                className="inline-flex items-center gap-2 rounded-full bg-darkorange px-5 py-2.5 text-xs font-semibold text-sand shadow-glow transition hover:-translate-y-0.5"
              >
                Contact
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
    );
}