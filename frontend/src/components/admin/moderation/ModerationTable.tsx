'use client';

import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import type { ReportedItem } from '@/src/data/moderationData';

interface Props {
  items: ReportedItem[];
  delay?: number;
}

type TabType = 'Reported Content' | 'Flagged Creators' | 'Violations';

export function ModerationTable({ items, delay = 0 }: Props) {
  const [activeTab, setActiveTab] = useState<TabType>('Reported Content');

  return (
    <div
      className="bg-white rounded-xl detail-animate visible"
      style={{
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        animationDelay: `${delay}ms`,
        paddingBottom: 24,
      }}
    >
      {/* Tabs Header */}
      <div style={{ padding: '0 24px', borderBottom: '1px solid #E5E7EB', display: 'flex', gap: 32 }}>
        {(['Reported Content', 'Flagged Creators', 'Violations'] as TabType[]).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              background: 'none',
              border: 'none',
              padding: '20px 0',
              fontSize: 13,
              fontWeight: 600,
              color: activeTab === tab ? '#111827' : '#6B7280',
              cursor: 'pointer',
              borderBottom: activeTab === tab ? '2px solid #111827' : '2px solid transparent',
              transition: 'all 0.15s ease',
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Filters Row */}
      <div className="flex items-end justify-between gap-4 p-6" style={{ borderBottom: '1px solid #E5E7EB' }}>
        <div className="flex gap-4 flex-wrap">
          <div className="flex flex-col gap-1.5">
            <label style={{ fontSize: 10, fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Severity
            </label>
            <select
              style={{
                width: 140,
                padding: '8px 12px',
                borderRadius: 6,
                border: '1px solid #E5E7EB',
                background: '#F9FAFB',
                fontSize: 13,
                color: '#111827',
                fontWeight: 500,
                outline: 'none',
                cursor: 'pointer',
              }}
            >
              <option>All Severities</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label style={{ fontSize: 10, fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Status
            </label>
            <select
              style={{
                width: 140,
                padding: '8px 12px',
                borderRadius: 6,
                border: '1px solid #E5E7EB',
                background: '#F9FAFB',
                fontSize: 13,
                color: '#111827',
                fontWeight: 500,
                outline: 'none',
                cursor: 'pointer',
              }}
            >
              <option>Pending</option>
              <option>Under Review</option>
              <option>Approved</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label style={{ fontSize: 10, fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Date Range
            </label>
            <input
              type="text"
              placeholder="mm/dd/yyyy"
              style={{
                width: 160,
                padding: '8px 12px',
                borderRadius: 6,
                border: '1px solid #E5E7EB',
                background: '#F9FAFB',
                fontSize: 13,
                color: '#111827',
                fontWeight: 500,
                outline: 'none',
              }}
            />
          </div>
        </div>

        <button
          style={{
            padding: '8px 12px',
            background: 'white',
            border: '1px solid #E5E7EB',
            borderRadius: 6,
            color: '#4B5563',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Filter size={18} />
        </button>
      </div>

      {/* Table */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 800 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #F3F4F6' }}>
              <th scope="col" style={headerStyle}>Thumbnail & Title</th>
              <th scope="col" style={headerStyle}>Creator</th>
              <th scope="col" style={headerStyle}>Reason</th>
              <th scope="col" style={{ ...headerStyle, textAlign: 'center' }}>Reports</th>
              <th scope="col" style={headerStyle}>Status</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr
                key={item.id}
                style={{
                  borderBottom: i === items.length - 1 ? 'none' : '1px solid #F3F4F6',
                  transition: 'background 0.15s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#F9FAFB')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                {/* Thumbnail & Title */}
                <td style={{ padding: '16px 24px' }}>
                  <div className="flex items-center gap-3">
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 6,
                        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', // Default gradient for thumbnail
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 700, color: '#111827', lineHeight: 1.2 }}>{item.title}</p>
                      <p style={{ fontSize: 11, color: '#9CA3AF', marginTop: 2 }}>ID: {item.itemId}</p>
                    </div>
                  </div>
                </td>

                {/* Creator */}
                <td style={{ padding: '16px 24px', fontSize: 13, color: '#4B5563' }}>
                  {item.creator}
                </td>

                {/* Reason */}
                <td style={{ padding: '16px 24px' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '3px 8px',
                      borderRadius: 4,
                      fontSize: 9,
                      fontWeight: 800,
                      letterSpacing: '0.04em',
                      background: '#FEE2E2',
                      color: '#DC2626',
                    }}
                  >
                    {item.reason}
                  </span>
                </td>

                {/* Reports */}
                <td style={{ padding: '16px 24px', textAlign: 'center', fontSize: 14, fontWeight: 700, color: '#111827' }}>
                  {item.reports}
                </td>

                {/* Status */}
                <td style={{ padding: '16px 24px' }}>
                  <div className="flex items-center gap-2">
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: item.status === 'Approved' ? '#10B981' : '#F59E0B',
                      }}
                    />
                    <span style={{ fontSize: 12, fontWeight: 500, color: '#4B5563' }}>
                      {item.status}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-1.5 mt-4">
        <button style={pageBtnStyle}>&lt;</button>
        <button style={{ ...pageBtnStyle, background: '#111827', color: 'white' }}>1</button>
        <button style={pageBtnStyle}>2</button>
        <button style={pageBtnStyle}>3</button>
        <span style={{ color: '#9CA3AF', margin: '0 4px', fontSize: 12 }}>...</span>
        <button style={pageBtnStyle}>12</button>
        <button style={pageBtnStyle}>&gt;</button>
      </div>
    </div>
  );
}

const headerStyle: React.CSSProperties = {
  padding: '16px 24px',
  fontSize: 12,
  fontWeight: 700,
  color: '#111827',
  textAlign: 'left',
  whiteSpace: 'nowrap',
};

const pageBtnStyle: React.CSSProperties = {
  width: 28,
  height: 28,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 12,
  fontWeight: 600,
  color: '#4B5563',
  background: 'transparent',
  border: 'none',
  borderRadius: 4,
  cursor: 'pointer',
};
