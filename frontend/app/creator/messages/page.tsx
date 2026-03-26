"use client"

import React, { useState } from 'react';
import { Search, Info, Send, Smile, Paperclip, MoreVertical, List, Bold, Italic, Link as LinkIcon, Image as ImageIcon } from 'lucide-react';

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState(0);

  const chats = [
    { name: 'User name', message: 'Text message dbvfjbjvbb......', time: '12:45 PM', img: 'https://i.pravatar.cc/150?u=1' },
    { name: 'User name', message: 'Text message dbvfjbjvbb......', time: '11:20 AM', img: 'https://i.pravatar.cc/150?u=2' },
    { name: 'User name', message: 'Text message dbvfjbjvbb......', time: 'Yesterday', img: 'https://i.pravatar.cc/150?u=3' },
    { name: 'User name', message: 'Text message dbvfjbjvbb......', time: 'Yesterday', img: 'https://i.pravatar.cc/150?u=4' },
    { name: 'User name', message: 'Text message dbvfjbjvbb......', time: 'Monday', img: 'https://i.pravatar.cc/150?u=5' },
    { name: 'User name', message: 'Text message dbvfjbjvbb......', time: 'Monday', img: 'https://i.pravatar.cc/150?u=6' },
    { name: 'User name', message: 'Text message dbvfjbjvbb......', time: '2 Mar', img: 'https://i.pravatar.cc/150?u=7' },
    { name: 'User name', message: 'Text message dbvfjbjvbb......', time: '1 Mar', img: 'https://i.pravatar.cc/150?u=8' },
    { name: 'User name', message: 'Text message dbvfjbjvbb......', time: '28 Feb', img: 'https://i.pravatar.cc/150?u=9' },
    { name: 'User name', message: 'Text message dbvfjbjvbb......', time: '27 Feb', img: 'https://i.pravatar.cc/150?u=10' },
  ];

  return (
    <div className="flex h-[calc(100vh-72px)] bg-[#f9f9f9] font-sans">
      
      {/* Sidebar - Conversation List */}
      <div className="w-[380px] border-r border-slate-200/60 bg-white flex flex-col pt-8 h-full shrink-0 shadow-sm z-10">
         <div className="px-8 mb-8">
            <h1 className="text-3xl font-bold text-[#1c1917] mb-8">Your Messages</h1>
            <div className="relative">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
               <input type="text" placeholder="Search conversation" className="w-full bg-[#f8f9fa] border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-rose-200 focus:border-rose-300 transition-colors shadow-sm" />
            </div>
         </div>

         <div className="flex-1 overflow-y-auto w-full">
            {chats.map((chat, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedChat(idx)}
                className={`flex items-center gap-4 px-8 py-4 cursor-pointer transition-all border-b border-slate-100/60 ${selectedChat === idx ? 'bg-rose-50/20 border-l-4 border-l-rose-500' : 'hover:bg-slate-50'}`}
              >
                 <div className="relative shrink-0">
                    <img src={chat.img} alt={chat.name} className="w-12 h-12 rounded-full border border-slate-200 shadow-sm" />
                    <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></div>
                 </div>
                 <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-0.5">
                       <h3 className="text-[15px] font-bold text-[#1c1917] truncate">{chat.name}</h3>
                       <span className="text-[11px] font-bold text-slate-400">{chat.time}</span>
                    </div>
                    <p className="text-[13px] font-medium text-slate-500 truncate">{chat.message}</p>
                 </div>
              </div>
            ))}
         </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col h-full bg-[#fbfbfb] relative">
         
         {/* Chat Header */}
         <header className="h-[72px] bg-white border-b border-slate-200/60 flex items-center justify-between px-8 shrink-0 shadow-sm z-0">
            <div className="flex items-center gap-4">
               <div className="relative">
                  <img src={chats[selectedChat].img} alt="Avatar" className="w-10 h-10 rounded-full border border-slate-200 shadow-sm" />
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
               </div>
               <div>
                  <h2 className="text-[15px] font-extrabold text-[#111827] leading-tight">{chats[selectedChat].name}</h2>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    <span className="text-[11px] font-bold text-slate-400 capitalize">Active</span>
                  </div>
               </div>
            </div>
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-colors shadow-sm">
               <Info className="w-5 h-5" />
            </button>
         </header>

         {/* Messages Feed */}
         <div className="flex-1 overflow-y-auto p-12 space-y-10">
            {/* Recipient Message */}
            <div className="flex items-start gap-4 max-w-2xl">
               <img src={chats[selectedChat].img} alt="Avatar" className="w-8 h-8 rounded-full border border-slate-200 translate-y-2 shadow-sm" />
               <div className="bg-white border border-slate-200 px-6 py-4 rounded-3xl rounded-tl-none shadow-sm">
                  <p className="text-[15px] font-medium text-slate-700 leading-relaxed">
                     Hi, I just enrolled in your 30-day challenge. When will I get access to the first workout?
                  </p>
               </div>
            </div>

            {/* Sender Message */}
            <div className="flex flex-row-reverse items-start gap-4 max-w-2xl ml-auto">
               <div className="w-8 h-8 rounded-full bg-rose-200 text-rose-700 text-[10px] font-black flex items-center justify-center border border-white translate-y-2 shadow-sm">K</div>
               <div className="bg-rose-100 text-[#111827] px-6 py-4 rounded-3xl rounded-tr-none shadow-sm">
                  <p className="text-[15px] font-medium text-slate-800 leading-relaxed">
                     Hey! You'll get access immediately in your library. You can start with Day 1 anytime.
                  </p>
               </div>
            </div>
         </div>

         {/* Chat Input Area */}
         <div className="p-10 shrink-0">
            <div className="bg-white border border-slate-200 rounded-[28px] overflow-hidden shadow-md">
               <div className="p-6">
                 <textarea placeholder="Write your message here" className="w-full text-base font-medium text-[#111827] focus:outline-none bg-transparent resize-none min-h-[40px]" />
               </div>
               <div className="px-8 pb-6 flex items-center justify-between border-t border-slate-50/50 pt-4">
                  <div className="flex items-center gap-6 text-slate-400">
                     <List className="w-5 h-5 cursor-pointer hover:text-slate-700" />
                     <Italic className="w-5 h-5 cursor-pointer hover:text-slate-700" />
                     <Bold className="w-5 h-5 cursor-pointer hover:text-slate-700" />
                     <Paperclip className="w-5 h-5 cursor-pointer hover:text-slate-700" />
                  </div>
                  <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-2.5 rounded-full text-sm font-bold shadow-md active:scale-95 transition-all">
                     Send
                  </button>
               </div>
            </div>
         </div>

      </div>

    </div>
  );
}
