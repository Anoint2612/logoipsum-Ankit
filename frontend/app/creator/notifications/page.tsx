"use client"

import React from 'react';
import { MoreHorizontal, Bell } from 'lucide-react';

export default function NotificationsPage() {
  const notifications = [
    { name: 'Smith', action: 'posted a new video post', date: '23 Jan, 2025', time: '2:00pm' },
    { name: 'Smith', action: 'posted a new video post', date: '23 Jan, 2025', time: '2:00pm' },
    { name: 'Smith', action: 'posted a new video post', date: '23 Jan, 2025', time: '2:00pm' },
    { name: 'Smith', action: 'posted a new video post', date: '23 Jan, 2025', time: '2:00pm' },
    { name: 'Smith', action: 'posted a new video post', date: '23 Jan, 2025', time: '2:00pm' },
    { name: 'Smith', action: 'posted a new video post', date: '23 Jan, 2025', time: '2:00pm' },
  ];

  const yesterdayNotifications = [
    { name: 'Smith', action: 'posted a new video post', date: '23 Jan, 2025', time: '2:00pm' },
    { name: 'Smith', action: 'posted a new video post', date: '23 Jan, 2025', time: '2:00pm' },
    { name: 'Smith', action: 'posted a new video post', date: '23 Jan, 2025', time: '2:00pm' },
    { name: 'Smith', action: 'posted a new video post', date: '23 Jan, 2025', time: '2:00pm' },
  ];

  return (
    <div className="p-12 max-w-6xl w-full mx-auto font-sans bg-[#f9f9f9] min-h-screen">
       <header className="mb-12">
          <h1 className="text-[44px] font-bold text-[#1c1917] tracking-tight mb-2">Notifications</h1>
          <p className="text-2xl font-bold text-slate-600 tracking-tight leading-tight max-w-4xl">
            Stay updated on activity, engagement, and important updates related to your content.
          </p>
       </header>

       <div className="space-y-12">
          
          {/* Today Section */}
          <div>
             <h2 className="text-[13px] font-bold text-slate-400 mb-6 uppercase tracking-widest px-2">Today</h2>
             <div className="space-y-3">
                {notifications.map((n, idx) => (
                  <div key={idx} className="bg-white border border-slate-200/60 rounded-2xl p-6 flex justify-between items-center hover:shadow-sm transition-shadow group cursor-pointer">
                     <div className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div>
                           <h3 className="text-base font-bold text-[#1c1917] mb-1">
                             {n.name} has <span className="font-medium text-slate-600">{n.action}</span>
                           </h3>
                           <p className="text-[13px] font-bold text-slate-400">{n.date} | {n.time}</p>
                        </div>
                     </div>
                     <button className="text-slate-300 hover:text-slate-600 transition-colors">
                        <MoreHorizontal className="w-5 h-5" />
                     </button>
                  </div>
                ))}
             </div>
          </div>

          {/* Yesterday Section */}
          <div>
             <h2 className="text-[13px] font-bold text-slate-400 mb-6 uppercase tracking-widest px-2">Yesterday</h2>
             <div className="space-y-3">
                {yesterdayNotifications.map((n, idx) => (
                  <div key={idx} className="bg-white border border-slate-200/60 rounded-2xl p-6 flex justify-between items-center hover:shadow-sm transition-shadow group cursor-pointer opacity-80 hover:opacity-100">
                     <div className="flex items-start gap-4 pl-5">
                        <div>
                           <h3 className="text-base font-bold text-[#1c1917] mb-1">
                             {n.name} has <span className="font-medium text-slate-600">{n.action}</span>
                           </h3>
                           <p className="text-[13px] font-bold text-slate-400">{n.date} | {n.time}</p>
                        </div>
                     </div>
                     <button className="text-slate-300 hover:text-slate-600 transition-colors">
                        <MoreHorizontal className="w-5 h-5" />
                     </button>
                  </div>
                ))}
             </div>
          </div>

       </div>
    </div>
  );
}
