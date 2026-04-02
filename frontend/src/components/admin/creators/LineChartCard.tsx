'use client';

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { StatCard } from './StatCard';
import type { ChartDataPoint } from '@/src/data/creatorsData';

interface LineChartCardProps {
  label: string;
  value?: string;
  badge?: string;
  badgeType?: 'positive' | 'negative';
  description: string;
  subDescription: string;
  chartData: ChartDataPoint[];
  delay?: number;
}

export function LineChartCard({ label, value, badge, badgeType, description, subDescription, chartData, delay }: LineChartCardProps) {
  return (
    <StatCard label={label} value={value} badge={badge} badgeType={badgeType} description={description} subDescription={subDescription} delay={delay}>
      <div style={{ height: 180 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="lineGradientPink" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FB7185" stopOpacity={0.15} />
                <stop offset="100%" stopColor="#FB7185" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#9CA3AF' }} tickLine={false} axisLine={false} />
            <YAxis
              tick={{ fontSize: 10, fill: '#9CA3AF' }} tickLine={false} axisLine={false}
              tickFormatter={(v: number) => `${v}%`}
              ticks={[0, 20, 40, 60, 80, 100]}
              domain={[0, 100]}
            />
            <Area
              type="linear"
              dataKey="val"
              stroke="#FB7185"
              strokeWidth={2}
              fill="url(#lineGradientPink)"
              dot={{ r: 3, fill: '#FB7185', stroke: '#FB7185', strokeWidth: 1 }}
              activeDot={{ r: 5, fill: '#FB7185' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </StatCard>
  );
}
