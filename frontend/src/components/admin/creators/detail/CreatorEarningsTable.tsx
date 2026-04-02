'use client';

import React from 'react';
import type { CreatorEarnings } from '@/src/data/creatorDetailData';
import { formatIndianCurrency } from '@/src/data/creatorsData';

interface Props {
  earningsItems: CreatorEarnings[];
}

export function CreatorEarningsTable({ earningsItems }: Props) {
  return (
    <div className="bg-white rounded-xl detail-animate visible" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06)', animationDelay: '0.2s', paddingBottom: 24 }}>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 800 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #F3F4F6' }}>
              <th scope="col" style={headerStyle}>Transaction ID</th>
              <th scope="col" style={headerStyle}>Type</th>
              <th scope="col" style={headerStyle}>Amount</th>
              <th scope="col" style={headerStyle}>Status</th>
              <th scope="col" style={headerStyle}>Date</th>
            </tr>
          </thead>
          <tbody>
            {earningsItems.map((item, i) => (
              <tr
                key={item.id}
                style={{
                  borderBottom: i === earningsItems.length - 1 ? 'none' : '1px solid #F3F4F6',
                  transition: 'background 0.15s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#F9FAFB')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                {/* Transaction ID */}
                <td style={{ padding: '16px 24px', fontSize: 13, fontWeight: 700, color: '#111827' }}>
                  {item.transactionId}
                </td>

                {/* Type */}
                <td style={{ padding: '16px 24px' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '4px 12px',
                      borderRadius: 12,
                      fontSize: 11,
                      fontWeight: 600,
                      background: item.type === 'Subscription' ? '#EEF2FF' : '#F3F4F6',
                      color: item.type === 'Subscription' ? '#4F46E5' : '#6B7280',
                    }}
                  >
                    {item.type}
                  </span>
                </td>

                {/* Amount */}
                <td style={{ padding: '16px 24px', fontSize: 13, fontWeight: 700, color: '#111827' }}>
                  {formatIndianCurrency(item.amount)}
                </td>

                {/* Status */}
                <td style={{ padding: '16px 24px' }}>
                  <div className="flex items-center gap-1.5">
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: item.status === 'Completed' ? '#10B981' : '#F59E0B',
                      }}
                    />
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: item.status === 'Completed' ? '#10B981' : '#F59E0B',
                      }}
                    >
                      {item.status}
                    </span>
                  </div>
                </td>

                {/* Date */}
                <td style={{ padding: '16px 24px', fontSize: 12, color: '#6B7280' }}>
                  {item.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const headerStyle: React.CSSProperties = {
  padding: '16px 24px',
  fontSize: 12,
  fontWeight: 600,
  color: '#111827',
  textAlign: 'left',
  whiteSpace: 'nowrap',
};
