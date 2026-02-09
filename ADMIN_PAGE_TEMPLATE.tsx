"use client";

import StatCard from "@/components/StatCard";

/**
 * ADMIN PAGE TEMPLATE
 * 
 * Use this as a template for creating new admin pages.
 * Replace [Section], [Item], and example content with your actual content.
 * 
 * Path: src/app/admin/[section]/page.tsx
 */

export default function AdminSectionPage() {
  // Sample data - replace with actual API calls
  const sectionStats = [
    {
      icon: "📊",
      value: 1234,
      label: "Total [Items]",
      iconColor: "bg-gradient-to-br from-primary-500 to-primary-600",
      trend: { value: "12%", isPositive: true }
    },
    {
      icon: "✅",
      value: 856,
      label: "Active [Items]",
      iconColor: "bg-gradient-to-br from-green-500 to-emerald-600",
      trend: { value: "8%", isPositive: true }
    },
    {
      icon: "⏳",
      value: 245,
      label: "Pending [Items]",
      iconColor: "bg-gradient-to-br from-amber-500 to-orange-600",
      trend: { value: "3%", isPositive: false }
    },
    {
      icon: "🚫",
      value: 12,
      label: "Archived [Items]",
      iconColor: "bg-gradient-to-br from-red-500 to-red-600",
      trend: { value: "1%", isPositive: true }
    },
  ];

  const items = [
    {
      id: 1,
      title: "Item 1",
      description: "Description of item 1",
      category: "Category A",
      date: "2024-12-15",
      status: "Active"
    },
    {
      id: 2,
      title: "Item 2",
      description: "Description of item 2",
      category: "Category B",
      date: "2024-12-14",
      status: "Pending"
    },
  ];

  return (
    <div className="space-y-8">
      {/* ============================================
          HEADER SECTION
          ============================================ */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-linear-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent mb-2">
            [Section] Management
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-base">
            Manage and organize all your [items] in one place.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex gap-3">
          <button className="admin-btn-primary px-4 py-2.5 rounded-lg flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add New [Item]
          </button>
          <button className="admin-btn-secondary px-4 py-2.5 rounded-lg dark:admin-btn-secondary">
            Filter
          </button>
        </div>
      </div>

      {/* ============================================
          STATISTICS GRID
          ============================================ */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sectionStats.map((stat, idx) => (
          <StatCard
            key={idx}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
            iconColor={stat.iconColor}
            trend={stat.trend}
          />
        ))}
      </div>

      {/* ============================================
          SEARCH & FILTER BAR
          ============================================ */}
      <div className="admin-card bg-white dark:bg-gray-800 p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search [items]..."
              className="admin-input w-full"
            />
          </div>
          <select className="admin-input sm:w-48 dark:admin-input">
            <option>All Categories</option>
            <option>Category A</option>
            <option>Category B</option>
          </select>
          <select className="admin-input sm:w-48 dark:admin-input">
            <option>All Statuses</option>
            <option>Active</option>
            <option>Pending</option>
            <option>Archived</option>
          </select>
        </div>
      </div>

      {/* ============================================
          MAIN CONTENT TABLE
          ============================================ */}
      <div className="admin-card bg-white dark:bg-gray-800 overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                All [Items]
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Total: {items.length} [items]
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
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {item.date}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold ${
                      item.status === "Active"
                        ? "admin-badge-success dark:admin-badge-success"
                        : item.status === "Pending"
                        ? "admin-badge-warning dark:admin-badge-warning"
                        : "admin-badge-danger dark:admin-badge-danger"
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium">
                        Edit
                      </button>
                      <span className="text-gray-300 dark:text-gray-600">|</span>
                      <button className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 text-sm font-medium">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ============================================
          PAGINATION
          ============================================ */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Showing <span className="font-medium">1</span> to <span className="font-medium">{items.length}</span> of <span className="font-medium">100</span> results
        </p>
        <div className="flex gap-2">
          <button className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            Previous
          </button>
          <button className="px-3 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700">
            1
          </button>
          <button className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            2
          </button>
          <button className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            Next
          </button>
        </div>
      </div>

      {/* ============================================
          ADDITIONAL INFORMATION SECTION (Optional)
          ============================================ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Information Card 1 */}
        <div className="admin-card bg-white dark:bg-gray-800">
          <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4">
            Quick Tips
          </h3>
          <ul className="space-y-3">
            <li className="flex gap-3">
                    <svg className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                You can bulk edit items using the checkbox selection
              </span>
            </li>
            <li className="flex gap-3">
                  <svg className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Use filters to quickly find specific items
              </span>
            </li>
          </ul>
        </div>

        {/* Information Card 2 */}
        <div className="admin-card bg-linear-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20">
          <h3 className="text-base font-bold text-primary-900 dark:text-primary-200 mb-4">
            Need Help?
          </h3>
          <p className="text-sm text-primary-700 dark:text-primary-300 mb-4">
            Check our documentation or contact the support team for assistance with managing your [items].
          </p>
          <button className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
            View Documentation →
          </button>
        </div>
      </div>
    </div>
  );
}
