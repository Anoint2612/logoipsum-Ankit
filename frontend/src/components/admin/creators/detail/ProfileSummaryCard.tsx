'use client';

import React from 'react';
import { Globe, Share2, Camera } from 'lucide-react';
import type { CreatorDetail } from '@/src/data/creatorDetailData';

interface Props {
  creator: CreatorDetail;
}

export function ProfileSummaryCard({ creator }: Props) {
  return (
    <div
      className="bg-white rounded-xl p-6"
      style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
    >
      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 12 }}>
        Profile Summary
      </h3>
      <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.7, marginBottom: 20 }}>
        {creator.profileSummary}
      </p>

      {/* Meta grid */}
      <div className="grid grid-cols-2 gap-y-5 gap-x-8">
        <div>
          <p style={{ fontSize: 11, fontWeight: 600, color: '#9CA3AF', marginBottom: 4 }}>Joined Date</p>
          <p style={{ fontSize: 13, fontWeight: 600, color: '#111827' }}>{creator.joinedDate}</p>
        </div>
        <div>
          <p style={{ fontSize: 11, fontWeight: 600, color: '#9CA3AF', marginBottom: 4 }}>Social Media</p>
          <div className="flex items-center gap-3">
            {creator.socialMedia.website && <Globe size={16} color="#6B7280" className="cursor-pointer hover:text-slate-900" />}
            {creator.socialMedia.share && <Share2 size={16} color="#6B7280" className="cursor-pointer hover:text-slate-900" />}
            {creator.socialMedia.instagram && <Camera size={16} color="#6B7280" className="cursor-pointer hover:text-slate-900" />}
          </div>
        </div>
        <div>
          <p style={{ fontSize: 11, fontWeight: 600, color: '#9CA3AF', marginBottom: 4 }}>Account Status</p>
          <p style={{ fontSize: 13, fontWeight: 600, color: '#16A34A' }}>{creator.accountStatus}</p>
        </div>
        <div>
          <p style={{ fontSize: 11, fontWeight: 600, color: '#9CA3AF', marginBottom: 4 }}>Top Category</p>
          <p style={{ fontSize: 13, fontWeight: 600, color: '#111827' }}>{creator.topCategory}</p>
        </div>
      </div>
    </div>
  );
}
