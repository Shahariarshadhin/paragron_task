'use client';

import { Medal } from "lucide-react";
import Image from "next/image";

export default function TeamPerformance() {
  const members = [
    { name: 'Cameron Williamson', tasks: '4/7 tasks', progress: 57, avatar: '/assets/users/b8fc03dce8c73d5c12872aeb54bc28955fc338cd.png' },
    { name: 'Kristin Watson', tasks: '1/3 tasks', progress: 85, avatar: '/assets/users/2c177bf48d10447aead72fba24d61fcf0bb61e66.png' },
    { name: 'Darlene Robertson', tasks: '8/12 tasks', progress: 40, avatar: '/assets/users/5b53d545272b38f5a21c450cbf39fb87e5a06ec3.png' },
    { name: 'Jenny Wilson', tasks: '4/8 tasks', progress: 78, avatar: '/assets/users/5e0c1c231aae6e45a61011161ac7597d2ff88c60.png' },
    { name: 'Jenny Wilson', tasks: '0/0 tasks', progress: 0, avatar: '/assets/users/5e0c1c231aae6e45a61011161ac7597d2ff88c60.png' }
  ];

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
      <h3 className="text-sm font-semibold text-[#46474A] mb-4 sm:mb-6 font-sans">
        Team Performance
      </h3>
      <div className="space-y-3 sm:space-y-4">
        {members.map((member, index) => (
          <div key={index} className="flex items-center gap-3 sm:gap-4 bg-[#F6F6F8] p-2 sm:p-3 rounded-lg">
            <div className="w-8 h-8 sm:w-10 sm:h-10 relative shrink-0 rounded-full overflow-hidden">
              <Image
                src={member.avatar}
                alt={member.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 32px, 40px"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1 gap-2">
                <span className="text-xs sm:text-sm font-medium text-gray-900 truncate">
                  {member.name}
                </span>
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="">
                    <div className="text-blue-400"><Medal /></div>
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