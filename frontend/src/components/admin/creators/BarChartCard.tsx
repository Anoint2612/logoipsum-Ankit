'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { StatCard } from './StatCard';
import type { ChartDataPoint } from '@/src/data/creatorsData';

interface BarChartCardProps {
  label: string;
  value: string;
  badge: string;
  badgeType?: 'positive' | 'negative';
  description: string;
  subDescription: string;
  chartData: ChartDataPoint[];
  barColor: string;
  delay?: number;
}

export function BarChartCard({ label, value, badge, badgeType, description, subDescription, chartData, barColor, delay }: BarChartCardProps) {
  return (
    <StatCard label={label} value={value} badge={badge} badgeType={badgeType} description={description} subDescription={subDescription} delay={delay}>
      <div style={{ height: 180 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} barSize={18} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#9CA3AF' }} tickLine={false} axisLine={false} />
            <YAxis
              tick={{ fontSize: 10, fill: '#9CA3AF' }} tickLine={false} axisLine={false}
              tickFormatter={(v: number) => `${v}%`}
              ticks={[0, 20, 40, 60, 80, 100]}
              domain={[0, 100]}
            />
            <Bar dataKey="val" fill={barColor} radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </StatCard>
  );
}
