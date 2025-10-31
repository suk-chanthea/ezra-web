import { http } from "@/lib/http";

// Auth
export type LoginRequest = { username: string; password: string; otp_code?: string };
export type LoginResponse = { token: string };
export async function login(body: LoginRequest) {
  const res = await fetch(`/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(((await res.json()) as any)?.error || res.statusText);
  return (await res.json()) as LoginResponse;
}

export type RegisterRequest = {
  username: string;
  fullname: string;
  email: string;
  password: string;
  otp_code: string;
};
export async function register(body: RegisterRequest) {
  const res = await fetch(`/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(((await res.json()) as any)?.error || res.statusText);
  return (await res.json()) as { message: string; token: string };
}

export async function logout(token: string) {
  return http<{ message: string }>("/api/logout", { method: "POST", authToken: token });
}

// OTP
export async function otpSend(body: { email: string; purpose: "email_verification" | "password_reset" | "login" }) {
  const res = await fetch(`/api/otp/send`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(((await res.json()) as any)?.error || res.statusText);
  return (await res.json()) as { message: string; email: string; expires_at: string };
}
export async function otpVerify(body: { email: string; code: string; purpose: string }) {
  const res = await fetch(`/api/otp/verify`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(((await res.json()) as any)?.error || res.statusText);
  return (await res.json()) as { message: string; data: { email: string; purpose: string } };
}

// Supporters (Public)
export async function getSupporters(params?: { page?: number; page_size?: number; type?: string }) {
  const search = new URLSearchParams();
  if (params?.page) search.set("page", String(params.page));
  if (params?.page_size) search.set("page_size", String(params.page_size));
  if (params?.type) search.set("type", params.type);
  const qs = search.toString();
  return http<{ data: any[]; pagination: any } | any[]>(`/supporters${qs ? `?${qs}` : ""}`);
}

export async function getSupporterById(id: number) {
  return http(`/supporters/${id}`);
}

// Churches (Public)
export async function getChurches(params?: { page?: number; page_size?: number; denomination?: string }) {
  const search = new URLSearchParams();
  if (params?.page) search.set("page", String(params.page));
  if (params?.page_size) search.set("page_size", String(params.page_size));
  const qs = search.toString();
  return http<{ data: any[]; pagination: any } | any[]>(`/churches${qs ? `?${qs}` : ""}`);
}

export async function getChurchById(id: number) {
  return http(`/churches/${id}`);
}

// Donations (Public for reads, create depends on type)
export async function createDonation(body: Record<string, any>, token?: string | null) {
  return http("/donations", { method: "POST", body, authToken: token || undefined });
}

export async function getDonations(params?: Record<string, string | number>) {
  const search = new URLSearchParams();
  Object.entries(params || {}).forEach(([k, v]) => search.set(k, String(v)));
  const qs = search.toString();
  return http<{ data: any[]; pagination: any }>(`/donations${qs ? `?${qs}` : ""}`);
}

export async function getDonationById(id: number) {
  return http(`/donations/${id}`);
}

export async function getDonationStats() {
  return http("/donations/stats");
}

// Musics (Auth)
export async function getMusics(token: string, params?: { page?: number; page_size?: number }) {
  const search = new URLSearchParams();
  if (params?.page) search.set("page", String(params.page));
  if (params?.page_size) search.set("page_size", String(params.page_size));
  const qs = search.toString();
  return http<{ data: any[]; pagination: any } | any[]>(`/api/musics${qs ? `?${qs}` : ""}`, { authToken: token });
}

// Events (Auth)
export async function getEvents(token: string, params?: { page?: number; page_size?: number }) {
  const search = new URLSearchParams();
  if (params?.page) search.set("page", String(params.page));
  if (params?.page_size) search.set("page_size", String(params.page_size));
  const qs = search.toString();
  return http<{ data: any[]; pagination: any } | any[]>(`/api/events${qs ? `?${qs}` : ""}`, { authToken: token });
}

// Notifications (Auth)
export async function getNotifications(token: string, params?: { page?: number; page_size?: number }) {
  const search = new URLSearchParams();
  if (params?.page) search.set("page", String(params.page));
  if (params?.page_size) search.set("page_size", String(params.page_size));
  const qs = search.toString();
  return http<{ data: any[]; pagination: any }>(`/api/notifications${qs ? `?${qs}` : ""}`, { authToken: token });
}
export async function createBroadcastNotification(token: string, body: { title: string; message: string; type: string }) {
  return http(`/api/notifications/broadcast`, { method: "POST", body, authToken: token });
}

// Settings (Auth)
export async function getSettings(token: string) {
  return http(`/api/settings`, { authToken: token });
}
export async function updateSettings(token: string, body: Record<string, any>) {
  return http(`/api/settings`, { method: "PUT", body, authToken: token });
}

// Favorites (Auth)
export async function getFavorites(token: string, params?: { page?: number; page_size?: number }) {
  const search = new URLSearchParams();
  if (params?.page) search.set("page", String(params.page));
  if (params?.page_size) search.set("page_size", String(params.page_size));
  const qs = search.toString();
  return http<{ data: any[]; pagination: any }>(`/api/favorites${qs ? `?${qs}` : ""}`, { authToken: token });
}

// Bookings (Auth)
export async function getBookingsUser(token: string, params?: { page?: number; page_size?: number }) {
  const search = new URLSearchParams();
  if (params?.page) search.set("page", String(params.page));
  if (params?.page_size) search.set("page_size", String(params.page_size));
  const qs = search.toString();
  return http<{ data: any[]; pagination: any }>(`/api/bookings/user${qs ? `?${qs}` : ""}`, { authToken: token });
}

// Bands (Auth)
export async function getBands(token: string, params?: { page?: number; page_size?: number }) {
  const search = new URLSearchParams();
  if (params?.page) search.set("page", String(params.page));
  if (params?.page_size) search.set("page_size", String(params.page_size));
  const qs = search.toString();
  return http<{ data: any[]; pagination: any }>(`/api/bands${qs ? `?${qs}` : ""}`, { authToken: token });
}

// Device Tokens (Auth)
export async function registerDeviceToken(authToken: string, body: { token: string; platform: "ios" | "android" | "web" }) {
  const res = await fetch(`/api/device-tokens/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(((await res.json()) as any)?.error || res.statusText);
  return (await res.json()) as { message: string; token_id: number };
}
export async function unregisterDeviceToken(authToken: string, body: { token: string }) {
  const res = await fetch(`/api/device-tokens/unregister`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(((await res.json()) as any)?.error || res.statusText);
  return (await res.json()) as { message: string };
}
export async function clearDeviceTokens(authToken: string) {
  const res = await fetch(`/api/device-tokens/clear`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  if (!res.ok) throw new Error(((await res.json()) as any)?.error || res.statusText);
  return (await res.json()) as { message: string };
}


