
'use client';
import { Bell, Sun, Grid3x3, Menu } from 'lucide-react';
import { BiMessageRoundedDetail } from "react-icons/bi";
import { PiDotsNineBold } from "react-icons/pi";

export default function Header({ onMenuClick }) {
    return (
        <header className="bg-white border-b border-gray-200 px-3 sm:px-6 py-3 flex items-center justify-between  rounded-tl-[12px] rounded-tr-[12px] shadow-sm">
            <div className="flex items-center gap-3">
                {/* Mobile Menu Button */}
                <button
                    onClick={onMenuClick}
                    className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                >
                    <Menu className="w-5 h-5 text-gray-600" />
                </button>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="hidden sm:inline text-[#242529] font-semibold text-base tracking-normal">Task & Ticket Management</span>
                    <span className="sm:hidden">Dashboard</span>
                </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
                <button className=" hover:bg-gray-100 rounded-lg hidden sm:block">
                    <div className="w-7 h-7 border border-gray-200 rounded-lg flex items-center justify-center">
                        <BiMessageRoundedDetail className="w-[14px] h-[14px] text-gray-600" />
                    </div>
                </button>
                <button className=" hover:bg-gray-100 rounded-lg hidden sm:block">
                    <div className="w-7 h-7 border border-gray-200 rounded-lg flex items-center justify-center">
                        <Bell className="w-[14px] h-[14px] text-gray-600" />
                    </div>
                </button>
                
                <button className="relative inline-flex items-center p-1 bg-gray-200 rounded-full w-12 h-8 transition-colors duration-300 hidden sm:block">
                    {/* Toggle Track */}
                    <div className="absolute inset-0 rounded-full bg-gray-200"></div>

                    {/* Toggle Circle/Knob */}
                    <div className="relative w-6 h-6 bg-white rounded-full shadow-sm flex items-center justify-center transition-transform duration-300 translate-x-0">
                        <Sun className="w-[14px] h-[14px] text-gray-600"/>
                    </div>
                </button>
                <button className="w-7 h-7 hover:bg-gray-100 rounded-lg hidden md:block">
                    <PiDotsNineBold className="w-full h-full text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"></div>
                </button>
            </div>
        </header>
    );
}