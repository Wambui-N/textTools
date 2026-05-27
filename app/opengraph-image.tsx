import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ShelfCue - Free Online Text Tools";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F5FDF3",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            backgroundColor: "#72BF01",
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#EAFDE7",
            border: "1px solid #72BF01",
            borderRadius: "9999px",
            padding: "6px 20px",
            marginBottom: "32px",
          }}
        >
          <span
            style={{
              fontSize: "18px",
              fontWeight: 500,
              color: "#72BF01",
              letterSpacing: "0.05em",
            }}
          >
            Free · Browser-based · No signup
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "#1A2B18",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          ShelfCue
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "30px",
            color: "#4A6642",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.4,
          }}
        >
          31 free text tools for writers, developers, and marketers
        </div>

        {/* Tool pills */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "40px",
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: "900px",
          }}
        >
          {["Word Counter", "Case Converter", "Text Diff", "ROT13", "Morse Code", "Binary"].map(
            (name) => (
              <div
                key={name}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #D0EAC8",
                  borderRadius: "8px",
                  padding: "8px 18px",
                  fontSize: "20px",
                  color: "#4A6642",
                  fontWeight: 500,
                }}
              >
                {name}
              </div>
            )
          )}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "36px",
            fontSize: "20px",
            color: "#88A882",
          }}
        >
          shelfcue.com
        </div>
      </div>
    ),
    { ...size }
  );
}
