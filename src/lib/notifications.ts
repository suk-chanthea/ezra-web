"use client";

import { getFirebaseMessaging } from "@/lib/firebase";
import { registerDeviceToken, unregisterDeviceToken } from "@/lib/api";

export async function enablePushNotifications(): Promise<string> {
  if (typeof window === "undefined") throw new Error("Client only");
  const isSecure = location.protocol === "https:" || location.hostname === "localhost";
  if (!isSecure) throw new Error("Notifications require HTTPS or localhost");

  const currentPerm = Notification.permission;
  if (currentPerm === "denied") {
    throw new Error("Notification permission denied in browser settings");
  }

  const messaging = await getFirebaseMessaging();
  if (!messaging) throw new Error("Messaging not supported on this device");

  if (currentPerm === "default") {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") throw new Error("Notification permission denied");
  }

  const vapidKey = process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY;
  if (!vapidKey) throw new Error("Missing VAPID key (NEXT_PUBLIC_FIREBASE_VAPID_KEY)");

  // Ensure service worker is registered for FCM
  if ("serviceWorker" in navigator) {
    try {
      await navigator.serviceWorker.register("/firebase-messaging-sw.js");
    } catch {
      // ignore, continue
    }
  }

  const { getToken } = await import("firebase/messaging");
  const swReg = await navigator.serviceWorker.getRegistration();
  const token = await getToken(messaging, { vapidKey, serviceWorkerRegistration: swReg || undefined });
  if (!token) throw new Error("Failed to get FCM token");

  const auth = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  if (!auth) throw new Error("Please login first");

  await registerDeviceToken(auth, { token, platform: "web" });
  
  console.log("Push notifications enabled. Token:", token.substring(0, 20) + "...");
  return token;
}

export async function disablePushNotifications(currentToken: string) {
  const auth = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  if (!auth) throw new Error("Please login first");
  await unregisterDeviceToken(auth, { token: currentToken });
}


