import { ImageResponse } from "next/og";

export const alt = "Jessika Miranda — Frontend Software Engineer";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "#f7f7f4",
        color: "#171717",
        padding: "72px 80px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Pastel decorative shapes */}

      <div
        style={{
          position: "absolute",
          width: 260,
          height: 260,
          borderRadius: "50%",
          background: "#f4b8cf",
          top: -90,
          right: 90,
        }}
      />

      <div
        style={{
          position: "absolute",
          width: 180,
          height: 180,
          borderRadius: 40,
          background: "#f6dc83",
          right: -30,
          bottom: 50,
          transform: "rotate(18deg)",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: 140,
          height: 140,
          borderRadius: 32,
          background: "#b9b0ef",
          right: 260,
          bottom: -60,
          transform: "rotate(-12deg)",
        }}
      />

      {/* Content */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#686868",
          }}
        >
          Portfolio · 2026
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 850,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-4px",
            }}
          >
            Jessika Miranda
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 32,
              color: "#4d4d4d",
            }}
          >
            Frontend Software Engineer
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 14,
              fontSize: 24,
              color: "#686868",
            }}
          >
            React · Next.js · TypeScript
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 20,
            color: "#686868",
          }}
        >
          São Paulo, Brazil
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
