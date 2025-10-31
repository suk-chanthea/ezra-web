"use client";

import { useEffect, useState } from "react";

type Supporter = {
  id: number;
  name: string;
  type: string;
  logo?: string;
};

type Church = {
  id: number;
  fullname: string;
  denomination?: string;
  logo?: string;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080";

export default function ClientHomePage() {
  const [supporters, setSupporters] = useState<Supporter[]>([]);
  const [churches, setChurches] = useState<Church[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const [supportersRes, churchesRes] = await Promise.all([
          fetch(`${API_BASE_URL}/supporters?page=1&page_size=12`),
          fetch(`${API_BASE_URL}/churches?page=1&page_size=12`),
        ]);

        if (!supportersRes.ok || !churchesRes.ok) {
          throw new Error("Failed to load data");
        }

        const supportersJson = await supportersRes.json();
        const churchesJson = await churchesRes.json();

        setSupporters(Array.isArray(supportersJson?.data) ? supportersJson.data : supportersJson || []);
        setChurches(Array.isArray(churchesJson?.data) ? churchesJson.data : churchesJson || []);
      } catch (e: any) {
        setError(e?.message || "Unexpected error");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <main style={{ padding: 24 }}>Loading...</main>;
  if (error) return <main style={{ padding: 24 }}>Error: {error}</main>;

  return (
    <main style={{ padding: 24, display: "grid", gap: 24 }}>
      <section>
        <h1 style={{ fontSize: 24, fontWeight: 700 }}>Welcome to Ezra</h1>
        <p>Explore supporters and churches.</p>
      </section>

      <section>
        <h2 style={{ fontSize: 20, fontWeight: 600 }}>Supporters</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
          {supporters.map((s) => (
            <div key={s.id} style={{ border: "1px solid #eee", borderRadius: 8, padding: 12 }}>
              {s.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={s.logo} alt={s.name} style={{ width: "100%", height: 120, objectFit: "cover", borderRadius: 6 }} />
              ) : null}
              <div style={{ marginTop: 8, fontWeight: 600 }}>{s.name}</div>
              <div style={{ color: "#666" }}>{s.type}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: 20, fontWeight: 600 }}>Churches</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
          {churches.map((c) => (
            <div key={c.id} style={{ border: "1px solid #eee", borderRadius: 8, padding: 12 }}>
              {c.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={c.logo} alt={c.fullname} style={{ width: "100%", height: 120, objectFit: "cover", borderRadius: 6 }} />
              ) : null}
              <div style={{ marginTop: 8, fontWeight: 600 }}>{c.fullname}</div>
              <div style={{ color: "#666" }}>{c.denomination || ""}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}


