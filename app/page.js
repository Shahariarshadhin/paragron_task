"use client";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import DashboardHeader from "@/components/DashboardHeader";
import DonutChart from "@/components/DonutChart";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import StackedBarChart from "@/components/StackedBarChart";
import StatsCards from "@/components/StatsCards";
import TeamPerformance from "@/components/TeamPerformance";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden w-full lg:w-auto p-2">
        <div>
          <Header onMenuClick={() => setSidebarOpen(true)} />
          <Breadcrumb />
        </div>

        <div className="flex-1 overflow-auto p-3 sm:p-4 lg:p-6 shadow-sm bg-white my-2 rounded-[12px]">
          <DashboardHeader />
          <StatsCards />

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6 ">
            <DonutChart />
            <StackedBarChart />
          </div>

          <TeamPerformance />
        </div>
      </div>
    </div>
  );
}
