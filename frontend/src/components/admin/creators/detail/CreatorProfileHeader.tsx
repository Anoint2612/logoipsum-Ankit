'use client';

import React from 'react';
import { Mail, ShieldOff } from 'lucide-react';
import type { CreatorDetail } from '@/src/data/creatorDetailData';
import { getInitials, getAvatarColor } from '@/src/data/creatorsData';

interface Props {
  creator: CreatorDetail;
}

export function CreatorProfileHeader({ creator }: Props) {
  const initials = getInitials(creator.name);
  const avatarBg = getAvatarColor(creator.name);

  return (
    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
      <div className="flex items-center gap-4">
        {/* Avatar with online dot */}
        <div style={{ position: 'relative', width: 72, height: 72, flexShrink: 0 }}>
          <div
            style={{
              width: 72, height: 72, borderRadius: 12, background: avatarBg,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 22, fontWeight: 700, color: '#111827',
            }}
          >
            {initials}
          </div>
          {creator.status === 'Active' && (
            <div style={{
              position: 'absolute', bottom: -2, left: -2,
              width: 16, height: 16, borderRadius: '50%', background: '#22C55E',
              border: '3px solid white',
            }} />
          )}
        </div>

        <div>
          <div className="flex items-center gap-2.5">
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111827' }}>{creator.name}</h2>
            <span style={{
              fontSize: 10, fontWeight: 700, letterSpacing: '0.06em',
              textTransform: 'uppercase' as const,
              padding: '3px 10px', borderRadius: 4,
              background: creator.status === 'Active' ? '#16A34A' : '#F97316',
              color: 'white',
            }}>
              {creator.status}
            </span>
          </div>
          <p style={{ fontSize: 13, color: '#6B7280', marginTop: 2 }}>{creator.email}</p>
          <p style={{ fontSize: 12, color: '#9CA3AF', marginTop: 2 }}>
            ID: {creator.memberId} • Member since {creator.memberSince}
          </p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => console.log('Message creator:', creator.name)}
          className="flex items-center gap-2"
          style={{
            padding: '10px 20px', borderRadius: 8,
            background: '#111827', color: 'white',
            fontSize: 13, fontWeight: 600, border: 'none', cursor: 'pointer',
            transition: 'background 0.15s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = '#1F2937')}
          onMouseLeave={e => (e.currentTarget.style.background = '#111827')}
        >
          <Mail size={14} /> Message Creator
        </button>
        <button
          onClick={() => console.log('Suspend creator:', creator.name)}
          className="flex items-center gap-2"
          style={{
            padding: '10px 20px', borderRadius: 8,
            background: 'white', color: '#111827',
            fontSize: 13, fontWeight: 600, border: '1px solid #E5E7EB', cursor: 'pointer',
            transition: 'background 0.15s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = '#F9FAFB')}
          onMouseLeave={e => (e.currentTarget.style.background = 'white')}
        >
          <ShieldOff size={14} /> Suspend
        </button>
      </div>
    </div>
  );
}
