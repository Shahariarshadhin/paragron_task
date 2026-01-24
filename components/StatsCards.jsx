'use client';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function StatsCards() {
  const stats = [
    {
      label: 'Active',
      value: '82',
      trend: 'up',
      trendValue: '1.3% Up from past week progress',
      trendColor: 'text-green-600'
    },
    {
      label: 'In Progress',
      value: '82',
      trend: 'up',
      trendValue: '1.3% Up from past week progress',
      trendColor: 'text-green-600'
    },
    {
      label: 'Completed',
      value: '07',
      trend: 'down',
      trendValue: '4.3% Down from last month',
      trendColor: 'text-red-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6 ">
      {stats.map((stat, index) => {
       
        const match = stat.trendValue.match(/^([\d.]+%)\s*(.*)$/);
        const percentage = match ? match[1] : '';
        const description = match ? match[2] : stat.trendValue;

        return (
          <div key={index} className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="text-sm text-[#46474A] font-sans font-medium mb-2">{stat.label}</div>
            <div className="text-xl sm:text-2xl font-semibold text-[#242529] mb-2">
              {stat.value}
            </div>
            <div className="flex items-center gap-1 text-xs sm:text-sm">
              {stat.trend === 'up' ? (
                <TrendingUp className={`w-4 h-4 shrink-0 ${stat.trendColor}`} />
              ) : (
                <TrendingDown className={`w-4 h-4 shrink-0 ${stat.trendColor}`} />
              )}
              <span className="line-clamp-1">
                <span className={stat.trendColor}>{percentage}</span>
                <span className="text-black"> {description}</span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}