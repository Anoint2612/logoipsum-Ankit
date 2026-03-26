"use client"

import React, { useState } from 'react';
import { MoreVertical, Search, Filter, Globe, Lock, Clock, FileText, Image as ImageIcon, Video, Radio, Trash2, Edit3, Eye } from 'lucide-react';

export default function ContentLibraryPage() {
  const [activeTab, setActiveTab] = useState('Published');
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const libraryData = Array(10).fill(null).map((_, i) => ({
    id: i,
    title: 'Welcome to advanced ux masters',
    date: '1 oct, 2025',
    access: i % 2 === 0 ? 'Paid' : 'Public',
    price: '$ 2000',
    type: i % 3 === 0 ? 'Image' : i % 3 === 1 ? 'Video' : 'livestream',
    img: [
      'https://images.unsplash.com/photo-1586717791821-3f44a563cc4c?w=100&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=100&q=80',
      'https://images.unsplash.com/photo-1527433270417-66d3b4040b12?w=100&q=80',
    ][i % 3]
  }));

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'image': return <ImageIcon className="w-4 h-4 text-slate-400" />;
      case 'video': return <Video className="w-4 h-4 text-slate-400" />;
      case 'livestream': return <Radio className="w-4 h-4 text-slate-400" />;
      default: return <FileText className="w-4 h-4 text-slate-400" />;
    }
  };

  const toggleMenu = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveMenu(activeMenu === id ? null : id);
  };

  const ActionMenu = () => (
    <div className="absolute right-0 top-10 w-48 bg-white border border-slate-200 rounded-2xl shadow-2xl py-2 z-[100] animate-in fade-in zoom-in duration-200 origin-top-right">
       <button className="w-full px-6 py-3 text-left text-sm font-bold text-[#1c1917] hover:bg-slate-50 flex items-center gap-3 transition-colors">
          View post
       </button>
       <button className="w-full px-6 py-3 text-left text-sm font-bold text-[#1c1917] hover:bg-slate-50 flex items-center gap-3 transition-colors">
          Edit post
       </button>
       <button className="w-full px-6 py-3 text-left text-sm font-bold text-rose-500 hover:bg-rose-50 flex items-center gap-3 transition-colors">
          Delete post
       </button>
    </div>
  );

  return (
    <div className="p-12 max-w-7xl w-full mx-auto font-sans bg-[#f9f9f9] min-h-screen" onClick={() => setActiveMenu(null)}>
      
      <header className="mb-10">
        <h1 className="text-[44px] font-bold text-[#1c1917] tracking-tight mb-2">Content Library</h1>
        <p className="text-2xl font-bold text-slate-600 tracking-tight leading-tight">Manage your published, draft, and scheduled posts in one place.</p>
      </header>

      {/* Tabs */}
      <div className="flex gap-8 border-b border-slate-200/60 mb-8">
        {['Published', 'Scheduled', 'Drafts'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-[15px] font-bold pb-4 border-b-2 transition-all duration-200 ${activeTab === tab ? 'text-rose-500 border-rose-500' : 'text-slate-400 hover:text-slate-600 border-transparent'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table Container */}
      <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#fafaf9] border-b border-slate-200">
            <tr>
              <th className="px-8 py-6 text-sm font-bold text-[#1c1917] w-1/3">Title</th>
              <th className="px-8 py-6 text-sm font-bold text-[#1c1917]">
                {activeTab === 'Drafts' ? 'Last edited' : activeTab === 'Scheduled' ? 'Release date' : 'Publish date'}
              </th>
              <th className="px-8 py-6 text-sm font-bold text-[#1c1917]">Access</th>
              <th className="px-8 py-6 text-sm font-bold text-[#1c1917]">Price</th>
              <th className="px-8 py-6 text-sm font-bold text-[#1c1917]">Post type</th>
              <th className="px-8 py-6 text-sm font-bold text-[#1c1917] text-right pr-12">Edit</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100/80">
            {libraryData.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50 transition-colors cursor-pointer group">
                <td className="px-8 py-5">
                  <div className="flex items-center gap-5">
                    <img src={item.img} alt="Post" className="w-14 h-12 object-cover rounded-xl border border-slate-200 shadow-sm" />
                    <span className="text-[15px] font-bold text-[#1c1917] group-hover:text-rose-500 transition-colors leading-tight">{item.title}</span>
                  </div>
                </td>
                <td className="px-8 py-5 text-sm font-medium text-slate-500">{item.date}</td>
                <td className="px-8 py-5">
                  <div className="flex items-center gap-2">
                    {item.access === 'Public' ? <Globe className="w-4 h-4 text-emerald-500" /> : <Lock className="w-4 h-4 text-rose-400" />}
                    <span className="text-sm font-bold text-slate-700">{item.access}</span>
                  </div>
                </td>
                <td className="px-8 py-5 text-sm font-black text-[#1c1917]">{item.price}</td>
                <td className="px-8 py-5">
                  <div className="flex items-center gap-2 capitalize">
                    {getTypeIcon(item.type)}
                    <span className="text-sm font-medium text-slate-600">{item.type}</span>
                  </div>
                </td>
                <td className="px-8 py-5 text-right relative pr-8">
                  <button onClick={(e) => toggleMenu(item.id, e)} className="p-2 text-slate-300 hover:text-slate-800 transition-all hover:scale-110 active:scale-90">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                  {activeMenu === item.id && <ActionMenu />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
