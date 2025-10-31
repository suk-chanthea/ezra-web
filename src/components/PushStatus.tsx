"use client";

import { useEffect, useState } from "react";

type Message = { title?: string; body?: string } | null;

export default function PushStatus() {
  const [permission, setPermission] = useState<NotificationPermission>("default");
  const [message, setMessage] = useState<Message>(null);

  useEffect(() => {
    setPermission(Notification.permission);
    if ((navigator as any).permissions?.query) {
      // Track permission changes if supported
      (navigator as any).permissions.query({ name: "notifications" as any }).then((status: any) => {
        const handler = () => setPermission(Notification.permission);
        status.addEventListener("change", handler);
      }).catch(() => {});
    }

    let unsub: (() => void) | undefined;
    (async () => {
      try {
        const { getFirebaseMessaging } = await import("@/lib/firebase");
        const messaging = await getFirebaseMessaging();
        if (!messaging) return;
        const { onMessage } = await import("firebase/messaging");
        unsub = onMessage(messaging, (payload) => {
          console.log("FCM foreground message received:", payload);
          const n = payload?.notification || payload?.data || {} as any;
          const title = n.title || payload?.data?.title;
          const body = n.body || payload?.data?.body;
          
          // Show in-app toast
          setMessage({ title, body });
          setTimeout(() => setMessage(null), 6000);
          
          // Also show browser notification if tab is not focused
          if (document.hidden && Notification.permission === "granted" && title) {
            new Notification(title, { body: body || "", icon: "/favicon.ico" });
          }
        });
      } catch {
        // ignore
      }
    })();

    return () => {
      if (unsub) unsub();
    };
  }, []);

  return (
    <>
      {permission === "denied" ? (
        <div style={{ position: "fixed", bottom: 12, left: 12, background: "#ffe8e8", color: "#900", padding: 10, borderRadius: 8, border: "1px solid #f5bcbc", zIndex: 50 }}>
          Notifications are blocked. Allow them in your browser site settings, then reload.
        </div>
      ) : null}
      {message ? (
        <div style={{ position: "fixed", bottom: 12, right: 12, background: "#111", color: "#fff", padding: 12, borderRadius: 8, zIndex: 50, maxWidth: 360 }}>
          <div style={{ fontWeight: 700 }}>{message.title || "Notification"}</div>
          <div>{message.body}</div>
        </div>
      ) : null}
    </>
  );
}


