import { ImageResponse } from "next/og";

export const alt = "Flowy — Client & Project Operations Platform";

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
        background: "#171717",
        color: "#f7f7f4",
        padding: "72px 80px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "#b9b0ef",
          right: -60,
          top: -80,
        }}
      />

      <div
        style={{
          position: "absolute",
          width: 190,
          height: 190,
          borderRadius: 36,
          background: "#d8ff64",
          right: 180,
          bottom: -80,
          transform: "rotate(14deg)",
        }}
      />

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
            color: "#a6a6a6",
          }}
        >
          Case study · Jessika Miranda
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
              fontSize: 100,
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-5px",
            }}
          >
            Flowy
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 32,
              color: "#d0d0d0",
            }}
          >
            Client & Project Operations Platform
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#a6a6a6",
          }}
        >
          Next.js · React · TypeScript · Supabase
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
