import { ImageResponse } from "next/og";
import { toolsBySlug } from "@/lib/tools-config";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = toolsBySlug[slug];

  const title = tool?.title ?? "Text Tool";
  const description = tool?.shortDescription ?? "Free browser-based text tool";
  const category = tool?.category ?? "Tool";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#F5FDF3",
          padding: "80px 100px",
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

        {/* Category badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#EAFDE7",
            border: "1px solid #72BF01",
            borderRadius: "9999px",
            padding: "6px 20px",
            marginBottom: "28px",
          }}
        >
          <span
            style={{
              fontSize: "20px",
              fontWeight: 500,
              color: "#72BF01",
              letterSpacing: "0.04em",
            }}
          >
            ShelfCue · {category}
          </span>
        </div>

        {/* Tool title */}
        <div
          style={{
            fontSize: "76px",
            fontWeight: 700,
            color: "#1A2B18",
            lineHeight: 1.05,
            marginBottom: "24px",
            maxWidth: "900px",
          }}
        >
          {title}
        </div>

        {/* Short description */}
        <div
          style={{
            fontSize: "30px",
            color: "#4A6642",
            lineHeight: 1.4,
            maxWidth: "850px",
          }}
        >
          {description}
        </div>

        {/* Footer strip */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "80px",
            backgroundColor: "#EAFDE7",
            borderTop: "1px solid #D0EAC8",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 100px",
          }}
        >
          <span style={{ fontSize: "20px", color: "#88A882", fontWeight: 500 }}>
            shelfcue.com
          </span>
          <span style={{ fontSize: "20px", color: "#88A882" }}>
            Free · No signup · Runs in your browser
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
