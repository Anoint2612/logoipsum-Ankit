'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { StatCard } from './StatCard';
import type { DualChartDataPoint } from '@/src/data/creatorsData';

interface DualLineChartCardProps {
  label: string;
  value: string;
  badge: string;
  badgeType?: 'positive' | 'negative';
  description: string;
  subDescription: string;
  chartData: DualChartDataPoint[];
  delay?: number;
}

export function DualLineChartCard({ label, value, badge, badgeType, description, subDescription, chartData, delay }: DualLineChartCardProps) {
  return (
    <StatCard label={label} value={value} badge={badge} badgeType={badgeType} description={description} subDescription={subDescription} delay={delay}>
      <div>
        {/* In-card legend */}
        <div className="flex items-center gap-5 mb-3">
          <span style={{ fontSize: 9, fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.06em', textTransform: 'uppercase' }}>CHART TEXT</span>
          <div className="flex items-center gap-1.5">
            <div style={{ width: 14, height: 2, background: '#A78BFA', borderRadius: 2 }} />
            <span style={{ fontSize: 9, fontWeight: 600, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.04em' }}>No of Users</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div style={{ width: 14, height: 2, background: '#6366F1', borderRadius: 2 }} />
            <span style={{ fontSize: 9, fontWeight: 600, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.04em' }}>No of Creators</span>
          </div>
        </div>

        <div style={{ height: 160 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
              <XAxis dataKey="name" tick={{ fontSize: 9, fill: '#9CA3AF' }} tickLine={false} axisLine={false} />
              <YAxis
                tick={{ fontSize: 9, fill: '#9CA3AF' }} tickLine={false} axisLine={false}
                domain={[0, 100]}
              />
              <Line type="monotone" dataKey="users" stroke="#A78BFA" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="creators" stroke="#6366F1" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </StatCard>
  );
}
