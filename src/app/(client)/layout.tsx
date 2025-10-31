"use client";

import React, { useEffect, useState } from "react";
import PushStatus from "@/components/PushStatus";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [hasToken, setHasToken] = useState(false);
  useEffect(() => {
    setHasToken(!!localStorage.getItem("token"));
    setMounted(true);
  }, []);

  const hasVapid = !!process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY;

  return (
    <div>
      <header style={{ padding: 16, borderBottom: "1px solid #eee", display: "flex", gap: 12, alignItems: "center" }}>
        <a href="/" style={{ fontWeight: 700 }}>Ezra</a>
        <nav style={{ display: "flex", gap: 12 }}>
          <a href="/">Home</a>
          <a href="/events">Event</a>
          <a href="/musics">Music</a>
          <a href="/churches">Church</a>
          <a href="/bands">Band</a>
          <a href="/donations">Donations</a>
        </nav>
        <div style={{ marginLeft: "auto", display: "flex", gap: 12 }} suppressHydrationWarning>
          {mounted && hasToken ? <>
            <button
              onClick={async () => {
                if (!hasVapid) {
                  alert("Missing VAPID key. Set NEXT_PUBLIC_FIREBASE_VAPID_KEY in .env.local and restart.");
                  return;
                }
                const { enablePushNotifications } = await import("@/lib/notifications");
                try {
                  const t = await enablePushNotifications();
                  alert(`Notifications enabled. Token: ${t.substring(0, 12)}...`);
                } catch (e: any) {
                  alert(e?.message || "Failed to enable notifications");
                }
              }}
              disabled={!hasVapid}
              style={{ padding: 8, borderRadius: 6, border: "1px solid #ddd", opacity: hasVapid ? 1 : 0.6 }}
            >
              {hasVapid ? "Enable Notifications" : "Configure Push"}
            </button>
            <a href="/admin">Admin</a>
          </> : (<>
            <a href="/register">Register</a>
            <a href="/login">Login</a>
          </>)}
        </div>
      </header>
      {children}
      <PushStatus />
    </div>
  );
}


