
'use client';

export default function StackedBarChart() {
  const priorities = [
    { label: 'Urgent', height: '200px', bars: [
      { color: 'bg-green-500', height: '25%' },
      { color: 'bg-blue-500', height: '35%' },
      { color: 'bg-red-500', height: '5%' },
      { color: 'bg-yellow-500', height: '5%' },
      { color: 'bg-gray-500', height: '30%' }
    ]},
    { label: 'High', height: '240px', bars: [
      { color: 'bg-green-500', height: '30%' },
      { color: 'bg-blue-500', height: '25%' },
      { color: 'bg-red-500', height: '8%' },
      { color: 'bg-yellow-500', height: '8%' },
      { color: 'bg-gray-500', height: '29%' }
    ]},
    { label: 'Medium', height: '180px', bars: [
      { color: 'bg-green-500', height: '28%' },
      { color: 'bg-blue-500', height: '28%' },
      { color: 'bg-red-500', height: '11%' },
      { color: 'bg-yellow-500', height: '11%' },
      { color: 'bg-gray-500', height: '22%' }
    ]},
    { label: 'Low', height: '220px', bars: [
      { color: 'bg-green-500', height: '0%' },
      { color: 'bg-blue-500', height: '60%' },
      { color: 'bg-red-500', height: '0%' },
      { color: 'bg-yellow-500', height: '10%' },
      { color: 'bg-gray-500', height: '30%' }
    ]}
  ];

  const legend = [
    { label: 'To-Do', color: 'bg-green-500', count: 21 },
    { label: 'Complete', color: 'bg-blue-500', count: 12 },
    { label: 'Not Started', color: 'bg-red-500', count: 3 },
    { label: 'Review', color: 'bg-yellow-500', count: 3 },
    { label: 'In Progress', color: 'bg-gray-500', count: 12 }
  ];

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 relative">
      <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-4 sm:mb-6">
        Tasks by Priority & Status
      </h3>
      
      <div className="flex items-end justify-between h-48 sm:h-64 gap-2 sm:gap-4 px-2 sm:px-4">
        {priorities.map((priority, pIndex) => (
          <div key={pIndex} className="flex flex-col items-center gap-2 flex-1">
            <div className="w-full bg-gray-100 rounded-t relative" style={{height: priority.height}}>
              {priority.bars.map((bar, bIndex) => {
                const bottomPosition = priority.bars.slice(0, bIndex).reduce((sum, b) => {
                  return sum + parseInt(b.height);
                }, 0);
                return (
                  <div 
                    key={bIndex}
                    className={`absolute w-full ${bar.color} ${bIndex === 0 ? 'rounded-t' : ''} ${bIndex === priority.bars.length - 1 ? 'rounded-t' : ''}`}
                    style={{
                      bottom: `${bottomPosition}%`,
                      height: bar.height
                    }}
                  ></div>
                );
              })}
            </div>
            <span className="text-xs text-gray-600">{priority.label}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-4 sm:mt-6 text-xs">
        {legend.map((item, index) => (
          <div key={index} className="flex items-center gap-1">
            <div className={`w-2 sm:w-3 h-2 sm:h-3 ${item.color} rounded`}></div>
            <span className="text-gray-600 whitespace-nowrap">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="hidden sm:block absolute top-6 right-6 bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs">
        <div className="space-y-1">
          {legend.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className={`w-2 h-2 ${item.color} rounded-full`}></div>
              <span>{item.label}: {item.count}</span>
            </div>
          ))}
          <div className="border-t border-blue-300 pt-1 mt-1 font-medium">Total task: 48</div>
        </div>
      </div>
    </div>
  );
}