import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "#0a0a0a",
          color: "#f6f5f1",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 40, fontWeight: 700, letterSpacing: -1 }}>
          MARGEN/
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 300,
            lineHeight: 1.15,
            maxWidth: 920,
          }}
        >
          Cultura para quienes buscan más.
        </div>
      </div>
    ),
    { ...size },
  );
}
