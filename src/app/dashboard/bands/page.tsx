"use client";

import { useEffect, useState } from "react";
import { getBands } from "@/lib/api";

export default function DashboardBandsPage() {
  const [items, setItems] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Please login to view bands");
        const res = await getBands(token, { page: 1, page_size: 20 });
        const data = Array.isArray((res as any)?.data) ? (res as any).data : (res as any);
        setItems(data || []);
      } catch (e: any) {
        setError(e?.message || "Failed to load bands");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700 }}>Bands</h1>
      {loading ? <div>Loading...</div> : null}
      {error ? <div style={{ color: "#c00" }}>{error}</div> : null}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12, marginTop: 16 }}>
        {items.map((m) => (
          <div key={m.id} style={{ border: "1px solid #eee", borderRadius: 8, padding: 12 }}>
            <div style={{ fontWeight: 600 }}>{m.name}</div>
            <div style={{ color: "#666" }}>{m.description}</div>
          </div>
        ))}
      </div>
    </main>
  );
}


