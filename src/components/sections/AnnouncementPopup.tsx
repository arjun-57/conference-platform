"use client";

import * as React from "react";
import { X, Handshake } from "lucide-react";
import { conferenceConfig } from "@/config/conference";

export function AnnouncementPopup() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    // Show once per browser session (re-appears on next session)
    const dismissed = sessionStorage.getItem("ai-sge-popup-dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  function dismiss() {
    sessionStorage.setItem("ai-sge-popup-dismissed", "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Conference Announcement"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-brand-dark/70 backdrop-blur-sm"
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative w-full max-w-lg rounded-3xl border border-brand/25 bg-white shadow-2xl">
        {/* Top gradient strip */}
        <div className="h-2 rounded-t-3xl bg-gradient-to-r from-brand-dark via-brand to-brand-light" />

        <div className="p-8">
          {/* Close button */}
          <button
            onClick={dismiss}
            className="absolute right-5 top-5 flex size-8 items-center justify-center rounded-full bg-muted/60 text-muted-foreground transition-colors hover:bg-muted hover:text-brand-dark"
            aria-label="Close announcement"
          >
            <X className="size-4" />
          </button>

          {/* Icon */}
          <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-dark text-white">
            <Handshake className="size-7" />
          </div>

          {/* Badge */}
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-brand">
            {conferenceConfig.edition} · International Conference
          </p>

          <h2 className="mt-2 text-2xl font-black text-brand-dark">{conferenceConfig.name}</h2>

          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            {conferenceConfig.fullName}
          </p>

          <div className="mt-5 rounded-2xl border border-brand/20 bg-muted/40 p-4 text-sm leading-7 text-brand-dark">
            <p>
              📅 <strong>Conference:</strong> {conferenceConfig.dates.conference}
            </p>
            <p>
              🏫 <strong>Venue:</strong> {conferenceConfig.location}
            </p>
            <p>
              🤝 <strong>In partnership with:</strong> {conferenceConfig.partner}
            </p>
          </div>

          <div className="mt-6 flex gap-3">
            <button
              onClick={dismiss}
              className="flex-1 rounded-full bg-brand-dark px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand"
            >
              Explore Conference
            </button>
            <button
              onClick={dismiss}
              className="rounded-full border border-brand/30 px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-brand/60 hover:text-brand-dark"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
