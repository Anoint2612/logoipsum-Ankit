'use client';

import React from 'react';
import type { CreatorPayout } from '@/src/data/creatorDetailData';
import { formatIndianCurrency } from '@/src/data/creatorsData';

interface Props {
  payoutItems: CreatorPayout[];
}

export function CreatorPayoutsTable({ payoutItems }: Props) {
  return (
    <div className="bg-white rounded-xl detail-animate visible" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06)', animationDelay: '0.2s', paddingBottom: 24 }}>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 800 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #F3F4F6' }}>
              <th scope="col" style={headerStyle}>Payout ID</th>
              <th scope="col" style={headerStyle}>Amount</th>
              <th scope="col" style={headerStyle}>Status</th>
              <th scope="col" style={headerStyle}>Settlement Date</th>
              <th scope="col" style={headerStyle}>Method</th>
            </tr>
          </thead>
          <tbody>
            {payoutItems.map((item, i) => (
              <tr
                key={item.id}
                style={{
                  borderBottom: i === payoutItems.length - 1 ? 'none' : '1px solid #F3F4F6',
                  transition: 'background 0.15s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#F9FAFB')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                {/* Payout ID */}
                <td style={{ padding: '16px 24px', fontSize: 13, fontWeight: 700, color: '#111827' }}>
                  {item.payoutId}
                </td>

                {/* Amount */}
                <td style={{ padding: '16px 24px', fontSize: 13, fontWeight: 700, color: '#111827' }}>
                  {formatIndianCurrency(item.amount)}
                </td>

                {/* Status */}
                <td style={{ padding: '16px 24px' }}>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: item.status === 'Completed' ? '#10B981' : item.status === 'Failed' ? '#EF4444' : '#F59E0B',
                    }}
                  >
                    {item.status}
                  </span>
                </td>

                {/* Settlement Date */}
                <td style={{ padding: '16px 24px', fontSize: 12, color: '#6B7280' }}>
                  {item.settlementDate}
                </td>

                {/* Method */}
                <td style={{ padding: '16px 24px', fontSize: 12, color: '#6B7280' }}>
                  {item.method}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 mt-6">
        <button style={pageBtnStyle}>&lt;</button>
        <button style={{ ...pageBtnStyle, background: '#111827', color: 'white' }}>1</button>
        <button style={pageBtnStyle}>2</button>
        <button style={pageBtnStyle}>3</button>
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
  background: 'white',
  border: 'none',
  borderRadius: 4,
  cursor: 'pointer',
};
