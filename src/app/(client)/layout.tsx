"use client";

import React, { useEffect, useState } from "react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [hasToken, setHasToken] = useState(false);
  useEffect(() => {
    setHasToken(!!localStorage.getItem("token"));
    setMounted(true);
  }, []);

  return (
    <div>
      <header style={{ padding: 16, borderBottom: "1px solid #eee", display: "flex", gap: 12, alignItems: "center" }}>
        <a href="/" style={{ fontWeight: 700 }}>Ezra</a>
        <nav style={{ display: "flex", gap: 12 }}>
          <a href="/">Home</a>
          <a href="/events">Event</a>
          <a href="/musics">Music</a>
          <a href="/churches">Church</a>
          <a href="/bands">Band</a>
        </nav>
        <div style={{ marginLeft: "auto", display: "flex", gap: 12 }} suppressHydrationWarning>
          {mounted && hasToken ? <a href="/admin">Admin</a> : (<>
            <a href="/register">Register</a>
            <a href="/login">Login</a>
          </>)}
        </div>
      </header>
      {children}
    </div>
  );
}


