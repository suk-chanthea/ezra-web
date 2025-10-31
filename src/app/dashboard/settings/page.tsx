"use client";

import { useEffect, useState } from "react";
import { getSettings, updateSettings } from "@/lib/api";

export default function DashboardSettingsPage() {
  const [settings, setSettings] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  async function load() {
    setError(null);
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Please login");
      const res = await getSettings(token);
      setSettings(res);
    } catch (e: any) {
      setError(e?.message || "Failed to load settings");
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function save() {
    setStatus(null);
    setError(null);
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Please login");
      await updateSettings(token, settings);
      setStatus("Settings updated");
    } catch (e: any) {
      setError(e?.message || "Failed to update settings");
    }
  }

  if (!settings) {
    return (
      <main style={{ padding: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 700 }}>Settings</h1>
        {error ? <div style={{ color: "#c00" }}>{error}</div> : <div>Loading...</div>}
      </main>
    );
  }

  return (
    <main style={{ padding: 24, display: "grid", gap: 12, maxWidth: 520 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700 }}>Settings</h1>
      <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <span>Language</span>
        <select value={settings.language} onChange={(e) => setSettings({ ...settings, language: e.target.value })}>
          <option value="en">en</option>
          <option value="kh">kh</option>
          <option value="kr">kr</option>
          <option value="cn">cn</option>
        </select>
      </label>
      <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <span>Theme</span>
        <select value={settings.theme} onChange={(e) => setSettings({ ...settings, theme: e.target.value })}>
          <option value="light">light</option>
          <option value="dark">dark</option>
          <option value="auto">auto</option>
        </select>
      </label>
      <label>
        <input type="checkbox" checked={!!settings.notify_on_booking} onChange={(e) => setSettings({ ...settings, notify_on_booking: e.target.checked })} />
        Notify on booking
      </label>
      <label>
        <input type="checkbox" checked={!!settings.notify_on_music} onChange={(e) => setSettings({ ...settings, notify_on_music: e.target.checked })} />
        Notify on music
      </label>
      <label>
        <input type="checkbox" checked={!!settings.notify_on_event} onChange={(e) => setSettings({ ...settings, notify_on_event: e.target.checked })} />
        Notify on event
      </label>
      <label>
        <input type="checkbox" checked={!!settings.enable_push_notifications} onChange={(e) => setSettings({ ...settings, enable_push_notifications: e.target.checked })} />
        Enable push
      </label>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={save} style={{ padding: 10, borderRadius: 6, background: "#111", color: "#fff" }}>Save</button>
        {status ? <div style={{ color: "#0a0" }}>{status}</div> : null}
        {error ? <div style={{ color: "#c00" }}>{error}</div> : null}
      </div>
    </main>
  );
}


