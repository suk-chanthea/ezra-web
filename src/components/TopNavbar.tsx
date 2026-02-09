"use client";

import { useState } from "react";

export default function TopNavbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header className="admin-navbar">
      <div className="admin-navbar-inner">
        {/* Search Bar */}
        <div className="flex-1 max-w-2xl">
          <div className="relative group">
            <input
              type="search"
              placeholder="Search anything..."
              className="admin-input admin-search w-full pl-11 pr-4 py-2.5 text-sm"
            />
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          {/* Theme Indicator / Quick Settings */}
          <button className="admin-icon-btn" title="Quick Settings">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfile(false);
              }}
              className="admin-icon-btn relative"
              title="Notifications"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="admin-dot admin-dot-alert"></span>
            </button>
            {showNotifications && (
              <div className="admin-popover absolute right-0 mt-3 w-96 py-2">
                <div className="admin-popover-header">
                  <h3 className="admin-popover-title">Notifications</h3>
                  <button className="admin-link admin-link-small">
                    Mark all read
                  </button>
                </div>
                <div className="max-h-96 overflow-y-auto admin-scrollable">
                  {[
                    { title: "New music uploaded", time: "2 minutes ago", icon: "🎵", unread: true },
                    { title: "Event created successfully", time: "1 hour ago", icon: "📅", unread: true },
                    { title: "Donation received", time: "3 hours ago", icon: "💰", unread: false },
                    { title: "Supporter joined", time: "5 hours ago", icon: "👥", unread: false },
                  ].map((notif, idx) => (
                    <div key={idx} className={`admin-notification-item ${notif.unread ? "admin-notification-item-unread" : ""}`}>
                      <div className="flex gap-3">
                        <span className="text-xl shrink-0">{notif.icon}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium">{notif.title}</p>
                          <p className="text-xs admin-muted mt-1">{notif.time}</p>
                        </div>
                        {notif.unread && <div className="admin-dot admin-dot-accent"></div>}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="admin-popover-footer">
                  <button className="admin-link w-full text-sm font-medium">
                    View all notifications →
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="admin-divider"></div>

          {/* Profile dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowProfile(!showProfile);
                setShowNotifications(false);
              }}
              className="admin-profile-btn group"
            >
              <div className="admin-avatar">
                <span className="admin-avatar-letter">A</span>
              </div>
              <div className="text-left hidden lg:block">
                <p className="admin-profile-name">Administrator</p>
                <p className="admin-profile-role">Admin Account</p>
              </div>
              <svg className={`admin-chevron hidden lg:inline ${showProfile ? "rotate-180" : ""}`} fill="currentColor" viewBox="0 0 20 20" width={16} height={16}>
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {showProfile && (
              <div className="admin-popover admin-menu absolute right-0 mt-3 w-56 py-2">
                <div className="admin-popover-header">
                  <p className="text-sm font-semibold">Administrator</p>
                  <p className="text-xs admin-muted">admin@ezra.com</p>
                </div>
                <a href="/dashboard/account" className="admin-menu-item">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  My Profile
                </a>
                <a href="/dashboard/settings" className="admin-menu-item">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Settings
                </a>
                <div className="admin-menu-divider"></div>
                <button className="admin-menu-item admin-menu-item-danger">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

