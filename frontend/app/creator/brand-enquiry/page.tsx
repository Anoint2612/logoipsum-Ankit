"use client"

import React from 'react';
import { ArrowLeft, Send, CheckCircle2 } from 'lucide-react';

export default function BrandEnquiryPage() {
  return (
    <div className="bg-[#fcfbf7] min-h-screen font-sans flex items-center justify-center p-12">
      
      <div className="w-full max-w-4xl bg-white rounded-[48px] p-16 shadow-2xl border border-slate-100 relative overflow-hidden">
         
         {/* Back Button */}
         <button className="absolute top-10 left-10 bg-[#f5f5f4] hover:bg-white border border-slate-200 p-2.5 px-6 rounded-full flex items-center gap-2 text-sm font-bold text-slate-700 transition-all shadow-sm">
            <ArrowLeft className="w-4 h-4" /> Back
         </button>

         <header className="mb-20 text-center">
            <h1 className="text-[52px] font-black text-[#1c1917] tracking-tight mb-4">Brand Enquiry !</h1>
            <p className="text-2xl font-bold text-slate-500 tracking-tight leading-tight">
               Looking to engage with me to promote you brand/business ?
            </p>
         </header>

         {/* Form Fields */}
         <form className="space-y-12">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="space-y-3.5">
                  <label className="block text-[15px] font-bold text-[#111827] ml-2">Name</label>
                  <input type="text" className="w-full bg-[#fbfbfb] border border-slate-200 rounded-2xl px-6 py-4.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-rose-200 transition-all" />
               </div>
               <div className="space-y-3.5">
                  <label className="block text-[15px] font-bold text-[#111827] ml-2">Mobile Number</label>
                  <input type="tel" className="w-full bg-[#fbfbfb] border border-slate-200 rounded-2xl px-6 py-4.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-rose-200 transition-all" />
               </div>
            </div>

            <div className="space-y-3.5">
               <label className="block text-[15px] font-bold text-[#111827] ml-2">Email Address</label>
               <input type="email" className="w-full bg-[#fbfbfb] border border-slate-200 rounded-2xl px-6 py-4.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-rose-200 transition-all" />
            </div>

            <div className="space-y-3.5">
               <label className="block text-[15px] font-bold text-[#111827] ml-2 font-black text-rose-500">How do you want to promote your brand or business ?</label>
               <input type="text" className="w-full bg-[#fbfbfb] border border-slate-200 rounded-2xl px-6 py-4.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-rose-200 transition-all" />
            </div>

            <div className="space-y-3.5">
               <label className="block text-[15px] font-bold text-[#111827] ml-2">How? ( write down the reason )</label>
               <input type="text" className="w-full bg-[#fbfbfb] border border-slate-200 rounded-2xl px-6 py-4.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-rose-200 transition-all" />
            </div>

            <div className="space-y-3.5">
               <label className="block text-[15px] font-bold text-[#111827] ml-2">Tentative budget</label>
               <input type="text" className="w-full bg-[#fbfbfb] border border-slate-200 rounded-2xl px-6 py-4.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-rose-200 transition-all" />
            </div>

            <div className="space-y-3.5">
               <label className="block text-[15px] font-bold text-[#111827] ml-2">Campaign Brief ( kindly fill in your requirements here )</label>
               <textarea rows={8} className="w-full bg-[#fbfbfb] border border-slate-200 rounded-3xl px-6 py-6 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-rose-200 transition-all resize-none" />
            </div>

            <div className="pt-10 flex justify-end">
               <button 
                  type="button"
                  className="bg-[#f87171] hover:bg-[#ef4444] text-white px-16 py-4.5 rounded-full text-lg font-black shadow-xl transition-all active:scale-95 border-b-4 border-[#dc2626]"
               >
                  Submit
               </button>
            </div>

         </form>

      </div>
      
    </div>
  );
}
