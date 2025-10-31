"use client";

import { useEffect, useState } from "react";
import { getSettings, updateSettings } from "@/lib/api";

export default function DashboardAccountPage() {
  const [settings, setSettings] = useState<any | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Please login");
        const res = await getSettings(token);
        setSettings(res);
      } catch (e: any) {
        setError(e?.message || "Failed to load account settings");
      }
    }
    load();
  }, []);

  async function save() {
    setStatus(null);
    setError(null);
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Please login");
      await updateSettings(token, settings);
      setStatus("Saved");
    } catch (e: any) {
      setError(e?.message || "Failed to save");
    }
  }

  return (
    <main style={{ padding: 24, display: "grid", gap: 12 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700 }}>Account</h1>
      {!settings ? (
        <div>{error || "Loading..."}</div>
      ) : (
        <>
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
          <button onClick={save} style={{ padding: 10, borderRadius: 6, background: "#111", color: "#fff" }}>Save</button>
          {status ? <div style={{ color: "#0a0" }}>{status}</div> : null}
          {error ? <div style={{ color: "#c00" }}>{error}</div> : null}
        </>
      )}
    </main>
  );
}


