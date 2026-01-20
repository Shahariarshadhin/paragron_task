
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
          <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
          <div className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">
            {stat.value}
          </div>
          <div className={`flex items-center gap-1 text-xs sm:text-sm ${stat.trendColor}`}>
            {stat.trend === 'up' ? (
              <TrendingUp className="w-4 h-4 flex-shrink-0" />
            ) : (
              <TrendingDown className="w-4 h-4 flex-shrink-0" />
            )}
            <span className="line-clamp-1">{stat.trendValue}</span>
          </div>
        </div>
      ))}
    </div>
  );
}