"use client";

import { useEffect, useState } from "react";
import { getChurches } from "@/lib/api";

export default function DashboardChurchPage() {
  const [items, setItems] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await getChurches({ page: 1, page_size: 20 });
        const data = Array.isArray((res as any)?.data) ? (res as any).data : (res as any);
        setItems(data || []);
      } catch (e: any) {
        setError(e?.message || "Failed to load churches");
      }
    }
    load();
  }, []);

  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700 }}>Church</h1>
      {error ? <div style={{ color: "#c00" }}>{error}</div> : null}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12, marginTop: 16 }}>
        {items.map((c) => (
          <div key={c.id} style={{ border: "1px solid #eee", borderRadius: 8, padding: 12 }}>
            <div style={{ fontWeight: 600 }}>{c.fullname}</div>
            <div style={{ color: "#666" }}>{c.denomination}</div>
          </div>
        ))}
      </div>
    </main>
  );
}


