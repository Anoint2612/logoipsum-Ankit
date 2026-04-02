'use client';

import React, { useState, useEffect } from 'react';
import { RoleStatCard } from '@/src/components/admin/management/RoleStatCard';
import { AdminTable } from '@/src/components/admin/management/AdminTable';
import { adminRoleStats, teamMembersData } from '@/src/data/adminManagementData';

export default function AdminManagementPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      <style>{`
        @keyframes detailFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes cardFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .detail-animate { opacity: 0; }
        .detail-animate.visible { animation: detailFadeUp 0.6s ease-out forwards; }
      `}</style>

      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", padding: 24, background: '#F5F5F8', minHeight: 'calc(100vh - 64px)' }}>
        
        {/* Header Row */}
        <div className={`detail-animate flex items-start justify-between mb-8 ${mounted ? 'visible' : ''}`} style={{ animationDelay: '0ms' }}>
          <div>
            <h1 style={{ fontSize: 24, fontWeight: 700, color: '#111827', letterSpacing: '-0.02em', marginBottom: 6 }}>
              Admin Management
            </h1>
            <p style={{ fontSize: 13, color: '#6B7280' }}>
              Manage internal team access and permissions
            </p>
          </div>
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#111827',
              color: 'white',
              border: 'none',
              borderRadius: 24, // highly rounded badge as per figma outline around the button
              fontSize: 13,
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              cursor: 'pointer'
            }}
          >
            <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 400 }}>+</div>
            Add Admin
          </button>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {adminRoleStats.map((stat, i) => (
            <RoleStatCard
              key={stat.id}
              stat={stat}
              delay={100 + i * 50}
            />
          ))}
        </div>

        {/* Data Table */}
        <div className={mounted ? 'visible' : 'opacity-0'}>
          <AdminTable members={teamMembersData} delay={300} />
        </div>

      </div>
    </>
  );
}
