import { ImageResponse } from "next/og";

export const alt = "SeloraOS — Enterprise CRM, ERP & Custom Software Solutions";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          backgroundColor: "#ffffff",
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(37, 99, 235, 0.08) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.08) 0%, transparent 40%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #2563EB, #8B5CF6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontWeight: "bold",
                fontSize: "24px",
              }}
            >
              S
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "32px", fontWeight: "900", color: "#0F172A", letterSpacing: "-0.03em" }}>
                Selora<span style={{ color: "#2563EB" }}>OS</span>
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 20px",
              borderRadius: "9999px",
              border: "1px solid #E2E8F0",
              backgroundColor: "#F8FAFC",
              fontSize: "16px",
              fontWeight: "600",
              color: "#2563EB",
            }}
          >
            seloraos.online
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: "62px",
              fontWeight: "900",
              color: "#0F172A",
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
              margin: 0,
            }}
          >
            Software That Simplifies Today <br />
            and <span style={{ color: "#2563EB" }}>Scales Tomorrow.</span>
          </h1>
          <p
            style={{
              fontSize: "24px",
              color: "#64748B",
              lineHeight: 1.4,
              margin: 0,
              maxWidth: "900px",
            }}
          >
            Enterprise CRM • Intelligent ERP Platforms • Custom Software • Workflow Automation
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #E2E8F0",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "12px" }}>
            <div
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                backgroundColor: "#EFF6FF",
                color: "#1D4ED8",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Enterprise CRM
            </div>
            <div
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                backgroundColor: "#F5F3FF",
                color: "#6D28D9",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Cloud ERP
            </div>
            <div
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                backgroundColor: "#ECFDF5",
                color: "#047857",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Custom Engineering
            </div>
            <div
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                backgroundColor: "#FEF3C7",
                color: "#B45309",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              99.9% SLA
            </div>
          </div>
          <span style={{ fontSize: "18px", fontWeight: "600", color: "#94A3B8" }}>
            https://seloraos.online
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
