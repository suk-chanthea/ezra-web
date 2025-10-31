"use client";

import { useState } from "react";
import { login } from "@/lib/api";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const search = useSearchParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await login({ username, password, otp_code: otp || undefined });
      localStorage.setItem("token", res.token);
      const redirectTo = search.get("redirect") || "/admin";
      router.push(redirectTo);
    } catch (e: any) {
      setError(e?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700 }}>Login</h1>
      <form onSubmit={onSubmit} style={{ display: "grid", gap: 12, maxWidth: 360, marginTop: 16 }}>
        <input
          type="text"
          placeholder="Username or Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ padding: 10, border: "1px solid #ccc", borderRadius: 6 }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: 10, border: "1px solid #ccc", borderRadius: 6 }}
        />
        <input
          type="text"
          placeholder="2FA OTP (optional)"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          style={{ padding: 10, border: "1px solid #ccc", borderRadius: 6 }}
        />
        <button type="submit" disabled={loading} style={{ padding: 12, borderRadius: 6, background: "#111", color: "#fff" }}>
          {loading ? "Signing in..." : "Sign In"}
        </button>
        {error ? <div style={{ color: "#c00" }}>{error}</div> : null}
      </form>
    </main>
  );
}


