'use client';

import React, { useEffect, useState } from 'react';

export function CreatorsHeader() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 50); return () => clearTimeout(t); }, []);

  return (
    <div
      className="mb-6"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(10px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
      }}
    >
      <h1 style={{ fontSize: 28, fontWeight: 700, color: '#111827', lineHeight: 1.2 }}>Creators</h1>
      <p style={{ fontSize: 14, color: '#6B7280', marginTop: 4 }}>
        Manage and monitor all creators on the platform
      </p>
    </div>
  );
}
