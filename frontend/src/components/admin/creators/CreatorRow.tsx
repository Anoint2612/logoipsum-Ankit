'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, Ban, MoreVertical, CheckCircle2 } from 'lucide-react';
import type { Creator } from '@/src/data/creatorsData';
import { getInitials, getAvatarColor, formatIndianCurrency } from '@/src/data/creatorsData';

interface CreatorRowProps {
  creator: Creator;
  delay?: number;
}

export function CreatorRow({ creator, delay = 0 }: CreatorRowProps) {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const goToDetail = () => router.push(`/admin/creators/${creator.id}`);

  React.useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50 + delay);
    return () => clearTimeout(t);
  }, [delay]);

  const initials = getInitials(creator.name);
  const avatarBg = getAvatarColor(creator.name);

  return (
    <tr
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setMenuOpen(false); }}
      style={{
        background: hovered ? '#F9FAFB' : 'transparent',
        transition: 'background 0.15s ease',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(6px)',
        // @ts-ignore – CSS transition on tr
        transitionProperty: visible ? 'opacity, transform, background' : 'opacity, transform',
        transitionDuration: '0.35s',
      }}
    >
      {/* Creator */}
      <td style={{ padding: '14px 16px' }}>
        <div className="flex items-center gap-3">
          <div
            style={{
              width: 36, height: 36, borderRadius: '50%', background: avatarBg,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 12, fontWeight: 700, color: '#111827', flexShrink: 0,
            }}
          >
            {initials}
          </div>
          <div>
            <p onClick={goToDetail} style={{ fontSize: 14, fontWeight: 600, color: '#111827', lineHeight: 1.2, cursor: 'pointer' }} onMouseEnter={e => (e.currentTarget.style.color = '#3B82F6')} onMouseLeave={e => (e.currentTarget.style.color = '#111827')}>{creator.name}</p>
            <p style={{ fontSize: 12, color: '#9CA3AF', lineHeight: 1.2, marginTop: 1 }}>{creator.email}</p>
          </div>
        </div>
      </td>

      {/* Status */}
      <td style={{ padding: '14px 16px' }}>
        <div className="flex items-center gap-1.5" aria-label={`Status: ${creator.status}`}>
          <div style={{
            width: 6, height: 6, borderRadius: '50%',
            background: creator.status === 'Active' ? '#16A34A' : '#F97316',
          }} />
          <span style={{
            fontSize: 13, fontWeight: 500,
            color: creator.status === 'Active' ? '#16A34A' : '#F97316',
          }}>
            {creator.status}
          </span>
        </div>
      </td>

      {/* Verification */}
      <td style={{ padding: '14px 16px', textAlign: 'center' }}>
        <CheckCircle2 size={18} color={creator.verified ? '#9CA3AF' : '#E5E7EB'} aria-label={creator.verified ? 'Verified' : 'Not verified'} />
      </td>

      {/* Revenue */}
      <td style={{ padding: '14px 16px', fontSize: 13, fontWeight: 600, color: '#111827' }}>
        {formatIndianCurrency(creator.revenue)}
      </td>

      {/* Subscribers */}
      <td style={{ padding: '14px 16px', fontSize: 13, fontWeight: 500, color: '#111827' }}>
        {creator.subscribers}
      </td>

      {/* Content */}
      <td style={{ padding: '14px 16px', fontSize: 13, fontWeight: 500, color: '#111827' }}>
        {creator.content}
      </td>

      {/* Date */}
      <td style={{ padding: '14px 16px', fontSize: 12, color: '#9CA3AF', whiteSpace: 'nowrap' }}>
        {creator.date}
      </td>

      {/* Actions */}
      <td style={{ padding: '14px 16px', position: 'relative' }}>
        <div
          className="flex items-center gap-1"
          style={{ opacity: hovered ? 1 : 0, transition: 'opacity 0.15s ease' }}
        >
          <button aria-label="View creator" style={actionBtnStyle} onClick={goToDetail}><Eye size={15} color="#6B7280" /></button>
          <button aria-label="Block creator" style={actionBtnStyle}><Ban size={15} color="#6B7280" /></button>
          <button
            aria-label="More actions"
            style={actionBtnStyle}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MoreVertical size={15} color="#6B7280" />
          </button>

          {menuOpen && (
            <div
              style={{
                position: 'absolute', right: 16, top: 48, zIndex: 50,
                background: 'white', border: '1px solid #E5E7EB', borderRadius: 8,
                boxShadow: '0 4px 16px rgba(0,0,0,0.10)', minWidth: 140, overflow: 'hidden',
              }}
            >
              {['View Profile', 'Edit', 'Suspend', 'Delete'].map((item) => (
                <button
                  key={item}
                  style={{
                    display: 'block', width: '100%', textAlign: 'left',
                    padding: '8px 14px', fontSize: 12, fontWeight: 500,
                    color: item === 'Delete' ? '#DC2626' : '#111827',
                    background: 'transparent', border: 'none', cursor: 'pointer',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#F9FAFB')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                  onClick={() => { if (item === 'View Profile') { goToDetail(); } else { console.log(`${item} clicked for ${creator.name}`); } setMenuOpen(false); }}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </td>
    </tr>
  );
}

const actionBtnStyle: React.CSSProperties = {
  width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center',
  border: 'none', background: 'transparent', cursor: 'pointer', borderRadius: 6,
};
