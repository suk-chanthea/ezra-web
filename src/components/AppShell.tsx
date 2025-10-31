"use client";

import React from "react";
import { AuthProvider, useAuth } from "@/lib/auth-context";

function Header() {
  const { token, logout } = useAuth();
  return (
    <header style={{ padding: 16, borderBottom: "1px solid #eee", display: "flex", gap: 12, alignItems: "center" }}>
      <a href="/" style={{ fontWeight: 700 }}>Ezra</a>
      <nav style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <a href="/client">Client</a>
        <a href="/dashboard">Dashboard</a>
      </nav>
      <div style={{ marginLeft: "auto", display: "flex", gap: 12, alignItems: "center" }}>
        {token ? (
          <button onClick={logout} style={{ padding: 8, borderRadius: 6, border: "1px solid #ddd" }}>Logout</button>
        ) : (
          <>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </>
        )}
      </div>
    </header>
  );
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <Header />
      {children}
    </AuthProvider>
  );
}


