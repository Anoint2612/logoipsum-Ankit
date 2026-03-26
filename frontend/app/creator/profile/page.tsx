"use client"

import React, { useState } from 'react';
import { Camera, Edit, Share, Diamond, Zap, Link2, Link as LinkIcon, Lock, Heart, MessageSquare, ChevronDown, ArrowLeft, FileText } from 'lucide-react';

export default function CreatorProfilePage() {
  const [activeTab, setActiveTab] = useState('Posts');

  const posts = Array(8).fill({
    title: 'Design That Feels Effortless',
    date: '23 Jan, 2025',
    likes: '1.2k',
    comments: '40',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80'
  });

  return (
    <div className="flex bg-[#f9f9f9] min-h-screen font-[var(--font-figtree)]">
      
      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto">
         
         {/* Hero Banner Section */}
         <div className="relative h-80 w-full group">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&q=80" className="w-full h-full object-cover" alt="Banner" />
            <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20"></div>
            
            <button className="absolute top-8 left-8 bg-white/80 hover:bg-white backdrop-blur-md p-2 px-6 rounded-full flex items-center gap-2 text-sm font-bold text-slate-700 transition-all shadow-xl">
               <ArrowLeft className="w-4 h-4" /> Back
            </button>
         </div>

         <div className="max-w-[1240px] mx-auto px-10 relative -mt-32 pb-20">
            
            {/* Profile Header Card */}
            <div className="bg-white rounded-[40px] p-10 shadow-2xl border border-slate-100/50 mb-10 overflow-hidden relative">
               
               <div className="flex flex-wrap items-end justify-between gap-10">
                  <div className="flex items-end gap-10">
                     <div className="w-[200px] h-[200px] rounded-full border-[6px] border-white shadow-2xl relative overflow-hidden group">
                        <img src="https://i.pravatar.cc/300?u=andrea" className="w-full h-full object-cover" alt="Andrea Nelson" />
                     </div>
                     <div className="pb-4">
                        <h1 className="text-[44px] font-black text-[#1c1917] tracking-tight leading-tight font-['Fjalla_One'] uppercase">Andrea Nelson</h1>
                        <p className="text-[17px] font-bold text-slate-500 mt-1 max-w-sm">Small description about themselves</p>

                        <div className="flex items-center gap-10 mt-8 font-['Fjalla_One']">
                           <div>
                              <p className="text-[26px] font-black text-[#1c1917]">83.4k</p>
                              <p className="text-[13px] font-bold text-slate-400 uppercase tracking-tighter">Members</p>
                           </div>
                           <div>
                              <p className="text-[26px] font-black text-[#1c1917]">240</p>
                              <p className="text-[13px] font-bold text-slate-400 uppercase tracking-tighter">Posts</p>
                           </div>
                           <div>
                              <p className="text-[26px] font-black text-[#1c1917]">3.2/5</p>
                              <p className="text-[13px] font-bold text-slate-400 uppercase tracking-tighter">Average rating</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pb-4">
                     <button className="flex items-center gap-2 px-6 py-3 border border-slate-200 rounded-full text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors">
                        <Edit className="w-4 h-4" /> Edit profile
                     </button>
                     <button className="flex items-center gap-2 px-6 py-3 border border-slate-200 rounded-full text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors">
                        <Share className="w-4 h-4" /> Share profile
                     </button>
                     <button className="flex items-center gap-2 px-6 py-3 border border-slate-200 rounded-full text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors">
                        <Diamond className="w-4 h-4" /> Membership
                     </button>
                     <button className="flex items-center gap-2 px-8 py-3 bg-[#f87171] hover:bg-[#ef4444] text-white text-sm font-black rounded-full shadow-lg transition-all active:scale-95">
                        <Zap className="w-4 h-4 fill-white" /> Get in touch
                     </button>
                  </div>
               </div>

               {/* Connected Links Section */}
               <div className="mt-16 pt-10 border-t border-slate-100 flex flex-col gap-6">
                  <h4 className="text-[15px] font-bold text-slate-400 uppercase tracking-widest pl-2">Connected links</h4>
                  <div className="flex flex-wrap gap-4">
                     {[
                       { icon: Link2, label: '@khushi123hebhjb' },
                       { icon: Link2, label: 'hhtpsnjhbdhbj.com' },
                       { icon: Link2, label: 'hhtps.twitterbdhb.com' },
                       { icon: LinkIcon, label: '@sjjbddb245672.com' }
                     ].map((link, i) => (
                        <div key={i} className="flex items-center gap-3 px-6 py-3 bg-[#f9f9f9] border border-slate-200/50 rounded-2xl text-[14px] font-bold text-slate-600 hover:bg-white hover:shadow-sm transition-all cursor-pointer">
                           <link.icon className="w-4 h-4 text-slate-800" /> {link.label}
                        </div>
                     ))}
                     <button className="text-[13px] font-bold text-slate-400 hover:text-rose-500 transition-colors pl-2">+ Add more</button>
                  </div>
               </div>
            </div>

            {/* Content Tabs Feed */}
            <div className="space-y-10">
               <div className="flex gap-12 border-b border-slate-200/60 pl-4">
                  {['Posts', 'Videos', 'Livestreams', 'Reviews', 'About'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`text-[15px] font-bold pb-6 border-b-2 transition-all duration-200 flex items-center gap-2 ${activeTab === tab ? 'text-rose-500 border-rose-500' : 'text-slate-400 hover:text-slate-600 border-transparent'}`}
                    >
                      {tab === 'Posts' && <FileText className="w-4 h-4" />}
                      {tab}
                    </button>
                  ))}
               </div>

               {/* Post Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {posts.map((post, i) => (
                    <div key={i} className="group cursor-pointer">
                       <div className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100/50">
                          <div className="relative aspect-square">
                             <img src={post.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Post thumbnail" />
                             <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                             <div className="absolute left-4 top-4 bg-black/40 backdrop-blur-xl px-4 py-1.5 rounded-full flex items-center gap-2 text-white text-[11px] font-black tracking-widest border border-white/20">
                                <Lock className="w-3 h-3" /> Locked
                             </div>
                          </div>
                          <div className="p-6">
                             <h3 className="text-[15px] font-bold text-[#1c1917] mb-2 leading-tight group-hover:text-rose-500 transition-colors font-['Fjalla_One'] uppercase">{post.title}</h3>
                             <div className="flex items-center justify-between mt-4">
                                <p className="text-[12px] font-bold text-slate-400 uppercase tracking-tighter">{post.date}</p>
                                <div className="flex items-center gap-4 text-slate-400">
                                   <div className="flex items-center gap-1.5"><Heart className="w-4 h-4" /> <span className="text-[12px] font-bold tracking-tighter">{post.likes}</span></div>
                                   <div className="flex items-center gap-1.5"><MessageSquare className="w-4 h-4" /> <span className="text-[12px] font-bold tracking-tighter">{post.comments}</span></div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

         </div>
      </div>

    </div>
  );
}
