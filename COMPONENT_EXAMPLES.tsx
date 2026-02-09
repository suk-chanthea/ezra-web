/**
 * ADMIN UI COMPONENT EXAMPLES & REFERENCE
 * 
 * This file contains code examples and patterns for using the admin panel components.
 * These are meant as reference - copy and modify the patterns as needed in your components.
 * 
 * For a complete working example, see: ADMIN_PAGE_TEMPLATE.tsx
 */

// ============================================
// 1. BUTTONS
// ============================================

/*
// Primary Button (Main CTA)
<button className="admin-btn-primary px-6 py-2.5 rounded-lg font-medium">
  Create New
</button>

// Secondary Button (Alternative action)
<button className="admin-btn-secondary px-6 py-2.5 rounded-lg font-medium">
  Cancel
</button>

// Icon Button
<button className="admin-icon-btn">
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0m0 0H3.75m0 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 10-3 0m0 0H3m9.75 0a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
</button>

// Link-style Button
<button className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium transition-colors">
  View Details →
</button>
*/

// ============================================
// 2. CARDS
// ============================================

/*
// Basic Card
<div className="admin-card bg-white dark:bg-gray-800 p-6">
  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
    Card Title
  </h3>
  <p className="text-gray-600 dark:text-gray-400">
    Card content goes here...
  </p>
</div>

// Card with Header and Footer
<div className="admin-card bg-white dark:bg-gray-800 overflow-hidden">
  <div className="p-6 border-b border-gray-200 dark:border-gray-700">
    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
      Card with Header
    </h3>
  </div>
  <div className="p-6">
    Card content...
  </div>
  <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
    Card footer...
  </div>
</div>

// Gradient Card (Info/Highlight)
<div className="admin-card bg-linear-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 p-6">
  <h3 className="text-lg font-bold text-primary-900 dark:text-primary-200 mb-4">
    Featured Card
  </h3>
  <p className="text-primary-700 dark:text-primary-300">
    This card highlights important information...
  </p>
</div>
*/

// ============================================
// 3. BADGES & STATUS INDICATORS
// ============================================

/*
// Success Badge
<span className="admin-badge admin-badge-success dark:admin-badge-success">
  Active
</span>

// Warning Badge
<span className="admin-badge admin-badge-warning dark:admin-badge-warning">
  Pending
</span>

// Danger Badge
<span className="admin-badge admin-badge-danger dark:admin-badge-danger">
  Archived
</span>

// Neutral/Info Badge
<span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
  Information
</span>
*/

// ============================================
// 4. FORM INPUTS
// ============================================

/*
// Text Input
<input
  type="text"
  placeholder="Enter text..."
  className="admin-input w-full"
/>

// Select Dropdown
<select className="admin-input w-full dark:admin-input">
  <option>Select an option</option>
  <option>Option 1</option>
  <option>Option 2</option>
</select>

// Text Area
<textarea
  placeholder="Enter description..."
  className="admin-input w-full resize-vertical min-h-32"
></textarea>

// Checkbox
<div className="flex items-center gap-3">
  <input
    type="checkbox"
    id="agree"
    className="w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-primary-500 cursor-pointer"
  />
  <label htmlFor="agree" className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
    I agree to the terms
  </label>
</div>

// Radio Button Group
<div className="space-y-3">
  <div className="flex items-center gap-3">
    <input
      type="radio"
      id="option1"
      name="choice"
      className="w-4 h-4 border-gray-300 text-primary-600 focus:ring-2 focus:ring-primary-500 cursor-pointer"
    />
    <label htmlFor="option1" className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
      Option 1
    </label>
  </div>
  <div className="flex items-center gap-3">
    <input
      type="radio"
      id="option2"
      name="choice"
      className="w-4 h-4 border-gray-300 text-primary-600 focus:ring-2 focus:ring-primary-500 cursor-pointer"
    />
    <label htmlFor="option2" className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
      Option 2
    </label>
  </div>
</div>
*/

// ============================================
// 5. TABLES
// ============================================

/*
// Basic Table
<table className="admin-table w-full">
  <thead className="bg-gray-50 dark:bg-gray-700/50">
    <tr>
      <th className="px-6 py-4">Column 1</th>
      <th className="px-6 py-4">Column 2</th>
      <th className="px-6 py-4">Column 3</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
      <td className="px-6 py-4">Data 1</td>
      <td className="px-6 py-4">Data 2</td>
      <td className="px-6 py-4">Data 3</td>
    </tr>
  </tbody>
</table>

// Table with Actions
<table className="admin-table w-full">
  <thead className="bg-gray-50 dark:bg-gray-700/50">
    <tr>
      <th className="px-6 py-4">Name</th>
      <th className="px-6 py-4">Status</th>
      <th className="px-6 py-4">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
      <td className="px-6 py-4">
        <p className="text-sm font-medium text-gray-900 dark:text-white">
          Item Name
        </p>
      </td>
      <td className="px-6 py-4">
        <span className="admin-badge admin-badge-success dark:admin-badge-success">
          Active
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="flex gap-2">
          <button className="text-primary-600 dark:text-primary-400 text-sm font-medium hover:text-primary-700">
            Edit
          </button>
          <span className="text-gray-300">|</span>
          <button className="text-red-600 dark:text-red-400 text-sm font-medium hover:text-red-700">
            Delete
          </button>
        </div>
      </td>
    </tr>
  </tbody>
</table>
*/

