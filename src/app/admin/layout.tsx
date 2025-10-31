"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      const redirect = encodeURIComponent(pathname || "/admin");
      router.replace(`/login?redirect=${redirect}`);
    }
  }, [pathname, router]);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", minHeight: "100vh" }}>
      <aside style={{ borderRight: "1px solid #eee", padding: 16 }}>
        <div style={{ fontWeight: 700, marginBottom: 12 }}>Admin</div>
        <nav style={{ display: "grid", gap: 8 }}>
          <a href="/admin">Home</a>
          <a href="/admin/account">Account</a>
          <a href="/admin/church">Church</a>
          <a href="/admin/bands">Band</a>
          <a href="/admin/events">Event</a>
          <a href="/admin/musics">Music</a>
          <a href="/admin/music-sheets">Music Sheet</a>
          <a href="/admin/music-audio">Music Audio</a>
          <a href="/admin/supporters">Supporter</a>
          <a href="/admin/donations">Donation</a>
        </nav>
      </aside>
      <section>{children}</section>
    </div>
  );
}


