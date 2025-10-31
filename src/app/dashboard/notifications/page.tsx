"use client";

import { useEffect, useState } from "react";
import { createBroadcastNotification, getNotifications } from "@/lib/api";

export default function DashboardNotificationsPage() {
  const [items, setItems] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState("info");
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    setError(null);
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Please login to view notifications");
      const res = await getNotifications(token, { page: 1, page_size: 20 });
      setItems(res.data || []);
    } catch (e: any) {
      setError(e?.message || "Failed to load notifications");
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function onCreate(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    setError(null);
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Please login");
      await createBroadcastNotification(token, { title, message, type });
      setStatus("Broadcast created");
      setTitle("");
      setMessage("");
      setType("info");
      await load();
    } catch (e: any) {
      setError(e?.message || "Failed to create notification");
    }
  }

  return (
    <main style={{ padding: 24, display: "grid", gap: 16 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700 }}>Notifications</h1>

      <form onSubmit={onCreate} style={{ display: "grid", gap: 8, maxWidth: 520 }}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required style={{ padding: 10, border: "1px solid #ccc", borderRadius: 6 }} />
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" required style={{ padding: 10, border: "1px solid #ccc", borderRadius: 6 }} />
        <select value={type} onChange={(e) => setType(e.target.value)} style={{ padding: 10, border: "1px solid #ccc", borderRadius: 6 }}>
          <option value="info">info</option>
          <option value="success">success</option>
          <option value="warning">warning</option>
          <option value="error">error</option>
          <option value="booking">booking</option>
          <option value="music">music</option>
          <option value="event">event</option>
        </select>
        <button type="submit" style={{ padding: 12, borderRadius: 6, background: "#111", color: "#fff" }}>Create Broadcast</button>
        {status ? <div style={{ color: "#0a0" }}>{status}</div> : null}
        {error ? <div style={{ color: "#c00" }}>{error}</div> : null}
      </form>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
        {items.map((n) => (
          <div key={n.id} style={{ border: "1px solid #eee", borderRadius: 8, padding: 12 }}>
            <div style={{ fontWeight: 600 }}>{n.title}</div>
            <div style={{ color: "#666" }}>{n.type}</div>
            <div style={{ marginTop: 8 }}>{n.message}</div>
          </div>
        ))}
      </div>
    </main>
  );
}


