"use client";

import StatCard from "@/components/StatCard";

export default function DashboardHomePage() {
  // Mock data
  const recentContents = [
    {
      id: 1,
      name: "Timothy Johnson",
      email: "timothy@ezra.com",
      products: 386,
      startDate: "05/12/2024",
      avatar: "T",
      status: "Active"
    },
    {
      id: 2,
      name: "Challenge Team",
      email: "challenge@ezra.com",
      products: 388,
      startDate: "05/12/2024",
      avatar: "C",
      status: "Active"
    },
    {
      id: 3,
      name: "Belmont Church",
      email: "belmont@ezra.com",
      products: 281,
      startDate: "12/11/2024",
      avatar: "B",
      status: "Pending"
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-linear-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent mb-2">
            Welcome Back! 👋
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-base">
            Here's a quick overview of your platform performance today.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex gap-3">
          <button className="admin-btn-primary px-4 py-2.5 rounded-lg">
            Export Report
          </button>
          <button className="admin-btn-secondary px-4 py-2.5 rounded-lg dark:admin-btn-secondary">
            View Analytics
          </button>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon="🎵"
          value={8954}
          label="Total Music Tracks"
          iconColor="bg-gradient-to-br from-primary-500 to-primary-600"
          trend={{ value: "12%", isPositive: true }}
        />
        <StatCard
          icon="💰"
          value={7841}
          label="Total Donations"
          iconColor="bg-gradient-to-br from-green-500 to-emerald-600"
          trend={{ value: "8%", isPositive: true }}
        />
        <StatCard
          icon="👥"
          value={6521}
          label="Total Supporters"
          iconColor="bg-gradient-to-br from-cyan-500 to-teal-600"
          trend={{ value: "3%", isPositive: false }}
        />
        <StatCard
          icon="📅"
          value={325}
          label="Upcoming Events"
          iconColor="bg-gradient-to-br from-amber-500 to-orange-600"
          trend={{ value: "5%", isPositive: true }}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Overview */}
        <div className="admin-card bg-white dark:bg-gray-800">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                Revenue Overview
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Monthly donation trends
              </p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs font-medium text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg">
                6M
              </button>
              <button className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                1Y
              </button>
            </div>
          </div>
          <div className="h-72 flex items-end justify-between gap-2 px-2">
            {[65, 85, 75, 90, 80, 70, 65, 75, 85, 95, 90, 85].map((height, index) => (
              <div key={index} className="flex-1 flex flex-col gap-1 group">
                <div
                  className="bg-linear-to-t from-primary-500 to-primary-400 rounded-t-lg group-hover:from-primary-600 group-hover:to-primary-500 group-hover:shadow-lg cursor-pointer"
                  style={{ height: `${height}%` }}
                  title={`${height}%`}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-6 text-xs text-gray-500 dark:text-gray-400 font-medium px-2">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
          </div>
        </div>

        {/* Activity Distribution */}
        <div className="admin-card bg-white dark:bg-gray-800">
          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Activity Distribution
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Content breakdown by category
            </p>
          </div>
          <div className="space-y-4">
            {[
              { label: "Music Uploads", value: 45, color: "from-primary-500 to-primary-600" },
              { label: "Event Registrations", value: 28, color: "from-cyan-500 to-teal-600" },
              { label: "Donations", value: 18, color: "from-green-500 to-emerald-600" },
              { label: "Community Posts", value: 9, color: "from-amber-500 to-orange-600" },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {item.label}
                  </span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">
                    {item.value}%
                  </span>
                </div>
                <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-linear-to-r ${item.color} rounded-full`}
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activities Table */}
      <div className="admin-card bg-white dark:bg-gray-800 overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                Recent Activities
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Latest supporter activities and uploads
              </p>
            </div>
            <button className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium">
              View All →
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="admin-table w-full">
            <thead className="bg-gray-50 dark:bg-gray-700/50">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Contributions</th>
                <th className="px-6 py-4">Joined</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {recentContents.map((content) => (
                <tr key={content.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-semibold shadow-admin-card bg-linear-to-br from-primary-500 to-primary-600`}>
                        {content.avatar}
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {content.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {content.email}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                      {content.products}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {content.startDate}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`admin-badge ${content.status === "Active" ? "admin-badge-success" : "admin-badge-warning"} ${content.status === "Active" ? "dark:admin-badge-success" : "dark:admin-badge-warning"}`}>
                      {content.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            icon: "📤",
            title: "Upload Music",
            description: "Add new music tracks or audio files",
            color: "from-primary-500 to-primary-600"
          },
          {
            icon: "📋",
            title: "Create Event",
            description: "Schedule and manage upcoming events",
            color: "from-cyan-500 to-teal-600"
          },
          {
            icon: "📧",
            title: "Send Newsletter",
            description: "Reach out to your community",
            color: "from-amber-500 to-orange-600"
          },
        ].map((action, idx) => (
          <div key={idx} className="admin-card bg-white dark:bg-gray-800 group cursor-pointer">
            <div className={`inline-flex w-12 h-12 rounded-lg bg-linear-to-br ${action.color} items-center justify-center text-2xl mb-4 group-hover:shadow-lg`}>
              {action.icon}
            </div>
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">
              {action.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {action.description}
            </p>
            <button className="text-primary-600 dark:text-primary-400 text-sm font-medium hover:text-primary-700 dark:hover:text-primary-300">
              Get Started →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}


