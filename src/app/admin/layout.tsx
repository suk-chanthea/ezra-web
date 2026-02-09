"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import AdminSidebar from "@/components/AdminSidebar";
import TopNavbar from "@/components/TopNavbar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      const redirect = encodeURIComponent(pathname || "/admin");
      router.replace(`/login?redirect=${redirect}`);
    }
  }, [pathname, router]);

  return (
    <div className="admin-root flex min-h-screen">
      <AdminSidebar />
      <div className="admin-shell flex-1 flex flex-col min-w-0">
        <TopNavbar />
        <main className="flex-1 overflow-y-auto admin-scrollable">
          <div className="admin-page">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}


