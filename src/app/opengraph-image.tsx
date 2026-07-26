import { ImageResponse } from "next/og";
import { conference, conferenceWindow } from "@/config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${conference.name} — ${conference.fullName}`;

/** Social share card, generated at build time. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #1c3640 0%, #335765 60%, #74a8a4 100%)",
          padding: "72px",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 26,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#b6d9e0",
              fontWeight: 700,
            }}
          >
            {`${conference.edition} · International Conference`}
          </div>
          <div style={{ fontSize: 132, fontWeight: 900, marginTop: 12 }}>
            {conference.name}
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.4,
              color: "rgba(255,255,255,0.88)",
              marginTop: 16,
              maxWidth: 980,
            }}
          >
            {conference.fullName}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderTop: "2px solid rgba(182,217,224,0.4)",
            paddingTop: 28,
          }}
        >
          <div style={{ fontSize: 32, fontWeight: 700, color: "#b6d9e0" }}>
            {conferenceWindow.display}
          </div>
          <div
            style={{
              fontSize: 26,
              color: "rgba(255,255,255,0.75)",
              marginTop: 8,
            }}
          >
            {`${conference.locationShort} · with ${conference.partner}`}
          </div>
        </div>
      </div>
    ),
    size
  );
}
