
'use client';

export default function Breadcrumb() {
  return (
    <div className="bg-white border-b border-gray-200 px-3 sm:px-6 py-3 overflow-x-auto rounded-bl-[12px] rounded-br-[12px] shadow-sm">
      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 whitespace-nowrap">
        <span className="hidden md:inline">Jessore Feed Ltd.</span>
        <span className="hidden md:inline">›</span>
        <span className="hidden sm:inline">Projects</span>
        <span className="hidden sm:inline">›</span>
        <span className="hidden sm:inline">E-commerce Platform</span>
        <span className="hidden sm:inline">›</span>
        <span className="text-gray-900">Project Analytics Dashboard</span>
      </div>
    </div>
  );
}