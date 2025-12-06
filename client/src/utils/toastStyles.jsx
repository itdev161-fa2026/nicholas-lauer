import toast from "react-hot-toast";
import React, { useEffect, useState } from "react";

/* ------------------ KEYFRAME ANIMATION ------------------ */
const fadeSlideIn = {
  animation: "fadeSlideIn 0.35s ease forwards",
};

const animations = `
@keyframes fadeSlideIn {
  0% { opacity: 0; transform: translateY(10px) scale(0.98); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}
`;

if (typeof document !== "undefined" && !document.getElementById("toast-animations")) {
  const styleTag = document.createElement("style");
  styleTag.id = "toast-animations";
  styleTag.innerHTML = animations;
  document.head.appendChild(styleTag);
}

/* ------------------ BASE STYLE ------------------ */
const baseStyle = {
  backdropFilter: "blur(10px)",
  background: "rgba(17, 25, 40, 0.80)",
  padding: "16px 20px",
  borderRadius: "14px",
  color: "white",
  fontSize: "15px",
  fontWeight: 500,
  display: "flex",
  alignItems: "center",
  gap: "12px",
  boxShadow: "0 10px 28px rgba(0,0,0,0.45)",
  ...fadeSlideIn,
};

/* ------------------ SUCCESS / ERROR / INFO ------------------ */
export const successToast = (msg) =>
  toast.custom(
    <div style={{ ...baseStyle, background: "rgba(34,197,94,0.85)" }}>
      <span style={{ fontSize: "22px" }}>✅</span> {msg}
    </div>
  );

export const errorToast = (msg) =>
  toast.custom(
    <div style={{ ...baseStyle, background: "rgba(239,68,68,0.85)" }}>
      <span style={{ fontSize: "22px" }}>❌</span> {msg}
    </div>
  );

export const infoToast = (msg) =>
  toast.custom(
    <div style={{ ...baseStyle, background: "rgba(59,130,246,0.85)" }}>
      <span style={{ fontSize: "22px" }}>ℹ️</span> {msg}
    </div>
  );

/* ------------------ CONFIRMATION TOAST ------------------ */
export const confirmToast = (message) =>
  new Promise((resolve) => {
    const id = toast.custom(
      (t) => (
        <div
          style={{
            ...baseStyle,
            width: "330px",
            flexDirection: "column",
            padding: "20px 24px",
            background: "rgba(17, 25, 40, 0.92)",
          }}
        >
          <span style={{ fontSize: "32px", marginBottom: "6px" }}>⚠️</span>

          <div
            style={{
              marginBottom: "18px",
              fontSize: "16px",
              lineHeight: "22px",
              textAlign: "center",
            }}
          >
            {message}
          </div>

          <div style={{ display: "flex", gap: "10px", width: "100%" }}>
            <button
              onClick={() => {
                toast.dismiss(id);
                resolve(false);
              }}
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "8px",
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "white",
              }}
            >
              Cancel
            </button>

            <button
              onClick={() => {
                toast.dismiss(id);
                resolve(true);
              }}
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "8px",
                background: "rgba(239,68,68,0.85)",
                color: "white",
                border: "none",
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      ),
      { duration: Infinity }
    );
  });

/* ------------------ USE TOAST THEME HOOK ------------------ */
export const useToastTheme = () => {
  const [theme, setTheme] = useState(
    document.body.classList.contains("dark-mode") ? "dark" : "light"
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isDark = document.body.classList.contains("dark-mode");
      setTheme(isDark ? "dark" : "light");
    });

    observer.observe(document.body, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return {
    style: {
      background: theme === "dark" ? "#333" : "#fff",
      color: theme === "dark" ? "#fff" : "#111",
    },
  };
};


export const toastTheme = (theme) => ({
  style: {
    background: theme === "dark"
      ? "rgba(35,35,35,0.85)"
      : "rgba(255,255,255,0.9)",
    color: theme === "dark" ? "#fff" : "#222",
    backdropFilter: "blur(10px)",
    borderRadius: "12px",
    fontWeight: 500,
  }
});
