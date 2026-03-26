"use client"

import React, { useState } from 'react';
import { Smartphone, Monitor, ChevronDown, Check, X, LayoutTemplate, PlusCircle } from 'lucide-react';

export default function ProfilePreviewPage() {
  const [viewMode, setViewMode] = useState('desktop');

  return (
    <div className="bg-[#fcfbf7] min-h-screen font-sans">
      
      {/* Top Floating Control Header */}
      <header className="fixed top-0 left-[280px] right-0 h-[80px] bg-white border-b border-slate-200/60 flex items-center justify-between px-10 z-[50] shadow-sm">
         <div className="flex items-center gap-6">
            <div className="relative group">
               <button className="flex items-center gap-2 px-4 py-2 bg-[#f5f5f4] border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-white transition-all shadow-sm">
                  Public <ChevronDown className="w-4 h-4 text-slate-400" />
               </button>
            </div>
            
            <div className="h-6 w-px bg-slate-200 mx-2"></div>

            <div className="flex items-center gap-2 bg-[#f5f5f4] p-1 rounded-xl border border-slate-200 shadow-inner">
               <button 
                  onClick={() => setViewMode('mobile')}
                  className={`p-2 rounded-lg transition-all ${viewMode === 'mobile' ? 'bg-white shadow-md text-rose-500' : 'text-slate-400 hover:text-slate-600'}`}
               >
                  <Smartphone className="w-5 h-5" />
               </button>
               <button 
                  onClick={() => setViewMode('desktop')}
                  className={`p-2 rounded-lg transition-all ${viewMode === 'desktop' ? 'bg-white shadow-md text-rose-500' : 'text-slate-400 hover:text-slate-600'}`}
               >
                  <Monitor className="w-5 h-5" />
               </button>
            </div>
         </div>

         <div className="flex items-center gap-4">
            <button className="px-6 py-2.5 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors">
               Cancel
            </button>
            <button className="px-8 py-2.5 bg-[#d94828] hover:bg-[#c93d1f] text-white text-sm font-bold rounded-xl transition-all shadow-md active:scale-95 border-b-4 border-[#b9381b]">
               Save
            </button>
         </div>
      </header>

      {/* Main Content Preview Area */}
      <div className={`pt-24 pb-20 flex justify-center transition-all duration-500 ${viewMode === 'mobile' ? 'px-4' : 'px-12'}`}>
         
         <div className={`bg-white shadow-2xl transition-all duration-500 overflow-hidden ${viewMode === 'mobile' ? 'w-[375px] rounded-[48px] border-[8px] border-slate-900 border-b-[40px] border-t-[40px] h-[800px]' : 'w-full max-w-6xl rounded-[32px] min-h-[90vh]'}`}>
            
            {/* Header / Nav inside preview */}
            <div className="px-8 py-6 border-b border-slate-100/50 flex items-center justify-end">
               <div className="flex items-center gap-6">
                 <span className="text-sm font-bold text-[#1c1917] cursor-pointer">Home</span>
                 <button className="px-5 py-2 border border-slate-200 rounded-full text-xs font-bold text-[#1c1917] hover:bg-slate-50 transition-colors">
                   Join for free
                 </button>
               </div>
            </div>

            {/* Profile Hero Section */}
            <div className="px-10 py-16">
               <div className="bg-[#ede9df] rounded-[40px] p-12 flex flex-col items-center relative min-h-[340px] border border-[#d6d3d1]/20">
                  <div className="w-40 h-40 rounded-[32px] bg-white absolute top-[-60px] left-12 shadow-2xl border-4 border-white flex items-center justify-center">
                     {/* Placeholder for Profile Pic */}
                  </div>
                  
                  <div className="mt-20 w-full pl-6">
                     <h1 className="text-[44px] font-bold text-[#1c1917] tracking-tighter mb-2">Creator Name</h1>
                     <p className="text-[17px] font-bold text-slate-500 mb-8 uppercase tracking-widest">0 posts</p>
                     
                     <button className="px-8 py-3 bg-white text-[#1c1917] text-base font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all border border-slate-200">
                        Join for free
                     </button>
                  </div>
               </div>
            </div>

            {/* Content Feed Grid */}
            <div className="px-10 pb-20 space-y-20">
               
               {/* Latest Post Section */}
               <div className="space-y-8">
                  <h2 className="text-2xl font-bold text-[#1c1917] tracking-tight">Latest Post</h2>
                  <div className="bg-[#fcfcfc] border border-dashed border-slate-300 rounded-[32px] p-24 flex flex-col items-center justify-center text-center shadow-inner">
                     <p className="text-base font-bold text-slate-400 mb-8 max-w-sm leading-relaxed">
                        This section will be shown when you add more posts.
                     </p>
                     <button className="flex items-center gap-3 px-8 py-3 bg-white border border-slate-200 text-[#111827] text-sm font-bold rounded-full shadow-md hover:bg-slate-50 transition-all border-b-2 hover:-translate-y-1">
                        <PlusCircle className="w-4 h-4 text-rose-500" /> Create post
                     </button>
                  </div>
               </div>

               {/* Recent Post Section */}
               <div className="space-y-8">
                  <h2 className="text-2xl font-bold text-[#1c1917] tracking-tight">Recent Post</h2>
                  <div className="bg-[#fcfcfc] border border-dashed border-slate-300 rounded-[32px] p-24 flex flex-col items-center justify-center text-center shadow-inner">
                     <p className="text-base font-bold text-slate-400 mb-8 max-w-sm leading-relaxed">
                        This section will be shown when you add more posts.
                     </p>
                     <button className="flex items-center gap-3 px-8 py-3 bg-white border border-slate-200 text-[#111827] text-sm font-bold rounded-full shadow-md hover:bg-slate-50 transition-all border-b-2 hover:-translate-y-1">
                        <PlusCircle className="w-4 h-4 text-rose-500" /> Create post
                     </button>
                  </div>
               </div>

            </div>

         </div>
      </div>

    </div>
  );
}
