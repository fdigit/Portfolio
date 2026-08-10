import { ImageResponse } from "next/og";

export const alt = "Mfon Francis — Web & Mobile Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    alignItems: "center",
                    background: "linear-gradient(135deg, #eff6ff 0%, #f5f3ff 50%, #fff7ed 100%)",
                    color: "#0f172a",
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                    padding: "72px",
                    position: "relative",
                    width: "100%",
                }}
            >
                <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "900px" }}>
                    <div style={{ color: "#2563eb", display: "flex", fontSize: 28, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase" }}>
                        Mfon Francis
                    </div>
                    <div style={{ display: "flex", fontSize: 76, fontWeight: 700, letterSpacing: -3, lineHeight: 1.05 }}>
                        Web & Mobile Developer
                    </div>
                    <div style={{ color: "#475569", display: "flex", fontSize: 30, lineHeight: 1.4 }}>
                        Thoughtful web and mobile products, from polished interfaces to dependable APIs.
                    </div>
                </div>
                <div style={{ background: "#2563eb", borderRadius: 9999, bottom: -170, height: 420, position: "absolute", right: -110, width: 420 }} />
                <div style={{ background: "#f97316", borderRadius: 9999, height: 140, position: "absolute", right: 115, top: 80, width: 140 }} />
            </div>
        ),
        size
    );
}
