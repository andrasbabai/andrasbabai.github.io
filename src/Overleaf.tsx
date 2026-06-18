import React, { useState } from "react";

export default function Overleaf() {
  const [submitted, setSubmitted] = useState(false);

  // Replace this with your actual personal email address
  const ADMIN_EMAIL = "your-personal-email@gmail.com"; 

  return (
    <div className="mx-auto w-full max-w-6xl px-6 pb-20 text-sand">
      <header className="py-8">
        <h1 className="font-display text-3xl font-semibold">Overleaf</h1>
        <p className="mt-2 text-mist/80">Access and request management for our private server.</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Left/Main Column: Server Info */}
        <div className="card p-6 md:col-span-2 space-y-4">
          <p className="text-sm text-mist/80">
            This is a standalone route mounted at <strong className="text-sand">/overleaf</strong>. Use this page to request access, view server status, or navigate to our core writing suite via our secure network tunnel.
          </p>
          <div>
            <a href="/" className="inline-block text-sm font-semibold text-darkorange hover:underline">
              &larr; Back to home
            </a>
          </div>
        </div>

        {/* Right Column: Dynamic Registration Request Form */}
        <div className="card p-6 border border-mist/20 rounded-xl bg-opacity-50 backdrop-blur-sm shadow-xl">
          <h2 className="text-lg font-semibold text-sand mb-2">Request Server Access</h2>
          <p className="text-xs text-mist/70 mb-4">
            Enter your institutional or professional email address. An administrator will review your submission and register your account.
          </p>

          <form 
            action={`https://formsubmit.co/${ADMIN_EMAIL}`} 
            method="POST"
            className="space-y-4"
          >
            {/* FormSubmit Special Configuration Options */}
            <input type="hidden" name="_subject" value="New Overleaf Registration Request!" />
            <input type="hidden" name="_captcha" value="true" />
            {/* Redirects user back to this page after submitting successfully */}
            <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : '#'} />

            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-mist/80 mb-1">
                Email Address
              </label>
              <input 
                type="email" 
                id="email" 
                name="requested_email" 
                placeholder="you@example.com" 
                required 
                className="w-full px-3 py-2 text-sm bg-black/30 border border-mist/30 rounded-lg focus:outline-none focus:border-darkorange text-sand placeholder-mist/40 transition-colors"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-darkorange hover:bg-darkorange/90 text-white font-semibold text-sm py-2 px-4 rounded-lg transition-colors shadow-md"
            >
              Submit Request
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}