"use client";
import { useState, useEffect } from "react";

export default function AnnouncementBar() {
  const [time, setTime] = useState({ h: 12, m: 11, s: 54 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;

        if (s > 0) return { h, m, s: s - 1 };
        if (m > 0) return { h, m: m - 1, s: 59 };
        if (h > 0) return { h: h - 1, m: 59, s: 59 };

        return { h: 0, m: 0, s: 0 };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div className="hidden md:flex bg-black text-white text-sm py-2.5 px-4 text-center items-center justify-center gap-1.5 flex-wrap">
      <span className="text-base leading-none">🎉</span>

      <span className="text-white font-normal">
        Flash Sale:{" "}
        <span className="font-bold" style={{ color: "#00E5C0" }}>
          80% Off Hosting
        </span>{" "}
        <span className="text-white font-normal">
          + Free Domain — Ends in
        </span>
      </span>

      {/* Timer pill */}
      <span
        className="inline-flex items-center gap-1 font-mono font-semibold text-white text-sm px-3 py-1 rounded"
        style={{
          backgroundColor: "#1a1a1a",
          border: "1px solid #333",
        }}
      >
        <span>{pad(time.h)} h</span>
        <span>{pad(time.m)} m</span>
        <span>{pad(time.s)} s</span>
      </span>

      <a
        href="#pricing"
        className="font-semibold underline underline-offset-2 ml-1 hover:opacity-80 transition-opacity"
        style={{ color: "#00E5C0" }}
      >
        View Plans →
      </a>
    </div>
  );
}


