'use client';

import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from 'recharts';
import type { ContentPerformancePoint } from '@/src/data/creatorDetailData';

interface Props {
  data: ContentPerformancePoint[];
}

export function ContentPerformanceCard({ data }: Props) {
  return (
    <div
      className="bg-white rounded-xl p-6 mt-4"
      style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
    >
      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 16 }}>
        Content Performance
      </h3>

      <div style={{ height: 200 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={4} margin={{ top: 5, right: 5, left: 5, bottom: 0 }}>
            <XAxis
              dataKey="name"
              tick={{ fontSize: 11, fill: '#9CA3AF', fontWeight: 500 }}
              tickLine={false}
              axisLine={false}
            />
            <Bar dataKey="views" barSize={24} radius={[3, 3, 0, 0]}>
              {data.map((_, i) => (
                <Cell key={`views-${i}`} fill={i >= 4 ? '#111827' : '#D1D5DB'} />
              ))}
            </Bar>
            <Bar dataKey="engagement" barSize={24} radius={[3, 3, 0, 0]}>
              {data.map((_, i) => (
                <Cell key={`eng-${i}`} fill={i >= 4 ? '#374151' : '#9CA3AF'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
