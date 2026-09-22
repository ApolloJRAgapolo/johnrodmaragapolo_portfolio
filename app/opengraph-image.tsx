import { ImageResponse } from "next/og";

export const alt = "John Rodmar Agapolo / Software, Systems & Data";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: 72, background: "#101112", color: "#f4f4f5", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", fontSize: 22, letterSpacing: 5, color: "#b2b6be" }}>PROFESSIONAL WORKSPACE</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ display: "flex", fontSize: 68, fontWeight: 700 }}>John Rodmar Agapolo</div>
        <div style={{ display: "flex", fontSize: 32, color: "#c5c8ce" }}>Software, Systems &amp; Data</div>
      </div>
      <div style={{ display: "flex", borderTop: "1px solid #45474c", paddingTop: 25, fontSize: 23 }}>Projects / Experience / Credentials</div>
    </div>, size,
  );
}
