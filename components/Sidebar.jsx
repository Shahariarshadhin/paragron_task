
'use client';
import { ChevronDown, Search, BarChart3, X, LayoutDashboard, ClipboardList, Settings } from 'lucide-react';
import { HiOutlineSupport } from "react-icons/hi";
import { MdInsertChartOutlined } from "react-icons/md";
import { BsBriefcase } from "react-icons/bs";
import { TbSquareLetterK } from "react-icons/tb";
import { BsLayoutSplit } from "react-icons/bs";
import Image from 'next/image';

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/*----------------- Mobile Overlay----------------- */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        ></div>
      )}

      {/*----------------- Sidebar----------------- */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-72 bg-white border-r border-gray-200 flex flex-col
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

        {/*----------------- Logo Section----------------- */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-3 py-4 border-b border-gray-200">
            <div className="w-6 h-6 rounded">
              <Image src="/assets/logo/Background (1).png" alt="DX Group" width={24} height={24} />
            </div>
            <span className="text-sm font-semibold text-[#242529] font-sans">Paragon Group</span>
            <button className="ml-auto p-1 hover:bg-gray-100 rounded">
              <div className="w-4 h-4">

                <BsLayoutSplit className="w-4 h-4 text-gray-600" />
              </div>
            </button>
          </div>
          <div className="flex items-center gap-3 py-3">
            <div className="w-6 h-6 rounded">
              <Image src="/assets/logo/Background.png" alt="DX Group" width={24} height={24} />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-[#242529] font-sans">Jessore Feed Ltd.</span>
              <ChevronDown className="w-4 h-4 ml-auto text-[#242529]" />
            </div>
          </div>
        </div>

        {/*----------------- Navigation----------------- */}
        <div className="flex-1 p-3 overflow-y-auto">
          <div className="grid grid-cols-3  gap-2 w-full">
            {/*----------------- Quick actions button----------------- */}
            <button className="flex items-center col-span-2 gap-2 px-1 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 w-full">
              <TbSquareLetterK className="w-[14px] h-[14px] text-gray-700" />
              <span className="text-sm font-medium text-gray-700">Quick actions</span>
              <kbd className="ml-auto px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100 border border-gray-300 rounded">
                ⌘K
              </kbd>
            </button>

            {/*----------------- Search button----------------- */}
            <button className="flex justify-center items-center gap-2 px-1 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
              <Search className=" text-gray-400" />
              <kbd className="px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100 border border-gray-300 rounded">
                /
              </kbd>
            </button>
          </div>

          <nav className="mt-4 space-y-1">
            <a href="#" className="flex items-center gap-3 px-3 py-1 text-[14px] text-[#242529] font-medium hover:bg-gray-50 rounded-lg">
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-1 text-[14px] text-[#242529] font-medium hover:bg-gray-50 rounded-lg">

              <ClipboardList className="w-4 h-4" />
              <span>Task</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-1 text-[14px] text-[#242529] font-medium bg-[#EEEFF1] rounded-lg">
              <BsBriefcase className="w-4 h-4" />
              <span>Projects</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-1 text-[14px] text-[#242529] font-medium hover:bg-gray-50 rounded-lg">

              <HiOutlineSupport className="w-4 h-4" />
              <span>Support Tickets</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-1 text-[14px] text-[#242529] font-medium hover:bg-gray-50 rounded-lg">

              <MdInsertChartOutlined className="w-4 h-4" />
              <span>Reports</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-1 text-[14px] text-[#242529] font-medium hover:bg-gray-50 rounded-lg">
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}