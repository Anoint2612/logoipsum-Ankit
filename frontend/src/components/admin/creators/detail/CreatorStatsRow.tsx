'use client';

import React from 'react';
import { TrendingUp } from 'lucide-react';
import type { CreatorDetail } from '@/src/data/creatorDetailData';
import { formatIndianCurrency } from '@/src/data/creatorsData';

interface Props {
  creator: CreatorDetail;
}

export function CreatorStatsRow({ creator }: Props) {
  const stats = [
    {
      label: 'Total Earnings',
      value: formatIndianCurrency(creator.totalEarnings),
      sub: null,
      badge: null,
      highlight: null,
    },
    {
      label: 'Subscribers',
      value: creator.subscribers,
      sub: null,
      badge: creator.subscriberGrowth,
      highlight: null,
    },
    {
      label: 'Content Count',
      value: creator.contentCount.toString(),
      sub: `${creator.uploadsThisMonth} uploads this month`,
      badge: null,
      highlight: null,
    },
    {
      label: 'Monthly Growth',
      value: creator.monthlyGrowth,
      sub: null,
      badge: null,
      highlight: creator.growthLabel,
    },
  ];

  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-5">
      {stats.map((s, i) => (
        <div
          key={i}
          className="bg-white rounded-xl p-5"
          style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06)', transition: 'box-shadow 0.2s ease' }}
          onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 3px 12px rgba(0,0,0,0.10)')}
          onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)')}
        >
          <p style={{ fontSize: 12, fontWeight: 500, color: '#6B7280', marginBottom: 6 }}>{s.label}</p>
          <div className="flex items-center gap-2">
            <span style={{ fontSize: 24, fontWeight: 700, color: '#111827' }}>{s.value}</span>
            {s.badge && (
              <span style={{ fontSize: 12, fontWeight: 600, color: '#16A34A' }}>{s.badge}</span>
            )}
          </div>
          {s.sub && (
            <p style={{ fontSize: 11, color: '#9CA3AF', marginTop: 4 }}>{s.sub}</p>
          )}
          {s.highlight && (
            <div className="flex items-center gap-1 mt-2">
              <span style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '0.06em',
                color: s.highlight === 'OUTPERFORMING PEERS' ? '#16A34A' : s.highlight === 'STEADY GROWTH' ? '#3B82F6' : '#F97316',
              }}>
                {s.highlight}
              </span>
              <TrendingUp size={14} color={s.highlight === 'OUTPERFORMING PEERS' ? '#16A34A' : s.highlight === 'STEADY GROWTH' ? '#3B82F6' : '#F97316'} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
