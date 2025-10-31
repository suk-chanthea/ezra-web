import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAnalytics, type Analytics, isSupported as analyticsSupported } from "firebase/analytics";
import { getMessaging, type Messaging, isSupported as messagingSupported } from "firebase/messaging";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyDlhePj8wS5tLD0MVfG9Bxr1ZAHu-4DbR8",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "ezra-73d1a.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "ezra-73d1a",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "ezra-73d1a.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "503959661131",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:503959661131:web:ea6c538aa844ed2744bbce",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-SG39JMHSXB",
};

let app: FirebaseApp | null = null;
let analytics: Analytics | null = null;
let messaging: Messaging | null = null;

export async function getFirebaseApp() {
  if (!app) app = initializeApp(firebaseConfig);
  return app;
}

export async function getFirebaseAnalytics() {
  if (typeof window === "undefined") return null;
  if (!app) app = initializeApp(firebaseConfig);
  if (!analytics && (await analyticsSupported())) analytics = getAnalytics(app);
  return analytics;
}

export async function getFirebaseMessaging() {
  if (typeof window === "undefined") return null;
  if (!app) app = initializeApp(firebaseConfig);
  if (!messaging && (await messagingSupported())) messaging = getMessaging(app);
  return messaging;
}


