"use client";

import { useEffect, useState } from "react";
import { getDonations, getDonationStats } from "@/lib/api";

export default function ClientDonationsPage() {
  const [items, setItems] = useState<any[]>([]);
  const [stats, setStats] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      setError(null);
      try {
        const [res, st] = await Promise.all([
          getDonations({ page: 1, page_size: 20 }),
          getDonationStats(),
        ]);
        setItems((res as any).data || res || []);
        setStats(st);
      } catch (e: any) {
        setError(e?.message || "Failed to load donations");
      }
    }
    load();
  }, []);

  return (
    <main style={{ padding: 24, display: "grid", gap: 16 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700 }}>Donations</h1>
      {stats ? (
        <div style={{ display: "flex", gap: 12, color: "#444" }}>
          <div>Total Amount: {stats.total_amount}</div>
          <div>Total Donations: {stats.total_donations}</div>
          <div>Total Sponsors: {stats.total_sponsors}</div>
        </div>
      ) : null}
      {error ? <div style={{ color: "#c00" }}>{error}</div> : null}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
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


