'use client';

import React from 'react';
import { Star, Upload, Wallet, Pencil } from 'lucide-react';
import type { ActivityItem } from '@/src/data/creatorDetailData';

interface Props {
  items: ActivityItem[];
}

const ICON_MAP: Record<ActivityItem['icon'], { Icon: typeof Star; bg: string; color: string }> = {
  star:    { Icon: Star,   bg: '#EFF6FF', color: '#3B82F6' },
  content: { Icon: Upload, bg: '#F0FDF4', color: '#22C55E' },
  payout:  { Icon: Wallet, bg: '#FDF2F8', color: '#EC4899' },
  edit:    { Icon: Pencil, bg: '#F5F3FF', color: '#8B5CF6' },
};

export function RecentActivityCard({ items }: Props) {
  return (
    <div
      className="bg-white rounded-xl p-6"
      style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
    >
      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 20 }}>
        Recent Activity
      </h3>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div
          style={{
            position: 'absolute', left: 19, top: 10, bottom: 10,
            width: 2, background: '#E5E7EB',
          }}
        />

        <div className="space-y-6">
          {items.map((item, i) => {
            const { Icon, bg, color } = ICON_MAP[item.icon];
            return (
              <div key={i} className="flex items-start gap-4 relative">
                <div
                  style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: bg, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', flexShrink: 0, zIndex: 1,
                  }}
                >
                  <Icon size={16} color={color} />
                </div>
                <div style={{ flex: 1, paddingTop: 2 }}>
                  <p style={{ fontSize: 14, fontWeight: 600, color: '#111827', lineHeight: 1.3 }}>
                    {item.title}
                  </p>
                  <p style={{ fontSize: 12, color: '#9CA3AF', marginTop: 2, lineHeight: 1.4 }}>
                    {item.description}
                  </p>
                  <p style={{ fontSize: 10, fontWeight: 700, color: '#9CA3AF', marginTop: 4, letterSpacing: '0.04em' }}>
                    {item.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* View full timeline button */}
      <button
        onClick={() => console.log('View Full Timeline clicked')}
        className="w-full mt-6 py-3 border border-[#E5E7EB] rounded-lg text-center cursor-pointer hover:bg-[#F9FAFB] transition-colors"
        style={{ fontSize: 11, fontWeight: 700, color: '#6B7280', background: 'white', letterSpacing: '0.08em', textTransform: 'uppercase' as const }}
      >
        View Full Timeline
      </button>
    </div>
  );
}
