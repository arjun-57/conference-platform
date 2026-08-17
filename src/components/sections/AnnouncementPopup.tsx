"use client";

import * as React from "react";
import Link from "next/link";
import { Dialog } from "@base-ui/react/dialog";
import { Handshake, X } from "lucide-react";
import { conference, conferenceWindow } from "@/config";

const STORAGE_KEY = "aisge2027-popup-dismissed";
const OPEN_DELAY_MS = 800;

/**
 * First-visit announcement for the conference.
 *
 * Built on the Base UI Dialog primitive so it gets focus trapping, Escape to
 * close, scroll locking and focus restoration for free. Shown once per browser
 * session.
 */
export function AnnouncementPopup() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    // Deferred so the dialog does not fight the initial page paint.
    const timer = setTimeout(() => setOpen(true), OPEN_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  function handleOpenChange(nextOpen: boolean) {
    setOpen(nextOpen);
    if (!nextOpen) sessionStorage.setItem(STORAGE_KEY, "1");
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-100 bg-brand-dark/70 backdrop-blur-sm transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0" />
        <Dialog.Popup className="fixed left-1/2 top-1/2 z-100 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-brand/25 bg-white shadow-2xl transition-all duration-200 data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0">
          <div className="h-2 bg-gradient-to-r from-brand-dark via-brand to-brand-light" />

          <div className="p-8">
            <Dialog.Close
              aria-label="Close announcement"
              className="absolute right-5 top-7 flex size-8 items-center justify-center rounded-full bg-muted/60 text-muted-foreground transition-colors hover:bg-muted hover:text-brand-dark"
            >
              <X className="size-4" />
            </Dialog.Close>

            <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-dark text-white">
              <Handshake className="size-7" />
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-brand">
              {conference.edition} · International Conference
            </p>

            <Dialog.Title className="mt-2 text-2xl font-black text-brand-dark">
              {conference.name}
            </Dialog.Title>

            <Dialog.Description className="mt-3 text-sm leading-7 text-muted-foreground">
              {conference.fullName}
            </Dialog.Description>

            <div className="mt-5 space-y-1 rounded-2xl border border-brand/20 bg-muted/40 p-4 text-sm leading-7 text-brand-dark">
              <p>
                📅 <strong>Conference:</strong> {conferenceWindow.display}
              </p>
              <p>
                🏫 <strong>Venue:</strong> {conference.location}
              </p>
              <p>
                🤝 <strong>In partnership with:</strong> {conference.partner}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/about"
                onClick={() => handleOpenChange(false)}
                className="flex-1 rounded-full bg-brand-dark px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-brand"
              >
                Explore Conference
              </Link>
              <Dialog.Close className="rounded-full border border-brand/30 px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-brand/60 hover:text-brand-dark">
                Close
              </Dialog.Close>
            </div>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
