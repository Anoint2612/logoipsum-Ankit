'use client';

import React from 'react';
import { Eye, Edit2, Trash2 } from 'lucide-react';
import type { TeamMember } from '@/src/data/adminManagementData';
import { getAvatarColor, getInitials } from '@/src/data/creatorsData';

interface Props {
  members: TeamMember[];
  delay?: number;
}

export function AdminTable({ members, delay = 0 }: Props) {
  return (
    <div
      className="bg-white rounded-xl detail-animate visible"
      style={{
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
        animationDelay: `${delay}ms`,
        paddingBottom: 12
      }}
    >
      {/* Filters & Tools */}
      <div className="flex flex-col md:flex-row items-center justify-between p-6 border-b border-gray-100 gap-4">
        <div className="flex items-center gap-3">
          <select style={selectStyle}>
            <option>Role: All</option>
            <option>Super Admin</option>
            <option>Moderator</option>
            <option>Support</option>
            <option>Finance</option>
          </select>
          <select style={selectStyle}>
            <option>Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
        
        <div className="flex items-center gap-4">
          <span style={{ fontSize: 13, fontWeight: 500, color: '#6B7280' }}>Sort By</span>
          <div className="flex items-center gap-2">
            <button style={{ ...sortBtnStyle, color: '#111827', fontWeight: 600 }}>Last Active</button>
            <button style={sortBtnStyle}>Recently Added</button>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 900 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #F3F4F6' }}>
              <th scope="col" style={{ ...headerStyle, paddingLeft: 32 }}>Admin</th>
              <th scope="col" style={headerStyle}>Role</th>
              <th scope="col" style={headerStyle}>Status</th>
              <th scope="col" style={headerStyle}>Last Active</th>
              <th scope="col" style={headerStyle}>Added On</th>
              <th scope="col" style={{ ...headerStyle, textAlign: 'right', paddingRight: 32 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, i) => (
              <tr
                key={member.id}
                style={{
                  borderBottom: i === members.length - 1 ? 'none' : '1px solid #F3F4F6',
                  transition: 'background 0.15s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#F9FAFB')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <td style={{ padding: '20px 32px' }}>
                  <div className="flex items-center gap-4">
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 8, // slight variation to standard circle avatar matching figma boxy avatars usually
                        background: getAvatarColor(member.name),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 13,
                        fontWeight: 700,
                        color: 'white',
                      }}
                    >
                      {getInitials(member.name)}
                    </div>
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 700, color: '#111827', marginBottom: 2 }}>{member.name}</p>
                      <p style={{ fontSize: 11, color: '#9CA3AF' }}>{member.email}</p>
                    </div>
                  </div>
                </td>

                <td style={{ padding: '20px 24px' }}>
                  {member.role === 'Super Admin' ? (
                    <span style={{ display: 'inline-block', padding: '6px 12px', background: '#111827', color: 'white', fontSize: 11, fontWeight: 600, borderRadius: 999 }}>
                      Super Admin
                    </span>
                  ) : (
                    <span style={{ display: 'inline-block', padding: '6px 12px', background: 'white', color: '#111827', border: '1px solid #E5E7EB', fontSize: 11, fontWeight: 600, borderRadius: 999 }}>
                      {member.role}
                    </span>
                  )}
                </td>

                <td style={{ padding: '20px 24px' }}>
                  <div className="flex items-center gap-2">
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: member.status === 'Active' ? '#10B981' : '#9CA3AF' }} />
                    <span style={{ fontSize: 12, fontWeight: 700, color: '#111827' }}>{member.status}</span>
                  </div>
                </td>

                <td style={{ padding: '20px 24px', fontSize: 12, color: '#6B7280' }}>
                  {member.lastActive}
                </td>

                <td style={{ padding: '20px 24px', fontSize: 12, color: '#6B7280' }}>
                  {member.addedOn}
                </td>

                <td style={{ padding: '20px 32px', textAlign: 'right' }}>
                  <div className="flex items-center justify-end gap-2">
                    <button style={actionBtnContainerStyle}><Eye size={14} color="#4B5563" /></button>
                    <button style={actionBtnContainerStyle}><Edit2 size={14} color="#4B5563" /></button>
                    <button style={actionBtnContainerStyle}><Trash2 size={14} color="#4B5563" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const selectStyle: React.CSSProperties = {
  padding: '8px 32px 8px 16px',
  borderRadius: 8,
  border: '1px solid #E5E7EB',
  background: 'white',
  fontSize: 13,
  color: '#111827',
  fontWeight: 500,
  outline: 'none',
  cursor: 'pointer',
  appearance: 'none', // to manually do drops but here we rely on basic OS styling until a custom drop is built
};

const sortBtnStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  fontSize: 13,
  color: '#6B7280',
  fontWeight: 400,
  cursor: 'pointer',
  padding: '4px 8px',
};

const headerStyle: React.CSSProperties = {
  padding: '16px 24px',
  fontSize: 12,
  fontWeight: 600,
  color: '#4B5563',
  textAlign: 'left',
  whiteSpace: 'nowrap',
};

const actionBtnContainerStyle: React.CSSProperties = {
  width: 32,
  height: 32,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'white',
  border: '1px solid #E5E7EB',
  borderRadius: 6,
  cursor: 'pointer',
  transition: 'all 0.15s ease',
};