// ============================================
// 6. PROGRESS & STATS
// ============================================

/*
// Progress Bar
<div>
  <div className="flex justify-between mb-2">
    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
      Storage Used
    </span>
    <span className="text-sm font-bold text-gray-900 dark:text-white">
      65%
    </span>
  </div>
  <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
    <div
      className="h-full bg-linear-to-r from-primary-500 to-primary-600 rounded-full"
      style={{ width: "65%" }}
    ></div>
  </div>
</div>

// Stat Display
<div className="text-center">
  <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
    1,234
  </p>
  <p className="text-sm text-gray-600 dark:text-gray-400">
    Total Items
  </p>
  <p className="text-xs text-green-600 dark:text-green-400 mt-2">
    ↑ 12% from last month
  </p>
</div>
*/

// ============================================
// 7. ALERTS & NOTIFICATIONS
// ============================================

/*
// Success Alert
<div className="admin-card bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-4">
  <div className="flex gap-3">
    <svg className="w-5 h-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
    <div>
      <h3 className="text-sm font-medium text-green-900 dark:text-green-200">
        Success!
      </h3>
      <p className="text-sm text-green-700 dark:text-green-300 mt-1">
        Your changes have been saved successfully.
      </p>
    </div>
  </div>
</div>

// Warning Alert
<div className="admin-card bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg p-4">
  <div className="flex gap-3">
    <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
    <div>
      <h3 className="text-sm font-medium text-amber-900 dark:text-amber-200">
        Attention Required
      </h3>
      <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">
        Some items are pending review.
      </p>
    </div>
  </div>
</div>

// Error Alert
<div className="admin-card bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-4">
  <div className="flex gap-3">
    <svg className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
    </svg>
    <div>
      <h3 className="text-sm font-medium text-red-900 dark:text-red-200">
        Error
      </h3>
      <p className="text-sm text-red-700 dark:text-red-300 mt-1">
        Something went wrong. Please try again.
      </p>
    </div>
  </div>
</div>
*/

// ============================================
// 8. EMPTY STATES
// ============================================

/*
// Empty State
<div className="admin-card bg-white dark:bg-gray-800 rounded-lg p-12 text-center">
  <svg className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
  </svg>
  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
    No items yet
  </h3>
  <p className="text-gray-600 dark:text-gray-400 mb-6">
    Get started by creating your first item.
  </p>
  <button className="admin-btn-primary px-6 py-2.5 rounded-lg">
    Create First Item
  </button>
</div>
*/

// ============================================
// 9. LAYOUT PATTERNS
// ============================================

/*
// Two Column Layout
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="admin-card bg-white dark:bg-gray-800 p-6">
    Column 1
  </div>
  <div className="admin-card bg-white dark:bg-gray-800 p-6">
    Column 2
  </div>
</div>

// Four Column Grid (Responsive)
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  // 4 items - repeat StatCard component 4 times
</div>

// Sidebar + Content Layout
<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
  <aside className="lg:col-span-1 admin-card bg-white dark:bg-gray-800 p-6 h-fit">
    Sidebar content
  </aside>
  <main className="lg:col-span-3 admin-card bg-white dark:bg-gray-800 p-6">
    Main content
  </main>
</div>
*/

// ============================================
// 10. HOVER & INTERACTIVE EFFECTS
// ============================================

/*
// Hover Card with Shadow
<div className="admin-card bg-white dark:bg-gray-800 p-6 cursor-pointer group">
  <div className="flex items-center justify-between">
    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
      Card Title
    </h3>
    <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </div>
</div>

// Icon Scale on Hover
<div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
  🎵
</div>
*/

// ============================================
// REFERENCE COMPLETE
// ============================================

/**
 * For more details and a working example, see:
 * - ADMIN_DESIGN_SYSTEM.md - Design guidelines
 * - ADMIN_PAGE_TEMPLATE.tsx - Complete page example
 * - ADMIN_PANEL_IMPROVEMENTS.md - Implementation guide
 * - QUICK_START.md - Getting started
 */

export default function ComponentExamples() {
  return (
    <div className="p-8">
      <h1>Component Examples Reference</h1>
      <p>
        This file contains code examples for admin panel components. 
        Open the source code to see the commented examples above.
      </p>
      <p>
        For a working example page, see ADMIN_PAGE_TEMPLATE.tsx
      </p>
    </div>
  );
}
