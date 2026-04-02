'use client';

import React from 'react';
import { Eye, Trash2, X, Zap } from 'lucide-react';
import type { ModerationPreviewData } from '@/src/data/moderationData';
import { getAvatarColor, getInitials } from '@/src/data/creatorsData';

interface Props {
  data: ModerationPreviewData;
  delay?: number;
}

export function ContentPreviewCard({ data, delay = 0 }: Props) {
  const avatarBg = getAvatarColor(data.creatorName);
  const initials = getInitials(data.creatorName);

  return (
    <div
      className="bg-white rounded-xl p-6 detail-animate visible"
      style={{
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        animationDelay: `${delay}ms`,
      }}
    >
      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 16 }}>
        Content Preview
      </h3>

      {/* Image Placeholder */}
      <div
        style={{
          width: '100%',
          height: 240,
          borderRadius: 8,
          background: 'linear-gradient(135deg, #e0e7ff 0%, #d1fae5 100%)',
          marginBottom: 20,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Simulating the palm leaf design with basic CSS shapes */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 120, height: 120, background: '#10B981', borderRadius: '50%', opacity: 0.2, filter: 'blur(10px)' }} />
      </div>

      <div className="flex flex-col gap-4">
        {/* Title and Meta */}
        <div>
          <h4 style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 4 }}>{data.title}</h4>
          <p style={{ fontSize: 12, color: '#6B7280' }}>Uploaded {data.uploadedAt} • {data.fileSize} • {data.fileType}</p>
        </div>

        {/* Creator and Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ borderTop: '1px solid #F3F4F6', borderBottom: '1px solid #F3F4F6', padding: '16px 0' }}>
          
          {/* Creator Profile snippet */}
          <div className="flex items-center gap-3">
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: avatarBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 14,
                fontWeight: 600,
                color: 'white',
              }}
            >
              {initials}
            </div>
            <div>
              <p style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>{data.creatorName}</p>
              <p style={{ fontSize: 12, color: '#6B7280' }}>{data.creatorTier}</p>
            </div>
          </div>

          {/* Stats List */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span style={{ fontSize: 12, color: '#6B7280', fontWeight: 500 }}>Trust Score</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: '#EF4444' }}>{data.trustScore}</span>
            </div>
            <div className="flex justify-between items-center">
              <span style={{ fontSize: 12, color: '#6B7280', fontWeight: 500 }}>Prior Violations</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: '#111827' }}>{data.priorViolations}</span>
            </div>
            <div className="flex justify-between items-center">
              <span style={{ fontSize: 12, color: '#6B7280', fontWeight: 500 }}>Account Status</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: '#F59E0B' }}>{data.accountStatus}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 mt-2">
          <button
            style={{
              width: '100%',
              padding: '12px',
              background: '#111827',
              color: 'white',
              border: 'none',
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
            }}
          >
            <Eye size={16} /> Mark as Reviewed
          </button>
          
          <div className="flex gap-3">
            <button
              style={{
                flex: 1,
                padding: '12px',
                background: '#EF4444',
                color: 'white',
                border: 'none',
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
              }}
            >
              <Trash2 size={16} /> Remove
            </button>
            <button
              style={{
                flex: 1,
                padding: '12px',
                background: '#F9FAFB',
                color: '#4B5563',
                border: '1px solid #E5E7EB',
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
              }}
            >
              <X size={16} /> Ignore
            </button>
          </div>
        </div>

        {/* System Recommendation */}
        <div style={{ marginTop: 8 }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.05em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: 8 }}>
            System Recommendation
          </p>
          <div className="flex gap-3 p-4 rounded-lg bg-gray-50 border border-gray-100">
            <Zap size={16} className="text-yellow-500 flex-shrink-0 mt-0.5" />
            <p style={{ fontSize: 12, color: '#4B5563', lineHeight: 1.5, fontWeight: 500 }}>
              {data.systemRecommendation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
