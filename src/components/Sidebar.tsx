"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface MenuItem {
  label: string;
  href: string;
  icon?: string;
  badge?: string;
  submenu?: { label: string; href: string }[];
}

const menuItems: MenuItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: "📊" },
  { 
    label: "Musics", 
    href: "/dashboard/musics", 
    icon: "🎵",
    submenu: [
      { label: "All Musics", href: "/dashboard/musics" },
      { label: "Music Sheets", href: "/dashboard/music-sheets" },
      { label: "Music Audio", href: "/dashboard/music-audio" },
    ]
  },
  { label: "Events", href: "/dashboard/events", icon: "📅" },
  { label: "Bands", href: "/dashboard/bands", icon: "🎸" },
  { label: "Church", href: "/dashboard/church", icon: "⛪" },
  { label: "Donations", href: "/dashboard/donations", icon: "💰" },
  { label: "Supporters", href: "/dashboard/supporters", icon: "👥" },
  { label: "Notifications", href: "/dashboard/notifications", icon: "🔔", badge: "NEW" },
  { label: "Account", href: "/dashboard/account", icon: "👤" },
  { label: "Settings", href: "/dashboard/settings", icon: "⚙️" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleSubmenu = (label: string) => {
    setExpandedItems(prev =>
      prev.includes(label)
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  const isActive = (href: string) => pathname === href;
  const isParentActive = (item: MenuItem) => {
    if (item.submenu) {
      return item.submenu.some(sub => pathname === sub.href);
    }
    return false;
  };

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 h-screen sticky top-0 overflow-y-auto flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex-shrink-0">
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl">E</span>
          </div>
          <span className="font-bold text-xl text-gray-900 dark:text-white">Ezra</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="p-4 flex-1 overflow-y-auto">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <div key={item.label}>
              {item.submenu ? (
                <>
                  <button
                    onClick={() => toggleSubmenu(item.label)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isParentActive(item)
                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.label}</span>
                    </span>
                    <span className="text-xs">
                      {expandedItems.includes(item.label) ? "▼" : "▶"}
                    </span>
                  </button>
                  {expandedItems.includes(item.label) && (
                    <div className="ml-8 mt-1 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                            isActive(subItem.href)
                              ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                              : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </span>
                  {item.badge && (
                    <span className="px-2 py-0.5 text-xs font-semibold bg-red-500 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              )}
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
}

