import React from "react";

export default function Overleaf() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 pb-20 text-sand">
      <header className="py-8">
        <h1 className="font-display text-3xl font-semibold">Overleaf</h1>
        <p className="mt-2 text-mist/80">A dedicated Overleaf page.</p>
      </header>

      <main className="space-y-6">
        <div className="card p-6">
          <p className="text-sm text-mist/80">
            This is a standalone route mounted at <strong>/overleaf</strong>. Use this page to link to your Overleaf projects or embed content.
          </p>
          <a href="/" className="mt-4 inline-block text-sm font-semibold text-darkorange">
            Back to home
          </a>
        </div>
      </main>
    </div>
  );
}
