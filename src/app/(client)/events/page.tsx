"use client";

import { useEffect, useState } from "react";
import { getEvents } from "@/lib/api";

export default function ClientEventsPage() {
  const [items, setItems] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("Login required to view events");
          return;
        }
        const res = await getEvents(token, { page: 1, page_size: 20 });
        const data = Array.isArray((res as any)?.data) ? (res as any).data : (res as any);
        setItems(data || []);
      } catch (e: any) {
        setError(e?.message || "Failed to load events");
      }
    }
    load();
  }, []);

  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700 }}>Events</h1>
      {error ? <div style={{ color: "#c00" }}>{error}</div> : null}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12, marginTop: 16 }}>
        {items.map((m) => (
          <div key={m.id} style={{ border: "1px solid #eee", borderRadius: 8, padding: 12 }}>
            <div style={{ fontWeight: 600 }}>{m.title}</div>
            <div style={{ color: "#666" }}>{m.location}</div>
          </div>
        ))}
      </div>
    </main>
  );
}


