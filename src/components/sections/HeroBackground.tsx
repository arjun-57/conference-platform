"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const SLIDE_DURATION_MS = 6000;

type HeroBackgroundProps = {
  /** Campus photos, discovered at build time. Always at least one. */
  images: string[];
  /** Campus video path, or null when none has been supplied. */
  video: string | null;
};

/**
 * Home-page hero background.
 *
 * Renders, in order of preference:
 *   1. the campus video, when `public/videos/campus.mp4` exists
 *   2. a crossfading slideshow, when more than one campus photo exists
 *   3. a single static image
 *
 * Motion is disabled for visitors who ask for reduced motion.
 */
export function HeroBackground({ images, video }: HeroBackgroundProps) {
  const [index, setIndex] = React.useState(0);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const isSlideshow = !video && images.length > 1;

  React.useEffect(() => {
    if (!isSlideshow) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(
      () => setIndex((current) => (current + 1) % images.length),
      SLIDE_DURATION_MS
    );
    return () => clearInterval(id);
  }, [isSlideshow, images.length]);

  React.useEffect(() => {
    const element = videoRef.current;
    if (!element) return;
    // Honour reduced-motion: keep the poster frame instead of playing.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.pause();
    }
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-brand-dark">
      {video ? (
        <video
          ref={videoRef}
          className="size-full object-cover"
          poster={images[0]}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src={video} />
        </video>
      ) : (
        images.map((src, i) => (
          <div
            key={src}
            aria-hidden="true"
            className={cn(
              "hero-slide absolute inset-0 bg-cover bg-center",
              isSlideshow && "transition-opacity duration-1000",
              isSlideshow && i !== index && "opacity-0"
            )}
            style={{ backgroundImage: `url("${src}")` }}
          />
        ))
      )}

      {/* Readability overlay — hero text sits on top of this. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,54,64,0.94),rgba(51,87,101,0.82))]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(182,217,224,0.3),transparent_38%)]"
      />
    </div>
  );
}
