
'use client';

export default function TeamPerformance() {
  const members = [
    { name: 'Cameron Williamson', tasks: '4/7 tasks', progress: 57, avatar: 'bg-blue-400' },
    { name: 'Kristin Watson', tasks: '1/3 tasks', progress: 85, avatar: 'bg-green-400' },
    { name: 'Darlene Robertson', tasks: '8/12 tasks', progress: 40, avatar: 'bg-purple-400' },
    { name: 'Jenny Wilson', tasks: '4/8 tasks', progress: 78, avatar: 'bg-orange-400' },
    { name: 'Jenny Wilson', tasks: '0/0 tasks', progress: 0, avatar: 'bg-gray-400' }
  ];

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
      <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-4 sm:mb-6">
        Team Performance
      </h3>
      <div className="space-y-3 sm:space-y-4">
        {members.map((member, index) => (
          <div key={index} className="flex items-center gap-3 sm:gap-4">
            <div className={`w-8 h-8 sm:w-10 sm:h-10 ${member.avatar} rounded-full flex-shrink-0`}></div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1 gap-2">
                <span className="text-xs sm:text-sm font-medium text-gray-900 truncate">
                  {member.name}
                </span>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-gray-500 whitespace-nowrap">{member.tasks}</span>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5 sm:h-2">
                <div 
                  className="bg-blue-500 h-1.5 sm:h-2 rounded-full transition-all duration-300" 
                  style={{width: `${member.progress}%`}}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}