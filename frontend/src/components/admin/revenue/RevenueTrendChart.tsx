'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { TrendingUp } from 'lucide-react';
import type { ChartDataPoint } from '@/src/data/revenueData';

interface Props {
  data: ChartDataPoint[];
  delay?: number;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: '#111827', padding: '6px 12px', borderRadius: 4, color: 'white', fontSize: 11, fontWeight: 700 }}>
        {label}: ₹ {(payload[0].value * 1000).toLocaleString()}
      </div>
    );
  }
  return null;
};

export function RevenueTrendChart({ data, delay = 0 }: Props) {
  return (
    <div
      className="bg-white rounded-xl p-6"
      style={{
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        animation: `cardFadeUp 0.6s ease-out ${delay}ms both`,
      }}
    >
      <div className="mb-6">
        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 4 }}>Revenue Trend</h3>
        <p style={{ fontSize: 13, color: '#6B7280' }}>Growth trajectory over the last 6 months</p>
      </div>

      <div style={{ height: 260, width: '100%', marginLeft: -10 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#9CA3AF' }} tickLine={false} axisLine={false} />
            <YAxis
              tick={{ fontSize: 10, fill: '#9CA3AF' }} tickLine={false} axisLine={false}
              tickFormatter={(v: number) => `${v}%`}
              ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
              domain={[0, 100]}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#E5E7EB', strokeWidth: 1, strokeDasharray: '4 4' }} />
            <Line
              type="linear"
              dataKey="val"
              stroke="#FCA5A5" // Light pink
              strokeWidth={2}
              dot={{ r: 4, fill: '#EF4444', strokeWidth: 0 }}
              activeDot={{ r: 6, fill: '#EF4444', strokeWidth: 0 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center gap-2 mt-4 pt-4" style={{ borderTop: '1px solid #F3F4F6' }}>
        <TrendingUp size={16} color="#10B981" />
        <span style={{ fontSize: 12, fontWeight: 700, color: '#10B981' }}>+12.4% vs last month</span>
      </div>
    </div>
  );
}
