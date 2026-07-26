import fs from "node:fs";
import path from "node:path";

/**
 * Build-time discovery of home-page hero media.
 *
 * These read the filesystem, so they may only be called from Server
 * Components. They run once during `next build`, which means adding media is a
 * pure content operation — drop files in the folders below and redeploy, no
 * code change required.
 */

const PUBLIC_DIR = path.join(process.cwd(), "public");
const CAMPUS_IMAGE_DIR = path.join(PUBLIC_DIR, "images", "campus");
const VIDEO_DIR = path.join(PUBLIC_DIR, "videos");

const IMAGE_PATTERN = /\.(jpe?g|png|webp|avif)$/i;

/** Checked in order; the first one present wins. */
const VIDEO_CANDIDATES = ["campus.mp4", "campus.webm"];

/** Shown when no campus photos have been added yet. */
const FALLBACK_IMAGE = "/images/conference-hero.jpg";

/**
 * Every campus photo in `public/images/campus/`, sorted by filename.
 * Returns the default hero image when the folder is missing or empty, so the
 * page always renders something.
 */
export function getCampusImages(): string[] {
  try {
    const files = fs
      .readdirSync(CAMPUS_IMAGE_DIR)
      .filter((file) => IMAGE_PATTERN.test(file))
      .sort();

    if (files.length > 0) {
      return files.map((file) => `/images/campus/${file}`);
    }
  } catch {
    // Folder not created yet — fall through to the default image.
  }
  return [FALLBACK_IMAGE];
}

/**
 * Path to the campus background video, or `null` when none has been added.
 * Drop `campus.mp4` into `public/videos/` and it becomes the hero background
 * automatically, with the campus photos acting as poster and fallback.
 */
export function getCampusVideo(): string | null {
  for (const file of VIDEO_CANDIDATES) {
    try {
      fs.accessSync(path.join(VIDEO_DIR, file));
      return `/videos/${file}`;
    } catch {
      // Not present — try the next candidate.
    }
  }
  return null;
}
