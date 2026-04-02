'use client';

import React from 'react';
import { Filter, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import type { TransactionListItem } from '@/src/data/revenueData';
import { formatIndianCurrency, getInitials, getAvatarColor } from '@/src/data/creatorsData';

interface Props {
  transactions: TransactionListItem[];
  delay?: number;
}

export function TransactionsTable({ transactions, delay = 0 }: Props) {
  return (
    <div
      className="bg-white rounded-xl p-6"
      style={{
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        animation: `cardFadeUp 0.6s ease-out ${delay}ms both`,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 style={{ fontSize: 13, fontWeight: 700, color: '#111827' }}>Transactions</h3>
        <div className="flex items-center gap-2">
          <button
            style={{
              padding: '6px 12px',
              background: 'white',
              border: '1px solid #E5E7EB',
              borderRadius: 6,
              fontSize: 10,
              fontWeight: 700,
              color: '#4B5563',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <Filter size={12} /> Filter
          </button>
          <button
            style={{
              padding: '6px 12px',
              background: 'white',
              border: '1px solid #E5E7EB',
              borderRadius: 6,
              fontSize: 10,
              fontWeight: 700,
              color: '#4B5563',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <Download size={12} /> Export
          </button>
        </div>
      </div>

      {/* Table */}
      <div style={{ overflowX: 'auto', margin: '0 -24px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 900 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #F3F4F6' }}>
              <th scope="col" style={{ ...headerStyle, paddingLeft: 24 }}>Transaction ID</th>
              <th scope="col" style={headerStyle}>User</th>
              <th scope="col" style={headerStyle}>Creator</th>
              <th scope="col" style={headerStyle}>Amount</th>
              <th scope="col" style={headerStyle}>Type</th>
              <th scope="col" style={headerStyle}>Status</th>
              <th scope="col" style={{ ...headerStyle, paddingRight: 24 }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((item, i) => (
              <tr
                key={item.id}
                style={{
                  borderBottom: i === transactions.length - 1 ? 'none' : '1px solid #F3F4F6',
                  transition: 'background 0.15s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#F9FAFB')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <td style={{ padding: '16px 24px', fontSize: 12, fontWeight: 700, color: '#111827' }}>
                  {item.transactionId}
                </td>
                
                {/* User Column */}
                <td style={{ padding: '16px 24px' }}>
                  <div className="flex items-center gap-2">
                    <UserAvatar name={item.user.name} />
                    <span style={{ fontSize: 11, fontWeight: 600, color: '#4B5563' }}>{item.user.name}</span>
                  </div>
                </td>

                {/* Creator Column */}
                <td style={{ padding: '16px 24px' }}>
                  <div className="flex items-center gap-2">
                    <UserAvatar name={item.creator.name} />
                    <span style={{ fontSize: 11, fontWeight: 600, color: '#4B5563' }}>{item.creator.name}</span>
                  </div>
                </td>

                <td style={{ padding: '16px 24px', fontSize: 12, fontWeight: 700, color: '#111827' }}>
                  {formatIndianCurrency(item.amount)}
                </td>

                <td style={{ padding: '16px 24px' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '4px 10px',
                      borderRadius: 12,
                      fontSize: 10,
                      fontWeight: 600,
                      background: item.type === 'Subscription' ? '#F3F4F6' : '#FFF7ED',
                      color: item.type === 'Subscription' ? '#4B5563' : '#EA580C',
                    }}
                  >
                    {item.type}
                  </span>
                </td>

                <td style={{ padding: '16px 24px' }}>
                  <div className="flex items-center gap-1.5">
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: item.status === 'Completed' ? '#10B981' : '#F59E0B' }} />
                    <span style={{ fontSize: 10, fontWeight: 700, color: item.status === 'Completed' ? '#10B981' : '#F59E0B' }}>
                      {item.status}
                    </span>
                  </div>
                </td>

                <td style={{ padding: '16px 24px', fontSize: 11, color: '#6B7280' }}>
                  {item.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
        <span style={{ fontSize: 11, color: '#9CA3AF' }}>Showing 10 of 129 transactions</span>
        <div className="flex items-center gap-2">
          <button style={actionBtnStyle}><ChevronLeft size={14} /></button>
          <button style={actionBtnStyle}><ChevronRight size={14} /></button>
        </div>
      </div>
    </div>
  );
}

const headerStyle: React.CSSProperties = {
  padding: '12px 24px',
  fontSize: 11,
  fontWeight: 700,
  color: '#111827',
  textAlign: 'left',
  whiteSpace: 'nowrap',
};

const actionBtnStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  color: '#6B7280',
  cursor: 'pointer',
  padding: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

function UserAvatar({ name }: { name: string }) {
  return (
    <div
      style={{
        width: 24,
        height: 24,
        borderRadius: '50%',
        background: getAvatarColor(name),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 10,
        fontWeight: 700,
        color: 'white',
      }}
    >
      {getInitials(name)}
    </div>
  );
}
