
'use client';
import { ChevronDown, Download } from 'lucide-react';

export default function DashboardHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">
          Project Analytics Dashboard
        </h1>
        <p className="text-xs sm:text-sm text-gray-500">
          A clear view of progress, performance, and team
        </p>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <button className="flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
          <span className="hidden sm:inline">June 01, 2025</span>
          <span className="sm:hidden">Jun 01</span>
          <ChevronDown className="w-4 h-4" />
        </button>
        <button className="flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">Export Report</span>
          <span className="sm:hidden">Export</span>
        </button>
      </div>
    </div>
  );
}