import React, { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface RequestDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RequestDemoModal: React.FC<RequestDemoModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const docId = import.meta.env.VITE_CODA_DOC_ID;
    const tableId = import.meta.env.VITE_CODA_TABLE_ID;
    const apiKey = import.meta.env.VITE_CODA_API_KEY;

    try {
      const response = await fetch(
        `https://coda.io/apis/v1/docs/${docId}/tables/${tableId}/rows`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            rows: [
              {
                cells: [
                  { column: "Name", value: formData.name },
                  { column: "Email", value: formData.email },
                  { column: "Company", value: formData.company },
                ],
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit");
      }

      setStatus("success");
      setTimeout(() => {
        onClose();
        setStatus("idle");
        setFormData({ name: "", email: "", company: "" });
      }, 2000);
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            pointerEvents: "none", // Allow clicks through to backdrop
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(4px)",
              pointerEvents: "auto",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            style={{
              width: "100%",
              maxWidth: "480px",
              backgroundColor: "#fff",
              borderRadius: "16px",
              padding: "32px",
              position: "relative",
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              pointerEvents: "auto",
              margin: "20px",
            }}
          >
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px",
              }}
            >
              <X size={24} color="var(--color-text-secondary)" />
            </button>

            <h2 className="text-subtitle" style={{ marginBottom: "8px" }}>
              Request a Demo
            </h2>
            <p
              className="text-body"
              style={{
                color: "var(--color-text-secondary)",
                marginBottom: "24px",
              }}
            >
              See how Arda can transform your inventory management.
            </p>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: "center", padding: "40px 0" }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    backgroundColor: "#E6F4EA",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1E8E3E"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3
                  className="text-subtitle"
                  style={{ fontSize: "20px", color: "#1E8E3E" }}
                >
                  Request Sent!
                </h3>
                <p
                  className="text-body"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  We'll be in touch shortly.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: 500,
                      marginBottom: "6px",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    style={{
                      width: "100%",
                      padding: "12px",
                      borderRadius: "8px",
                      border: "1px solid var(--color-border)",
                      fontSize: "16px",
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: 500,
                      marginBottom: "6px",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    style={{
                      width: "100%",
                      padding: "12px",
                      borderRadius: "8px",
                      border: "1px solid var(--color-border)",
                      fontSize: "16px",
                      outline: "none",
                    }}
                    placeholder="jane@company.com"
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: 500,
                      marginBottom: "6px",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        company: e.target.value,
                      }))
                    }
                    style={{
                      width: "100%",
                      padding: "12px",
                      borderRadius: "8px",
                      border: "1px solid var(--color-border)",
                      fontSize: "16px",
                      outline: "none",
                    }}
                    placeholder="Acme Inc."
                  />
                </div>

                <div style={{ marginTop: "8px" }}>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    style={{
                      width: "100%",
                      padding: "16px",
                      backgroundColor: "var(--color-accent)",
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      fontSize: "16px",
                      fontWeight: 600,
                      cursor:
                        status === "submitting" ? "not-allowed" : "pointer",
                      opacity: status === "submitting" ? 0.7 : 1,
                      transition: "opacity 0.2s",
                    }}
                  >
                    {status === "submitting" ? "Sending..." : "Request Demo"}
                  </button>
                  {status === "error" && (
                    <p
                      style={{
                        color: "#D93025",
                        fontSize: "14px",
                        marginTop: "8px",
                        textAlign: "center",
                      }}
                    >
                      Something went wrong. Please try again.
                    </p>
                  )}
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
