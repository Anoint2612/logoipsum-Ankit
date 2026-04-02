'use client';

import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';
import type { ChartDataPoint } from '@/src/data/revenueData';

interface Props {
  label: string;
  value: string;
  badge: string;
  badgeType?: 'positive' | 'negative';
  variant: 'line' | 'bar';
  chartData: ChartDataPoint[];
  primaryColor: string;
  footerText: string;
  footerTrend: 'positive' | 'negative';
  delay?: number;
}

export function RevenueStatCard({ label, value, badge, badgeType = 'positive', variant, chartData, primaryColor, footerText, footerTrend, delay = 0 }: Props) {
  return (
    <div
      className="bg-white rounded-xl p-6 flex flex-col justify-between"
      style={{
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        height: '100%',
        animation: `cardFadeUp 0.6s ease-out ${delay}ms both`,
      }}
    >
      <div>
        <h3 style={{ fontSize: 13, fontWeight: 700, color: '#6B7280', marginBottom: 8 }}>{label}</h3>
        <div className="flex items-center gap-3 mb-6">
          <p style={{ fontSize: 24, fontWeight: 800, color: '#111827', letterSpacing: '-0.02em' }}>{value}</p>
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              padding: '2px 8px',
              borderRadius: 6,
              background: badgeType === 'positive' ? '#DCFCE7' : '#FEE2E2',
              color: badgeType === 'positive' ? '#16A34A' : '#DC2626',
            }}
          >
            {badge}
          </span>
        </div>
      </div>

      <div style={{ height: 160, width: '100%', marginLeft: -10 }}>
        <ResponsiveContainer width="100%" height="100%">
          {variant === 'line' ? (
            <LineChart data={chartData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
              <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#9CA3AF' }} tickLine={false} axisLine={false} />
              <YAxis
                tick={{ fontSize: 10, fill: '#9CA3AF' }} tickLine={false} axisLine={false}
                tickFormatter={(v: number) => `${v}%`}
                ticks={[0, 20, 40, 60, 80, 100]}
                domain={[0, 100]}
              />
              <Tooltip
                contentStyle={{ borderRadius: 8, border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                itemStyle={{ color: '#111827', fontWeight: 600 }}
              />
              <Line type="linear" dataKey="val" stroke={primaryColor} strokeWidth={2} dot={{ r: 4, fill: '#EF4444', strokeWidth: 0 }} activeDot={{ r: 6 }} />
            </LineChart>
          ) : (
            <BarChart data={chartData} barSize={16} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
              <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#9CA3AF' }} tickLine={false} axisLine={false} />
              <YAxis
                tick={{ fontSize: 10, fill: '#9CA3AF' }} tickLine={false} axisLine={false}
                tickFormatter={(v: number) => `${v}%`}
                ticks={[0, 20, 40, 60, 80, 100]}
                domain={[0, 100]}
              />
              <Tooltip
                cursor={{ fill: 'rgba(0,0,0,0.04)' }}
                contentStyle={{ borderRadius: 8, border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                itemStyle={{ color: '#111827', fontWeight: 600 }}
              />
              <Bar dataKey="val" fill={primaryColor} radius={[3, 3, 0, 0]} />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>

      <div className="flex items-center gap-2 mt-4 pt-4" style={{ borderTop: '1px solid #F3F4F6' }}>
        {footerTrend === 'positive' ? (
          <TrendingUp size={16} color="#10B981" />
        ) : (
          <TrendingDown size={16} color="#EF4444" />
        )}
        <span
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: footerTrend === 'positive' ? '#10B981' : '#EF4444'
          }}
        >
          {footerText}
        </span>
      </div>
    </div>
  );
}
