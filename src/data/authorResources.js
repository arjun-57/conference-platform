/**
 * Central resource configuration for AISGE2027 paper templates and author guides.
 *
 * All download paths point directly to files hosted on this website under
 * `/downloads/aisge2027/`. Do not hardcode these paths elsewhere in individual pages.
 */

export const authorResources = {
  /**
   * Microsoft Word Templates (.docm)
   * Official Springer LNEE macro-enabled templates for Windows and macOS.
   */
  wordTemplates: {
    windows: {
      id: "word-windows",
      name: "Microsoft Word Template (Windows)",
      shortName: "Word Template for Windows",
      fileName: "splnproc1703.docm",
      path: "/downloads/aisge2027/splnproc1703.docm",
      format: "DOCM",
      os: "Windows",
      size: "104 KB",
      description:
        "Official Springer LNEE macro-enabled template for Microsoft Windows. Compatible with Word 2010 and later.",
    },
    mac: {
      id: "word-mac",
      name: "Microsoft Word Template (Mac)",
      shortName: "Word Template for Mac",
      fileName: "splnproc1703_mac.docm",
      path: "/downloads/aisge2027/splnproc1703_mac.docm",
      format: "DOCM",
      os: "macOS",
      size: "110 KB",
      description:
        "Official Springer LNEE macro-enabled template tailored specifically for Microsoft Word on Apple macOS.",
    },
  },

  /**
   * Author Documentation & Guides (.pdf)
   * Official Springer instructional PDFs for template setup, formatting, and troubleshooting.
   */
  guides: {
    quickStart: {
      id: "guide-quick-start",
      name: "Quick Start Guide",
      shortName: "Quick Start Guide",
      fileName: "Quick Start.pdf",
      path: "/downloads/aisge2027/Quick Start.pdf",
      format: "PDF",
      size: "120 KB",
      description:
        "Step-by-step getting started guide for setting up and working with the Springer Word template.",
    },
    technicalInstructions: {
      id: "guide-technical-instructions",
      name: "Technical Instructions & Formatting Guide",
      shortName: "Technical Instructions",
      fileName: "SPLNPROC Word 2010-2016 Technical Instructions.pdf",
      path: "/downloads/aisge2027/SPLNPROC Word 2010-2016 Technical Instructions.pdf",
      format: "PDF",
      size: "269 KB",
      description:
        "Comprehensive formatting specifications, style reference, and troubleshooting guide for Word 2010–2016.",
    },
  },

  /**
   * LaTeX Author Support
   * Kept strictly separate from the Microsoft Word template downloads.
   */
  latexSupport: {
    name: "Springer LaTeX Author Support",
    url: "https://www.springernature.com/gp/authors/campaigns/latex-author-support",
    format: "External Portal",
    description:
      "Official Springer Nature LaTeX author support, packages, guidelines, document classes, and Overleaf templates.",
    note: "This link directs to Springer Nature's official LaTeX support portal, not a direct LNEE template download.",
  },
};

export default authorResources;

