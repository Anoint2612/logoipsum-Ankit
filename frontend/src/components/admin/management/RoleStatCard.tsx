'use client';

import React from 'react';
import { Shield, ShieldCheck, HelpCircle, DollarSign } from 'lucide-react';
import type { AdminRoleStat } from '@/src/data/adminManagementData';

const getIcon = (name: AdminRoleStat['iconName']) => {
  switch (name) {
    case 'Shield': return <Shield size={18} color="#4B5563" />;
    case 'ShieldCheck': return <ShieldCheck size={18} color="#4B5563" />;
    case 'HelpCircle': return <HelpCircle size={18} color="#4B5563" />;
    case 'DollarSign': return <DollarSign size={18} color="#4B5563" />;
    default: return <Shield size={18} color="#4B5563" />;
  }
};

interface Props {
  stat: AdminRoleStat;
  delay?: number;
}

export function RoleStatCard({ stat, delay = 0 }: Props) {
  return (
    <div
      className="bg-white rounded-xl p-6 flex flex-col justify-between h-full"
      style={{
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
        animation: `cardFadeUp 0.6s ease-out ${delay}ms both`,
      }}
    >
      <div className="flex items-start justify-between mb-8">
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 8,
            backgroundColor: '#F3F4F6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {getIcon(stat.iconName)}
        </div>
        <span style={{ fontSize: 32, fontWeight: 700, color: '#111827', lineHeight: 1 }}>
          {stat.count}
        </span>
      </div>

      <div>
        <h4 style={{ fontSize: 13, fontWeight: 700, color: '#111827', marginBottom: 4 }}>
          {stat.role}
        </h4>
        <p style={{ fontSize: 11, color: '#6B7280', lineHeight: 1.4 }}>
          {stat.description}
        </p>
      </div>
    </div>
  );
}
