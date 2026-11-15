import React from "react";
import {
  Apple,
  BookOpen,
  Download,
  ExternalLink,
  FileCode2,
  FileText,
  Monitor,
} from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { authorResources } from "@/data/authorResources";
import { cn } from "@/lib/utils";

interface AuthorResourcesProps {
  id?: string;
  className?: string;
  showHeading?: boolean;
}

export function AuthorResources({
  id = "paper-templates",
  className,
  showHeading = true,
}: AuthorResourcesProps) {
  const { wordTemplates, guides, latexSupport } = authorResources;

  return (
    <section id={id} className={cn("scroll-mt-16", className)}>
      <div className="mx-auto max-w-5xl">
        {showHeading && (
          <SectionHeading
            eyebrow="Springer LNEE Guidelines"
            title="Paper Templates & Author Resources"
            description="Download official Springer Lecture Notes in Electrical Engineering (LNEE) manuscript templates and author documentation for AISGE2027."
            align="center"
          />
        )}

        {/* ── 1. MICROSOFT WORD TEMPLATES ── */}
        <div className={cn(showHeading ? "mt-12" : "mt-0")}>
          <div className="mb-6 flex flex-col gap-1">
            <h3 className="text-xl font-black text-brand-dark">
              Microsoft Word Templates
            </h3>
            <p className="text-sm text-muted-foreground">
              Select and download the macro-enabled template (<code>.docm</code>)
              corresponding to your operating system.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Windows Template */}
            <div className="content-card flex flex-col justify-between p-6 sm:p-7">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-brand-dark text-white">
                      <Monitor className="size-5" />
                    </div>
                    <div>
                      <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-xs font-bold text-brand-dark">
                        Windows OS
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {wordTemplates.windows.format} • {wordTemplates.windows.size}
                  </span>
                </div>

                <h4 className="mt-4 text-lg font-bold text-brand-dark">
                  {wordTemplates.windows.name}
                </h4>
                <p className="mt-1 font-mono text-xs text-brand font-semibold">
                  {wordTemplates.windows.fileName}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {wordTemplates.windows.description}
                </p>

                <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-brand" />
                    Formatted for single-column Springer LNEE proceedings
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-brand" />
                    Includes pre-configured heading, equation, and citation styles
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-brand/10">
                <a
                  href={wordTemplates.windows.path}
                  download={wordTemplates.windows.fileName}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-dark px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand"
                >
                  <Download className="size-4" />
                  Download for Windows ({wordTemplates.windows.fileName})
                </a>
              </div>
            </div>

            {/* Mac Template */}
            <div className="content-card flex flex-col justify-between p-6 sm:p-7">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-brand-dark text-white">
                      <Apple className="size-5" />
                    </div>
                    <div>
                      <span className="inline-block rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-xs font-bold text-amber-900">
                        Apple macOS
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {wordTemplates.mac.format} • {wordTemplates.mac.size}
                  </span>
                </div>

                <h4 className="mt-4 text-lg font-bold text-brand-dark">
                  {wordTemplates.mac.name}
                </h4>
                <p className="mt-1 font-mono text-xs text-brand font-semibold">
                  {wordTemplates.mac.fileName}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {wordTemplates.mac.description}
                </p>

                <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-brand" />
                    Specifically adapted for Microsoft Word for Mac
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-brand" />
                    Includes pre-configured heading, equation, and citation styles
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-brand/10">
                <a
                  href={wordTemplates.mac.path}
                  download={wordTemplates.mac.fileName}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-dark px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand"
                >
                  <Download className="size-4" />
                  Download for Mac ({wordTemplates.mac.fileName})
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── 2. AUTHOR GUIDES & DOCUMENTATION ── */}
        <div className="mt-12">
          <div className="mb-6 flex flex-col gap-1">
            <h3 className="text-xl font-black text-brand-dark">
              Author Guides & Instructions
            </h3>
            <p className="text-sm text-muted-foreground">
              Official PDF reference documentation for installing, configuring, and
              formatting your manuscript.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Quick Start Guide */}
            <div className="content-card flex flex-col justify-between p-6 sm:p-7">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-brand/15 text-brand-dark">
                    <BookOpen className="size-5 text-brand" />
                  </div>
                  <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-800">
                    {guides.quickStart.format} • {guides.quickStart.size}
                  </span>
                </div>

                <h4 className="mt-4 text-lg font-bold text-brand-dark">
                  {guides.quickStart.name}
                </h4>
                <p className="mt-1 font-mono text-xs text-brand font-semibold">
                  {guides.quickStart.fileName}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {guides.quickStart.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand/10">
                <a
                  href={guides.quickStart.path}
                  download={guides.quickStart.fileName}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-brand/25 bg-secondary/50 px-5 py-3 text-sm font-bold text-brand-dark transition-colors hover:bg-brand hover:text-white"
                >
                  <Download className="size-4" />
                  Download Guide (PDF)
                </a>
              </div>
            </div>

            {/* Technical Instructions */}
            <div className="content-card flex flex-col justify-between p-6 sm:p-7">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-brand/15 text-brand-dark">
                    <FileText className="size-5 text-brand" />
                  </div>
                  <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-800">
                    {guides.technicalInstructions.format} • {guides.technicalInstructions.size}
                  </span>
                </div>

                <h4 className="mt-4 text-lg font-bold text-brand-dark">
                  {guides.technicalInstructions.name}
                </h4>
                <p className="mt-1 font-mono text-xs text-brand font-semibold">
                  {guides.technicalInstructions.fileName}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {guides.technicalInstructions.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand/10">
                <a
                  href={guides.technicalInstructions.path}
                  download={guides.technicalInstructions.fileName}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-brand/25 bg-secondary/50 px-5 py-3 text-sm font-bold text-brand-dark transition-colors hover:bg-brand hover:text-white"
                >
                  <Download className="size-4" />
                  Download Technical Instructions (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── 3. LATEX AUTHORS (DISTINCT & SEPARATE) ── */}
        <div className="mt-10 rounded-2xl border border-brand/25 bg-gradient-to-r from-secondary/60 via-white to-secondary/30 p-6 sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2.5">
                <div className="flex size-9 items-center justify-center rounded-lg bg-brand-dark text-white">
                  <FileCode2 className="size-5" />
                </div>
                <h3 className="text-xl font-black text-brand-dark">LaTeX Authors</h3>
                <span className="rounded-full bg-brand/15 px-3 py-0.5 text-xs font-bold text-brand-dark">
                  {latexSupport.format}
                </span>
              </div>
              <p className="mt-3 text-sm font-bold text-brand-dark">
                {latexSupport.name}
              </p>
              <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                {latexSupport.description}
              </p>
              <p className="mt-2 text-xs italic text-muted-foreground/80">
                {latexSupport.note}
              </p>
            </div>
            <div className="shrink-0">
              <a
                href={latexSupport.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-dark px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand"
              >
                <span>{latexSupport.name}</span>
                <ExternalLink className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { AuthorResources as PaperTemplates };
export default AuthorResources;

