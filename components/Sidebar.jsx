
'use client';
import { ChevronDown, Search, BarChart3, X } from 'lucide-react';

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        ></div>
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-60 bg-white border-r border-gray-200 flex flex-col
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Mobile Close Button */}
        <button 
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Logo Section */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded"></div>
            <span className="font-semibold text-gray-900">DX Group</span>
            <button className="ml-auto p-1 hover:bg-gray-100 rounded">
              <div className="w-4 h-4 border border-gray-400 rounded"></div>
            </button>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg">
            <div className="w-6 h-6 bg-red-500 rounded"></div>
            <span className="text-sm font-medium text-gray-900">Jessore Feed Ltd.</span>
            <ChevronDown className="w-4 h-4 ml-auto text-gray-500" />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 p-3 overflow-y-auto">
          <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg mb-1">
            <span className="text-gray-400">⌘K</span>
            <span>Quick actions</span>
          </button>
          <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg mb-1">
            <Search className="w-4 h-4" />
            <span>/</span>
          </button>

          <nav className="mt-4 space-y-1">
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
              <BarChart3 className="w-4 h-4" />
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
              <div className="w-4 h-4 border border-gray-400 rounded"></div>
              <span>Task</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 bg-blue-50 rounded-lg">
              <div className="w-4 h-4 border border-blue-500 rounded"></div>
              <span>Projects</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
              <div className="w-4 h-4 border border-gray-400 rounded"></div>
              <span>Support Tickets</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
              <div className="w-4 h-4 border border-gray-400 rounded"></div>
              <span>Reports</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
              <div className="w-4 h-4 border border-gray-400 rounded"></div>
              <span>Settings</span>
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}