"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface MenuItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  badge?: string;
  submenu?: { label: string; href: string }[];
}

// Icon components
const DashboardIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-8h14l2 8M5 8h14M9 20h6M9 20c0-2 1-4 3-4s3 2 3 4" />
  </svg>
);

const MusicsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
  </svg>
);

const EventsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const BandsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.856-1.488M15 20H9m8-4a3 3 0 01-6 0m6 0H9m11-5a4 4 0 11-8 0 4 4 0 018 0zM9 20H5a2 2 0 01-2-2v-2a6 6 0 0112 0v2a2 2 0 01-2 2z" />
  </svg>
);

const ChurchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
  </svg>
);

const DonationIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const SupportersIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3a6 6 0 016-6h6a6 6 0 016 6h-2a4 4 0 00-4-4h-2.5A4.5 4.5 0 0012 16.5a4.5 4.5 0 100-9" />
  </svg>
);

const NotificationsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

const AccountIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const menuItems: MenuItem[] = [
  { label: "Dashboard", href: "/admin", icon: <DashboardIcon /> },
  { 
    label: "Musics", 
    href: "/admin/musics", 
    icon: <MusicsIcon />,
    submenu: [
      { label: "All Musics", href: "/admin/musics" },
      { label: "Music Sheets", href: "/admin/music-sheets" },
      { label: "Music Audio", href: "/admin/music-audio" },
    ]
  },
  { label: "Events", href: "/admin/events", icon: <EventsIcon /> },
  { label: "Bands", href: "/admin/bands", icon: <BandsIcon /> },
  { label: "Church", href: "/admin/church", icon: <ChurchIcon /> },
  { label: "Donations", href: "/admin/donations", icon: <DonationIcon /> },
  { label: "Supporters", href: "/admin/supporters", icon: <SupportersIcon /> },
  { label: "Notifications", href: "/admin/notifications", icon: <NotificationsIcon />, badge: "NEW" },
  { label: "Account", href: "/admin/account", icon: <AccountIcon /> },
];

export default function AdminSidebar() {
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
    <aside className="admin-sidebar admin-scrollable w-72 h-screen sticky top-0 flex flex-col">
      {/* Logo */}
      <div className="admin-sidebar-header">
        <Link href="/admin" className="admin-logo group">
          <div className="admin-logo-mark">
            <span className="admin-logo-letter">E</span>
          </div>
          <div className="admin-logo-text">
            <span className="admin-logo-title">Ezra</span>
            <span className="admin-logo-subtitle">Admin Studio</span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="admin-nav admin-scrollable">
        <div className="admin-nav-list">
          {menuItems.map((item) => (
            <div key={item.label}>
              {item.submenu ? (
                <>
                  <button
                    onClick={() => toggleSubmenu(item.label)}
                    className={`admin-nav-item ${isParentActive(item) ? "admin-nav-item-active" : ""}`}
                  >
                    <span className="admin-nav-label">
                      <span className="admin-nav-icon">{item.icon}</span>
                      <span>{item.label}</span>
                    </span>
                    <span className={`admin-chevron ${expandedItems.includes(item.label) ? "rotate-180" : ""}`}>
                      ▼
                    </span>
                  </button>
                  {expandedItems.includes(item.label) && (
                    <div className="admin-submenu">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={`admin-subnav-item ${isActive(subItem.href) ? "admin-subnav-item-active" : ""}`}
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
                  className={`admin-nav-item ${isActive(item.href) ? "admin-nav-item-active" : ""}`}
                >
                  <span className="admin-nav-label">
                    <span className="admin-nav-icon">{item.icon}</span>
                    <span>{item.label}</span>
                  </span>
                  {item.badge && (
                    <span className="admin-pill">
                      {item.badge}
                    </span>
                  )}
                </Link>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className="admin-sidebar-footer">
        <div className="admin-card admin-help">
          <p className="admin-help-title">Need Help?</p>
          <p className="admin-help-text">
            Explore guides or reach out to support for setup help.
          </p>
          <button className="admin-btn-primary admin-btn-small">
            View Docs
          </button>
        </div>
      </div>
    </aside>
  );
}

