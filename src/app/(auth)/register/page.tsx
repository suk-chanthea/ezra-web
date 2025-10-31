"use client";

import { useState } from "react";
import { otpSend, otpVerify, register } from "@/lib/api";
import { useRouter, useSearchParams } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const search = useSearchParams();
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function sendOtp() {
    setError(null);
    setMessage(null);
    try {
      await otpSend({ email, purpose: "email_verification" });
      setMessage("OTP sent to your email");
    } catch (e: any) {
      setError(e?.message || "Failed to send OTP");
    }
  }

  async function verifyOtp() {
    setError(null);
    setMessage(null);
    try {
      await otpVerify({ email, code: otp, purpose: "email_verification" });
      setMessage("OTP verified");
    } catch (e: any) {
      setError(e?.message || "Failed to verify OTP");
    }
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);
    try {
      const res = await register({ username, fullname, email, password, otp_code: otp });
      localStorage.setItem("token", res.token);
      const redirectTo = search.get("redirect") || "/admin";
      router.push(redirectTo);
    } catch (e: any) {
      setError(e?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700 }}>Register</h1>
      <form method="post" onSubmit={onSubmit} style={{ display: "grid", gap: 12, maxWidth: 420, marginTop: 16 }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ padding: 10, border: "1px solid #ccc", borderRadius: 6 }}
        />
        <input
          type="text"
          placeholder="Full name"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          required
          style={{ padding: 10, border: "1px solid #ccc", borderRadius: 6 }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: 10, border: "1px solid #ccc", borderRadius: 6 }}
        />
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto", gap: 8 }}>
          <input
            type="text"
            placeholder="OTP code"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            style={{ padding: 10, border: "1px solid #ccc", borderRadius: 6 }}
          />
          <button type="button" onClick={sendOtp} style={{ padding: 10, borderRadius: 6, background: "#eee" }}>
            Send OTP
          </button>
          <button type="button" onClick={verifyOtp} style={{ padding: 10, borderRadius: 6, background: "#eee" }}>
            Verify OTP
          </button>
        </div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: 10, border: "1px solid #ccc", borderRadius: 6 }}
        />
        <button type="submit" disabled={loading} style={{ padding: 12, borderRadius: 6, background: "#111", color: "#fff" }}>
          {loading ? "Creating account..." : "Create Account"}
        </button>
        {message ? <div style={{ color: "#0a0" }}>{message}</div> : null}
        {error ? <div style={{ color: "#c00" }}>{error}</div> : null}
      </form>
    </main>
  );
}


