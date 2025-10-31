"use client";

import { useEffect, useState } from "react";
import { getDonations } from "@/lib/api";

export default function DashboardDonationsPage() {
  const [items, setItems] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await getDonations({ page: 1, page_size: 20 });
        setItems((res as any).data || res || []);
      } catch (e: any) {
        setError(e?.message || "Failed to load donations");
      }
    }
    load();
  }, []);

  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700 }}>Donations</h1>
      {error ? <div style={{ color: "#c00" }}>{error}</div> : null}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12, marginTop: 16 }}>
        {items.map((d) => (
          <div key={d.id} style={{ border: "1px solid #eee", borderRadius: 8, padding: 12 }}>
            <div style={{ fontWeight: 600 }}>{d.type} - {d.donor_type}</div>
            <div style={{ color: "#666" }}>{d.amount} {d.currency}</div>
            <div>Status: {d.status}</div>
          </div>
        ))}
      </div>
    </main>
  );
}


