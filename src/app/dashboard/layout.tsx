"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      const redirect = encodeURIComponent(pathname || "/dashboard");
      router.replace(`/login?redirect=${redirect}`);
    }
  }, [pathname, router]);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", minHeight: "100vh" }}>
      <aside style={{ borderRight: "1px solid #eee", padding: 16 }}>
        <div style={{ fontWeight: 700, marginBottom: 12 }}>Dashboard</div>
        <nav style={{ display: "grid", gap: 8 }}>
          <a href="/dashboard">Home</a>
          <a href="/dashboard/account">Account</a>
          <a href="/dashboard/church">Church</a>
          <a href="/dashboard/bands">Band</a>
          <a href="/dashboard/events">Event</a>
          <a href="/dashboard/musics">Music</a>
          <a href="/dashboard/music-sheets">Music Sheet</a>
          <a href="/dashboard/music-audio">Music Audio</a>
          <a href="/dashboard/supporters">Supporter</a>
          <a href="/dashboard/donations">Donation</a>
        </nav>
      </aside>
      <section>{children}</section>
    </div>
  );
}


