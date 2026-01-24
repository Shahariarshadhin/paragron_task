export default function DonutChart() {
  const tasks = [
    { 
      label: 'To-Do', 
      value: 21, 
      color: '#3FA870', 
      bgColor: 'bg-green-500', 
      radius: 85,
      arcPercentage: 35
    },
    { 
      label: 'Complete', 
      value: 12, 
      color: '#2A85DE', 
      bgColor: 'bg-blue-500', 
      radius: 74,
      arcPercentage: 60
    },
    { 
      label: 'Not Started', 
      value: 3, 
      color: '#E4675B', 
      bgColor: 'bg-red-500', 
      radius: 63,
      arcPercentage: 70
    },
    { 
      label: 'Review', 
      value: 3, 
      color: '#E8B647', 
      bgColor: 'bg-yellow-500', 
      radius: 52,
      arcPercentage: 85
    },
    { 
      label: 'In Progress', 
      value: 12, 
      color: '#6B7280', 
      bgColor: 'bg-gray-500', 
      radius: 41,
      arcPercentage: 60
    }
  ];

  const total = tasks.reduce((sum, task) => sum + task.value, 0);
  const strokeWidth = 8;

  
  const calculateArc = (arcPercentage, radius) => {
    const circumference = 2 * Math.PI * radius;
    const arcLength = (circumference * arcPercentage) / 100;
    const gapLength = circumference - arcLength;
    return { arcLength, gapLength };
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 shadow-sm">
      <h3 className="text-sm font-medium text-[#46474A] mb-4 sm:mb-6 font-sans">
        Task Status Distribution
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-2">
        {/*-------- Layered Donut Chart----------------- */}
        <div className="relative w-48 h-48 sm:w-48 sm:h-44 shrink-0">
          <svg viewBox="0 0 200 200" className="w-full h-full">

            {/*---------------- Background concentric circles for depth-------------- */}
            {tasks.slice(0, 4).map((task, index) => (
              <circle 
                key={`bg-${index}`}
                cx="100" 
                cy="100" 
                r={task.radius} 
                fill="none" 
                stroke="#F3F4F6" 
                strokeWidth={strokeWidth} 
              />
            ))}
            
            {/*----------------- Individual colored donuts with static arc lengths---------------- */}

            {tasks.slice(0, 4).map((task, index) => {
              const { arcLength, gapLength } = calculateArc(task.arcPercentage, task.radius);
              return (
                <circle 
                  key={`arc-${index}`}
                  cx="100" 
                  cy="100" 
                  r={task.radius} 
                  fill="none" 
                  stroke={task.color} 
                  strokeWidth={strokeWidth} 
                  strokeDasharray={`${arcLength} ${gapLength}`}
                  strokeDashoffset="0"
                  transform="rotate(90 100 100) scale(-1, 1) translate(-200, 0)"
                  strokeLinecap="round"
                />
              );
            })}
          </svg>
          
          {/*-------------------- Center percentage----------------------- */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <span className="text-lg sm:text-lg font-bold text-gray-900">67%</span>
            </div>
          </div>
        </div>

        
        <div className="space-y-3 w-full sm:w-auto">
          {tasks.map((task, index) => (
            <div key={index} className="flex items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 ${task.bgColor} rounded-sm shrink-0`}></div>
                <span className="text-sm text-gray-700 whitespace-nowrap">{task.label}</span>
              </div>
              <span className="text-sm font-medium text-gray-900 ml-auto">
                {String(task.value).padStart(2, '0')}
              </span>
            </div>
          ))}
          <div className="border-t border-gray-200 pt-3 mt-3">
            <div className="flex items-center justify-between gap-8">
              <span className="text-sm font-medium text-gray-700">Total task</span>
              <span className="text-sm font-semibold text-gray-900 ml-auto">{total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}