"use client";

import Link from "next/link";

export default function DashboardHomePage() {
  return (
    <main style={{ padding: 24, display: "grid", gap: 16 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700 }}>Dashboard</h1>
      <p>Manage content and settings.</p>
      <nav style={{ display: "grid", gap: 8 }}>
        <Link href="/dashboard/musics">Manage Musics</Link>
        <Link href="/dashboard/events">Manage Events</Link>
        <Link href="/dashboard/bands">Manage Bands</Link>
        <Link href="/dashboard/notifications">Notifications</Link>
        <Link href="/dashboard/settings">Settings</Link>
      </nav>
    </main>
  );
}


