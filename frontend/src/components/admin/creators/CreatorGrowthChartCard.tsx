'use client';

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';
import type { CreatorGrowthDataPoint } from '@/src/data/creatorsData';

interface Props {
  data: CreatorGrowthDataPoint[];
  delay?: number;
}

export function CreatorGrowthChartCard({ data, delay = 0 }: Props) {
  const [period, setPeriod] = useState<'monthly' | 'weekly'>('monthly');

  return (
    <div
      className="bg-white rounded-xl p-6"
      style={{
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        height: '100%',
        animation: `cardFadeUp 0.6s ease-out ${delay}ms both`,
      }}
    >
      <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
        <div className="flex items-center gap-3">
          <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827' }}>Creator Growth</h3>
          <span style={{ fontSize: 11, fontWeight: 700, background: '#DCFCE7', color: '#16A34A', padding: '3px 10px', borderRadius: 6, letterSpacing: '0.04em' }}>
            Traffic
          </span>
        </div>
        <div className="flex rounded-lg overflow-hidden border border-[#E5E7EB]">
          <button
            onClick={() => setPeriod('monthly')}
            style={{
              fontSize: 10,
              fontWeight: 700,
              padding: '6px 14px',
              background: period === 'monthly' ? '#111827' : 'white',
              color: period === 'monthly' ? 'white' : '#6B7280',
              border: 'none',
              cursor: 'pointer',
              letterSpacing: '0.06em',
              textTransform: 'uppercase' as const,
              transition: 'all 0.15s ease',
            }}
          >
            Monthly
          </button>
          <button
            onClick={() => setPeriod('weekly')}
            style={{
              fontSize: 10,
              fontWeight: 700,
              padding: '6px 14px',
              background: period === 'weekly' ? '#111827' : 'white',
              color: period === 'weekly' ? 'white' : '#6B7280',
              border: 'none',
              borderLeft: '1px solid #E5E7EB',
              cursor: 'pointer',
              letterSpacing: '0.06em',
              textTransform: 'uppercase' as const,
              transition: 'all 0.15s ease',
            }}
          >
            Weekly
          </button>
        </div>
      </div>

      <div style={{ height: 260 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={16} barGap={4} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#9CA3AF' }} tickLine={false} axisLine={false} />
            <YAxis
              tick={{ fontSize: 10, fill: '#9CA3AF' }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v: number) => `${v}%`}
              ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
              domain={[0, 100]}
            />
            {/* The grey bars */}
            <Bar dataKey="free" radius={[3, 3, 0, 0]}>
              {data.map((_, i) => (
                <Cell key={`free-${i}`} fill="#E5E7EB" />
              ))}
            </Bar>
            {/* The black bars */}
            <Bar dataKey="paid" radius={[3, 3, 0, 0]}>
              {data.map((_, i) => (
                <Cell key={`paid-${i}`} fill="#111827" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
