'use client';

export default function StackedBarChart() {
  const priorities = [
    {
      label: 'Urgent', height: '170px', bars: [
        { color: 'bg-green-500', height: '25%', label: 'To-Do' },
        { color: 'bg-blue-500', height: '15%', label: 'Complete' },
        { color: 'bg-yellow-500', height: '15%', label: 'Review' },
        { color: 'bg-red-500', height: '25%', label: 'Not Started' },   
        { color: 'bg-gray-500', height: '20%', label: 'In Progress' }
      ]
    },
    {
      label: 'High', height: '119px', bars: [
        { color: 'bg-green-500', height: '35%', label: 'To-Do', count: 21 },
        { color: 'bg-blue-500', height: '25%', label: 'Complete', count: 12 },
        { color: 'bg-red-500', height: '40%', label: 'Not Started', count: 3 }
      ]
    },
    {
      label: 'Medium', height: '119px', bars: [
        { color: 'bg-blue-500', height: '55%', label: 'Complete' },
        { color: 'bg-yellow-500', height: '20%', label: 'Review' },
        { color: 'bg-red-500', height: '25%', label: 'Not Started' }
      ]
    },
    {
      label: 'Low', height: '170px', bars: [
        { color: 'bg-blue-500', height: '40%', label: 'Complete' },
        { color: 'bg-red-500', height: '40%', label: 'Not Started' },
        { color: 'bg-gray-500', height: '20%', label: 'In Progress' }
      ]
    }
  ];

  const legend = [
    { label: 'To-Do', color: 'bg-green-500', count: 21 },
    { label: 'Complete', color: 'bg-blue-500', count: 12 },
    { label: 'Not Started', color: 'bg-red-500', count: 3 },
    { label: 'Review', color: 'bg-yellow-500', count: 3 },
    { label: 'In Progress', color: 'bg-gray-500', count: 12 }
  ];

  const totalTasks = legend.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 relative shadow-sm ">
      <h3 className="text-sm font-medium text-[#46474A] mb-4 sm:mb-6 font-sans">
        Tasks by Priority & Status
      </h3>

      <div className="flex items-end  gap-2 sm:gap-4 px-2 sm:px-4 relative">
        {/*---------------- Horizontal grid lines---------------- */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-full border-t border-gray-200"></div>
          ))}
        </div>

        {priorities.map((priority, pIndex) => (
          <div 
            key={pIndex} 
            className="flex flex-col justify-end gap-2 relative" 
            style={{
              marginLeft: pIndex === 0 ? '0' : pIndex === 1 ? 'auto' : 'auto',
              marginRight: pIndex === priorities.length - 1 ? '0' : pIndex === priorities.length - 2 ? 'auto' : 'auto'
            }}
          >
            <div className="w-12 bg-transparent rounded-t relative" style={{height: priority.height}}>
              {priority.bars.map((bar, bIndex) => {
                const bottomPosition = priority.bars.slice(0, bIndex).reduce((sum, b) => {
                  return sum + parseInt(b.height);
                }, 0);
                return (
                  <div 
                    key={bIndex}
                    className={`absolute w-full ${bar.color}`}
                    style={{
                      bottom: `${bottomPosition}%`,
                      height: bar.height,
                      borderTopLeftRadius: '8px',
                      borderTopRightRadius: '8px',
                      borderBottomLeftRadius: bIndex === 0 ? '0px' : '0px',
                      borderBottomRightRadius: bIndex === 0 ? '0px' : '0px'
                    }}
                  ></div>
                );
              })}
            </div>
            <span className="text-xs text-gray-600 text-center">{priority.label}</span>

            {/*------------------ Floating tooltip for High priority (second bar)-------------- */}
            {pIndex === 1 && (
              <div className="absolute top-4 -right-2 transform translate-x-full bg-white border border-gray-300 rounded-lg shadow-xl p-3 text-xs whitespace-nowrap z-20">
                <div className="space-y-1.5">
                  {priority.bars.map((bar, idx) => (
                    <div key={idx} className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 ${bar.color} rounded-full`}></div>
                        <span className="text-gray-700">{bar.label}</span>
                      </div>
                      <span className="font-medium text-gray-900">{bar.count}</span>
                    </div>
                  ))}
                  <div className="border-t border-gray-200 pt-1.5 mt-1.5 flex justify-between gap-4">
                    <span className="text-gray-700 font-medium">Total task</span>
                    <span className="font-semibold text-gray-900">{totalTasks}</span>
                  </div>
                </div>
                {/*--------------- Arrow pointing left--------------- */}
                <div className="absolute left-0 top-6 transform -translate-x-full translate-y-1/2">
                  <div className="w-0 h-0 border-t-4 border-b-4 border-r-4 border-t-transparent border-b-transparent border-r-gray-300"></div>
                  <div className="w-0 h-0 border-t-4 border-b-4 border-r-4 border-t-transparent border-b-transparent border-r-white absolute top-0 left-0 transform translate-x-px"></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 mt-6 sm:mt-8 text-xs">
        {legend.map((item, index) => (
          <div key={index} className="flex items-center gap-1.5">
            <div className={`w-2.5 h-2.5 ${item.color} rounded-sm`}></div>
            <span className="text-gray-600">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}