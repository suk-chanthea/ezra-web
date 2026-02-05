"use client";

import Link from "next/link";

export default function DashboardHomePage() {
  return (
    <main className="p-6 grid gap-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="text-gray-600 dark:text-gray-400">Manage content and settings.</p>
      <nav className="grid gap-2">
        <Link 
          href="/dashboard/musics"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Manage Musics
        </Link>
        <Link 
          href="/dashboard/events"
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          Manage Events
        </Link>
        <Link 
          href="/dashboard/bands"
          className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
        >
          Manage Bands
        </Link>
        <Link 
          href="/dashboard/notifications"
          className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
        >
          Notifications
        </Link>
        <Link 
          href="/dashboard/settings"
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
        >
          Settings
        </Link>
      </nav>
    </main>
  );
}


