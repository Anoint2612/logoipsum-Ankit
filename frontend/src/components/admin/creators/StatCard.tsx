'use client';

import React, { useEffect, useState, useRef } from 'react';

interface StatCardProps {
  label: string;
  value?: string;
  badge?: string;
  badgeType?: 'positive' | 'negative';
  description: string;
  subDescription: string;
  delay?: number;
  children: React.ReactNode;
}

export function StatCard({ label, value, badge, badgeType = 'positive', description, subDescription, delay = 0, children }: StatCardProps) {
  const [visible, setVisible] = useState(false);
  const [displayVal, setDisplayVal] = useState('0');
  const mounted = useRef(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50 + delay);
    return () => clearTimeout(t);
  }, [delay]);

  // Count-up animation for numeric values
  useEffect(() => {
    if (!value || !visible) return;
    mounted.current = true;
    const numericStr = value.replace(/[^0-9]/g, '');
    const target = parseInt(numericStr, 10);
    if (isNaN(target)) { setDisplayVal(value); return; }

    const prefix = value.match(/^[^0-9]*/)?.[0] || '';
    const duration = 800;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = Math.round(target * eased);
      // Format to match original value format
      const formatted = value.includes(',')
        ? prefix + current.toLocaleString('en-IN')
        : prefix + current.toString();
      setDisplayVal(formatted);
      if (progress < 1) requestAnimationFrame(animate);
      else setDisplayVal(value); // ensure exact final value
    };
    requestAnimationFrame(animate);
  }, [value, visible]);

  return (
    <div
      className="bg-white rounded-xl p-5 flex flex-col h-full"
      style={{
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.4s ease, transform 0.4s ease, box-shadow 0.2s ease',
        cursor: 'default',
      }}
      onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.10)')}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)')}
    >
      <p style={{ fontSize: 13, fontWeight: 500, color: '#6B7280', marginBottom: 4 }}>{label}</p>
      {value && (
        <div className="flex items-center gap-3">
          <span style={{ fontSize: 28, fontWeight: 700, color: '#111827', lineHeight: 1.1 }}>{displayVal}</span>
          {badge && (
            <span
              style={{
                fontSize: 12, fontWeight: 600, padding: '2px 10px', borderRadius: 999,
                background: badgeType === 'positive' ? '#DCFCE7' : '#FEE2E2',
                color: badgeType === 'positive' ? '#16A34A' : '#DC2626',
              }}
            >
              {badge}
            </span>
          )}
        </div>
      )}

      <div style={{ flex: 1, marginTop: 10 }}>{children}</div>

      <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: 12, marginTop: 10 }}>
        <h4 style={{ fontSize: 13, fontWeight: 700, color: '#111827', marginBottom: 2 }}>{description}</h4>
        <p style={{ fontSize: 11, color: '#6B7280', lineHeight: 1.4 }}>{subDescription}</p>
      </div>
    </div>
  );
}
