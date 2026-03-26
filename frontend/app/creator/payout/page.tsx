"use client"

import React from 'react';
import { ArrowRight, Landmark, FileText, UserCheck } from 'lucide-react';

export default function PayoutSettingsPage() {
  return (
    <div className="p-12 max-w-6xl w-full mx-auto font-sans bg-[#f9f9f9] min-h-screen">
       
       <header className="mb-12">
          <h1 className="text-[34px] font-bold text-[#1c1917] tracking-tight mb-2">Payout Settings</h1>
          <p className="text-base font-medium text-slate-500 max-w-3xl leading-relaxed">
            Manage your institutional disbursement configurations, statutory KYC documentation, and verified banking channels.
          </p>
       </header>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: KYC Verification */}
          <div className="bg-[#fff1e7] rounded-3xl p-10 border border-[#fee2d1] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group cursor-pointer h-full">
             <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#ffedd5] text-[#9a3412] text-xs font-bold rounded-lg mb-6 border border-[#fed7aa]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#f97316]"></div> Required
                </span>
                <h3 className="text-[26px] font-bold text-[#1c1917] mb-4 flex items-center gap-3">
                   KYC Verification
                </h3>
                <p className="text-base font-medium text-slate-600 mb-10 leading-relaxed">
                   Verify your identity by submitting PAN and Aadhaar details to enable secure payouts.
                </p>
             </div>
             
             <button className="flex items-center gap-2 text-base font-bold text-[#d94828] hover:gap-4 transition-all self-end">
                Complete KYC <ArrowRight className="w-5 h-5" />
             </button>
          </div>

          {/* Card 2: Billing Details */}
          <div className="bg-[#f5f3ff] rounded-3xl p-10 border border-[#ede9fe] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group cursor-pointer h-full">
             <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#ede9fe] text-[#5b21b6] text-xs font-bold rounded-lg mb-6 border border-[#ddd6fe]">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]"></div> Required
                </span>
                <h3 className="text-[26px] font-bold text-[#1c1917] mb-4">
                   Billing Details
                </h3>
                <p className="text-base font-medium text-slate-600 mb-10 leading-relaxed">
                   Provide your billing information for invoices, tax records, and payment tracking.
                </p>
             </div>
             
             <button className="flex items-center gap-2 text-base font-bold text-[#d94828] hover:gap-4 transition-all self-end">
                Add Billing Info <ArrowRight className="w-5 h-5" />
             </button>
          </div>

          {/* Card 3: Bank Account Setup */}
          <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group cursor-pointer h-full">
             <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-lg mb-6 border border-slate-200">
                   <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div> Required
                </span>
                <h3 className="text-[26px] font-bold text-[#1c1917] mb-4">
                   Bank Account Setup
                </h3>
                <p className="text-base font-medium text-slate-600 mb-10 leading-relaxed">
                   Add your bank account information to receive payments directly and securely.
                </p>
             </div>
             
             <button className="flex items-center gap-2 text-base font-bold text-[#d94828] hover:gap-4 transition-all self-end mt-auto">
                Complete setup <ArrowRight className="w-5 h-5" />
             </button>
          </div>

       </div>

    </div>
  );
}
