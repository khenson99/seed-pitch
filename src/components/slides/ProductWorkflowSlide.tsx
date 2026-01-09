import React from "react";
import { Slide } from "../Slide";
import { ScanLine, Server } from "lucide-react";

import physicalContextV2 from "../../assets/physical_context_v2.jpg";
import digitalOrderModalFull from "../../assets/digital_order_modal_full.png";
import scanModal from "../../assets/digital_scan_modal.png";

export const ProductWorkflowSlide: React.FC = () => {
  return (
    <Slide>
      <div style={{ height: "100%", display: "flex", flexDirection: "column" }} className="responsive-auto-height">
        <div style={{ marginBottom: "var(--spacing-md)" }}>
          <span className="text-micro">PRODUCT WORKFLOW</span>
          <h2 className="text-title" style={{ marginTop: "var(--spacing-sm)" }}>
            From <span className="text-accent">Shop Floor</span> to{" "}
            <span className="text-accent">Top Floor</span>.
          </h2>
        </div>

        <div
          className="responsive-auto-height"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--spacing-md)",
            flex: 1,
            overflow: "hidden", // Prevent scroll if content slightly overflows
          }}
        >
          {/* Top Row: Physical + Digital Scan */}
          <div
            className="responsive-stack responsive-auto-height"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--spacing-md)",
              flex: 0.5, // Reduced height for top images (approx 25-30% of space)
              minHeight: 0,
            }}
          >
            {/* Left: Physical Context */}
            <div
              className="responsive-full-width responsive-auto-height"
              style={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                border: "1px solid var(--color-border)",
              }}
            >
              <img
                src={physicalContextV2}
                alt="Physical Kanban Context"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "var(--spacing-md)",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                  color: "#fff",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                  <ScanLine size={16} />
                  <span style={{ fontWeight: 600, fontSize: "14px" }}>Physical Signal</span>
                </div>
                <p style={{ fontSize: "12px", opacity: 0.9 }}>
                  Scan to reorder at the source.
                </p>
              </div>
            </div>

            {/* Right: Digital Scan Modal */}
            <div
              className="responsive-full-width responsive-auto-height"
              style={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                border: "1px solid var(--color-border)",
              }}
            >
              <img
                src={scanModal}
                alt="Digital Scan Verification"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              />
               <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "var(--spacing-md)",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                    color: "#fff",
                  }}
                >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                  <Server size={16} />
                  <span style={{ fontWeight: 600, fontSize: "14px" }}>Digital Capture</span>
                </div>
                <p style={{ fontSize: "12px", opacity: 0.9 }}>
                  Instant verification and data entry.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Row: Full Width Queue */}
          <div
            className="responsive-auto-height"
            style={{
              // Remove flex: 1.5 to stop forcing full height
              // Let it take natural height based on image
              height: "auto", 
              width: "100%",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              border: "1px solid var(--color-border)",
              position: "relative",
            }}
          >
            <img
              src={digitalOrderModalFull}
              alt="Digital Order Queue"
              style={{
                width: "100%",
                height: "auto", // Maintain aspect ratio
                display: "block", // Remove inline gap
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "var(--spacing-md)",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
                color: "#fff",
              }}
            >
              <p style={{ fontWeight: 600, fontSize: "16px", marginBottom: "4px" }}>
                Automated Replenishment Flow
              </p>
              <p style={{ fontSize: "13px", opacity: 0.9 }}>
                Purchasing teams see and approve aggregated demand instantly, closing the loop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};
