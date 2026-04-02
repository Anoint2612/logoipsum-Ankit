'use client';

import React from 'react';
import { Eye, Trash2, Heart, Flag, CheckCircle2 } from 'lucide-react';
import type { CreatorContent } from '@/src/data/creatorDetailData';

interface Props {
  contentItems: CreatorContent[];
}

export function CreatorContentTable({ contentItems }: Props) {
  return (
    <div className="bg-white rounded-xl detail-animate visible" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06)', animationDelay: '0.2s', paddingBottom: 24 }}>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 800 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #F3F4F6' }}>
              <th scope="col" style={headerStyle}>Content</th>
              <th scope="col" style={headerStyle}>Access</th>
              <th scope="col" style={headerStyle}>Engagement</th>
              <th scope="col" style={headerStyle}>Status</th>
              <th scope="col" style={headerStyle}>Date</th>
              <th scope="col" style={{ ...headerStyle, textAlign: 'right', paddingRight: 24 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contentItems.map((item, i) => (
              <tr
                key={item.id}
                style={{
                  borderBottom: i === contentItems.length - 1 ? 'none' : '1px solid #F3F4F6',
                  transition: 'background 0.15s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#F9FAFB')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                {/* Content */}
                <td style={{ padding: '16px 24px' }}>
                  <div className="flex items-center gap-4">
                    <div
                      style={{
                        width: 48,
                        height: 32,
                        borderRadius: 4,
                        background: item.thumbnailColor,
                        flexShrink: 0,
                        border: '1px solid #E5E7EB',
                      }}
                    />
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 600, color: '#111827', lineHeight: 1.2 }}>{item.title}</p>
                      <p style={{ fontSize: 11, color: '#6B7280', marginTop: 2 }}>{item.type}</p>
                    </div>
                  </div>
                </td>

                {/* Access */}
                <td style={{ padding: '16px 24px' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '4px 10px',
                      borderRadius: 12,
                      fontSize: 11,
                      fontWeight: 600,
                      background: item.access === 'Free' ? '#F3F4F6' : '#FEE2E2',
                      color: item.access === 'Free' ? '#4B5563' : '#B91C1C',
                    }}
                  >
                    {item.access}
                  </span>
                </td>

                {/* Engagement */}
                <td style={{ padding: '16px 24px' }}>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5" style={{ color: '#4B5563', fontSize: 12, fontWeight: 500 }}>
                      <Eye size={14} color="#9CA3AF" />
                      {item.views}
                    </div>
                    <div className="flex items-center gap-1.5" style={{ color: '#4B5563', fontSize: 12, fontWeight: 500 }}>
                      <Heart size={14} color="#9CA3AF" />
                      {item.likes}
                    </div>
                  </div>
                </td>

                {/* Status */}
                <td style={{ padding: '16px 24px' }}>
                  <div className="flex items-center gap-1.5">
                    {item.status === 'Active' ? (
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981' }} />
                    ) : (
                      <Flag size={12} color="#EF4444" />
                    )}
                    <span style={{ fontSize: 12, fontWeight: 500, color: item.status === 'Active' ? '#111827' : '#EF4444' }}>
                      {item.status}
                    </span>
                  </div>
                </td>

                {/* Date */}
                <td style={{ padding: '16px 24px', fontSize: 12, color: '#6B7280' }}>
                  {item.date}
                </td>

                {/* Actions */}
                <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                  <div className="flex items-center justify-end gap-3">
                    <button style={actionBtnStyle}>
                      <Eye size={16} color="#4B5563" />
                    </button>
                    <button style={actionBtnStyle}>
                      <Trash2 size={16} color="#EF4444" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Placeholder */}
      <div className="flex items-center justify-center gap-2 mt-6">
        <button style={pageBtnStyle}>&lt;</button>
        <button style={{ ...pageBtnStyle, background: '#111827', color: 'white', borderColor: '#111827' }}>1</button>
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
  fontWeight: 600,
  color: '#4B5563',
  textAlign: 'left',
  whiteSpace: 'nowrap',
};

const actionBtnStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const pageBtnStyle: React.CSSProperties = {
  width: 28,
  height: 28,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 12,
  fontWeight: 500,
  color: '#4B5563',
  background: 'white',
  border: 'none',
  borderRadius: 4,
  cursor: 'pointer',
};
